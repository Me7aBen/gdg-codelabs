# gdg-codelabs

Codelabs de **Benjamin Pareja** publicados en GitHub Pages: <https://me7aben.github.io/gdg-codelabs/>.

Cada archivo Markdown de `codelabs/` se convierte con [claat](https://github.com/googlecodelabs/tools) en un
codelab interactivo al hacer push a `main`; el índice con buscador y tarjetas se arma con `scripts/build_index.py`.

| Codelab | Archivo |
|---|---|
| Cómo crear y publicar tus propios codelabs | `codelabs/como-hacer-codelabs.md` |
| Android: un agente para tu app | `codelabs/android-agente-tu-app.md` |
| PomodoroTec v2 | `codelabs/pomodorotec-v2.md` |
| Taller XR con Unity 6 | `codelabs/taller-xr-unity.md` |
| Vibe Coding XR | `codelabs/vibe-coding-xr.md` |
| Curso IA Aplicada (8 laboratorios, página propia `/curso-ia-aplicada/`) | `codelabs/ia-aplicada/lab-01.md … lab-08.md` + `curso.json` |

## Probar en local

```bash
scripts/probar-local.sh            # exporta con claat, arma el índice y sirve en http://localhost:8000/gdg-codelabs/
scripts/probar-local.sh --solo-indice
```

Requiere `claat` (`brew install go && go install github.com/googlecodelabs/tools/claat@latest`).

## Dónde está lo demás

Hasta el 2026-11-08 este repo también guardaba materiales de cursos y charlas. Se movieron a repos privados:

- Cursos (Tecsup y clientes, fuentes y generadores): `Me7aBen/cursos-tecsup`.
- Charlas y design system de GDG Arequipa: `Me7aBen/gdg-arequipa`.
- Producción OBS del DevFest: `0mishino5/obs-devfest`.
