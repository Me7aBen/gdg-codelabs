# Archivos de formato de claat (copia propia)

Las páginas que exporta `claat` cargan su formato desde `https://storage.googleapis.com/claat-public/`.
Desde octubre de 2026 ese bucket responde 403 (`UserProjectAccountProblem`: la cuenta de facturación del
proyecto de Google está deshabilitada), y los codelabs se ven sin formato.

Estos cinco archivos son copias de lo que servía ese bucket (recuperadas del archivo de internet con
fecha 2026-07-03). `codelab-elements.js` y `codelab-elements.css` son idénticos, byte a byte, al paquete
`codelab-elements@1.0.1` de npm (Apache-2.0, ver `LICENSE-codelab-elements`).

`scripts/claat_assets.py` los copia a `site/claat-public/` y reescribe las páginas exportadas para que
apunten ahí. Si Google restablece el bucket, no hace falta tocar nada: seguirán funcionando.

| Archivo | Origen / licencia |
|---|---|
| `codelab-elements.js`, `codelab-elements.css` | googlecodelabs/tools, Apache-2.0 |
| `prettify.js` | google-code-prettify, Apache-2.0 |
| `custom-elements.min.js`, `native-shim.js` | Polymer Project / webcomponents, licencia BSD |
