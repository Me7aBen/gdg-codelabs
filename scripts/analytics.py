"""Google Analytics 4 con aviso de consentimiento para el sitio de codelabs.

- El ID de medición sale de la variable de entorno GA_MEASUREMENT_ID (por defecto, el del proyecto).
  Si la variable existe y está vacía, el sitio se genera SIN analítica.
- Analytics solo se carga si la persona pulsa "Aceptar" en el aviso (se recuerda en localStorage).
- No se rastrea en localhost, para no ensuciar los datos al probar localmente.
- En las páginas de codelab se reenvían a GA4 los eventos que lanza el reproductor de claat:
  cada paso (page_view virtual con la ruta /<codelab>/#N), `codelab_ready` y `codelab_complete`.
"""
import os
import re

DEFAULT_ID = "G-W9B6CXT4H6"
START = "<!-- gdg-analytics:start -->"
END = "<!-- gdg-analytics:end -->"


def measurement_id():
    return os.environ.get("GA_MEASUREMENT_ID", DEFAULT_ID).strip()


def snippet(page_type, codelab_id="", course=""):
    """Devuelve el bloque HTML (aviso + GA4) o '' si la analítica está desactivada."""
    ga_id = measurement_id()
    if not ga_id:
        return ""
    ctx = f'{{page_type:"{page_type}",codelab_id:"{codelab_id}",course:"{course}"}}'
    return f"""{START}
<style>
#gdg-consent{{position:fixed;left:0;right:0;bottom:0;z-index:2147483000;background:#202124;color:#fff;font:14px/1.5 Roboto,Arial,sans-serif;padding:.9rem 1.25rem;display:none;gap:1rem;align-items:center;flex-wrap:wrap;justify-content:center;box-shadow:0 -2px 12px rgba(0,0,0,.3)}}
#gdg-consent p{{max-width:760px;margin:0}}
#gdg-consent button{{border:1px solid #fff;background:transparent;color:#fff;padding:.45rem 1.1rem;border-radius:4px;font:inherit;cursor:pointer}}
#gdg-consent button.ok{{background:#8ab4f8;border-color:#8ab4f8;color:#202124;font-weight:500}}
</style>
<script>
(function () {{
  var GA_ID = "{ga_id}", KEY = "gdg_codelabs_analytics", CTX = {ctx};
  var host = location.hostname;
  if (host === "localhost" || host === "127.0.0.1" || host === "") return;
  function store(v) {{ try {{ localStorage.setItem(KEY, v); }} catch (e) {{}} }}
  function read() {{ try {{ return localStorage.getItem(KEY); }} catch (e) {{ return null; }} }}
  function track() {{
    if (window.__gdgGA) return; window.__gdgGA = true;
    var s = document.createElement("script"); s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID; document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {{ dataLayer.push(arguments); }};
    gtag("js", new Date());
    gtag("config", GA_ID, {{ send_page_view: CTX.page_type !== "codelab", allow_google_signals: false,
      allow_ad_personalization_signals: false, cookie_flags: "SameSite=Lax;Secure",
      page_type: CTX.page_type, codelab_id: CTX.codelab_id, course: CTX.course }});
    if (CTX.page_type === "codelab") {{
      var last = null;
      var pv = function (path, title) {{
        if (path === last) return; last = path;
        gtag("event", "page_view", {{ page_path: path, page_title: title || document.title,
          codelab_id: CTX.codelab_id, course: CTX.course }});
      }};
      pv(location.pathname + "#" + ((location.hash || "#0").slice(1) || "0"));
      document.addEventListener("google-codelab-pageview", function (e) {{
        var d = e.detail || {{}}; pv(d.page || location.pathname, d.title);
      }}, true);
      document.addEventListener("google-codelab-action", function (e) {{
        var d = e.detail || {{}};
        if (d.category === "codelab" && (d.action === "ready" || d.action === "complete"))
          gtag("event", "codelab_" + d.action, {{ codelab_id: CTX.codelab_id, course: CTX.course, codelab_title: d.label || document.title }});
      }}, true);
    }}
  }}
  function banner() {{
    var b = document.getElementById("gdg-consent"); if (b) {{ b.style.display = "flex"; return; }}
    b = document.createElement("div"); b.id = "gdg-consent"; b.setAttribute("role", "dialog");
    b.setAttribute("aria-label", "Aviso de analítica");
    b.innerHTML = '<p>Usamos Google Analytics para saber cuántas personas usan estos laboratorios y en qué paso se detienen. ' +
      'No pedimos tu nombre ni tu correo. ¿Aceptas que midamos tu visita?</p>' +
      '<span><button class="ok" type="button">Aceptar</button> <button class="no" type="button">Rechazar</button></span>';
    b.querySelector(".ok").onclick = function () {{ store("granted"); b.style.display = "none"; track(); }};
    b.querySelector(".no").onclick = function () {{ store("denied"); b.style.display = "none"; }};
    b.style.display = "flex"; document.body.appendChild(b);
  }}
  window.gdgAnalyticsPrefs = function () {{ store(""); banner(); }};
  function start() {{ var c = read(); if (c === "granted") track(); else if (c !== "denied") banner(); }}
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
}})();
</script>
{END}"""


def inject_into_html(html, block):
    """Inserta (o reemplaza) el bloque antes de </head>. Idempotente."""
    html = re.sub(re.escape(START) + r".*?" + re.escape(END), "", html, flags=re.S)
    if not block:
        return html
    return html.replace("</head>", block + "\n</head>", 1)


def inject_codelab(site_dir, codelab_id, course=""):
    """Agrega la analítica a un codelab ya exportado por claat y desactiva el ID de analítica por defecto de claat."""
    path = os.path.join(site_dir, codelab_id, "index.html")
    if not os.path.exists(path):
        return False
    with open(path, encoding="utf-8") as f:
        html = f.read()
    # claat incluye por defecto un ID de Universal Analytics que ya no existe: se deja vacío
    html = re.sub(r'(<google-codelab-analytics gaid=")[^"]*(")', r"\1\2", html)
    html = inject_into_html(html, snippet("codelab", codelab_id, course))
    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    return True
