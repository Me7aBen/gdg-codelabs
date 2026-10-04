#!/usr/bin/env python3
"""Genera el índice del sitio de codelabs a partir de la carpeta `codelabs/`.

- Cada `codelabs/*.md` es un codelab suelto y aparece como tarjeta en el índice.
- Cada subcarpeta con un `curso.json` es un curso: en el índice aparece UNA tarjeta de curso
  y sus codelabs viven en una página propia (`site/<slug>/index.html`).

Uso: python3 scripts/build_index.py [carpeta_codelabs] [carpeta_site]
Los codelabs ya deben estar exportados con claat en `site/<id>/`.
"""
import datetime
import json
import os
import re
import subprocess
import sys
from html import escape

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import analytics

MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
         "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
SITE_NAME = "gdg-codelabs"  # nombre del repositorio / ruta base en GitHub Pages


def parse_seconds(content):
    total = 0
    for m in re.finditer(r"^Duration:\s*(\d+):(\d+):(\d+)", content, re.MULTILINE):
        total += int(m.group(1)) * 3600 + int(m.group(2)) * 60 + int(m.group(3))
    return total


def fmt_duration(total):
    h, mins = total // 3600, (total % 3600) // 60
    if h > 0 and mins > 0:
        return f"{h} hora{'s' if h > 1 else ''} {mins} minuto{'s' if mins != 1 else ''}"
    if h > 0:
        return f"{h} hora{'s' if h > 1 else ''}"
    return f"{mins} minuto{'s' if mins != 1 else ''}"


def git_date(path):
    r = subprocess.run(["git", "log", "-1", "--format=%ai", "--", path], capture_output=True, text=True)
    raw = r.stdout.strip()[:10]
    if raw:
        y, m, d = raw.split("-")
        return f"{int(d)} de {MESES[int(m) - 1]} de {y}"
    now = datetime.date.today()
    return f"{now.day} de {MESES[now.month - 1]} de {now.year}"


def read_codelab(path):
    with open(path, encoding="utf-8") as f:
        content = f.read()
    field = lambda pat: re.search(pat, content, re.MULTILINE)
    cid = field(r"^id:\s*(.+)$")
    if not cid:
        return None
    summary, title, cats = field(r"^summary:\s*(.+)$"), field(r"^#\s+(.+)$"), field(r"^categories:\s*(.+)$")
    seconds = parse_seconds(content)
    return {
        "id": cid.group(1).strip(),
        "title": title.group(1).strip() if title else cid.group(1).strip(),
        "summary": summary.group(1).strip() if summary else "",
        "seconds": seconds,
        "duration": fmt_duration(seconds),
        "updated": git_date(path),
        "categories": cats.group(1).strip() if cats else "",
    }


CSS = """
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Google Sans,Roboto,sans-serif;background:#f8f9fa;min-height:100vh}
header{background:#fff;padding:1rem 2rem;border-bottom:1px solid #e0e0e0;display:flex;align-items:center;gap:.75rem}
header svg{flex-shrink:0}
header h1{font-size:1.15rem;color:#202124;font-weight:500}
header a{color:inherit;text-decoration:none}
.top{padding:1.5rem 2rem 1rem;max-width:1200px;margin:0 auto}
.search{width:100%;padding:.7rem 1.25rem;border:1px solid #dadce0;border-radius:24px;font-size:1rem;outline:none;background:#fff;color:#202124}
.search:focus{border-color:#1a73e8;box-shadow:0 1px 6px rgba(26,115,232,.2)}
.crumb{font-size:.88rem;margin-bottom:.9rem}
.crumb a{color:#1a73e8;text-decoration:none}
.crumb a:hover{text-decoration:underline}
.course-head h2{font-size:1.5rem;color:#202124;font-weight:500;line-height:1.3;margin-bottom:.5rem}
.course-head p{font-size:.95rem;color:#3c4043;line-height:1.6;max-width:760px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:1.25rem;padding:0 2rem 2rem;max-width:1200px;margin:0 auto}
.card{background:#fff;border-radius:8px;padding:1.5rem;box-shadow:0 1px 3px rgba(0,0,0,.12);display:flex;flex-direction:column;gap:.6rem;transition:box-shadow .2s}
.card:hover{box-shadow:0 4px 12px rgba(0,0,0,.18)}
.card h2{font-size:1.05rem;color:#202124;line-height:1.4}
.card.course{border:1px solid #00b3e0;background:linear-gradient(180deg,#fff 0,#f2fbfe 100%)}
.badge{align-self:flex-start;font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;background:#00b3e0;color:#000;padding:.2rem .65rem;border-radius:12px}
.meta{display:flex;justify-content:space-between;font-size:.78rem;color:#80868b}
.desc{font-size:.88rem;color:#3c4043;line-height:1.55;flex:1}
.footer{display:flex;justify-content:space-between;align-items:center;margin-top:.25rem}
.tags{display:flex;gap:.4rem;flex-wrap:wrap}
.tag{font-size:.72rem;background:#e8f0fe;color:#1a73e8;padding:.2rem .65rem;border-radius:12px;font-weight:500}
.btn{background:#fff;color:#1a73e8;border:1px solid #dadce0;padding:.45rem 1.1rem;border-radius:4px;font-size:.88rem;text-decoration:none;font-weight:500;white-space:nowrap}
.btn:hover{background:#e8f0fe;border-color:#1a73e8}
.empty{text-align:center;color:#80868b;padding:3rem;grid-column:1/-1}
.privacy{text-align:center;font-size:.8rem;padding:0 2rem 2.5rem}.privacy a{color:#80868b}
"""

LOGO = ('<svg width="24" height="24" viewBox="0 0 24 24" fill="none">'
        '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#1a73e8" '
        'stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>')

CARD_JS = """
function card(e, prefix) {
  const tags = (e.categories || "").split(",").map(t => t.trim()).filter(Boolean)
    .map(t => `<span class="tag">${esc(t)}</span>`).join("");
  const c = document.createElement("div");
  if (e.kind === "curso") {
    c.className = "card course";
    c.innerHTML = `<span class="badge">${esc(e.badge)}</span><h2>${esc(e.title)}</h2>
      <div class="meta"><span>${e.count} codelabs · ${esc(e.duration)}</span><span>Updated ${esc(e.updated)}</span></div>
      <p class="desc">${esc(e.summary)}</p>
      <div class="footer"><div class="tags">${tags}</div><a class="btn" href="${e.slug}/">Ver curso</a></div>`;
  } else {
    c.className = "card";
    c.innerHTML = `<h2>${esc(e.title)}</h2>
      <div class="meta"><span>${esc(e.duration)}</span><span>Updated ${esc(e.updated)}</span></div>
      <p class="desc">${esc(e.summary)}</p>
      <div class="footer"><div class="tags">${tags}</div><a class="btn" href="${prefix}${e.id}/?index=__SITE__">Start</a></div>`;
  }
  return c;
}
function esc(s) { return String(s).replace(/[&<>"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch])); }
"""


def page(title, body, script, page_type="index", course=""):
    return f"""<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{escape(title)}</title>
  <style>{CSS}</style>
{analytics.snippet(page_type, '', course)}
</head>
<body>
{body}
<script>
{CARD_JS.replace("__SITE__", SITE_NAME)}
{script}
</script>
</body>
</html>
"""


def build(codelabs_dir="codelabs", site_dir="site"):
    standalone, courses = [], []
    for name in sorted(os.listdir(codelabs_dir)):
        path = os.path.join(codelabs_dir, name)
        if os.path.isfile(path) and name.endswith(".md"):
            e = read_codelab(path)
            if e:
                standalone.append(e)
        elif os.path.isdir(path) and os.path.exists(os.path.join(path, "curso.json")):
            with open(os.path.join(path, "curso.json"), encoding="utf-8") as f:
                meta = json.load(f)
            labs = [read_codelab(os.path.join(path, n)) for n in sorted(os.listdir(path)) if n.endswith(".md")]
            labs = [x for x in labs if x]
            if labs:
                courses.append((meta, labs))

    os.makedirs(site_dir, exist_ok=True)

    # ---- Índice principal: una tarjeta por curso + codelabs sueltos
    entries = []
    for meta, labs in courses:
        total = sum(x["seconds"] for x in labs)
        cats = []
        for x in labs:
            for c in x["categories"].split(","):
                c = c.strip()
                if c and c not in cats:
                    cats.append(c)
        entries.append({
            "kind": "curso", "slug": meta["slug"], "title": meta["titulo"], "summary": meta["descripcion"],
            "badge": meta.get("etiqueta", "Curso"), "count": len(labs), "duration": fmt_duration(total),
            "updated": max((x["updated"] for x in labs), key=lambda d: (d.split()[-1], MESES.index(d.split()[2]), int(d.split()[0]))),
            "categories": ", ".join(cats[:4]),
            "keywords": " ".join(x["title"] for x in labs),
        })
    entries += [dict(e, kind="suelto") for e in standalone]

    main_body = f"""<header>{LOGO}<h1>Codelabs — GDG</h1></header>
<div class="top"><input class="search" type="search" placeholder="Busca en nuestros codelabs" id="search" /></div>
<div class="grid" id="grid"></div>
<p class="privacy"><a href="#" onclick="window.gdgAnalyticsPrefs&&gdgAnalyticsPrefs();return false;">Preferencias de analítica</a></p>"""
    main_script = f"""const data = {json.dumps(entries, ensure_ascii=False)};
const grid = document.getElementById("grid");
const search = document.getElementById("search");
function render(list) {{
  grid.innerHTML = "";
  if (!list.length) {{ grid.innerHTML = '<p class="empty">No se encontraron codelabs.</p>'; return; }}
  list.forEach(e => grid.appendChild(card(e, "")));
}}
render(data);
search.addEventListener("input", () => {{
  const q = search.value.toLowerCase();
  render(q ? data.filter(e => [e.title, e.summary, e.categories, e.keywords].join(" ").toLowerCase().includes(q)) : data);
}});"""
    with open(os.path.join(site_dir, "index.html"), "w", encoding="utf-8") as f:
        f.write(page("Codelabs — GDG", main_body, main_script, "index"))

    # ---- Página de cada curso
    for meta, labs in courses:
        total = sum(x["seconds"] for x in labs)
        body = f"""<header>{LOGO}<h1><a href="../">Codelabs — GDG</a></h1></header>
<div class="top course-head">
  <p class="crumb"><a href="../">← Todos los codelabs</a></p>
  <h2>{escape(meta['titulo'])}</h2>
  <p>{escape(meta['descripcion'])}</p>
  <p class="crumb" style="margin-top:.8rem;color:#80868b">{len(labs)} codelabs · {fmt_duration(total)} en total</p>
</div>
<div class="grid" id="grid"></div>"""
        script = f"""const data = {json.dumps([dict(x, kind="suelto") for x in labs], ensure_ascii=False)};
const grid = document.getElementById("grid");
data.forEach(e => grid.appendChild(card(e, "../")));"""
        out = os.path.join(site_dir, meta["slug"])
        os.makedirs(out, exist_ok=True)
        with open(os.path.join(out, "index.html"), "w", encoding="utf-8") as f:
            f.write(page(meta["titulo"], body, script, "curso", meta["slug"]))

    # analítica en cada codelab exportado por claat
    injected = 0
    for e in standalone:
        injected += analytics.inject_codelab(site_dir, e["id"], "")
    for meta, labs in courses:
        for e in labs:
            injected += analytics.inject_codelab(site_dir, e["id"], meta["slug"])
    state = f"GA4 {analytics.measurement_id()}" if analytics.measurement_id() else "sin analítica"
    print(f"Analítica: {state} · {injected} codelabs exportados actualizados")

    print(f"Índice generado: {len(standalone)} codelabs sueltos y {len(courses)} curso(s) "
          f"({sum(len(l) for _, l in courses)} codelabs en cursos).")


if __name__ == "__main__":
    build(*(sys.argv[1:3]))
