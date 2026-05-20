id: vibe-coding-xr
summary: Crea tu primera experiencia de realidad extendida usando solo lenguaje natural. Con el XR Blocks Gem de Gemini generarás una escena XR interactiva con física y la publicarás en una URL pública. Incluye marco teórico completo sobre XR, WebXR y el ecosistema de Google.
status: Published
authors: GDG Local
categories: AI, XR, WebXR, Gemini
environments: Web
feedback link: https://me7aben.github.io/gdg-codelabs/

# De prompt a URL: Tu primera experiencia XR con Gemini y XR Blocks

## Antes de empezar
Duration: 0:02:00

En este codelab no vas a escribir código 3D.

Vas a **describir** lo que quieres en palabras, y Gemini lo va a convertir en una experiencia de realidad extendida interactiva que corre en el navegador. Al terminar tendrás una URL pública que puedes compartir — y que también abre en un headset si tienes uno.

Pero antes de llegar ahí, vamos a construir el contexto teórico. ¿Qué es XR? ¿Por qué importa? ¿Cuánto cuesta desarrollar algo así normalmente? ¿Qué cambió?

### Lo que construirás

- Una experiencia XR interactiva generada completamente con prompts en lenguaje natural
- Una versión publicada en GitHub Pages con tu propia URL compartible

### Lo que aprenderás

- Qué es XR, WebXR y por qué el enfoque web cambia todo
- Cuál es el proceso de desarrollo XR tradicional y por qué tiene una curva tan alta
- Cómo Google está construyendo el ecosistema XR con Android XR
- Qué es XR Blocks y cómo funciona su arquitectura
- Cómo escribir prompts efectivos para crear experiencias espaciales
- Cómo publicar el resultado en una URL pública accesible desde cualquier dispositivo

### Requisitos previos

| Qué necesitas | Para qué |
|---|---|
| **Google Chrome** (versión 136 o superior) | WebXR funciona mejor en Chrome |
| **Cuenta de Google** | Para acceder a Gemini y al XR Blocks Gem |
| **Cuenta de GitHub** | Para publicar la experiencia en GitHub Pages |

Verifica la versión de Chrome abriendo `chrome://version` en la barra de direcciones. Debe mostrar `136.x.x.x` o superior. Si es anterior, actualiza desde `chrome://settings/help`.

## ¿Qué es XR? El espectro de realidades
Duration: 0:06:00

**XR** (Extended Reality, o Realidad Extendida) es el término paraguas que agrupa todas las tecnologías que modifican la forma en que percibimos la realidad — ya sea añadiendo capas digitales al mundo real o reemplazándolo por completo.

### El espectro

Imaginá una línea continua:

```
Realidad pura ←————————————————————→ Virtualidad pura
     |            |           |              |
  Mundo real      AR          MR             VR
```

**Realidad Aumentada (AR)** — Añade información digital sobre el mundo real que ves. El mundo real sigue siendo lo principal. Ejemplo: Google Maps con navegación AR, filtros de Instagram, IKEA Place.

**Realidad Mixta (MR)** — Los objetos digitales interactúan con el entorno físico. Una mesa virtual puede bloquearse detrás de una silla real. Requiere comprensión del espacio. Ejemplo: Microsoft HoloLens, Apple Vision Pro, Android XR en modo Mixed Reality.

**Realidad Virtual (VR)** — Reemplaza completamente la vista. El usuario está inmerso en un entorno 100% digital. Ejemplo: Meta Quest, PlayStation VR, Samsung Galaxy XR en modo VR completo.

**XR** engloba los tres. Una misma aplicación puede pasar de AR a MR a VR dependiendo del contexto y el hardware.

### ¿Qué se puede hacer con XR hoy?

| Industria | Casos de uso reales |
|---|---|
| **Educación** | Laboratorios virtuales de química, viajes históricos inmersivos, simuladores de cirugía |
| **Entrenamiento** | Simuladores de emergencias, capacitación industrial sin riesgo real |
| **Retail** | Ver cómo queda un mueble en tu cuarto antes de comprarlo, probarse ropa virtualmente |
| **Medicina** | Visualización de órganos en 3D, guía quirúrgica con AR, terapia de exposición |
| **Arquitectura** | Recorridos de edificios que aún no se construyeron |
| **Entretenimiento** | Juegos immersivos, conciertos virtuales, experiencias narrativas |
| **Colaboración** | Reuniones en espacios virtuales compartidos, revisión de diseños en 3D |

### ¿Por qué debería importarte?

Porque el mundo está pasando de pantallas planas a experiencias espaciales. No es ciencia ficción: ya hay millones de dispositivos XR activos en el mundo, y los modelos de lenguaje acaban de hacer que crear para esa plataforma sea accesible por primera vez.

Si sabes comunicar ideas en lenguaje natural, puedes crear para XR hoy.

## ¿Por qué WebXR? La web como plataforma XR
Duration: 0:05:00

Crear para XR históricamente significaba elegir un ecosistema propietario y quedarte atrapado en él. **WebXR** cambia esa ecuación.

### ¿Qué es WebXR?

WebXR es un estándar del W3C que permite crear experiencias de realidad aumentada y virtual directamente en el navegador, usando APIs web estándar — sin plugins, sin descargar apps, sin pasar por ningún store.

```
Tu experiencia XR
       ↓
    HTML + JS
       ↓
  Chrome / Firefox / Meta Quest Browser / Samsung Internet
       ↓
  Cualquier dispositivo con WebXR support
```

### Las ventajas que cambian todo

**Distribución instantánea** — Una URL es suficiente. Sin app stores, sin aprobaciones, sin esperar. Compartes un link y el usuario entra directo.

**Acceso sin fricción** — El usuario no instala nada. Abre el link, acepta el modo XR, y está dentro. En eventos, eso puede ser la diferencia entre que alguien pruebe tu experiencia o no.

**Un código, múltiples dispositivos** — El mismo archivo HTML corre en un headset Meta Quest, en un Samsung Galaxy XR, en un teléfono Android con ARCore, y en un Chrome de escritorio con el simulador. Sin builds separados, sin configuraciones distintas.

**Actualizaciones en tiempo real** — Actualizas el servidor, todos ven la versión nueva inmediatamente. No hay "version 1.0.1 disponible en la store".

**Indexable y linkeable** — Una experiencia WebXR puede aparecer en resultados de búsqueda, puede tener meta tags, puede estar embebida en un sitio web.

### Soporte actual de WebXR (2026)

| Plataforma | Soporte | Funcionalidades disponibles |
|---|---|---|
| Chrome 136+ (desktop) | ✅ Completo | Simulador, básicos WebXR |
| Chrome en Android | ✅ Completo | ARCore, hand tracking, depth |
| **Meta Quest 3** (Meta Quest Browser) | ✅ Completo | Hand tracking, passthrough AR color, plane detection, depth API, 90Hz |
| Meta Quest 2 | ✅ Parcial | Hand tracking, passthrough B&W, VR |
| Samsung Galaxy XR | ✅ Optimizado | Hand tracking, depth sensing, spatial audio, Android XR APIs |
| Apple Vision Pro (Safari visionOS 2+) | ✅ Habilitado | Gaze + pinch input |
| Firefox Reality | ✅ Parcial | VR básico |

La adopción de WebXR creció 40% en 2026. El browser está llegando para quedarse como plataforma XR de primera clase.

## El proceso de desarrollo XR tradicional
Duration: 0:05:00

Para entender lo que XR Blocks cambia, primero hay que ver lo que normalmente se necesita.

### La pared de fricción tradicional

Si hoy quisieras crear una experiencia XR sin herramientas de IA, el camino se ve así:

**Opción 1 — Unity o Unreal Engine (nativo)**

1. Instalar Unity (4–8 GB) o Unreal Engine (60–100 GB)
2. Aprender C# (Unity) o C++ / Blueprints (Unreal)
3. Entender el sistema de escenas, GameObjects, prefabs, shaders
4. Configurar el SDK de XR específico (ARCore, OpenXR, Meta XR SDK...)
5. Aprender fisicas con PhysX o Bullet
6. Manejar el ciclo de vida del sistema XR (session init, frame loop, input handling)
7. Configurar el pipeline de build para cada plataforma target
8. Publicar en la tienda correspondiente (Meta Horizon Store, Play Store...)

**Tiempo mínimo realista para alguien nuevo:** 3 a 6 meses antes de tener algo presentable.

**Opción 2 — WebXR desde cero**

```javascript
// Esto es lo que necesitas solo para iniciar una sesión WebXR
navigator.xr.requestSession('immersive-vr', {
  requiredFeatures: ['local-floor'],
  optionalFeatures: ['hand-tracking', 'depth-sensing', 'plane-detection']
}).then(session => {
  session.updateRenderState({
    baseLayer: new XRWebGLLayer(session, gl)
  });
  session.requestAnimationFrame(onXRFrame);
  // ... y esto es solo el inicio
});
```

Luego hay que manejar manualmente: el render loop, las matrices de transformación, el raycasting, la proyección de cámaras, la sincronización de física, y el estado de las manos (21 joints por mano × 2 manos = 42 puntos de datos que debes interpretar).

**Tiempo mínimo para alguien con experiencia web:** 2 a 4 semanas para algo básico.

### El resultado en ambos casos

Una enorme inversión de tiempo antes de poder probar si la idea es buena. Y si la idea cambia, volver a invertir.

Este es el problema que XR Blocks y el flujo de Vibe Coding XR resuelven directamente.

## Google y el ecosistema Android XR
Duration: 0:05:00

Google lleva más de una década construyendo las piezas del ecosistema XR. En 2025–2026 esas piezas se conectaron en algo coherente.

### La línea de tiempo relevante

**2014** — Google Cardboard: XR accesible con un teléfono y cartón. Simple, pero demostró que la distribución masiva era posible.

**2017** — ARCore: el SDK de AR para Android que trajo depth sensing, plane detection y light estimation a teléfonos estándar.

**2024** — Android XR SDK (Developer Preview): un sistema operativo y SDK completo para headsets y gafas XR, basado en Android.

**2025** — Samsung Galaxy XR: el primer headset con Android XR. Headset de producción, no prototipo.

**2025** — XR Blocks: el framework open-source que democratiza el desarrollo XR con WebXR + IA.

**2026** — Project Aura (XREAL): primeras gafas AR con Android XR que llevan una pantalla infinita fuera del headset.

### Los tres form factors de Android XR

Android XR está diseñado para adaptarse a distintos tipos de hardware:

**Headsets (ej. Samsung Galaxy XR)** — Experiencia completamente inmersiva. Reemplaza el mundo real con uno digital o lo aumenta. Hand tracking preciso, depth sensing, spatial audio.

**Gafas con cable (ej. XREAL Project Aura)** — Pantalla inmersiva portable conectada a un teléfono. Llevan la experiencia de headset fuera del escritorio.

**Gafas de display ligeras** — Lentes transparentes con proyección. Forma factor discreto, diseñadas para uso cotidiano con información contextual.

### Video: Android XR en Google I/O 2025

<video id="7nv1snJRCEI"></video>

### Video: Demo en vivo de Android XR en Google I/O 2026

<video id="HZioERCcZf8"></video>

### ¿Por qué importa el ecosistema?

Porque XR Blocks genera WebXR estándar. Una experiencia que creas hoy en el navegador ya funciona en toda esta infraestructura — sin reescribirla. Y a medida que el ecosistema crece (más headsets, más gafas, más usuarios), tu experiencia crece con él.

## XR Blocks: el framework abierto
Duration: 0:05:00

XR Blocks es el puente entre el lenguaje natural y el hardware XR. Entender su arquitectura te ayuda a escribir mejores prompts y a diagnosticar problemas cuando aparecen.

### ¿Qué es XR Blocks?

XR Blocks es un framework open-source (licencia Apache 2.0) creado por Google Research, construido sobre:

- **WebXR** — el estándar del navegador para XR
- **Three.js** — la librería más usada de 3D en la web
- **LiteRT.js** (TensorFlow Lite) — para correr modelos de IA en el cliente

Su propósito: empaquetar toda la complejidad de bajo nivel (sesiones XR, matrices de transformación, fusion de sensores, física) en APIs semánticas de alto nivel que un LLM pueda usar sin alucinaciones.

### La arquitectura en tres capas

```
┌─────────────────────────────────┐
│         Tu prompt               │
└─────────────────────────────────┘
              ↓
┌─────────────────────────────────┐
│  Gemini (Capa cognitiva)        │
│  Interpreta el prompt,          │
│  genera lógica y estructura     │
└─────────────────────────────────┘
              ↓
┌─────────────────────────────────┐
│  XR Blocks Gem (Grounding)      │
│  Ultra-prompt con templates     │
│  validados. Previene            │
│  alucinaciones de APIs          │
└─────────────────────────────────┘
              ↓
┌─────────────────────────────────┐
│  XR Blocks SDK (Abstracción)    │
│  APIs semánticas: User, World,  │
│  Physics, AI, Interface         │
└─────────────────────────────────┘
              ↓
┌─────────────────────────────────┐
│  WebXR + Three.js (Output)      │
│  HTML + JS puro. Corre en       │
│  cualquier navegador compatible │
└─────────────────────────────────┘
```

### Lo que XR Blocks abstrae por ti

En lugar de esto (WebXR crudo):
```javascript
// detectar si el usuario está pinchando con la mano derecha
const handRight = frame.getJointPose(
  inputSource.hand.get('index-finger-tip'),
  referenceSpace
);
const thumbRight = frame.getJointPose(
  inputSource.hand.get('thumb-tip'),
  referenceSpace
);
const distance = vec3.distance(handRight.transform.position, thumbRight.transform.position);
if (distance < PINCH_THRESHOLD) { /* pinch detectado */ }
```

XR Blocks expone esto:
```javascript
user.onPinch((hand, position) => {
  // el usuario pinchó — position es dónde ocurrió
});
```

La diferencia no es solo de líneas de código. Es la diferencia entre que un LLM genere código correcto en el primer intento o no.

### El Reality Model

XR Blocks introduce el concepto de **Reality Model**: trata al usuario, el mundo físico, y los agentes inteligentes como ciudadanos de primera clase del entorno:

- `User` — posición, orientación, gestos, estado de las manos
- `World` — planos detectados, profundidad, iluminación ambiental
- `Interface` — paneles flotantes, orbiters, menús contextuales
- `Physics` — gravedad, colisiones, fuerzas, constraints
- `AI` — modelos locales (LiteRT) para reconocimiento de objetos, clasificación

### Video: Vibe Coding XR — demo oficial de Google Research

<video id="nknCzIxHHzw"></video>

### Video: Creando una experiencia XR completa con Gemini XR Blocks (en español)

<video id="61Imjdt1G0Y"></video>

### Repositorio y documentación

- GitHub: [github.com/google/xrblocks](https://github.com/google/xrblocks)
- Sitio oficial: [xrblocks.github.io](https://xrblocks.github.io)
- Paper técnico: [arxiv.org/abs/2603.24591](https://arxiv.org/abs/2603.24591)

## Paso 1 — Acceder al XR Blocks Gem
Duration: 0:05:00

El XR Blocks Gem es una versión de Gemini preconfigurada con instrucciones especializadas para generar código WebXR válido usando XR Blocks. Lo accedes directamente desde el navegador.

### Opción A — Acceso directo al Gem (recomendado)

Abre Chrome y ve a:

```
https://xrblocks.github.io/gem
```

Esta página explica cómo cargar el Gem en Gemini y tiene acceso directo.

### Opción B — Desde Gemini

1. Ve a [gemini.google.com](https://gemini.google.com)
2. En el panel izquierdo, busca **"Gems"** y haz clic
3. Busca **"XR Blocks"** en la galería de Gems
4. Selecciona el Gem y haz clic en **"Abrir Gem"**

### Activar Pro Mode

Dentro del Gem, antes de escribir tu primer prompt:

1. Busca el selector de modelo (generalmente en la esquina inferior del chat)
2. Cambia a **Gemini 1.5 Pro** o la versión Pro disponible
3. Pro Mode mejora significativamente la tasa de éxito en el primer intento

> **Nota:** Si tu cuenta no tiene acceso a modelos Pro, el Gem también funciona con Gemini Flash, pero puede requerir más iteraciones.

### Verificar que el Gem está activo

Envía este mensaje:

```
Hola, ¿estás configurado como experto en XR Blocks?
```

Si el Gem está activo, la respuesta mencionará XR Blocks, WebXR o Three.js.

## Paso 2 — Tu primera escena XR
Duration: 0:10:00

Ahora viene la parte central: describir lo que quieres ver.

### Elegir un tema

Escoge uno de estos tres puntos de partida — están diseñados para mostrar capacidades distintas de XR Blocks y tienen alta tasa de éxito en el primer intento:

**Opción 1 — Jardín procedural** (demuestra física y gestos):
```
Crea un jardín espacial donde puedo pinchar el suelo con la mano
para plantar flores que crecen hacia arriba con animación. Cada flor
debe tener un color aleatorio. El suelo debe ser una superficie plana
con textura de tierra.
```

**Opción 2 — Laboratorio de física** (demuestra colisiones y gravedad):
```
Crea un laboratorio de física con 10 esferas de distintos colores
y tamaños flotando en el aire. Cuando las toco con la mano deben
caer con gravedad realista y rebotar al chocar entre sí y contra
el suelo. El suelo debe ser semitransparente.
```

**Opción 3 — Sistema solar** (demuestra 3D y etiquetas):
```
Crea un sistema solar 3D a escala visual donde los planetas orbitan
el sol. Cuando apunto a un planeta con la mano aparece una etiqueta
flotante con su nombre y su distancia al sol en millones de kilómetros.
Los planetas deben tener colores representativos.
```

### Enviar el prompt

Copia el texto de tu opción elegida y envíalo al Gem. El modelo tardará entre 20 y 60 segundos en responder con el código completo.

### Previsualizar en el simulador

La respuesta incluirá un bloque de código HTML. Para previsualizarlo:

1. Copia todo el contenido entre `<!DOCTYPE html>` y `</html>`
2. Abre una pestaña nueva en Chrome y ve a:
   ```
   https://xrblocks.github.io/simulator
   ```
3. Pega el código en el panel del simulador
4. Haz clic en **"Run"**

El simulador muestra la escena desde el punto de vista de un usuario en XR. Puedes mover la cámara con el mouse y simular gestos básicos.

> **El simulador no cargó el código:** Haz clic dentro del panel de código primero, luego pega con Ctrl+V (Cmd+V en Mac).

## Paso 3 — Refinar con prompts
Duration: 0:10:00

La primera generación raramente es la versión final. La ventaja de este flujo es que iterar es tan fácil como escribir una oración más.

### Tipos de refinamiento

**Cambiar comportamiento visual:**
```
Las flores crecen demasiado rápido. Haz que la animación de crecimiento
sea 3 veces más lenta y que cada pétalo aparezca uno a uno.
```

**Agregar interacción:**
```
Agrega un modo de "borrar": si el usuario hace un gesto de palma abierta
sobre una flor, esta desaparece con una animación de partículas.
```

**Cambiar el ambiente:**
```
Cambia el fondo a un cielo nocturno con estrellas parpadeantes.
Agrega una luna llena que proyecte luz suave sobre el jardín.
```

**Agregar sonido:**
```
Cuando el usuario planta una flor, reproduce un sonido suave de
campana usando la API de Web Audio. El tono debe variar según
el color de la flor.
```

### Qué hacer si el código tiene errores

Si ves pantalla negra, un error en la consola, o la escena está vacía, copia el mensaje de error y regresa al Gem:

```
Al correr el código anterior, la consola de Chrome muestra este error:

[pega aquí el error exacto]

Corrige el código manteniendo todas las funcionalidades que ya teníamos.
```

El Gem recuerda la conversación anterior, así que no necesitas repetir la descripción completa.

### Hacer al menos 2 iteraciones

Antes de continuar, refina tu escena al menos dos veces. Cada iteración te enseña cómo el modelo interpreta tus instrucciones — eso es una habilidad que mejora con práctica.

> **Tip:** Cada vez que el Gem genere código nuevo, guarda el bloque HTML en un archivo de texto local. Así tienes versiones anteriores si quieres volver atrás.

## Paso 4 — Explorar el código generado
Duration: 0:05:00

Antes de publicar, vale la pena abrir el archivo y entender su estructura. No necesitas modificarlo — solo ver qué hay dentro te da contexto de lo que XR Blocks hace por ti.

### Abrir el HTML en un editor

Copia el código final del Gem y pégalo en el editor de texto de tu sistema:

- **macOS**: TextEdit (modo texto plano) o Visual Studio Code
- **Windows**: Bloc de notas o Visual Studio Code
- **Linux**: gedit, nano, o VS Code

Guárdalo como `index.html`.

### Qué buscar en el archivo

**Las importaciones de XR Blocks** — cerca del inicio:
```html
<script type="module">
  import { XRBlocks, User, World, Physics } from 'https://xrblocks.github.io/...';
```
Esto carga XR Blocks desde su CDN. Tu archivo no necesita nada más instalado.

**La configuración de la escena:**
```javascript
const scene = new XRBlocks.Scene({
  physics: true,
  handTracking: true,
  environment: 'day'
});
```
Física, seguimiento de manos, ambiente — lo que antes tomaba días de integración.

**Los handlers de gestos:**
```javascript
user.onPinch((hand, position) => {
  // esto es lo que pasa cuando el usuario pincha
});
```
Eventos semánticos de alto nivel, no matrices de transformación manuales.

> **Conclusión clave:** El output es HTML + JS puro. No hay backend, no hay WebSocket, no hay build step. El mismo archivo que ves en el simulador es el que va a GitHub Pages.

## Paso 5 — Publicar en GitHub Pages
Duration: 0:10:00

Tu experiencia ahora es un archivo HTML. Vas a publicarla en una URL pública con GitHub Pages — todo desde el navegador, sin git ni terminal.

### Crear el repositorio

1. Ve a [github.com/new](https://github.com/new)
2. **Repository name:** `mi-experiencia-xr` (sin espacios)
3. **Visibility:** Public
4. **No** marques ninguna casilla de inicialización
5. Haz clic en **Create repository**

### Subir el archivo HTML

En la página de tu nuevo repositorio vacío verás el mensaje *"uploading an existing file"*:

1. Haz clic en **"uploading an existing file"**
2. Arrastra tu `index.html` al área de carga
3. En **"Commit changes"**, escribe algo como `feat: add XR experience`
4. Haz clic en **"Commit changes"**

### Habilitar GitHub Pages

1. Ve a la pestaña **Settings** de tu repositorio
2. En el menú izquierdo, haz clic en **Pages**
3. En **"Build and deployment"** → Source: selecciona **"Deploy from a branch"**
4. Branch: **main**, carpeta: **/ (root)**
5. Haz clic en **Save**

### Obtener tu URL

Espera 1-2 minutos y recarga la página de Settings → Pages. Aparecerá un recuadro verde:

```
Your site is live at https://TU_USUARIO.github.io/mi-experiencia-xr/
```

Abre esa URL en Chrome. Tu experiencia XR está corriendo directamente desde el navegador.

### Verificar que funciona

- ✅ La URL carga sin error 404
- ✅ La escena 3D aparece al abrir la página
- ✅ Puedes interactuar desde el navegador de escritorio

> **¿Ves "404 - File not found"?** Espera 2 minutos más — GitHub Pages tarda un poco en activarse la primera vez. Si persiste, verifica que el archivo se llama exactamente `index.html` (minúsculas, sin espacios).

## Paso 6 — Probar en más dispositivos
Duration: 0:05:00

Tu experiencia es una URL pública. La misma URL funciona en distintos contextos sin ningún cambio en el código — eso es el poder de WebXR.

### En Chrome de escritorio

Lo que ya tienes: la escena corre con el simulador de XR Blocks, que permite mover la cámara con el mouse y simular gestos básicos.

### En Android con ARCore

Abre la URL en Chrome para Android en un teléfono compatible con ARCore. Si tu teléfono soporta ARCore, verás la opción de activar modo AR — los objetos aparecen sobre el mundo real captado por la cámara.

### En Meta Quest 3

Abre el **Meta Quest Browser** en el headset y navega a tu URL. El Quest 3 tiene soporte completo de WebXR incluyendo hand tracking, passthrough AR a color, plane detection, y Depth API. Tu experiencia carga directamente — sin instalar nada, sin pasar por la Horizon Store.

> **Quest 3 vs Android XR:** La escena 3D, física, hand tracking y passthrough funcionan igual de bien en Quest 3. Lo que no estará disponible es el raw camera access (API de visión por computadora del hardware Galaxy XR), pero XR Blocks degrada graciosamente — la experiencia visual es equivalente.

> **Tip para practicar sin el headset:** Instala la extensión [Immersive Web Emulator](https://chromewebstore.google.com/detail/immersive-web-emulator/cgffilbpcibhmcfbgggfhfolhkfbhmik) de Meta en Chrome. Simula el Quest directamente en el navegador de escritorio, ideal para probar antes de ponerte el headset.

### En Samsung Galaxy XR

Si tienes acceso a un headset con Android XR: abre Chrome, navega a la URL. La experiencia detecta automáticamente el entorno XR y activa hand tracking, depth sensing y audio espacial. La misma URL, sin modificaciones.

### Compartir con alguien

Comparte tu URL directamente. La otra persona solo necesita Chrome — sin apps, sin cuentas, sin headset requerido. En escritorio ven el simulador; en headset compatible, la experiencia completa.

## ¡Felicitaciones!
Duration: 0:01:00

Creaste y publicaste tu primera experiencia XR usando solo lenguaje natural.

Hiciste algo que hasta hace poco requería semanas de aprendizaje: una aplicación espacial interactiva, con física, gestos de mano, accesible desde cualquier dispositivo con Chrome.

### Lo que construiste

- Una escena XR interactiva generada con prompts
- Iteraciones de refinamiento usando lenguaje natural
- Una URL pública compatible con desktop, Android, Meta Quest, y Android XR

### Recursos para seguir

- **XR Blocks en GitHub:** [github.com/google/xrblocks](https://github.com/google/xrblocks)
- **Documentación y demos:** [xrblocks.github.io](https://xrblocks.github.io)
- **Android XR para developers:** [developer.android.com/xr](https://developer.android.com/xr)
- **Paper técnico original:** [arxiv.org/abs/2603.24591](https://arxiv.org/abs/2603.24591)
- **Blog Google Research:** [research.google/blog/vibe-coding-xr-accelerating-ai-xr-prototyping-with-xr-blocks-and-gemini](https://research.google/blog/vibe-coding-xr-accelerating-ai-xr-prototyping-with-xr-blocks-and-gemini/)

## Challenges opcionales
Duration: 0:00:00

### Challenge 1 — Experiencia educativa

Crea una simulación de un concepto científico o matemático:

```
Crea una simulación interactiva del modelo atómico de Bohr.
El usuario puede tocar los electrones con la mano para moverlos
a diferentes órbitas. Cuando un electrón sube de órbita, emite
un fotón visible como una esfera de luz que viaja hacia afuera.
```

```
Crea una visualización 3D de una función matemática f(x,y) = sin(x) * cos(y).
La superficie debe cambiar en tiempo real cuando el usuario mueve
un slider flotante que controla la amplitud. Colorea la superficie
según su altura usando un gradiente de azul a rojo.
```

### Challenge 2 — Mini-juego

```
Crea un juego de XR donde esferas de colores caen desde arriba
y el usuario debe atraparlas con las manos antes de que toquen el suelo.
Cada esfera atrapada suma un punto, cada esfera que toca el suelo resta uno.
El juego dura 60 segundos y muestra el puntaje final con una animación
de partículas de celebración.
```

### Challenge 3 — Múltiples escenas conectadas

```
Quiero una experiencia XR con dos "salas" conectadas por un portal.
La primera sala tiene el jardín que ya construimos.
La segunda sala es una galería de arte minimalista con tres cuadros
flotantes y iluminación dramática. Cuando el usuario toca el portal
en cualquiera de las dos salas, viaja a la otra con una animación
de transición.
```

### Challenge 4 — Prompt engineering avanzado

Toma cualquier experiencia anterior y reescribe su prompt desde cero con esta estructura más precisa:

```
Contexto: [tipo de experiencia y para quién es]
Espacio: [descripción del entorno — colores, iluminación, ambiente]
Objetos: [lista de elementos con sus propiedades visuales y físicas]
Interacciones: [qué pasa exactamente cuando el usuario hace X]
Audio: [sonidos o música, si aplica]
Restricciones: [sin backend, todo client-side]
```

Compara el resultado con tu primer prompt y observa la diferencia en precisión y calidad del código generado.
