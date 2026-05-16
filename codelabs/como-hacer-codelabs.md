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
- Un pipeline que publica automáticamente al hacer push
- Un índice con buscador y tarjetas al estilo Google Codelabs
- Tu primer codelab publicado y funcionando

### Requisitos previos

- Una cuenta en [github.com](https://github.com)
- Git instalado en tu computadora
- Un editor de texto

Verifica que tienes git:

```bash
git --version
```

## Paso 1 — Crear el repositorio en GitHub
Duration: 0:05:00

### Crear el repo

1. Ve a [github.com/new](https://github.com/new)
2. Nombre: `mis-codelabs` (o el nombre que prefieras)
3. Visibilidad: **Public**
4. **No** agregues README, .gitignore ni licencia — el repo debe estar vacío
5. Haz clic en **Create repository**

### Clonarlo en tu computadora

```bash
git clone https://github.com/TU_USUARIO/mis-codelabs.git
cd mis-codelabs
```

## Paso 2 — Crear la estructura de carpetas
Duration: 0:03:00

```bash
mkdir -p codelabs
mkdir -p .github/workflows
echo "site/" >> .gitignore
```

Tu estructura debe quedar así:

```
mis-codelabs/
├── .gitignore
├── codelabs/
└── .github/
    └── workflows/
```

## Paso 3 — El formato de claat
Duration: 0:08:00

`claat` usa un formato Markdown específico. Hay una regla crítica que causa el 90% de los errores:

> **El metadata va al inicio del archivo SIN delimitadores `---`.**

Si usas `---` como en YAML estándar, claat falla con `invalid metadata format`.

### Campos de metadata

Estos van en las primeras líneas del archivo, sin ningún delimitador:

```
id: nombre-unico-sin-espacios
summary: Descripción breve que aparece en la tarjeta del índice.
status: Published
authors: Tu Nombre
categories: Android
environments: Web
feedback link: https://TU_USUARIO.github.io/mis-codelabs/
```

### Estructura de secciones

Después del metadata viene el contenido. Cada sección se declara con `##` seguido del nombre, y en la línea inmediata siguiente va `Duration:`:

```
# Título del Codelab

(seccion con ##) Introducción
Duration: 0:02:00

Texto de introducción.

(seccion con ##) Primer paso
Duration: 0:05:00

Contenido del paso.

(seccion con ##) Felicitaciones
Duration: 0:01:00

Conclusión.
```

*(Las líneas con `##` se muestran sin el símbolo para evitar que claat las interprete como secciones reales de este codelab.)*

### Reglas del formato

| Regla | Correcto | Incorrecto |
|---|---|---|
| Metadata | Sin `---` delimitadores | Con `---` al inicio |
| Secciones | `##` seguido del nombre | `###` como sección principal |
| Duración | `Duration: 0:05:00` justo después del `##` | Saltarse la duración |
| Campo `id` | Obligatorio, sin espacios | Omitirlo |
| Feedback link | URL completa a tu índice | Vacío o sin este campo |

### El campo `feedback link`

Controla a dónde van el botón **Done** y la **X** al terminar el codelab:

```
feedback link: https://TU_USUARIO.github.io/mis-codelabs/
```

## Paso 4 — Crear el workflow de GitHub Actions
Duration: 0:08:00

Crea el archivo `.github/workflows/deploy-codelabs.yml`.

**Parte 1 — Cabecera y permisos:**

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
```

**Parte 2 — Job de build (instalar claat y exportar):**

```yaml
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
            "$CLAAT" export -o site/ "$f"
          done
```

**Parte 3 — Generar el índice (pega esto después del paso anterior):**

```yaml
      - name: Build index page
        run: |
          python3 - << 'PYEOF'
          import os, re, json, subprocess, datetime

          REPO = "mis-codelabs"  # <-- cambia esto al nombre de tu repo

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

          # (el HTML del índice se genera aquí - ver repositorio de ejemplo)
          # https://github.com/Me7aBen/gdg-codelabs

          print(f"Index built with {len(entries)} codelabs.")
          PYEOF
```

> **Tip:** El HTML completo del índice es largo. Cópialo directamente del repositorio de ejemplo en [github.com/Me7aBen/gdg-codelabs](https://github.com/Me7aBen/gdg-codelabs/blob/main/.github/workflows/deploy-codelabs.yml) — está listo para usar.

**Parte 4 — Deploy (al final del archivo):**

```yaml
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

### El parámetro `?index=`

El botón **Done** y la **X** del codelab leen el parámetro `?index=` de la URL para saber a dónde regresar. Por eso los links del índice deben verse así:

```
href="nombre-codelab/?index=mis-codelabs"
```

Donde `mis-codelabs` es el nombre exacto de tu repositorio. Esto está configurado en la variable `REPO` del script Python del workflow.

## Paso 5 — Habilitar GitHub Pages
Duration: 0:03:00

Este paso se hace una sola vez en la interfaz de GitHub:

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings**
3. En el menú izquierdo, haz clic en **Pages**
4. En "Build and deployment" → Source: selecciona **GitHub Actions**
5. Guarda

> Sin este paso el workflow corre pero el sitio no se publica.

## Paso 6 — Publicar y verificar
Duration: 0:05:00

### Primer push

```bash
git add .
git commit -m "feat: add codelabs site"
git push origin main
```

### Monitorear el workflow

1. Ve a la pestaña **Actions** en tu repo
2. Verás el workflow corriendo — tarda 1-2 minutos
3. Cuando aparezca la marca ✓ verde, el sitio está publicado

### Tu sitio

```
https://TU_USUARIO.github.io/mis-codelabs/
```

### Checklist de verificación

- ✅ El índice muestra la tarjeta de tu codelab
- ✅ El buscador filtra al escribir
- ✅ El botón "Start" abre el codelab
- ✅ La X y el botón Done regresan al índice

## Agregar más codelabs
Duration: 0:02:00

Para publicar un nuevo codelab:

1. Crea un nuevo `.md` en `codelabs/` con `id:` único y `feedback link:` correcto
2. Haz commit y push

```bash
git add codelabs/mi-nuevo-codelab.md
git commit -m "feat: add mi-nuevo-codelab"
git push origin main
```

El workflow exporta todos los codelabs y actualiza el índice automáticamente.

## Errores comunes
Duration: 0:02:00

| Error | Causa | Solución |
|---|---|---|
| `invalid metadata format` | Hay `---` antes del metadata | Quitar los `---` |
| `missing at least id` | Falta el campo `id:` | Agregar `id:` en la primera línea |
| La X va a la raíz del dominio | `REPO` no coincide con el nombre del repo | Actualizar `REPO = "..."` en el workflow |
| 404 en el sitio | Pages no está en modo "GitHub Actions" | Settings → Pages → GitHub Actions |
| Codelab no aparece en el índice | `id:` vacío o falta `#` de título | Verificar metadata y título |

## ¡Felicitaciones!
Duration: 0:01:00

Tienes tu propio sitio de codelabs publicado en GitHub Pages, completamente automatizado.

### Repositorio de referencia

El workflow completo y los codelabs de ejemplo están disponibles en:
[github.com/Me7aBen/gdg-codelabs](https://github.com/Me7aBen/gdg-codelabs)

### Próximos pasos

- Personaliza el HTML del índice (título, colores, logo)
- Usa `categories:` para organizar codelabs por tecnología
- Comparte el link con tu comunidad
