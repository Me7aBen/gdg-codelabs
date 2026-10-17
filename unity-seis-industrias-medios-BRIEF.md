# Brief para continuar en otra máquina: medios de la charla "Unity: un motor, seis industrias"

Pega este texto como primer mensaje en una sesión de Claude Code abierta en este repositorio (Windows o claude.ai/code con el repo Me7aBen/gdg-codelabs).

---

Trabaja en este repositorio en una rama nueva `charla-unity-medios` partiendo de `main`.

Contexto: hoy, 17 de octubre de 2026 a la 1:40 p. m. hora de Perú, Benjamin Pareja da la charla "Unity: un motor, seis industrias" en Arequipa XR Day (GDG Arequipa, Perú Tech Week). El guion está en `unity-seis-industrias-slides.md` y tiene marcadores `[VIDEO PENDIENTE: YouTube · …]`, `[IMAGEN GRANDE PENDIENTE: …]` e `[IMAGEN PENDIENTE: …]`. Regla de la marca Coresearch: rigor; nada inventado, cada medio con su fuente.

Tarea:
1. Lee el archivo completo y lista cada marcador con su slide.
2. Para cada `[VIDEO PENDIENTE]` de fuente pública (Meta Connect 2026, Android XR Developer Preview 4 en Google I/O 2026, tráiler de Unity 6, Dicefolk, producción virtual en Unity, Sitowise, Toyota/Lexus HMI, Lucid Reality Labs / Medtronic, Travancore Virtual Forklift): busca el video oficial en YouTube (canal oficial de la empresa o de Unity, nunca re-subidas) y anota URL, título, canal, duración y el minuto y segundo de inicio y fin del fragmento de 20 a 40 segundos que mejor ilustra la slide. Si no existe, dilo y propone la mejor imagen alternativa.
3. Para cada `[IMAGEN PENDIENTE]` o `[IMAGEN GRANDE PENDIENTE]` de fuente pública: localiza una imagen oficial (press kit, blog oficial, página de caso de Unity), de al menos 1920 px de ancho si es "grande". Descárgala a `unity-seis-industrias-media/` con nombre por slide (ej. `s12-dicefolk.jpg`) y anota URL de origen y licencia o condición de uso. Solo del titular del contenido o de Unity.
4. Los marcadores de archivos propios de Benjamin (xrlabs-broca-quest.jpg, xrlabs-simulador.jpg, sim1/03.jpg, evaliuacion1.png, captura del editor con Sim 1, video demo de Laboratorios Inmersivo, video de entrevistas a los 17 estudiantes) viven en su Mac, en `~/Repositorios/Coresearch/generador/assets/evento/` y `~/Repositorios/Web/tecsupinmersivo/assets-src/`. Si estás en una máquina sin esos archivos, déjalos intactos y agrégales "(archivo local de Benjamin)".
5. Reemplaza cada marcador resuelto por una línea con la ruta local o la URL de YouTube con timestamps, manteniendo el prefijo `[VIDEO]` o `[IMAGEN]`. Agrega al final del .md una sección `## MEDIOS` con una tabla: slide, tipo, archivo o URL, fuente, licencia, estado (resuelto / sin fuente oficial / archivo local).
6. Commit en `charla-unity-medios` con el mensaje "charla: medios para Unity seis industrias" y push. Sin pull request. Sin líneas de atribución de IA ni Co-Authored-By.

Termina con un resumen corto en español: cuántos marcadores resolviste, cuáles quedaron sin fuente oficial y por qué, y la lista de URLs de YouTube con timestamps para pegar en Google Slides.
