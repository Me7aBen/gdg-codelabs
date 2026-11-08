# CLAUDE.md — gdg-codelabs

Repo **público** (`Me7aBen/gdg-codelabs`) con los codelabs de Benjamin Pareja. Se publica en GitHub Pages:
<https://me7aben.github.io/gdg-codelabs/>. Trabaja en español.

## Qué hay

```
codelabs/            fuentes Markdown en formato claat (un .md por codelab)
codelabs/ia-aplicada/  los 8 laboratorios del curso IA Aplicada + curso.json (título/descripción de la página del curso)
scripts/build_index.py   arma el índice (tarjetas, buscador) y la página de cada curso en site/
scripts/claat_assets.py  copia el CSS/JS de claat desde scripts/vendor/ y reescribe los enlaces (ver abajo)
scripts/analytics.py     inyecta GA4 (G-W9B6CXT4H6) con banner de consentimiento
scripts/probar-local.sh  exporta + índice + servidor local en /gdg-codelabs/
scripts/vendor/claat-public/  copia del paquete codelab-elements@1.0.1
.github/workflows/deploy-codelabs.yml  en cada push a main que toque codelabs/** o scripts/**: claat export → build_index → Pages
site/                salida generada (ignorada); .local/gdg-codelabs es un symlink a site/ para probar rutas
```

## Reglas y decisiones del dueño

- **No escribir «Tecsup» en los codelabs** (decisión del 2026-10-04); los decks del curso sí llevan la marca, pero viven en otro repo.
- Autor de todos los codelabs: `authors: Benjamin Pareja` (ya no «GDG Local»). `como-hacer-codelabs.md` usa «Tu Nombre» a propósito en su ejemplo.
- Commits de este repo **sin** línea `Co-Authored-By` (decisión del usuario).
- El bucket `storage.googleapis.com/claat-public` devuelve 403 desde octubre 2026: por eso los assets de claat se sirven desde el propio sitio (`scripts/claat_assets.py`, commit 746aa6f). Si un codelab sale sin formato, revisa que `build_index.py` corra después de `claat export`. `fix_home_links` corrige la X y «Done» de claat para que vuelvan al índice.
- GitHub Pages cachea ~10 min (`max-age=600`): verifica con `?v=2` o `curl …?nocache=`.
- Los laboratorios de IA Aplicada se editan aquí, pero su curso (guiones de sesiones, fichas, datasets, design system) está en `~/Repositorios/cursos-tecsup/ia-aplicada/` (repo privado). Los labs 2–7 cambiaron el 2026-11-08: la ficha de evidencia es un Word que se descarga del LMS y hay dataset de respaldo en .xlsx.

## Flujo típico

1. Editar o crear `codelabs/<nombre>.md` (cabecera claat: `id`, `summary`, `status`, `authors`, `categories`, `environments`, `feedback link`).
2. `scripts/probar-local.sh` y revisar en el navegador.
3. Commit y push a `main`; el workflow publica. Un curso nuevo = carpeta `codelabs/<curso>/` con `curso.json`.

## Historia

Hasta el 2026-11-08 este repo guardaba además materiales de cursos (Tecsup, ADGEMINCO, Cerro Verde, Móviles…) y
charlas de GDG. Se migraron a `~/Repositorios/cursos-tecsup` (`Me7aBen/cursos-tecsup`) y
`~/Repositorios/gdg-arequipa` (`Me7aBen/gdg-arequipa`), ambos privados. `obs-devfest` (producción OBS del DevFest)
es un repo aparte en `~/Repositorios/obs-devfest`; el symlink `obs-devfest` en esta carpeta existe solo para que OBS
conserve sus rutas y está ignorado.
