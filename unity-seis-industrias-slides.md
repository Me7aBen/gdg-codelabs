# Unity: un motor, seis industrias
# Arequipa XR Day · GDG Arequipa · Perú Tech Week 2026 — Script de slides
# 30 minutos | 25 slides | Audiencia: developers, estudiantes y artistas 3D sin experiencia en XR | Nivel básico

---
## REFERENCIA DE TEMPLATES (del BWAI 2026 Master Deck)

- **[PORTADA]** — Title slide con subtitle y location
- **[BIG IDEA]** — Texto grande sobre fondo oscuro
- **[CAPÍTULO]** — Abre cada sección
- **[CITA]** — Quote con atribución
- **[STAT GRANDE]** — Número grande + caption
- **[STAT + INSIGHT]** — Número + panel "Learnings" lateral
- **[TITULAR + CUERPO]** — Headline + body copy
- **[DOS COLUMNAS]** — Contenido dividido
- **[BULLETS]** — Left Aligned Title + lista
- **[TIMELINE]** — Timeline con fechas
- **[PROCESO]** — Step A → B → C
- **[DEMO]** — Slide puente para demo en vivo o video
- **[LEARNING/REC]** — Panel Learning + Recommendation

---
## NOTA DE PRODUCCIÓN

**Tiempo.** 30 minutos reales son 26 de charla y 4 de preguntas. El bloque del caso propio (S-15 a S-20) es el corazón: si vas retrasado, recorta en las industrias (S-09 a S-14), nunca en el caso.

**Video del caso.** S-18 es el video de Sim 1. Tenlo descargado en la misma laptop del deck, nunca por streaming ni casteo. Máximo 60 segundos; si dura más, córtalo antes.

**Demo opcional.** S-24 es un puente a demo de Unity solo si sobran más de 4 minutos. Ten el proyecto de Sim 1 ya abierto en Unity en segundo plano antes de empezar la charla; abrirlo en vivo tarda demasiado.

**Medios.** Cada slide con medio tiene un marcador:
- `[IMAGEN GRANDE PENDIENTE: …]`: imagen a pantalla completa o a media pantalla, mínimo 1920 px de ancho.
- `[VIDEO PENDIENTE: YouTube · …]`: clip de YouTube embebido, 20 a 40 segundos, con el minuto de inicio anotado. Siempre descargado en local como respaldo; en Google Slides se inserta con Insertar → Video → YouTube y se marca el inicio y el fin en Opciones de formato.
- Regla: nunca más de un video por slide, nunca dos videos seguidos salvo en el caso propio.

**Marcadores.** `[IMAGEN PENDIENTE: …]` indica una imagen o video que debes agregar. `[CONFIRMAR: …]` indica un dato que conviene verificar antes de decirlo en voz alta.

**Regla de rigor.** Todo número tiene fuente al final del documento. Los datos marcados "sin confirmar" en la investigación NO están en las slides. Si no está en la slide, no lo digas como dato.

---
---

## APERTURA (0:00 – 3:00)

### S-01 — [PORTADA]

**Título:** Unity: un motor, seis industrias
**Subtítulo:** Lo que un motor de videojuegos hace hoy fuera de los videojuegos
**Location:** Arequipa XR Day · 17 de octubre de 2026 | Benjamin Pareja | Coresearch · XRLabs

`[IMAGEN GRANDE] unity-seis-industrias-media/s01-s26-broca-quest.jpg · fondo a pantalla completa, oscurecer al 40 %`

> **Nota de presentador:** No empieces hablando. Deja la portada mientras el público se acomoda. La primera frase es la de la slide siguiente.

---

### S-02 — [BIG IDEA] (fondo oscuro)

**Texto principal:** El motor con el que haces juegos para el celular hoy entrena a técnicos de minería.

**Subtítulo:** Y casi nadie fuera de esta sala lo sabe.

> **Nota de presentador:** Esta es la tesis. Dila y quédate callado tres segundos. Toda la charla es la defensa de esta frase.

---

### S-03 — [TITULAR + CUERPO]

**Título:** Quién les habla

**Cuerpo:**
- Ingeniero de sistemas, docente en Tecsup Arequipa.
- Lidero XRLabs: una plataforma de entrenamiento en realidad virtual para formación técnica, hecha en Unity para Meta Quest.
- Coresearch: estudio de investigación y desarrollo en XR, educación y fabricación 3D.
- GDG Arequipa, 404 Devs not Found.

`[IMAGEN] unity-seis-industrias-media/s03-benjamin-escenario.jpg`

> **Nota de presentador:** Treinta segundos, no más. El público no vino a oír tu biografía; vino a ver qué se puede hacer. Lo único que debe quedar: "este tipo construye cosas reales con esto".

---

## SECCIÓN 1: LO QUE ACABA DE PASAR EN XR (3:00 – 7:00)

### S-04 — [CAPÍTULO]

**Título:** Lo que acaba de pasar en XR
**Subtítulo:** Tres noticias de los últimos cuatro meses

`[VIDEO] YouTube · Meta Connect Keynote 2026 · canal Meta · 55:15 · https://youtu.be/SdKFDIAGF24 · elige 20 s del segmento de las Meta VR Glasses (busca el tramo en la barra de capítulos del video; no verificado el minuto) · sin audio, en loop`
`[IMAGEN] respaldo: unity-seis-industrias-media/s05-meta-connect-keynote.jpg (miniatura oficial del keynote)`

---

### S-05 — [TIMELINE]

**Título:** 2026 en tres fechas

| Fecha | Qué pasó | Qué significa para ti |
|---|---|---|
| **19 may** | Google I/O: Android XR SDK Developer Preview 4. Un solo SDK para visores, gafas con cable y gafas con pantalla o audio. | El ecosistema Android entra a XR en serio. Si sabes Android, ya tienes ventaja. |
| **16 jun** | Unity 6.5 soporta Galaxy XR y XREAL Aura con un solo APK. | Un proyecto, varios dispositivos Android XR. Sin reescribir. |
| **23 sep** | Meta Connect: Meta VR Glasses, unos 100 gramos, pantalla 5K, cómputo en un puck externo. Llegan en primavera de 2027. Y nuevas Ray-Ban Meta. | El visor deja de ser un casco. Lo que construyas hoy para Quest apunta a eso. |

`[VIDEO] YouTube · The latest in Android XR · canal Android Developers · 1:15 · https://youtu.be/otzSN5pSNZk · úsalo completo o los primeros 40 s, a media pantalla a la derecha de la tabla`
`[IMAGEN] fila Android XR: unity-seis-industrias-media/s05-android-xr-eyewear-io26.jpg (miniatura oficial de "Intelligent Eyewear | I/O 2026 Keynote", https://youtu.be/xxY0yuzxzLY) · fila Unity: unity-seis-industrias-media/s05-unity-6.jpg (imagen oficial de unity.com/releases/unity-6) · fila Meta: unity-seis-industrias-media/s05-meta-connect-keynote.jpg`
`[IMAGEN PENDIENTE: foto oficial de las Meta VR Glasses; meta.com bloquea la descarga automática, tómala a mano de https://www.meta.com/blog/meta-connect-2026-everything-we-announced/]`

> **Nota de presentador:** Lee la columna de la derecha, no la del medio. El público no necesita las especificaciones; necesita saber por qué le conviene. Si alguien pregunta precio de las Meta VR Glasses: US$1.299,99 según Meta.

---

### S-06 — [DOS COLUMNAS]

**Título:** Dos plataformas, un mismo problema

**Columna izquierda — Meta (Quest, Horizon OS)**
- El visor más vendido del mundo.
- Standalone: no necesita PC.
- Aquí corre XRLabs hoy.

**Columna derecha — Android XR (Google + Samsung)**
- Galaxy XR es el único dispositivo a la venta; las gafas vienen después.
- Gemini integrado.
- Jetpack XR para Android nativo, Unity para 3D.

**Pie:** El problema común: ambos necesitan contenido 3D interactivo. Y eso se construye con un motor.

`[IMAGEN GRANDE PENDIENTE: Quest 3 y Galaxy XR lado a lado; meta.com y news.samsung.com bloquean la descarga automática. Alternativa: usa la miniatura de Intelligent Eyewear (s05) a la derecha y una foto propia del Quest 3 del laboratorio a la izquierda]`

> **Nota de presentador:** Aquí haces el puente a Unity. "Las plataformas cambian cada año. El motor con el que construyes el contenido, no." Transición directa a la sección 2.

---

### S-07 — [BIG IDEA] (fondo oscuro)

**Texto principal:** Las plataformas cambian cada año. Lo que construyes dentro, no.

**Subtítulo:** Por eso hablamos del motor y no del visor.

---

## SECCIÓN 2: QUÉ ES UNITY, SIN TECNICISMOS (7:00 – 11:00)

### S-08 — [CAPÍTULO]

**Título:** Qué es Unity
**Subtítulo:** En tres palabras y un modelo mental

---

### S-09 — [PROCESO]

**Título:** Escena → Objeto → Componente

**Paso A — Escena:** el espacio. Un taller, una mina, una sala de operaciones.
**Paso B — Objeto:** las cosas que hay en el espacio. Una broca, una mesa, una luz, la cámara.
**Paso C — Componente:** lo que hace cada cosa. Tener física, sonar, reaccionar cuando la tomas, mostrar un texto.

**Pie:** Programar en Unity es combinar componentes. Escribes código solo cuando no existe el componente que necesitas.

`[IMAGEN GRANDE PENDIENTE: captura del editor de Unity con el proyecto de Sim 1 a pantalla completa: jerarquía a la izquierda, inspector a la derecha, la broca seleccionada. Tomarla en 2560 px de ancho. (archivo local de Benjamin: requiere abrir Unity)]`

> **Nota de presentador:** Modelo mental: Lego con comportamiento. Cada bloque sabe hacer algo. Si tienes la captura de Sim 1, señala la broca en la jerarquía y sus componentes en el inspector. Nada de código en esta charla.

---

### S-10 — [TITULAR + CUERPO]

**Título:** Un proyecto, muchas pantallas

**Cuerpo:** El mismo proyecto de Unity se exporta a Android, iOS, Windows, web, Meta Quest, Galaxy XR y Apple Vision Pro. Cambias el destino de exportación; el contenido es el mismo.

- Unity 6.3 LTS es la versión estable actual, con soporte hasta diciembre de 2027.
- Unity Personal es gratis para personas y equipos con menos de US$200.000 de ingresos.
- Desde Unity 6, la pantalla de "Made with Unity" es opcional.

`[VIDEO] YouTube · Unity 6 - Create faster and reach more platforms · canal Unity · 2:01 · https://youtu.be/1SyqN3D6khI · 0:00 a 0:30, sin audio, a media pantalla` · alternativa más cinematográfica: Time Ghost | Unity 6 · https://youtu.be/o1JIK5W3DRU · 4:27
`[IMAGEN] respaldo: unity-seis-industrias-media/s05-unity-6.jpg`

> **Nota de presentador:** La frase que importa: "Lo que vas a ver en las próximas seis industrias se hizo con la misma herramienta que puedes instalar gratis esta noche".

---

## SECCIÓN 3: SEIS INDUSTRIAS (11:00 – 17:00)

### S-11 — [CAPÍTULO]

**Título:** Seis industrias
**Subtítulo:** Un caso real por industria. Un minuto cada uno.

> **Nota de presentador:** Ritmo rápido: un minuto por slide. Cada slide tiene la misma estructura: quién, qué hizo, qué logró. Si vas tarde, salta cine y automotriz; son las menos conectadas con el caso propio.

---

### S-12 — [STAT + INSIGHT]

**Industria 01 · Videojuegos**

**Stat grande:** US$2 M
**Caption:** Google Play Indie Games Fund para Latinoamérica, 2024. Todos los estudios ganadores desarrollan con Unity.

**Panel Learnings:**
- Entre los ganadores: *Dicefolk*, de Leap Game Studios, Perú.
- Los videojuegos siguen siendo el origen y el mayor laboratorio de Unity.
- Todo lo que viene después nació de técnicas de juego.

`[VIDEO] YouTube · Dicefolk - Launch trailer - Android · canal LEAP Game Studios · 0:31 · https://youtu.be/D5QpseqnV6c · completo, sin audio`
`[IMAGEN] respaldo: unity-seis-industrias-media/s12-dicefolk.jpg (miniatura oficial del tráiler) · unity-seis-industrias-media/s12-indie-fund-latam.jpg es la foto del blog de Unity sobre el fondo, no muestra el juego`

---

### S-13 — [TITULAR + CUERPO]

**Industria 02 · Cine y animación**

**Título:** Rodar dentro del motor

**Cuerpo:** Estudios de producción virtual y animación usan Unity para previsualizar, iluminar y renderizar escenas en tiempo real, en vez de esperar horas por cada cuadro. El director mueve la cámara y ve el resultado al instante.

**Pie:** Ejemplos documentados por Unity: VRFX (producción virtual), Dark Asset (de previs a píxel final), anime en Japón.

`[VIDEO] YouTube · Real-time virtual production: Collaborating with Unity | SIGGRAPH 2022 · canal Unity · 59:28 · https://youtu.be/Bn-QU4iGbw0 · es una charla larga: elige 30 s con imágenes de set LED (no verificado el minuto). Sin fuente oficial corta para VRFX ni Dark Asset: los artículos del blog de Unity ya no están en línea (404).`
`[IMAGEN GRANDE] unity-seis-industrias-media/s13-unity-virtual-production-siggraph.jpg (miniatura oficial, 1280 px; sirve a media pantalla)`

> **Nota de presentador:** Aquí no hay cifra, y está bien. Di que es cualitativo. Conecta con Renzo: "lo que Renzo esculpe en ZBrush termina en un motor como este".

---

### S-14 — [STAT + INSIGHT]

**Industria 03 · Arquitectura y construcción**

**Stat grande:** 15–20 %
**Caption:** Mejora de eficiencia reportada por Sitowise (Finlandia) con Aura, un gemelo digital urbano 3D construido en Unity. Unity, 2025.

**Panel Learnings:**
- Un gemelo digital es una copia 3D de algo real que se actualiza con datos.
- Sirve para decidir antes de construir.
- Es la misma lógica de un simulador de entrenamiento, aplicada a una ciudad.

`[IMAGEN GRANDE] unity-seis-industrias-media/s14-sitowise.jpg · 1920×1080, imagen oficial del caso en unity.com/case-study/sitowise`
`[VIDEO] sin fuente oficial: el video del caso está embebido en la página de Unity (Vimeo, tras consentimiento de cookies), no en YouTube. Usa la imagen.`

---

### S-15 — [TITULAR + CUERPO]

**Industria 04 · Automotriz y manufactura**

**Título:** La pantalla del auto también es una escena

**Cuerpo:** Toyota y Lexus eligieron Unity para desarrollar la interfaz de sus tableros de próxima generación. La misma herramienta que mueve un personaje mueve el velocímetro, el mapa y las alertas.

**Pie:** Resultado reportado por Toyota: mejora drástica en eficiencia de desarrollo. `[CONFIRMAR: sin cifra pública]`

`[IMAGEN] unity-seis-industrias-media/s15-toyota-lexus.png · 1395×737, imagen oficial de la presentación en unity.com (tablero de Lexus LS 2021)`
`[VIDEO] sin fuente oficial actual: la presentación de 2025 está "awaiting YouTube upload" tras formulario. Existe Unity & Lexus: Real-time revolution in auto · canal Unity · 2:28 · https://youtu.be/M9F0gl2u8wQ, pero es de 2018: úsalo solo si dices la fecha.`

---

### S-16 — [STAT + INSIGHT]

**Industria 05 · Salud**

**Stat grande:** 437
**Caption:** Participantes de 18 países que practicaron intubación en un simulador XR de Lucid Reality Labs para Medtronic y el hospital CHUV. 491 escenarios completados. Unity, diciembre de 2025.

**Panel Learnings:**
- 71 % lo calificó útil para enseñar; 65 % quiere usarlo en formación continua.
- Hecho con Unity, XR Interaction Toolkit y OpenXR: las mismas piezas de XRLabs.
- Practicar sin riesgo. Recuerden esta frase.

`[VIDEO] YouTube · AI Powered XR Intubation Simulation · canal Lucid Reality Labs · 1:36 · https://youtu.be/am1sJIbmmvE · 0:00 a 0:30, sin audio` · alternativa corta: McGRATH MAC VR Intubation Simulation · 0:26 · https://youtu.be/Y0aXEiIwjGI
`[IMAGEN GRANDE] unity-seis-industrias-media/s16-lucid.jpg · 4148×2333, imagen oficial del caso en unity.com`

---

### S-17 — [STAT + INSIGHT]

**Industria 06 · Capacitación industrial**

**Stat grande:** 75 %
**Caption:** Menos tiempo de entrenamiento: de un día a una o dos horas, en el simulador VR de montacargas de Travancore Analytics, hecho en Unity. Unity, 2024.

**Panel Learnings:**
- Un error en una máquina real cuesta dinero y puede costar una lesión.
- En el simulador cuesta un reinicio.
- Esto es exactamente lo que hicimos en Arequipa. Siguiente sección.

`[VIDEO] YouTube · VR Forklift Simulator | Forklift Training in VR · canal TravancoreAnalytics · 2:23 · https://youtu.be/kXnhInrhYOI · 0:00 a 0:25, sin audio`
`[IMAGEN] unity-seis-industrias-media/s17-travancore.png · 1200×676, imagen oficial del caso en unity.com`

> **Nota de presentador:** Este es el puente al caso propio. Termina la slide diciendo: "Esto lo hicieron en Estados Unidos con montacargas. Nosotros lo hicimos aquí, con brocas de perforación."

---

## SECCIÓN 4: EL CASO PROPIO — LABORATORIOS INMERSIVO (17:00 – 24:00)

### S-18 — [CAPÍTULO]

**Título:** Lo hicimos en Arequipa
**Subtítulo:** Laboratorios Inmersivo · Sim 1: Fallas en brocas de perforación

`[IMAGEN GRANDE] unity-seis-industrias-media/s18-laboratorio-tecsup.jpg · 1400×1050, a pantalla completa detrás del título, oscurecer al 40 %. Los estudiantes se reconocen: confirmar que la foto puede proyectarse.`

---

### S-19 — [STAT GRANDE]

**Stat grande:** 53 %
**Caption:** de 133 estudiantes de Operaciones Mineras y Electrotecnia dice que su mayor obstáculo para practicar es el miedo a dañar equipos costosos.

**Línea secundaria:** 58 % accede a equipos reales menos de dos veces al mes. 26 % nunca durante el ciclo.

> **Nota de presentador:** El problema con datos, no con opinión. Encuestamos antes de construir. Lee los tres números despacio.

---

### S-20 — [CITA]

**Cita:** "El miedo a cometer errores, porque si cometes algún error tienes que reponer el equipo y no es nada barato."
**Atribución:** Estudiante de Electrotecnia, 5.º semestre, Tecsup Arequipa

---

### S-21 — [DOS COLUMNAS]

**Título:** Sim 1: aprender, practicar, evaluar

**Columna izquierda — Fase 1 · Aprendizaje guiado**
- Taller de inspección virtual, con EPP.
- Tomas la broca con las manos, la giras, la acercas.
- Tres fallas reales: rajadura en el borde, rotura anular, botones agrietados.
- Un coach de voz te guía.

**Columna derecha — Fase 2 · Evaluación con puntaje**
- Tres casos sin ayudas.
- Identificas la falla, la causa y la acción correcta.
- Cada interacción se registra.
- El docente ve el resultado en un portal web.

**Pie:** Meta Quest, standalone, 100 % offline. Unity, URP, Meta XR SDK. Contenido validado con Sandvik Rock Tools.

`[IMAGEN GRANDE] izquierda: unity-seis-industrias-media/s21-sim1-taller.jpg · derecha: unity-seis-industrias-media/s21-sim1-evaluacion.png (2720×1664) · extra: unity-seis-industrias-media/s21-sim1-ui.png con las pantallas de evaluación`

---

### S-22 — [DEMO]

**Texto:** Sim 1 en 60 segundos

`[VIDEO] YouTube · Experiencia en Acción - Sim 1: Fallas en Brocas de Perforación Minera · canal Me7aben · https://youtu.be/xcyEq3Tg__o · a pantalla completa, máximo 60 s. PENDIENTE: descargarlo en local como respaldo.`

> **Nota de presentador:** No hables encima del video. Si tiene la voz del coach, déjala sonar: demuestra la narración generada con IA. Al terminar, una sola frase: "Eso que vieron corre en un visor de menos de 500 dólares, sin PC."

---

### S-23 — [STAT + INSIGHT]

**Título:** Qué pasó cuando lo probaron

**Stat grande:** 5,76 → 7,53
**Caption:** Puntaje de conocimiento técnico sobre 9, antes y después del simulador. 17 estudiantes de Operaciones Mineras, Arequipa. 12 de 17 mejoraron.

`[VIDEO] YouTube · Estudiantes prueban simulador VR de fallas en brocas mineras | Laboratorios Inmersivo · canal Me7aben · https://youtu.be/Z29kH6Xai5o · elige un testimonio de 20 s, con audio`

**Panel Learnings:**
- Usabilidad (SUS): 70,6 sobre 100. El umbral de aceptabilidad es 68.
- Intención de uso (TAM): 4,55 sobre 5.
- De los 133 encuestados, 84 % dijo que lo usaría cada semana o más. Solo uno dijo que no.

> **Nota de presentador:** Sé preciso con los números: 133 respondieron la encuesta; 17 probaron el simulador. No mezcles los dos grupos. Que esta precisión se note: es parte del mensaje de Coresearch.

---

### S-24 — [LEARNING/REC]

**Título:** Lo que no salió como esperábamos

**Learning:**
- `[CONFIRMAR: completa con uno o dos problemas reales. Candidatos: tiempo de puesta a punto del visor por sesión, hand tracking impreciso en piezas pequeñas, mareo en algunos estudiantes, estudiantes que no mejoraron (5 de 17).]`

**Recommendation:**
- Medir antes de construir, y volver a medir después.
- Validar el contenido técnico con especialistas, no con desarrolladores.
- Diseñar la tarea primero; el dispositivo se elige al final.

> **Nota de presentador:** Esta slide es la que más credibilidad te da. Un caso sin problemas suena a publicidad. Elige un problema real y cuéntalo en 40 segundos.

---

## SECCIÓN 5: POR DÓNDE EMPEZAR (24:00 – 27:00)

### S-25 — [BULLETS]

**Título:** Tu ruta, gratis, esta semana

- **Instala:** Unity Hub y Unity 6.3 LTS. Licencia Personal gratis.
- **Aprende:** Unity Learn, pathway "VR Development". Gratuito, unas seis semanas, las primeras misiones sin programar.
- **Construye escenarios sin Blender:** ProBuilder, incluido en Unity.
- **Si eres estudiante:** plan Unity Student, con Unity Pro gratis y descuento en la Asset Store.
- **No construyas solo:** GDG Arequipa, XR Perú, y esta tarde: los visores están aquí.

> **Nota de presentador:** Esta slide debe estar en pantalla cuando saquen el celular a fotografiar. Déjala 30 segundos.

---

## CIERRE (27:00 – 30:00)

### S-26 — [BIG IDEA] (fondo oscuro)

**Texto principal:** Lo que viste hoy empezó como un modelo 3D.

**Subtítulo:** Lo que construyas tú, también. Los visores están en esta sala.

`[IMAGEN GRANDE] unity-seis-industrias-media/s01-s26-broca-quest.jpg · a pantalla completa, oscurecer al 50 %, detrás del texto`

> **Nota de presentador:** Puente a las demos de las 3:55. Luego preguntas. Si sobran más de cuatro minutos, pasa a S-27.

---

### S-27 — [DEMO] (opcional)

**Texto:** Sim 1 por dentro: dos minutos en el editor

> **Nota de presentador:** Solo si sobra tiempo. Proyecto ya abierto. Muestra tres cosas y nada más: la jerarquía de la escena del taller, los componentes de la broca en el inspector, y Play en el editor. No compiles. No busques nada que no tengas ya ubicado.

---

### S-28 — [PORTADA]

**Título:** Gracias
**Subtítulo:** Benjamin Pareja · LinkedIn: @me7aben · coresearch.studio
**Location:** Arequipa XR Day · GDG Arequipa · Perú Tech Week 2026

---
---

## FUENTES

**Sección 1, noticias**
- Meta Connect 2026, resumen oficial (23 sep 2026): https://www.meta.com/blog/meta-connect-2026-everything-we-announced/
- Android XR SDK Developer Preview 4 (19 may 2026): https://developer.android.com/blog/posts/updates-to-the-android-xr-sdk-introducing-developer-preview-4
- Unity 6.5, soporte de XREAL Aura y Galaxy XR con un solo APK (16 jun 2026): https://discussions.unity.com/t/xreal-aura-support-now-available-in-unity-6-5/1723292

**Sección 2, Unity**
- Versiones y soporte de Unity 6: https://unity.com/releases/unity-6
- Precios y licencias (Personal hasta US$200.000, splash opcional): https://unity.com/products/pricing-updates

**Sección 3, industrias**
- Videojuegos: Google Play Indie Games Fund LATAM 2024, Unity (16 dic 2024): https://unity.com/blog/google-play-indie-games-fund-2024-winners
- Cine: VRFX https://blog.unity.com/es/industry/how-indie-studio-vrfx-uses-unity-and-artengine-for-real-time-filmmaking · Dark Asset https://blog.unity.com/industry/dark-asset-vfx-previs-to-final-pixel
- Arquitectura: Sitowise, Unity (18 jul 2025): https://unity.com/case-study/sitowise
- Automotriz: Toyota/Lexus HMI, Unity: https://unity.com/resources/toyota-lexus-next-gen-hmi-development
- Salud: Lucid Reality Labs, Medtronic y CHUV, Unity (12 dic 2025): https://unity.com/en/resources/lucid-reality-labs
- Capacitación industrial: Travancore Analytics, Virtual Forklift, Unity (10 may 2024): https://unity.com/resources/travancore-analytics

**Sección 4, caso propio**
- Laboratorios Inmersivo, Tecsup: encuesta a 133 estudiantes, validación con 17, SUS y TAM. Fuente interna: `tecsupinmersivo/.claude/contenido-inmersivo.md` y la página /inmersivo.

**Sección 5, ruta**
- Unity Learn, pathway VR Development: https://learn.unity.com/pathway/vr-development
- Unity Student: https://unity.com/products/unity-student

## DATOS QUE NO ESTÁN EN LAS SLIDES (sin confirmar, no los digas como dato)
- Precios de las gafas Ray-Ban Meta 2026 (solo medios secundarios).
- Qué anunció Samsung en el Unpacked de julio; si Galaxy Glasses o XREAL Aura ya salieron.
- Android XR SDK "1.0 GA" y un fondo de US$30 M (solo un blog; Google habla de Developer Preview 4).
- Cuota de mercado de Unity en móviles o XR.
- Cifras de los casos de cine y de Toyota.
- Novedades de Apple Vision Pro 2026 (no investigadas).

## MEDIOS

Carpeta: `unity-seis-industrias-media/`. Videos de YouTube: en Google Slides, Insertar → Video → YouTube, y en Opciones de formato marca inicio y fin. Los minutos marcados "no verificado" no se comprobaron viendo el video: revísalos antes.

| Slide | Tipo | Archivo o URL | Fuente | Licencia / condición | Estado |
|---|---|---|---|---|---|
| S-01, S-26 | Imagen | s01-s26-broca-quest.jpg | Render propio de XRLabs | Propio | Resuelto |
| S-03 | Imagen | s03-benjamin-escenario.jpg | Foto propia | Propio | Resuelto |
| S-04 | Video | https://youtu.be/SdKFDIAGF24 (Meta Connect Keynote 2026, canal Meta, 55:15) | Meta | Embebido desde YouTube, uso editorial | Resuelto; minuto del reveal no verificado |
| S-05 | Video | https://youtu.be/otzSN5pSNZk (The latest in Android XR, Android Developers, 1:15) | Google | Embebido desde YouTube | Resuelto |
| S-05 | Imagen | s05-android-xr-eyewear-io26.jpg · s05-unity-6.jpg · s05-meta-connect-keynote.jpg | Miniaturas oficiales de YouTube e imagen de unity.com | Material promocional oficial, uso editorial | Resuelto |
| S-05 | Imagen | Foto de las Meta VR Glasses | meta.com | — | Pendiente: descarga manual, el sitio bloquea bots |
| S-06 | Imagen | Quest 3 y Galaxy XR | meta.com, news.samsung.com | — | Pendiente: ambos sitios bloquean la descarga automática |
| S-09 | Imagen | Captura del editor con Sim 1 | Propio | Propio | Pendiente: requiere abrir Unity |
| S-10 | Video | https://youtu.be/1SyqN3D6khI (Unity 6 trailer, canal Unity, 2:01) · alt. https://youtu.be/o1JIK5W3DRU (Time Ghost) | Unity | Embebido desde YouTube | Resuelto |
| S-12 | Video | https://youtu.be/D5QpseqnV6c (Dicefolk launch trailer Android, LEAP Game Studios, 0:31) | LEAP Game Studios | Embebido desde YouTube | Resuelto |
| S-12 | Imagen | s12-dicefolk.jpg · s12-indie-fund-latam.jpg | Miniatura oficial del tráiler · blog de Unity | Promocional oficial | Resuelto |
| S-13 | Video | https://youtu.be/Bn-QU4iGbw0 (SIGGRAPH 2022 virtual production, canal Unity, 59:28) | Unity | Embebido desde YouTube | Parcial: charla larga, elegir fragmento; sin clip corto de VRFX ni Dark Asset (artículos en 404) |
| S-13 | Imagen | s13-unity-virtual-production-siggraph.jpg | Miniatura oficial, canal Unity | Promocional oficial | Resuelto, 1280 px |
| S-14 | Imagen | s14-sitowise.jpg (1920×1080) | unity.com/case-study/sitowise | Material del caso de Unity | Resuelto |
| S-14 | Video | Video del caso, embebido en unity.com (Vimeo) | Unity | — | Sin fuente en YouTube; usar imagen |
| S-15 | Imagen | s15-toyota-lexus.png (1395×737) | unity.com/resources/toyota-lexus-next-gen-hmi-development | Material del caso de Unity | Resuelto |
| S-15 | Video | https://youtu.be/M9F0gl2u8wQ (Unity & Lexus 2018, canal Unity, 2:28) | Unity | Embebido desde YouTube | Alternativa de 2018; la presentación de 2025 no está en YouTube |
| S-16 | Video | https://youtu.be/am1sJIbmmvE (AI Powered XR Intubation Simulation, Lucid Reality Labs, 1:36) · alt. https://youtu.be/Y0aXEiIwjGI (0:26) | Lucid Reality Labs | Embebido desde YouTube | Resuelto |
| S-16 | Imagen | s16-lucid.jpg (4148×2333) | unity.com/en/resources/lucid-reality-labs | Material del caso de Unity | Resuelto |
| S-17 | Video | https://youtu.be/kXnhInrhYOI (VR Forklift Simulator, TravancoreAnalytics, 2:23) | Travancore Analytics | Embebido desde YouTube | Resuelto |
| S-17 | Imagen | s17-travancore.png (1200×676) | unity.com/resources/travancore-analytics | Material del caso de Unity | Resuelto |
| S-18 | Imagen | s18-laboratorio-tecsup.jpg | Foto propia, web /inmersivo | Propio; estudiantes reconocibles | Resuelto, confirmar permiso |
| S-21 | Imagen | s21-sim1-taller.jpg · s21-sim1-evaluacion.png · s21-sim1-ui.png | Capturas propias de Sim 1 | Propio | Resuelto |
| S-22 | Video | https://youtu.be/xcyEq3Tg__o (Experiencia en Acción - Sim 1, canal Me7aben) | Propio | Propio | Resuelto; descargar respaldo local |
| S-23 | Video | https://youtu.be/Z29kH6Xai5o (Estudiantes prueban simulador VR, canal Me7aben) | Propio | Propio | Resuelto; elegir testimonio |
