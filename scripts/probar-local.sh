#!/usr/bin/env bash
# Prueba local del sitio de codelabs: exporta con claat, arma el índice y lo sirve en la ruta
# /gdg-codelabs/, igual que en GitHub Pages (así los botones "Done" y "X" funcionan como en producción).
#
# Uso:   scripts/probar-local.sh                 exporta todo, arma el índice y sirve en el puerto 8000
#        scripts/probar-local.sh --solo-indice   solo regenera el índice (sin volver a exportar)
#        PORT=8080 scripts/probar-local.sh       otro puerto
set -euo pipefail
cd "$(dirname "$0")/.."

PORT="${PORT:-8000}"
export PATH="$HOME/go/bin:$PATH"

if [[ "${1:-}" != "--solo-indice" ]]; then
  if ! command -v claat >/dev/null 2>&1; then
    cat <<'MSG'
No encuentro `claat`. Instálalo una sola vez:

  brew install go
  go install github.com/googlecodelabs/tools/claat@latest

y vuelve a ejecutar este script.
MSG
    exit 1
  fi
  rm -rf site
  mkdir -p site
  find codelabs -name '*.md' | sort | while read -r f; do
    echo "Exportando $f ..."
    claat export -ga "" -o site/ "$f"
  done
fi

[[ -d site ]] || { echo "No existe site/. Ejecuta el script sin --solo-indice primero."; exit 1; }
python3 scripts/build_index.py codelabs site

# Sirve site/ bajo /gdg-codelabs/ para reproducir la ruta de GitHub Pages
mkdir -p .local
ln -sfn ../site .local/gdg-codelabs
echo
echo "Sitio listo en:  http://localhost:${PORT}/gdg-codelabs/"
echo "Curso:           http://localhost:${PORT}/gdg-codelabs/curso-ia-aplicada/"
echo "(Ctrl+C para detener)"
exec python3 -m http.server "$PORT" --directory .local
