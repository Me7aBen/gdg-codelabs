id: como-hacer-codelabs
summary: Aprende a crear y publicar tus propios codelabs en GitHub Pages usando claat y GitHub Actions. Sin servidores, sin dependencias complicadas.
status: Published
authors: GDG Local
categories: DevTools, GitHub
environments: Web
feedback link: https://me7aben.github.io/gdg-codelabs/

# Cómo crear y publicar tus propios Codelabs en GitHub Pages

## Antes de empezar
Duration: 0:02:00

En este codelab aprenderás a montar tu propio sitio de codelabs en GitHub Pages, completamente gratis y automatizado.

Cada vez que hagas push de un archivo Markdown, un workflow de GitHub Actions lo convierte automáticamente en un codelab interactivo con la interfaz de Google Codelabs.

### Lo que construirás

- Un repositorio GitHub con tu sitio de codelabs
- Un pipeline de CI/CD que publica automáticamente al hacer push
- Un índice con buscador y tarjetas al estilo Google Codelabs
- Tu primer codelab publicado y funcionando

### Lo que aprenderás

- El formato Markdown que usa `claat` para generar codelabs
- Cómo configurar GitHub Actions para publicar en GitHub Pages
- Cómo agregar nuevos codelabs con solo hacer push

### Requisitos previos

- Una cuenta en [github.com](https://github.com)
- Git instalado en tu computadora
- Un editor de texto (VS Code, cualquiera sirve)

Verifica que tienes git:
```bash
git --version
```

## Paso 1 — Crear el repositorio en GitHub
Duration: 0:05:00

### Crear el repo

1. Ve a [github.com/new](https://github.com/new)
2. Nombre del repositorio: `mis-codelabs` (o el nombre que prefieras)
3. Visibilidad: **Public** (GitHub Pages gratuito solo funciona en repos públicos)
4. **No** agregues README, .gitignore ni licencia — el repo debe estar vacío
5. Haz clic en **Create repository**

### Clonarlo en tu computadora

```bash
git clone https://github.com/TU_USUARIO/mis-codelabs.git
cd mis-codelabs
```

Reemplaza `TU_USUARIO` con tu usuario de GitHub.

## Paso 2 — Crear la estructura de carpetas
Duration: 0:03:00

Dentro de la carpeta del repo, crea esta estructura:

```bash
mkdir -p codelabs
mkdir -p .github/workflows
```

Luego crea el archivo `.gitignore`:

```bash
echo "site/" >> .gitignore
```

La carpeta `site/` es donde el workflow genera el HTML — no debe commitearse al repo.

Tu estructura debe quedar así:

```
mis-codelabs/
├── .gitignore
├── codelabs/        ← tus archivos .md van aquí
└── .github/
    └── workflows/   ← el workflow de CI/CD va aquí
```

## Paso 3 — Escribir tu primer codelab
Duration: 0:10:00

### El formato de claat

`claat` tiene un formato Markdown específico. La regla más importante:

> **El metadata va al inicio del archivo SIN delimitadores `---`.**

Si usas `---` al inicio como en YAML/frontmatter normal, claat fallará con un error de "invalid metadata format".

### Campos de metadata

Crea el archivo `codelabs/mi-primer-codelab.md` con este contenido:

```markdown
id: mi-primer-codelab
summary: Una breve descripción de lo que trata este codelab.
status: Published
authors: Tu Nombre
categories: Android
environments: Web
feedback link: https://TU_USUARIO.github.io/mis-codelabs/

# Título de Mi Codelab

## Introducción
Duration: 0:02:00

Escribe aquí la introducción de tu codelab.

## Paso 1 — Primer tema
Duration: 0:05:00

Contenido del primer paso.

Puedes usar código:

```bash
echo "Hola mundo"
```

## Paso 2 — Segundo tema
Duration: 0:05:00

Contenido del segundo paso.

## ¡Felicitaciones!
Duration: 0:01:00

Completaste el codelab.
```

### Reglas importantes del formato

| Regla | Correcto | Incorrecto |
|---|---|---|
| Metadata sin delimitadores | `id: mi-codelab` al inicio | `---` antes del metadata |
| Título principal | `# Título` (una sola vez) | Múltiples `#` |
| Secciones | `## Nombre del paso` | `### Subsección` como paso |
| Duración | `Duration: 0:05:00` justo después del `##` | Saltar la duración |
| Campo `id` | Obligatorio, sin espacios | Puede tener guiones |

### El campo `feedback link`

Este campo controla a dónde van el botón **Done** y la **X** al terminar el codelab. Ponlo siempre apuntando a tu índice:

```
feedback link: https://TU_USUARIO.github.io/mis-codelabs/
```

## Paso 4 — Crear el workflow de GitHub Actions
Duration: 0:08:00

Crea el archivo `.github/workflows/deploy-codelabs.yml` con este contenido exacto:

```yaml
name: Deploy Codelabs to GitHub Pages

on:
  push:
    branches:
      - main
    paths:
      - 'codelabs/**'
      - '.github/workflows/deploy-codelabs.yml'
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Go
        uses: actions/setup-go@v5
        with:
          go-version: 'stable'
          cache: false

      - name: Install claat
        run: go install github.com/googlecodelabs/tools/claat@latest

      - name: Export codelabs
        run: |
          mkdir -p site
          CLAAT="$HOME/go/bin/claat"
          for f in codelabs/*.md; do
            echo "Exporting $f ..."
            "$CLAAT" export -o site/ "$f"
          done

      - name: Build index page
        run: |
          python3 - << 'PYEOF'
          import os, re, json, subprocess, datetime

          REPO = "mis-codelabs"  # Cambia esto al nombre de tu repo
          MESES = ["enero","febrero","marzo","abril","mayo","junio",
                   "julio","agosto","septiembre","octubre","noviembre","diciembre"]

          def parse_duration(content):
              total = 0
              for m in re.finditer(r'^Duration:\s*(\d+):(\d+):(\d+)', content, re.MULTILINE):
                  total += int(m.group(1))*3600 + int(m.group(2))*60 + int(m.group(3))
              h, mins = total // 3600, (total % 3600) // 60
              if h > 0 and mins > 0:
                  return f"{h} hora{'s' if h>1 else ''} {mins} minuto{'s' if mins!=1 else ''}"
              elif h > 0:
                  return f"{h} hora{'s' if h>1 else ''}"
              return f"{mins} minuto{'s' if mins!=1 else ''}"

          def git_date(path):
              r = subprocess.run(["git","log","-1","--format=%ai","--",path],
                                 capture_output=True, text=True)
              raw = r.stdout.strip()[:10]
              if raw:
                  y, m, d = raw.split("-")
                  return f"{int(d)} de {MESES[int(m)-1]} de {y}"
              now = datetime.date.today()
              return f"{now.day} de {MESES[now.month-1]} de {now.year}"

          entries = []
          for fname in sorted(os.listdir("codelabs")):
              if not fname.endswith(".md"):
                  continue
              path = os.path.join("codelabs", fname)
              with open(path, encoding="utf-8") as f:
                  content = f.read()
              cid        = re.search(r'^id:\s*(.+)$',         content, re.MULTILINE)
              summary    = re.search(r'^summary:\s*(.+)$',    content, re.MULTILINE)
              title      = re.search(r'^#\s+(.+)$',           content, re.MULTILINE)
              categories = re.search(r'^categories:\s*(.+)$', content, re.MULTILINE)
              if not cid:
                  continue
              entries.append({
                  "id":         cid.group(1).strip(),
                  "title":      title.group(1).strip() if title else cid.group(1).strip(),
                  "summary":    summary.group(1).strip() if summary else "",
                  "duration":   parse_duration(content),
                  "updated":    git_date(path),
                  "categories": categories.group(1).strip() if categories else "",
              })

          html = '''<!DOCTYPE html>
          <html lang="es">
          <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
            <title>Codelabs</title>
            <style>
              *{box-sizing:border-box;margin:0;padding:0}
              body{font-family:Google Sans,Roboto,sans-serif;background:#f8f9fa;min-height:100vh}
              header{background:#fff;padding:1rem 2rem;border-bottom:1px solid #e0e0e0;display:flex;align-items:center;gap:.75rem}
              header h1{font-size:1.15rem;color:#202124;font-weight:500}
              .top{padding:1.5rem 2rem 1rem;max-width:1200px;margin:0 auto}
              .search{width:100%;padding:.7rem 1.25rem;border:1px solid #dadce0;border-radius:24px;font-size:1rem;outline:none;background:#fff}
              .search:focus{border-color:#1a73e8;box-shadow:0 1px 6px rgba(26,115,232,.2)}
              .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:1.25rem;padding:0 2rem 2rem;max-width:1200px;margin:0 auto}
              .card{background:#fff;border-radius:8px;padding:1.5rem;box-shadow:0 1px 3px rgba(0,0,0,.12);display:flex;flex-direction:column;gap:.6rem;transition:box-shadow .2s}
              .card:hover{box-shadow:0 4px 12px rgba(0,0,0,.18)}
              .card h2{font-size:1.05rem;color:#202124;line-height:1.4}
              .meta{display:flex;justify-content:space-between;font-size:.78rem;color:#80868b}
              .desc{font-size:.88rem;color:#3c4043;line-height:1.55;flex:1}
              .footer{display:flex;justify-content:space-between;align-items:center;margin-top:.25rem}
              .tags{display:flex;gap:.4rem;flex-wrap:wrap}
              .tag{font-size:.72rem;background:#e8f0fe;color:#1a73e8;padding:.2rem .65rem;border-radius:12px;font-weight:500}
              .btn{background:#fff;color:#1a73e8;border:1px solid #dadce0;padding:.45rem 1.1rem;border-radius:4px;font-size:.88rem;text-decoration:none;font-weight:500}
              .btn:hover{background:#e8f0fe;border-color:#1a73e8}
              .empty{text-align:center;color:#80868b;padding:3rem;grid-column:1/-1}
            </style>
          </head>
          <body>
            <header><h1>Codelabs</h1></header>
            <div class="top"><input class="search" type="search" placeholder="Busca codelabs..." id="search"/></div>
            <div class="grid" id="grid"></div>
            <script>
              const data=DATA_PLACEHOLDER,grid=document.getElementById("grid"),search=document.getElementById("search");
              function render(list){
                grid.innerHTML="";
                if(!list.length){grid.innerHTML=\'<p class="empty">No se encontraron codelabs.</p>\';return;}
                list.forEach(e=>{
                  const tags=(e.categories||"").split(",").map(t=>t.trim()).filter(Boolean).map(t=>`<span class="tag">${t}</span>`).join("");
                  const card=document.createElement("div");
                  card.className="card";
                  card.innerHTML=`<h2>${e.title}</h2>
                    <div class="meta"><span>${e.duration}</span><span>Updated ${e.updated}</span></div>
                    <p class="desc">${e.summary}</p>
                    <div class="footer"><div class="tags">${tags}</div><a class="btn" href="${e.id}/?index=REPO_NAME">Start</a></div>`;
                  grid.appendChild(card);
                });
              }
              render(data);
              search.addEventListener("input",()=>{
                const q=search.value.toLowerCase();
                render(q?data.filter(e=>e.title.toLowerCase().includes(q)||e.summary.toLowerCase().includes(q)||(e.categories||"").toLowerCase().includes(q)):data);
              });
            </script>
          </body>
          </html>'''

          html = html.replace("DATA_PLACEHOLDER", json.dumps(entries, ensure_ascii=False))
          html = html.replace("REPO_NAME", REPO)

          os.makedirs("site", exist_ok=True)
          with open("site/index.html", "w", encoding="utf-8") as f:
              f.write(html)
          print(f"Index built with {len(entries)} codelabs.")
          PYEOF

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: site/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

> **Importante:** En el script Python del workflow, cambia la línea `REPO = "mis-codelabs"` al nombre exacto de tu repositorio. Esto es necesario para que el botón Done y la X del codelab regresen correctamente a tu índice.

## Paso 5 — Habilitar GitHub Pages
Duration: 0:03:00

Este paso se hace una sola vez en la interfaz de GitHub:

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (pestaña superior)
3. En el menú izquierdo, haz clic en **Pages**
4. En "Build and deployment" → Source: selecciona **GitHub Actions**
5. Guarda

> **¿Por qué es necesario?** Sin este paso, GitHub no sabe que debe publicar el sitio. El workflow puede correr exitosamente pero la URL no existirá.

## Paso 6 — Publicar
Duration: 0:05:00

Con todo listo, haz el primer commit y push:

```bash
git add .
git commit -m "feat: add codelabs site with first codelab"
git push origin main
```

### Monitorear el workflow

1. Ve a tu repo en GitHub
2. Haz clic en la pestaña **Actions**
3. Verás el workflow "Deploy Codelabs to GitHub Pages" corriendo
4. Haz clic en él para ver el progreso paso a paso

El workflow tarda aproximadamente 1-2 minutos. Cuando termines verás una marca verde ✓.

### Ver tu sitio

Tu sitio estará disponible en:
```
https://TU_USUARIO.github.io/mis-codelabs/
```

## Paso 7 — Verificar que todo funciona
Duration: 0:05:00

Abre tu sitio y verifica estos puntos:

**El índice:**
- ✅ Se ve la tarjeta de tu codelab con título, duración y descripción
- ✅ El buscador filtra codelabs al escribir
- ✅ El botón "Start" abre el codelab

**Dentro del codelab:**
- ✅ Los pasos aparecen en el panel izquierdo
- ✅ La navegación Anterior / Siguiente funciona
- ✅ La X (esquina superior izquierda) regresa al índice
- ✅ El botón **Done** al final regresa al índice

> Si la X o Done van a `https://TU_USUARIO.github.io/` en lugar de a tu índice, verifica que el nombre del repo en `REPO = "mis-codelabs"` en el workflow coincide exactamente con el nombre de tu repositorio en GitHub.

## Agregar más codelabs
Duration: 0:03:00

El proceso para agregar un nuevo codelab es siempre el mismo:

1. Crea un nuevo archivo `.md` en la carpeta `codelabs/`
2. Asegúrate de que tenga el campo `id:` con un valor único
3. Agrega `feedback link: https://TU_USUARIO.github.io/mis-codelabs/`
4. Haz commit y push

```bash
git add codelabs/mi-nuevo-codelab.md
git commit -m "feat: add mi-nuevo-codelab"
git push origin main
```

El workflow corre automáticamente, exporta todos los codelabs (incluyendo los anteriores) y actualiza el índice.

> **Tip:** Cada codelab debe tener un `id:` único. Si dos codelabs tienen el mismo `id`, el segundo sobreescribirá al primero.

## Referencia rápida del formato claat
Duration: 0:00:00

### Estructura mínima de un codelab

```
id: nombre-unico-sin-espacios
summary: Descripción breve que aparece en la tarjeta del índice.
status: Published
authors: Tu Nombre
categories: Android, Web, Flutter
environments: Web
feedback link: https://TU_USUARIO.github.io/TU_REPO/

# Título del Codelab

## Paso 1
Duration: 0:05:00

Contenido del paso 1.

## Paso 2
Duration: 0:10:00

Contenido del paso 2.

## ¡Listo!
Duration: 0:01:00

Conclusión.
```

### Errores comunes

| Error | Causa | Solución |
|---|---|---|
| `invalid metadata format` | Hay `---` antes del metadata | Quitar los `---` |
| `missing at least id` | No hay campo `id` o está mal escrito | Verificar que `id:` esté en la primera línea |
| La X va a la raíz del dominio | El nombre del repo en el workflow no coincide | Actualizar `REPO = "..."` en el workflow |
| El codelab no aparece en el índice | El `id` está vacío o el archivo no tiene `#` de título | Agregar `id:` y un `# Título` |
| 404 en el sitio | GitHub Pages no está configurado en "GitHub Actions" | Settings → Pages → Source: GitHub Actions |

## ¡Felicitaciones!
Duration: 0:01:00

Tienes tu propio sitio de codelabs publicado en GitHub Pages.

Cada vez que hagas push de un archivo `.md` en `codelabs/`, el sitio se actualiza automáticamente en 1-2 minutos. No necesitas servidores, no necesitas builds manuales.

### Próximos pasos

- **Personaliza el índice:** Edita el HTML en el paso "Build index page" del workflow para cambiar el título, colores o logo
- **Agrega más categorías:** Usa el campo `categories:` para organizar los codelabs por tecnología
- **Comparte el link:** Tu sitio es público — compártelo con tu comunidad
