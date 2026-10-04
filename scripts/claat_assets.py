"""Sirve los archivos de formato de claat desde el propio sitio.

El bucket público de Google (storage.googleapis.com/claat-public) dejó de responder (403, cuenta de
facturación deshabilitada), así que las páginas exportadas por claat se veían sin formato. Aquí se copian
los archivos guardados en scripts/vendor/claat-public/ a site/claat-public/ y se reescriben los enlaces de
cada codelab exportado (site/<id>/index.html) para que los lean de ahí con una ruta relativa.
"""
import os
import re
import shutil

REMOTE = "https://storage.googleapis.com/claat-public/"
LOCAL = "../claat-public/"
VENDOR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "vendor", "claat-public")
FILES = ("native-shim.js", "custom-elements.min.js", "prettify.js", "codelab-elements.js", "codelab-elements.css")


def copy_assets(site_dir):
    """Copia los archivos a site/claat-public/. Devuelve cuántos copió."""
    dest = os.path.join(site_dir, "claat-public")
    os.makedirs(dest, exist_ok=True)
    for name in FILES:
        shutil.copyfile(os.path.join(VENDOR, name), os.path.join(dest, name))
    return len(FILES)


def localize_codelab(site_dir, codelab_id):
    """Reescribe los enlaces de un codelab exportado. Devuelve True si el archivo existe."""
    path = os.path.join(site_dir, codelab_id, "index.html")
    if not os.path.exists(path):
        return False
    with open(path, encoding="utf-8") as f:
        html = f.read()
    with open(path, "w", encoding="utf-8") as f:
        f.write(html.replace(REMOTE, LOCAL))
    return True


PLAIN_START = "<!-- gdg-plain-blocks:start -->"
PLAIN_END = "<!-- gdg-plain-blocks:end -->"
PLAIN_CSS = (
    PLAIN_START + "<style>"
    "google-codelab-step pre.sin-resaltado,google-codelab-step pre.sin-resaltado code{color:#F8F9FA}"
    "google-codelab-step pre.sin-resaltado code span{color:inherit!important;font-style:normal!important;font-weight:inherit!important}"
    "</style>" + PLAIN_END
)


def plain_code_blocks(site_dir, codelab_id):
    """Quita el resaltado de sintaxis de los bloques sin lenguaje (prompts, plantillas, ejemplos de texto).

    El reproductor de claat resalta todo bloque `pre code` adivinando el lenguaje, y en texto normal eso pinta
    palabras sueltas de colores distintos. Los bloques con lenguaje (```bash, ```yaml...) no se tocan.
    """
    path = os.path.join(site_dir, codelab_id, "index.html")
    if not os.path.exists(path):
        return False
    with open(path, encoding="utf-8") as f:
        html = f.read()
    html = re.sub(re.escape(PLAIN_START) + r".*?" + re.escape(PLAIN_END), "", html, flags=re.S)
    html = html.replace("<pre><code>", '<pre class="sin-resaltado"><code>')
    html = html.replace("</head>", PLAIN_CSS + "\n</head>", 1)
    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    return True
