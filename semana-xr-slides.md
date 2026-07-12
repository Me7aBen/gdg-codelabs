# Creación de Universos Virtuales: Desarrollo con Unity
# Sesión XR — Script de Slides
# 12 Jul · 2026 · Tecsup Arequipa
# Módulo Especial → XR & Spatial Computing

---

## SESIÓN XR

---

### S-XR-01 — [OVERVIEW-SEMANA]
**Título:** ¿Qué veremos hoy?
**Sesión XR · 12 Jul · 6:50 PM – 10:10 PM**

**Bloque 1 — Teoría (90 min):**
- El espectro XR: AR, MR, VR — qué es cada cosa y en qué se usan
- Los dispositivos que tenemos en el salón y qué puede hacer cada uno
- Cómo Unity organiza su arquitectura XR
- AR Foundation, XR Interaction Toolkit y OpenXR explicados desde cero
- Meta XR SDK y Android XR: cuándo usar cada opción
- ARKit vs ARCore: capacidades únicas por plataforma

**Bloque 2 — Taller práctico (120 min):**
- Track A — 8 Meta Quest 3: XR Interaction Toolkit + OpenXR
- Track B — 5 móviles/tablets: AR Foundation con detección de planos
- Track C — 1 Samsung Galaxy XR: Android XR + OpenXR

---

### S-XR-02 — [PORTADA-SESIÓN]
**Sesión:** XR · Especial
**Título:** Hoy salimos del editor
**Fecha:** 12 Jul · 6:50 PM – 10:10 PM

---

### S-XR-03 — [OBJETIVOS]
**Título:** Al terminar esta sesión vas a poder…

- Explicar la diferencia entre AR, MR, VR y XR con ejemplos concretos
- Reconocer qué capa del stack XR de Unity resuelve cada problema
- Describir para qué sirve AR Foundation y por qué existe
- Distinguir cuándo conviene usar OpenXR versus un SDK nativo como Meta XR
- Ejecutar una escena XR básica en uno de los dispositivos del salón

---

### S-XR-04 — [POR-QUÉ]
**Título:** ¿Por qué XR? Unity ya no es solo un game engine

```
Cuando Unity salió en 2005, era una herramienta para hacer videojuegos.

En 2026, el 40% de los proyectos activos en Unity
no son videojuegos: son simuladores industriales,
entrenamiento médico, arquitectura, retail, educación.

La razón: Unity ya resolvió los problemas difíciles del espacio 3D.
  → Renderizado en tiempo real
  → Simulación de física
  → Input de hardware de todo tipo
  → Optimización para hardware limitado

XR es la extensión natural de eso:
  en lugar de renderizar en una pantalla plana,
  renderizas en el espacio alrededor del usuario.

Lo que aprendiste en este curso — Transform, Rigidbody, GameObjects,
Componentes, OOP, prefabs — funciona igual en XR.
Solo cambia de dónde mira la cámara y cómo el usuario interactúa.
```

---

### S-XR-05 — [CONCEPTO]
**Título:** El espectro XR — una línea, no una lista

```
XR (Extended Reality) es el término paraguas.
Bajo ese nombre viven cuatro conceptos relacionados:

                    ← más mundo real    más virtual →
┌──────────┬────────────┬──────────────┬──────────────┐
│ Pantalla │     AR     │      MR      │      VR      │
│  plana   │  Aumentada │    Mixta     │   Virtual    │
└──────────┴────────────┴──────────────┴──────────────┘

AR — Augmented Reality:
  El mundo real sigue siendo el fondo.
  Se añaden capas digitales encima, pero no interactúan con él.
  Ejemplo: filtros de Instagram, Google Maps con flechas en la calle,
           Pokemon GO, Measure de Apple.

MR — Mixed Reality:
  Los objetos digitales conocen el mundo físico y se mezclan con él.
  Una mesa virtual puede "ocultarse" detrás de una mesa real.
  Ejemplo: Microsoft HoloLens, Apple Vision Pro, Samsung Galaxy XR,
           aplicaciones médicas donde el modelo 3D se superpone al paciente.

VR — Virtual Reality:
  Reemplaza completamente la visión. El mundo real desaparece.
  El usuario está en un entorno 100% digital.
  Ejemplo: Meta Quest 3 en modo VR, PlayStation VR2, simuladores de vuelo.

XR — Extended Reality:
  El término que los engloba a todos.
  Una sola aplicación puede moverse entre AR, MR y VR
  dependiendo del dispositivo o del contexto.
  Unity, AR Foundation y OpenXR usan XR como término técnico.
```

---

### S-XR-06 — [TABLA]
**Título:** Los dispositivos de hoy — qué puede hacer cada uno

| Dispositivo | Cantidad | Tipo XR | SDK principal | Capacidades especiales |
|---|---|---|---|---|
| Meta Quest 3 | 8 | VR / MR | OpenXR · Meta XR SDK | Passthrough a color, hand tracking 90Hz, depth sensing, mixed reality |
| Samsung Galaxy XR | 1 | VR / MR | Android XR · OpenXR | Android nativo en headset, Gemini integrado, hand + eye tracking |
| Samsung tablet | 2 | AR | AR Foundation · ARCore | Detección de planos, image tracking, point cloud |
| iPad Pro | 1 | AR | AR Foundation · ARKit | LiDAR Scanner, face mesh preciso, oclusión de personas |
| iPhone 16 Pro Max | 2 | AR | AR Foundation · ARKit | LiDAR Scanner, face ID mesh, Apple Neural Engine |

**Total: 14 dispositivos · 3 plataformas nativas · 1 framework unificado: AR Foundation + OpenXR**

---

### S-XR-07 — [MENTAL-MODEL]
**Título:** La arquitectura XR de Unity — cómo se conectan las piezas

```
Tu código C# de siempre
         ↓
┌────────────────────────────────────────────────┐
│  AR Foundation / XR Interaction Toolkit        │
│  (APIs de Unity — lo que usas en tus scripts) │
└────────────────────────────────────────────────┘
         ↓
┌────────────────────────────────────────────────┐
│  XR Plugin Management                          │
│  (elige qué backend activar según el build)   │
└────────────────────────────────────────────────┘
         ↓
┌──────────────┬──────────────┬──────────────────┐
│   OpenXR     │    ARCore    │     ARKit         │
│   (estándar) │  (Android)   │  (Apple)          │
│              │              │                   │
│  → Quest 3   │  → Tablets   │  → iPad Pro       │
│  → Galaxy XR │    Samsung   │  → iPhones        │
└──────────────┴──────────────┴──────────────────┘
         ↓
         Hardware (sensores, cámaras, displays)

Subsistemas XR (lo que maneja Unity internamente):
  → Session: inicia y mantiene la sesión XR
  → Tracking: dónde está el dispositivo en el espacio
  → Rendering: cómo dibuja los dos "ojos" o la cámara AR
  → Input: manos, controladores, botones
  → Planes: detecta superficies horizontales y verticales
```

---

### S-XR-08 — [CONCEPTO]
**Título:** AR Foundation — el traductor universal

```
¿Qué es?
  AR Foundation es una capa de abstracción de Unity.
  No hace AR por sí sola — le habla a ARCore (Android)
  o ARKit (Apple) y traduce sus respuestas a un lenguaje común.

Analogía:
  AR Foundation es como un intérprete en una reunión bilingüe.
  Tú hablas con el intérprete en un idioma.
  El intérprete le habla a ARCore o ARKit en el suyo.
  No tienes que aprender dos idiomas — solo uno.

Sin AR Foundation, el mismo código de detección de planos
que escribes para Android no funcionaría en iOS y viceversa.
Con AR Foundation, escribes el código UNA vez y funciona en ambos.

¿Qué puede hacer AR Foundation?
  → Plane detection: detectar pisos, paredes, mesas
  → Image tracking: reconocer una imagen y anclar objetos sobre ella
  → Face tracking: detectar la cara y 52 puntos de expresión
  → Point clouds: nube de puntos del entorno para entender el espacio
  → Depth: mapa de profundidad del entorno (requiere hardware compatible)
  → Anchors: "clavar" un objeto virtual en el espacio para que no se mueva
  → Meshing: reconstruir una malla 3D del entorno real (LiDAR)
  → Body tracking: detectar la postura completa del cuerpo

Los componentes clave en la escena:
  → ARSession: maneja el ciclo de vida de la sesión AR
  → ARSessionOrigin / XROrigin: el "centro del mundo" AR
  → ARCamera: la cámara que mezcla real y virtual
  → ARPlaneManager: detecta y gestiona los planos
  → ARAnchorManager: gestiona los anclajes en el espacio
```

---

### S-XR-09 — [CÓDIGO]
**Título:** AR Foundation — detectar planos y colocar objetos

```csharp
using UnityEngine;
using UnityEngine.XR.ARFoundation;
using UnityEngine.XR.ARSubsystems;

// Este componente escucha cuando AR Foundation detecta planos nuevos
// y coloca un prefab en el centro de cada uno
public class ColocadorEnPlano : MonoBehaviour
{
    // El objeto que vamos a colocar sobre el plano detectado
    [SerializeField] private GameObject prefabAColocar;

    // ARRaycastManager: lanza rayos desde la pantalla al mundo real
    private ARRaycastManager raycastManager;

    // Lista donde AR Foundation deposita los resultados del raycast
    private List<ARRaycastHit> hits = new List<ARRaycastHit>();

    void Awake()
    {
        // Buscar el ARRaycastManager que viene con XROrigin
        raycastManager = GetComponent<ARRaycastManager>();
    }

    void Update()
    {
        // Solo procesar si el usuario toca la pantalla con un dedo
        if (Input.touchCount == 0) return;

        Touch toque = Input.GetTouch(0);

        // Solo al levantar el dedo (evita colocar múltiples objetos)
        if (toque.phase != TouchPhase.Began) return;

        // Lanzar un rayo desde la posición del toque hacia el mundo real
        // TrackableType.PlaneWithinPolygon: solo golpear planos detectados
        if (raycastManager.Raycast(toque.position, hits, TrackableType.PlaneWithinPolygon))
        {
            // El primer hit es el más cercano a la cámara
            Pose posicionEnPlano = hits[0].pose;

            // Instanciar el prefab en la posición exacta del plano
            Instantiate(prefabAColocar, posicionEnPlano.position, posicionEnPlano.rotation);
        }
    }
}
```

**Error común:** Olvidar agregar ARRaycastManager al XROrigin — el Raycast siempre devuelve false sin él.

---

### S-XR-10 — [CONCEPTO]
**Título:** XR Interaction Toolkit (XRIT) — la capa de interacción

```
¿Qué es?
  XR Interaction Toolkit es el sistema de interacción oficial de Unity para XR.
  Maneja: cómo el usuario agarra objetos, apunta a cosas, se mueve por el espacio,
  interactúa con UI y dispara eventos cuando algo pasa.

Sin XRIT tendrías que:
  → Leer la posición de los controladores a mano
  → Calcular si el controlador "toca" un objeto
  → Implementar el grab, el snap, el hover
  → Conectar todo con el sistema de UI de Unity

Con XRIT:
  → Agregas un componente XR Grab Interactable a un objeto → ya se puede agarrar
  → Agregas un componente XR Ray Interactor al controlador → ya apunta
  → La UI funciona con los mismos botones de Canvas que ya sabes usar

Los componentes clave:
  → XROrigin: el origen del mundo XR — la posición real del usuario en la escena
  → XR Controller (Left / Right): lee el input del controlador o la mano
  → XR Ray Interactor: el "láser" que sale del controlador para apuntar
  → XR Direct Interactor: interacción por contacto físico (para objetos cercanos)
  → XR Grab Interactable: cualquier objeto que se pueda agarrar
  → XR Simple Interactable: objetos que reaccionan al hover o al select sin agarrarse

Locomotion (cómo el usuario se mueve en el mundo virtual):
  → Teleportation: el usuario apunta a un punto y aparece allí
  → Continuous Move: moverse con el stick analógico como en un videojuego
  → Turn: girar en pasos discretos (Snap Turn) o suave (Continuous Turn)
  → Snap Turn evita el mareo que produce la rotación continua

La diferencia con Input System:
  Input System lee botones y ejes.
  XRIT convierte esas señales en interacciones de alto nivel:
  no "se presionó el trigger" sino "el usuario agarró el cubo rojo".
```

---

### S-XR-11 — [CÓDIGO]
**Título:** XRIT — hacer un objeto agarrable en 3 pasos

```csharp
// Paso 1: En el Inspector, agrega al objeto estos componentes:
//   → XR Grab Interactable  (Component → XR → XR Grab Interactable)
//   → Rigidbody             (Component → Physics → Rigidbody)
//   → Collider              (el que ya tiene, o Box Collider nuevo)
// Eso es suficiente para que el objeto se pueda agarrar y tirar.

// Paso 2: Si quieres reaccionar cuando lo agarran, usa los eventos del XRIT:
using UnityEngine;
using UnityEngine.XR.Interaction.Toolkit;

public class ObjetoInteractivo : MonoBehaviour
{
    // XRGrabInteractable expone eventos que Unity llama automáticamente
    private XRGrabInteractable grabInteractable;

    void Awake()
    {
        grabInteractable = GetComponent<XRGrabInteractable>();

        // Suscribirse al evento "cuando alguien lo agarra"
        grabInteractable.selectEntered.AddListener(AlAgarrar);

        // Suscribirse al evento "cuando lo sueltan"
        grabInteractable.selectExited.AddListener(AlSoltar);
    }

    // SelectEnterEventArgs trae información sobre quién agarró el objeto
    private void AlAgarrar(SelectEnterEventArgs args)
    {
        // Cambiar el material al agarrarlo — feedback visual al usuario
        GetComponent<Renderer>().material.color = Color.yellow;
        Debug.Log("Objeto agarrado por: " + args.interactorObject.transform.name);
    }

    private void AlSoltar(SelectExitEventArgs args)
    {
        // Restaurar el color al soltarlo
        GetComponent<Renderer>().material.color = Color.white;
    }
}

// Paso 3: El XROrigin ya tiene XRController con XRRayInteractor configurado.
// Si instalaste los Starter Assets del package, ya viene todo preconfigurado.
```

---

### S-XR-12 — [CONCEPTO]
**Título:** OpenXR — el estándar abierto que une todo

```
¿Qué es OpenXR?
  OpenXR es un estándar abierto desarrollado por Khronos Group
  (la misma organización detrás de OpenGL y Vulkan).
  Su objetivo: que el mismo código XR funcione en cualquier headset
  sin que el desarrollador tenga que reescribirlo para cada fabricante.

Antes de OpenXR (el problema):
  Meta tenía su SDK → solo para Quest
  Valve tenía SteamVR SDK → solo para PC VR
  Microsoft tenía Windows Mixed Reality SDK → solo para HoloLens
  Si querías publicar en los tres, escribías el mismo juego tres veces.

Con OpenXR:
  Escribes el código una vez usando la API estándar.
  El driver de OpenXR de cada fabricante (Meta, Valve, Microsoft, etc.)
  traduce esas llamadas al hardware específico.
  Unity soporta OpenXR desde 2021 — es el backend recomendado hoy.

En Unity, OpenXR se activa en:
  Project Settings → XR Plug-in Management → OpenXR

Feature Groups: extensiones que activan capacidades específicas del hardware.
  → Meta Quest Feature Group: hand tracking, passthrough, performance layers
  → Android XR Feature Group: para Samsung Galaxy XR
  → EyeGaze Interaction: seguimiento ocular cuando el hardware lo soporta
  → Hand Interaction Profile: mapeo estándar para las manos

Por qué importa para nosotros:
  El mismo proyecto de Unity puede generar un build para Quest 3
  y otro para Samsung Galaxy XR con solo cambiar el Feature Group activo.
  La lógica del juego no cambia.
```

---

### S-XR-13 — [COMPARACIÓN]
**Título:** Meta XR SDK vs OpenXR — cuándo usar cada uno

| | Meta XR SDK | OpenXR (con Meta Feature Group) |
|---|---|---|
| **Qué es** | SDK propietario de Meta para Quest | Estándar abierto implementado en Unity via plugin |
| **Acceso a hardware** | Todas las features de Quest, incluyendo las más nuevas | Las features estabilizadas y ratificadas por Khronos |
| **Compatibilidad** | Solo dispositivos Meta (Quest 2, 3, Pro) | Quest + cualquier headset OpenXR compatible |
| **Features exclusivas** | Passthrough API avanzada, Scene Understanding, Shared Spatial Anchors | Mano estándar, ray interactor, UI básica |
| **Tiempo de adopción de features nuevas** | Inmediato (Meta lanza y el SDK lo incluye) | Meses a años hasta que se estandariza |
| **Recomendado para** | App exclusiva de Quest con máximo acceso al hardware | Proyectos multi-plataforma o cuando OpenXR es suficiente |
| **Complejidad de setup** | Mayor (Meta SDK tiene muchas dependencias) | Menor (Unity lo maneja con el plugin manager) |

**Para el taller de hoy:** usamos OpenXR con Meta Feature Group.
Es suficiente para hand tracking y la experiencia básica, y el setup es más directo.

---

### S-XR-14 — [COMPARACIÓN]
**Título:** ARKit vs ARCore — lo que cada plataforma puede hacer

| Capacidad | ARCore (Android) | ARKit (Apple/iOS) |
|---|---|---|
| Detección de planos horizontales | ✅ | ✅ |
| Detección de planos verticales | ✅ | ✅ |
| Image tracking | ✅ | ✅ |
| Face tracking (frontal) | ✅ (32 puntos) | ✅ (52 puntos de expresión, Face ID mesh) |
| Depth / profundidad | ✅ Algunos dispositivos | ✅ LiDAR Scanner (iPhone 12 Pro+, todos los iPad Pro) |
| Meshing del entorno (malla 3D) | ❌ Limitado | ✅ LiDAR — malla en tiempo real del cuarto |
| Oclusión de personas | ✅ | ✅ ARKit People Occlusion |
| Oclusión de objetos | ❌ | ✅ Con LiDAR |
| Geospatial (ubicación real) | ✅ ARCore Geospatial API | ✅ ARKit Location Anchors |
| Body tracking | ✅ | ✅ |
| Object detection | ✅ | ✅ ARKit Object Scanning |

**En nuestro salón:**
- iPad Pro → LiDAR activo → meshing del entorno disponible
- iPhones 16 Pro Max → LiDAR activo → oclusión de objetos disponible
- Samsung tablets → ARCore estándar → planos, image tracking, face tracking

AR Foundation expone todo esto con la misma API. El comportamiento
exacto depende del hardware del dispositivo que corre la app.

---

### S-XR-15 — [CONCEPTO]
**Título:** XROrigin — el centro del mundo XR

```
Cuando abres una escena XR, lo primero que necesitas es un XROrigin.

¿Qué es XROrigin?
  Es el GameObject que representa la posición del usuario en la escena.
  En VR: es donde está parado el usuario físicamente.
  En AR: es el punto desde donde AR Foundation proyecta el mundo real.

XROrigin tiene hijos obligatorios:
  → Camera Offset: ajusta la altura de la cámara respecto al suelo real
  → Main Camera (con ARCamera o XR Camera): lo que el usuario ve
  → (opcional) LeftHandController, RightHandController para controladores

Por qué importa entenderlo:
  Todo lo que está "en el mundo" se posiciona relativo al XROrigin.
  Si mueves el XROrigin, mueves al usuario en el mundo virtual.
  Esto es la base de la locomoción en VR.

Diferencia con la cámara de siempre:
  En un juego normal: mover la cámara = mover el punto de vista.
  En XR: el tracking del headset mueve la cámara automáticamente.
  No mueves la cámara — el usuario mueve su cabeza y Unity la sigue.
  Para mover al usuario en el mundo, mueves el XROrigin, no la cámara.

En AR Foundation:
  XROrigin además gestiona cómo se mapea el espacio físico al virtual.
  Los planos detectados, los anchors y los raycast hits
  todos usan el sistema de coordenadas del XROrigin.
```

---

### S-XR-16 — [DEMO]
**Texto:** Demo del instructor
**Subtítulo:** AR Foundation en iPhone 16 Pro Max — detección de planos y colocación de objetos · 5 minutos

---

### S-XR-17 — [DEMO]
**Texto:** Demo del instructor
**Subtítulo:** Quest 3 con XRIT — agarrar y tirar objetos con hand tracking · 5 minutos

---

### S-XR-18 — [CONCEPTO]
**Título:** Los 3 tracks del taller — quién va a dónde

```
TRACK A — Meta Quest 3 (8 dispositivos, máximo 8 estudiantes)
  SDK: OpenXR + Meta Feature Group + XR Interaction Toolkit
  Objetivo: una escena de VR/MR donde el usuario puede agarrar
            y tirar objetos usando las manos (hand tracking)
  Punto de partida: XR Interaction Toolkit Starter Assets

TRACK B — Phones y tablets Android + Apple (5 dispositivos)
  Dispositivos: 2 Samsung tablets · 1 iPad Pro · 2 iPhone 16 Pro Max
  SDK: AR Foundation + ARCore/ARKit según el dispositivo
  Objetivo: una escena AR donde se detecta un plano y el usuario
            puede colocar objetos en él tocando la pantalla
  Punto de partida: AR Foundation Samples oficiales del package

TRACK C — Samsung Galaxy XR (1 dispositivo)
  SDK: Android XR + OpenXR + XR Interaction Toolkit
  Objetivo: explorar la plataforma y ejecutar la demo oficial
            del Jetpack XR SDK con interaction básica
  Punto de partida: Android XR Hello World sample de Unity

Asignación:
  → El instructor asigna los grupos al inicio del taller
  → Los que van al Track A priorizan students sin experiencia en XR
  → Si un dispositivo falla, el estudiante se suma al track más cercano
```

---

### S-XR-19 — [ACTIVIDAD]
**Título:** Mapa del taller — 120 minutos, 3 tracks en paralelo

```
TIEMPO       TODOS LOS TRACKS
──────────────────────────────────────────────────────
0:00 – 0:10  Setup: instalar packages, verificar build target
             (instructor pasa por los 3 grupos)

0:10 – 0:20  Escena base: crear XROrigin / ARSession / XROrigin AR
             siguiendo la guía del track

0:20 – 0:50  Implementar la mecánica principal:
             A: configurar hand tracking + XRGrabInteractable
             B: ARPlaneManager + ARRaycastManager + colocar objeto
             C: ejecutar sample + explorar componentes

0:50 – 1:10  Agregar una mecánica extra:
             A: teleportation o UI con Canvas en espacio
             B: image tracking o feedback visual al colocar
             C: interacción básica o múltiples paneles

1:10 – 1:40  Tiempo libre: experimentar, ayudarse entre pares
             El instructor resuelve los errores más comunes

1:40 – 2:00  Demo entre grupos:
             Cada track muestra a los demás qué construyó
             → 3-4 minutos por track

Regla de oro del taller:
  Si llevas más de 10 minutos bloqueado → pide ayuda.
  En XR los errores de setup pueden bloquear todo lo demás.
  No es rendirse — es usar el tiempo bien.
```

---

### S-XR-20 — [CONCEPTO]
**Título:** Setup — qué packages instalar por track

```
TODOS LOS TRACKS — instalar primero:
  Window → Package Manager → Unity Registry
  → XR Plugin Management (si no está ya)

─────────────────────────────────────────────

TRACK A — Meta Quest 3:
  En Package Manager:
    → XR Interaction Toolkit (incluye Starter Assets)
    → OpenXR Plugin

  En Project Settings → XR Plug-in Management → Android:
    → Activar: OpenXR ✅
    → Feature Groups: Meta Quest Feature Set ✅
      (activa: Hand Tracking, Render Mode Occlusion, etc.)

  En Project Settings → XR Plug-in Management → OpenXR → Interaction Profiles:
    → Agregar: Meta Quest Touch Pro Controller Profile
    → Agregar: OpenXR Hand Interaction Profile (para manos sin controlador)

─────────────────────────────────────────────

TRACK B — Phones y tablets:
  En Package Manager:
    → AR Foundation
    → ARCore XR Plugin (Android) o ARKit XR Plugin (iOS/iPadOS)
    → XR Plugin Management (se instala automáticamente)

  Build Target:
    → Android: File → Build Settings → Android → Switch Platform
    → iOS: File → Build Settings → iOS → Switch Platform

─────────────────────────────────────────────

TRACK C — Samsung Galaxy XR:
  En Package Manager:
    → XR Interaction Toolkit
    → OpenXR Plugin

  En Project Settings → XR Plug-in Management → Android:
    → Activar: OpenXR ✅
    → Feature Groups: Android XR Feature Set ✅

  Build Target: Android (igual que Track B)
```

---

### S-XR-21 — [ACTIVIDAD]
**Título:** Track A — Quest 3 · Escena base paso a paso

```
1. Crear una escena nueva vacía (File → New Scene → Basic URP si estás en URP)

2. Eliminar la Main Camera por defecto
   (XROrigin trae la suya propia — tener dos cámaras activas rompe el rendering)

3. Agregar XROrigin desde el menú:
   GameObject → XR → XR Origin (VR)
   → Esto crea: XROrigin → Camera Offset → Main Camera + Controllers

4. Agregar el XR Interaction Manager:
   GameObject → XR → Interaction Manager
   (gestiona todos los interactors e interactables de la escena)

5. Agregar 3-4 cubos en la escena con estos componentes cada uno:
   → Rigidbody (Use Gravity: ✅, Is Kinematic: ❌)
   → Box Collider (ajustar al tamaño del cubo)
   → XR Grab Interactable (Component → XR → XR Grab Interactable)
   → Un material de color distinto para diferenciarlos

6. Agregar un plano como "suelo":
   GameObject → 3D Object → Plane
   Escalar a 5x1x5 o más grande
   Agregar Rigidbody con Is Kinematic: ✅ (no se mueve)

7. Build → Run en el Quest 3:
   File → Build Settings → Build And Run
   Nombre del APK: XRTaller.apk

Objetivo mínimo: agarrar un cubo con la mano y tirarlo.
Si llegan a esto, el track está completo.
```

---

### S-XR-22 — [ACTIVIDAD]
**Título:** Track B — AR Foundation · Escena base paso a paso

```
1. Crear una escena nueva vacía

2. Eliminar la Main Camera por defecto

3. Agregar la sesión AR:
   GameObject → XR → AR Session
   (gestiona el ciclo de vida de la sesión con ARCore/ARKit)

4. Agregar el origen AR:
   GameObject → XR → XR Origin (Mobile AR)
   → Esto crea: XROrigin → Camera Offset → Main Camera (con ARCamera)

5. Seleccionar el XROrigin y agregar en el Inspector:
   → AR Plane Manager (detecta planos del entorno)
   → AR Raycast Manager (lanza rayos hacia el mundo real)

6. Crear un prefab para colocar en el plano:
   Un cubo escalado a (0.1, 0.1, 0.1) con un material de color
   Guardar como Prefab en la carpeta Prefabs

7. Crear un GameObject vacío "ColocadorAR" con el script:
   (usar el código de S-XR-09 de estas slides)
   Arrastrar el prefab al campo "Prefab A Colocar" en el Inspector

8. En Project Settings → Player (por plataforma):
   Android: minimum API level 24, Graphics: Vulkan o GLES3
   iOS: agregar en Info.plist "Privacy - Camera Usage Description"

9. Build en el dispositivo correspondiente y probar:
   → Apuntar la cámara a una mesa o el piso
   → Esperar a que aparezca la malla de plano detectado
   → Tocar la pantalla para colocar el cubo

Objetivo mínimo: tocar la pantalla → aparece un objeto sobre el plano real.
```

---

### S-XR-23 — [ACTIVIDAD]
**Título:** Track C — Samsung Galaxy XR · Exploración y sample

```
1. Configurar el build target:
   File → Build Settings → Android → Switch Platform

2. Instalar los packages en Package Manager:
   → OpenXR Plugin
   → XR Interaction Toolkit

3. Activar Android XR en Project Settings:
   Project Settings → XR Plug-in Management → Android → OpenXR ✅
   Feature Groups → Android XR Feature Set ✅

4. Abrir el sample oficial de Unity para Android XR:
   En Package Manager → XR Interaction Toolkit → Samples → Import
   → "Starter Assets" → Import
   → Explorar la escena de demo incluida

5. Examinar la jerarquía de la escena importada:
   → ¿Dónde está el XROrigin? ¿Qué hijos tiene?
   → ¿Qué componente gestiona el hand tracking?
   → ¿Cómo están configurados los interactables de la demo?

6. Intentar modificar un aspecto:
   → Cambiar el color de uno de los objetos interactivos
   → Agregar un objeto nuevo con XRGrabInteractable

7. Build en el Samsung Galaxy XR y probar la interacción básica.

Objetivo mínimo: ejecutar el sample oficial y poder agarrar un objeto
con el hand tracking en el dispositivo.
```

---

### S-XR-24 — [CONCEPTO]
**Título:** Errores comunes en XR — los más frecuentes en el primer setup

```
ERROR: La cámara no sigue al headset / la escena aparece estática
  Causa: Hay una Main Camera extra (la que Unity crea por defecto)
         que está compitiendo con la del XROrigin.
  Solución: Eliminar la cámara por defecto — dejar solo la del XROrigin.

ERROR: XR Grab Interactable no agarra el objeto
  Causa: No hay XR Interaction Manager en la escena.
  Solución: GameObject → XR → Interaction Manager
  O causa alternativa: el objeto no tiene Collider activo.

ERROR: AR Foundation no detecta planos (la pantalla solo muestra la cámara)
  Causa 1: ARCore/ARKit no está instalado — solo AR Foundation.
  Solución: instalar el plugin de la plataforma correspondiente.
  Causa 2: La iluminación es muy baja o la superficie no tiene textura.
  Solución: apuntar a una superficie con patrón visual (mesa con textura, alfombra).
  Causa 3: El AR Plane Manager no está configurado con el Detection Mode correcto.
  Solución: Inspector → AR Plane Manager → Detection Mode → Everything.

ERROR: Build falla con "OpenXR not initialized"
  Causa: XR Plugin Management no tiene el backend activo para esa plataforma.
  Solución: Project Settings → XR Plug-in Management → Android (o iOS)
            → Activar el plugin correspondiente.

ERROR: La app se instala en el Quest pero abre como app 2D, no como VR
  Causa: El Manifest de Android no tiene los permisos de XR.
  Solución: En XR Plugin Management → Android → OpenXR, activar
            "Force Remove Internet Permission" = false
            Y verificar que "XR Manifest Requirements" tenga las entradas VR.

ERROR: ARRaycast no detecta nada al tocar la pantalla
  Causa: Falta el componente ARRaycastManager en el XROrigin.
  Solución: seleccionar XROrigin → Add Component → ARRaycastManager.
```

---

### S-XR-25 — [CONCEPTO]
**Título:** Cómo se extiende lo que ya saben a XR

```
Lo que ya conocen vs. cómo funciona en XR:

GAMEOBJECT Y COMPONENTES — igual que siempre
  Los objetos en XR son GameObjects con componentes.
  XRGrabInteractable es un componente más, como Rigidbody.
  ARPlaneManager es un componente más, como Collider.

TRANSFORM — igual, con una diferencia importante
  En VR, la posición y rotación de la cámara la controla el tracking,
  no el Transform de la cámara. No mueven la cámara directamente.
  Para mover al usuario: mueven el Transform del XROrigin.

RIGIDBODY Y COLISIONES — igual que siempre
  La física funciona exactamente igual en XR.
  Los objetos agarrables necesitan Rigidbody para caer y rebotar.
  Trigger y collider funcionan igual para detectar eventos.

OOP Y SINGLETON — igual que siempre
  Un GameManager Singleton funciona exactamente igual en XR.
  Pueden tener un ARManager que gestione los planos detectados,
  con el mismo patrón que el GameManager que ya implementaron.

EVENTOS Y DELEGATES — igual, pero los eventos vienen de XRIT
  selectEntered.AddListener() es lo mismo que un OnCollisionEnter
  pero disparado por el sistema de interacción de XRIT.
  Ya saben suscribirse a eventos — esto es lo mismo.

UI CON CANVAS — casi igual, con una diferencia
  En VR, el Canvas necesita estar en modo "World Space" para aparecer en el espacio.
  XRIT tiene un XR UI Input Module que reemplaza al EventSystem normal.
  Los botones, textos y sliders funcionan exactamente igual.
```

---

### S-XR-26 — [MENTAL-MODEL]
**Título:** El modelo mental completo — de lo que saben a XR

```
JUEGO 2D/3D NORMAL          →      EXPERIENCIA XR

Main Camera                  →      ARCamera / XR Camera (en XROrigin)
  (fija o con script)               (la mueve el tracking automáticamente)

Mover al jugador             →      Mover el XROrigin
  con Input.GetAxis                 con locomotion system de XRIT

Collider + OnTriggerEnter    →      XR Grab Interactable
  para detectar objetos             + selectEntered event

EventSystem + Button.onClick →      XR UI Input Module
  para interacción con UI           + XR Ray Interactor apuntando al Canvas

Spawner con Instantiate()    →      Spawner igual, pero los objetos
  en posición fija                  se posicionan sobre planos AR detectados
                                    o a distancia del controlador

Singleton GameManager        →      Singleton XRManager
  para el estado del juego         para el estado de la sesión XR
```

---

### S-XR-27 — [TABLA]
**Título:** Objetivos mínimos por track — qué debe funcionar al terminar

| Track | Dispositivo | Objetivo mínimo (MUST) | Objetivo extra (SHOULD) |
|---|---|---|---|
| **A** | Meta Quest 3 | Agarrar un objeto con hand tracking y tirarlo | Teleportation entre dos puntos |
| **A** | Meta Quest 3 | Al menos 3 objetos con física | UI Canvas en World Space con puntuación |
| **B** | Samsung tablets | Detectar un plano horizontal | Colocar múltiples objetos en el mismo plano |
| **B** | iPad Pro | Colocar un objeto en el plano al tocar | Explorar meshing con LiDAR activo |
| **B** | iPhone 16 Pro Max | Colocar un objeto en el plano al tocar | Image tracking con una imagen impresa |
| **C** | Galaxy XR | Ejecutar el sample oficial y explorar la escena | Modificar un objeto en la demo |

---

### S-XR-28 — [DEMO]
**Texto:** Taller en grupos
**Subtítulo:** Track A · Track B · Track C · El instructor circula · Pedir ayuda si hay bloqueo de más de 10 min

---

### S-XR-29 — [ACTIVIDAD]
**Título:** Demo entre grupos — cierre del taller

```
Los últimos 20 minutos del taller son para compartir lo que construyó cada grupo.

Formato de la demo:
  → 3-4 minutos por track
  → Un representante de cada track muestra el dispositivo en cámara
  → Los demás hacen una pregunta o dan una observación

Lo que queremos ver, no importa el track:
  → ¿Funciona la interacción mínima del track?
  → ¿Qué fue lo más difícil de configurar?
  → ¿Qué agregarían si tuvieran una hora más?

No importa si no llegaron al objetivo extra.
Lo que importa: que entienden qué hicieron y por qué.

Pregunta para reflexionar (para el foro después de la sesión):
  "¿Cómo cambiaría la experiencia de usuario de tu proyecto final
   si estuviera pensado para XR en lugar de una pantalla plana?"
```

---

### S-XR-30 — [CONCEPTO]
**Título:** Qué sigue — próximos pasos en XR después de hoy

```
Si quieren profundizar en cada track:

TRACK A — VR con Quest / XRIT:
  → Unity Learn: "VR Development" pathway oficial
  → XR Interaction Toolkit documentation (docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit)
  → "Hand Interaction Sample" dentro del mismo package de XRIT
  → Meta Developer Hub: herramientas para depurar y perfilar en Quest

TRACK B — AR con AR Foundation:
  → Unity Learn: "AR Development" pathway oficial
  → AR Foundation Samples: github.com/Unity-Technologies/arfoundation-samples
  → "AR with Unity" canal de Unity en YouTube (tutoriales oficiales)
  → Repositorio oficial del package con documentación de cada feature

TRACK C — Android XR:
  → developer.android.com/xr (documentación oficial de Google)
  → android.com/xr → sección de desarrolladores
  → Samsung Developer Program (acceso a herramientas de debug del Galaxy XR)
  → Jetpack XR SDK samples en GitHub

Para todos:
  → openxr.dev — especificación oficial del estándar OpenXR
  → Khronos Group YouTube: charlas técnicas de XR
  → Mixed Reality Toolkit (MRTK) de Microsoft: alternativa a XRIT con más features
```

---

### S-XR-31 — [CONCEPTO]
**Título:** XR en el contexto del mercado — para qué sirve saberlo

```
Unity es el engine más usado en desarrollo XR según el reporte de Unity 2025:
  → 60% de las experiencias VR del mercado están hechas en Unity
  → 70% de las aplicaciones AR en enterprise usan Unity o AR Foundation

Los sectores que más contratan desarrolladores XR con Unity:
  → Educación: laboratorios virtuales, simulaciones de ciencias
  → Salud: entrenamiento quirúrgico, terapia de exposición
  → Arquitectura: visualización de proyectos antes de construir
  → Industrial: entrenamiento de operadores, mantenimiento asistido
  → Retail: prueba virtual de productos (IKEA, Sephora, etc.)

Lo que ya saben se transfiere directamente:
  → C# y la arquitectura de componentes de Unity: base de todo
  → Rigidbody y colisiones: física en XR funciona igual
  → OOP y patrones como Singleton: arquitectura idéntica
  → Canvas y UI: el mismo sistema, en modo World Space

XR no es una especialidad separada de Unity.
Es Unity corriendo en un tipo diferente de hardware.
La diferencia técnica más grande es el setup inicial
y entender cómo el tracking reemplaza al Input clásico.
```

---

### S-XR-32 — [EVIDENCIA]
**Título:** Evidencia de la Sesión XR
**Entrega:** Drive personal · Antes del 19/07/2026

- 📸 Screenshot o video del dispositivo XR con la escena funcionando
- 📝 Lista de los componentes XR que usaron en la escena (mínimo 3)
- 💬 Respuesta en el foro: "¿Cómo cambiaría tu proyecto final si fuera XR?"

**Criterio de aprobación:** que aparezca la interacción mínima del track en el video o screenshot.
No importa si es básica — lo importante es que funcione y que puedan explicarla.

---

### S-XR-33 — [CONCEPTO]
**Título:** Lo que aprendieron hoy — resumen de la sesión

| Concepto | Lo que significa en la práctica |
|---|---|
| **El espectro XR** | AR, MR, VR son puntos en una línea — no tecnologías separadas |
| **AR Foundation** | Un código, dos plataformas: ARCore y ARKit detrás del mismo componente |
| **XR Interaction Toolkit** | Grab, teleport y UI sin escribir el sistema desde cero |
| **OpenXR** | El estándar que une Quest, Samsung Galaxy XR y otros headsets |
| **XROrigin** | El "jugador" en XR — moverlo es mover al usuario en el mundo |
| **Hand Tracking en Quest** | Feature activa via OpenXR Meta Feature Group — sin controladores |
| **ARPlaneManager** | Detecta superficies del mundo real y las expone como GameObjects |
| **ARRaycastManager** | La versión AR del Physics.Raycast — golpea el mundo real, no colliders |
| **Build por plataforma** | Cada track tiene su plataforma y su configuración — el código XR es el mismo |

---

### S-XR-34 — [CONCEPTO]
**Título:** Lo que No cambia — su base es sólida para XR

```
Después de hoy, algo debería estar claro:

XR no empieza de cero. Extiende lo que ya conocen.

  → Sus GameObjects son los mismos objetos que colocan en escenas 2D/3D
  → Sus componentes son iguales — solo se agregan XRGrabInteractable o ARPlaneManager
  → Su código C# es exactamente el mismo lenguaje
  → Su comprensión de MonoBehaviour, Awake, Start, Update: idéntica
  → Su entendimiento del Transform: igual, con una excepción (no mover la cámara XR directamente)
  → Sus patrones OOP — Singleton, herencia, interfaces: aplican igual

Lo que sí es nuevo:
  → El concepto de que el mundo real es parte del juego (en AR)
  → La cámara no la controlan ustedes — la controla el tracking (en VR)
  → El input ya no es teclado/mouse — es posición de manos y controladores
  → El setup inicial requiere configurar plataformas y SDKs antes de la primera línea de juego

Eso es todo lo que es realmente nuevo.
El resto ya lo saben.
```

---

### S-XR-35 — [CONCEPTO]
**Título:** El estado de XR en 2026 — dónde está la industria

```
Hardware disponible hoy (lo que hay en el salón y en el mercado):

Meta Quest 3 — el headset standalone más usado:
  → Sin PC, sin cables, corre Android internamente
  → Passthrough a color: el mundo real entra a la experiencia VR
  → Hand tracking de serie, sin controladores requeridos
  → Precio accesible para educación y enterprise

Samsung Galaxy XR — el primer headset Android XR:
  → Android nativo en el headset — el mismo OS del teléfono, adaptado al espacio
  → Gemini integrado: asistente de voz en XR
  → Eye tracking + hand tracking
  → Plataforma nueva — el ecosistema de apps está en construcción

iPhone y iPad con LiDAR:
  → El LiDAR Scanner permite meshing en tiempo real del entorno
  → Oclusión realista: los objetos digitales se esconden detrás de los físicos
  → Disponible desde iPhone 12 Pro · iPad Pro 2020 en adelante

Qué viene en los próximos 2-3 años:
  → Apple Vision Pro más accesible (Vision Air ya anunciado)
  → Más headsets Android XR de otros fabricantes
  → Gafas con display transparente como uso cotidiano
  → WebXR como plataforma de distribución de contenido XR sin app store

El momento para aprender XR es ahora:
  La infraestructura ya existe — los dispositivos ya están en el mercado.
  La demanda de desarrolladores supera la oferta.
  Y ustedes ya tienen la base técnica para empezar.
```

---

### S-XR-36 — [CONCEPTO]
**Título:** Qué sigue en el curso — vuelta al proyecto final

```
Esta sesión fue un paréntesis para ver hacia dónde puede ir lo que aprendieron.

La semana que viene vuelven al proyecto final:
  Semana 10 (28 Jul / 30 Jul): pulido, build WebGL final, publicación en itch.io
  Semana 11 (4 Ago / 6 Ago): presentaciones finales

El proyecto final sigue siendo el mismo — no hace falta convertirlo a XR.
Lo que sí pueden incorporar si quieren:
  → Una escena de AR como bonus: colocar el "nivel" del juego en el mundo real
  → Una mención en la presentación de "cómo esto se trasladaría a XR"
  → Explorar AR Foundation en un branch separado como experimento

Para la presentación final (5 minutos):
  Si la sesión de hoy les dio ideas para tu proyecto — mencionenlas.
  La reflexión sobre dónde podría ir el proyecto después de este curso
  es parte del último minuto de la presentación.
```

---
