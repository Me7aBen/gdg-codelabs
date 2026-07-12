# Guía de Taller XR — Unity 6 LTS
### Tecsup Arequipa · Semanas 9-11 · Sesión especial XR

---

## Introducción

Este documento es la guía práctica del taller de XR (Extended Reality) que acompaña las semanas 9-11 del curso de Unity. Ya tienes una base sólida en Unity — ahora vamos a aplicarla en dispositivos reales de realidad virtual, realidad aumentada y realidad mixta.

**Duración total del taller:** 3.5 horas

**Dispositivos disponibles en el salón:**
- 8 Meta Quest 3 (VR/MR)
- 2 tablets Samsung (Android, ARCore)
- 1 iPad Pro (iOS, ARKit + LiDAR)
- 2 iPhones 16 Pro Max (iOS, ARKit + LiDAR + Face Tracking)
- 1 Samsung Galaxy XR (Android XR headset)

### División de grupos

| Track | Dispositivos | Tamaño del grupo |
|---|---|---|
| **Track A — Meta Quest 3** | 8 Meta Quest 3 | 3-4 grupos de 2-3 personas |
| **Track B — Phones & Tablets** | 2 Samsung + 1 iPad Pro + 2 iPhones | 2-3 grupos de 2-3 personas |
| **Track C — Samsung Galaxy XR** | 1 Samsung Galaxy XR | 1 grupo de 2 personas |

El instructor asignará el track al inicio de la sesión. Si terminas antes, puedes ayudar a otro grupo o explorar el challenge opcional de tu track.

### Tiempo estimado por sección

| Sección | Tiempo |
|---|---|
| Setup general (todos los grupos) | 30 min |
| Track A — Meta Quest 3 | ~2 h |
| Track B — Phones & Tablets | ~2 h |
| Track C — Samsung Galaxy XR | ~2 h |
| Cierre y demo | 20 min |

---

## Setup general — todos los grupos (30 min)

Estos pasos los realiza **todo el mundo** antes de separarse por track. Asegúrense de completarlos antes de avanzar al trabajo específico de su dispositivo.

### Paso 1 — Crear el proyecto en Unity 6 LTS

1. Abre **Unity Hub**.
2. Haz clic en **New project**.
3. Selecciona el template correcto según tu track:
   - **Track A y C:** template **VR**
   - **Track B:** template **AR Mobile**
4. Ponle un nombre descriptivo: `TallerXR_TrackA`, `TallerXR_TrackB`, etc.
5. Elige una carpeta local y haz clic en **Create project**.

> **Nota:** Los templates VR y AR ya incluyen algunos paquetes preconfigurados, lo que nos ahorra tiempo. Aun así, en los pasos siguientes vamos a verificar que todo esté instalado correctamente.

### Paso 2 — Verificar Package Manager

1. Una vez abierto el proyecto, ve a **Window → Package Manager**.
2. En la parte superior izquierda, cambia el filtro de `Packages: In Project` para ver los paquetes instalados.
3. Mantén esta ventana abierta — la vas a necesitar varias veces.

### Paso 3 — Verificar XR Plugin Management

1. Ve a **Edit → Project Settings**.
2. En el panel izquierdo, busca y haz clic en **XR Plug-in Management**.
3. Si aparece el botón **Install XR Plug-in Management**, haz clic en él y espera a que se instale.
4. Una vez instalado, verás pestañas para cada plataforma (Android, iOS, Windows, etc.).

Con esto está lista la base. Ahora sigue las instrucciones de tu track asignado.

---

## Track A — Meta Quest 3

### Resumen del track

| | |
|---|---|
| **Dispositivos** | Meta Quest 3 (×8) |
| **Tecnología** | OpenXR + XR Interaction Toolkit |
| **Lo que necesitan** | Unity 6 LTS con Android Build Support instalado en Hub |
| **Lo que van a lograr** | Una escena con interacción VR corriendo en el Quest 3: locomotion, grab y ray interaction |

**Duración estimada:** ~2 horas

---

### Paso 1 — Instalar los paquetes necesarios

En **Window → Package Manager**:

#### 1.1 — XR Interaction Toolkit

1. En el campo de búsqueda escribe `XR Interaction Toolkit`.
2. Selecciona el paquete `com.unity.xr.interaction.toolkit`.
3. Haz clic en **Install**.
4. Una vez instalado, haz clic en la pestaña **Samples** dentro del panel del paquete.
5. Importa los siguientes samples:
   - **Starter Assets** — mapeos de acciones preconfigurados, locomotion, interactores básicos
   - **Hands Interaction Demo** — seguimiento de manos con transición automática entre mandos y manos físicas
6. Espera a que Unity importe los assets (puede tardar 1-2 minutos).

#### 1.3 — XR Hands (para hand tracking)

1. Busca `XR Hands`.
2. Selecciona `com.unity.xr.hands`.
3. Haz clic en **Install**.

> Este paquete expone los datos de seguimiento de articulaciones de manos via OpenXR (`XR_EXT_hand_tracking`). Sin él, el hand tracking del Quest 3 no estará disponible en Unity.

#### 1.2 — OpenXR Plugin

1. En el campo de búsqueda escribe `OpenXR`.
2. Selecciona `com.unity.xr.openxr`.
3. Haz clic en **Install**.

### Paso 2 — Configurar XR Plugin Management para Android

1. Ve a **Edit → Project Settings → XR Plug-in Management**.
2. Haz clic en la pestaña de **Android** (ícono del robot verde).
3. Activa la casilla **OpenXR**.
4. Aparecerá un ícono de advertencia — haz clic en él o ve a **Edit → Project Settings → XR Plug-in Management → OpenXR** (en la pestaña Android).

#### 2.1 — Activar perfiles de interacción para Quest 3

En la sección **Interaction Profiles**, agrega los siguientes perfiles con el botón **+**:

| Perfil | Para qué sirve |
|---|---|
| **Oculus Touch Controller Profile** | Mapeo de los mandos físicos del Quest 3 |
| **Hand Interaction Profile** | Gestos naturales: pinch, poke, aim, grip |
| **Khronos Simple Controller Profile** | Compatibilidad genérica de mandos |

#### 2.2 — Activar features de OpenXR

En la sección **OpenXR Features** (Android), activa:
- ☑ **Meta Quest Feature Group** (o **Android XR Support** si aparece ese nombre)
- ☑ **Hand Tracking Subsystem** — necesario para tracking de manos con XR_EXT_hand_tracking
- ☑ **Meta Hand Tracking Aim** — precisión adicional con XR_FB_hand_tracking_aim

Haz clic en **Fix All** si aparece alguna advertencia de validación.

> **Importante:** Si ves triángulos amarillos de validación en cualquier punto, usa **Fix All** antes de continuar. Ignorarlos causa que la build falle o funcione incorrectamente.

### Paso 3 — Cargar una sample scene del XR Interaction Toolkit

Los samples que importaste en el Paso 1 incluyen escenas listas para correr.

1. En el panel **Project**, navega a:
   `Assets/Samples/XR Interaction Toolkit/[versión]/Starter Assets/`
2. Dentro encontrarás la escena principal de demostración con locomotion e interacción. Ábrela con doble clic.
3. Alternativamente, navega a:
   `Assets/Samples/XR Interaction Toolkit/[versión]/Hands Interaction Demo/`
   para la demo de seguimiento de manos.
4. Presiona **Play** para probarla con el XR Device Simulator (clic derecho para rotar, WASD para moverse).

> **Nota:** El XR Device Simulator simula un headset en el editor. No necesitas conectar el Quest 3 para probar el flujo básico.

### Paso 4 — Build Settings para Meta Quest 3

#### 4.1 — Cambiar a plataforma Android

1. Ve a **File → Build Settings**.
2. Selecciona **Android** en la lista de plataformas.
3. Haz clic en **Switch Platform** y espera (puede tardar varios minutos la primera vez).

#### 4.2 — Player Settings

1. En Build Settings, haz clic en **Player Settings**.
2. En la pestaña **Android**:
   - **Package Name:** `com.tugrupo.tallerxr` (sin espacios ni caracteres especiales)
   - **Minimum API Level:** **Android 14 (API Level 34)** ← crítico para Quest 3
   - **Target API Level:** Automatic (highest installed)
3. En **Graphics APIs**:
   - Asegúrate de que **Vulkan** sea el único o el primero de la lista
   - Si aparece OpenGLES3, **elimínalo** — Quest 3 y Android XR están optimizados para Vulkan
4. En **Stereo Rendering Mode**: selecciona **Multi-view (Single Pass Instanced)** — reduce draw calls a la mitad al renderizar ambos ojos simultáneamente
5. Verifica que **Initialize XR on Startup** esté activado en XR Plug-in Management

> **¿Por qué Vulkan?** Es la API gráfica que habilita foveated rendering (renderizar a mayor resolución donde el usuario está mirando) y es la recomendada por Meta y Google para todos los dispositivos XR.

#### 4.3 — Habilitar Developer Mode en el Meta Quest 3

En el headset (igual que en Android — toca el número de compilación 7 veces):

1. Pon el headset y ve a **Settings (Configuración)**.
2. Navega a **About Headset → Software Information**.
3. Toca el campo **Build Number (Número de compilación) 7 veces seguidas**.
4. Aparecerá el mensaje "You are now a developer" (igual que en un teléfono Android).
5. Regresa a Settings y busca **Developer Options**.
6. Activa **USB Debugging**.

> Si el headset ya tiene Developer Mode activado (el instructor lo habrá preparado), solo asegúrate de que USB Debugging esté activado.

#### 4.4 — Conectar el Quest 3 a la PC

**Opción 1 — Cable USB:**
1. Conecta el Quest 3 a la PC con el cable USB-C.
2. Dentro del headset, aparecerá un diálogo pidiendo permiso para depuración USB — acéptalo.
3. En la PC, el Quest debería aparecer como dispositivo en Build Settings.

**Opción 2 — Wireless (si la red lo permite):**
1. En el headset: **Settings → System → Developer → Wireless ADB**.
2. Anota la IP y el puerto que muestra.
3. En la PC, abre una terminal y ejecuta:
   ```
   adb pair <IP>:<puerto>
   ```
4. Ingresa el código que aparece en el headset.

#### 4.5 — Build and Run

1. Agrega la escena actual a la build: en **Build Settings**, haz clic en **Add Open Scenes**.
2. Asegúrate de que el Quest 3 aparece en el menú **Run Device**.
3. Haz clic en **Build and Run**.
4. Elige una carpeta para guardar el APK y espera.
5. La app se instalará automáticamente en el Quest 3.

### Paso 5 — Explorar la escena en el Quest 3

Una vez que la app esté corriendo en el headset:

- **Locomotion por teleporte:** apunta con el ray del controlador hacia el suelo y suelta el joystick.
- **Locomotion continua:** mueve el joystick izquierdo hacia adelante/atrás.
- **Ray interaction:** apunta a objetos interactuables y presiona el gatillo.
- **Grab (agarrar objetos):** acerca la mano a un objeto y presiona el grip.

#### Challenge opcional — Agregar un objeto Grabbable propio

1. En la escena, crea un objeto 3D: **GameObject → 3D Object → Cube**.
2. Con el cubo seleccionado, ve al panel **Inspector**.
3. Haz clic en **Add Component** y agrega:
   - `XR Grab Interactable`
   - `Rigidbody` (si no se agrega automáticamente)
4. Ajusta la posición del cubo para que esté a la altura de las manos en la escena.
5. Haz build de nuevo y prueba agarrarlo en el Quest 3.

---

### Errores comunes — Track A

| Error | Causa | Solución |
|---|---|---|
| "No Android Build Support module" | El módulo de Android no está instalado en Unity Hub | Abre Unity Hub → Installs → tres puntos en tu versión de Unity → Add modules → Android Build Support (con NDK y JDK) |
| Errores de validación de OpenXR | Features mal configuradas | En XR Plug-in Management → OpenXR, haz clic en **Fix All** |
| El Quest no aparece como dispositivo en Build Settings | Driver ADB no reconoce el headset | Verifica que Developer Mode esté activado en el headset y acepta el diálogo de USB debugging. Prueba con `adb devices` en la terminal. |
| La app se instala pero no abre o se cierra sola | Minimum API Level incorrecto o missing features | Verifica **API Level 34** mínimo y que el Meta Quest Feature Group esté activado en OpenXR |
| Pantalla negra al poner el headset | La escena no tiene XROrigin configurado | Asegúrate de usar la DemoScene de los Starter Assets, que ya tiene el XR Rig correcto |

---

## Track B — Phones & Tablets

### Resumen del track

| | |
|---|---|
| **Dispositivos** | 2 tablets Samsung (Android) · 1 iPad Pro (iOS) · 2 iPhones 16 Pro Max (iOS) |
| **Tecnología** | AR Foundation + ARCore (Android) / ARKit (iOS) |
| **Lo que necesitan** | Android Build Support (Samsung) o Xcode instalado (iPad/iPhone) |
| **Lo que van a lograr** | Detección de planos y colocación de objetos 3D en el mundo real usando la cámara del dispositivo |

**Duración estimada:** ~2 horas

---

### Paso 1 — Instalar los paquetes necesarios

En **Window → Package Manager**:

#### 1.1 — AR Foundation

1. Busca `AR Foundation`.
2. Selecciona `com.unity.xr.arfoundation`.
3. Haz clic en **Install**.
4. Una vez instalado, ve a la pestaña **Samples** del paquete.
5. Importa **AR Foundation Samples** (incluye PlaneDetection, ImageTracking, FaceTracking, etc.).

#### 1.2 — Plugin de plataforma

Instala el plugin que corresponde a los dispositivos que va a usar tu grupo:

**Para Samsung tablets (Android):**
1. Busca `ARCore XR Plugin`.
2. Selecciona `com.unity.xr.arcore`.
3. Haz clic en **Install**.

**Para iPad Pro e iPhones (iOS):**
1. Busca `ARKit XR Plugin`.
2. Selecciona `com.unity.xr.arkit`.
3. Haz clic en **Install**.

> **Si tu grupo tiene dispositivos de ambas plataformas:** instala ambos plugins. Unity los activará por separado según la pestaña de plataforma en XR Plug-in Management.

### Paso 2 — Configurar XR Plugin Management

1. Ve a **Edit → Project Settings → XR Plug-in Management**.

**Para Android (Samsung tablets):**
1. Haz clic en la pestaña **Android**.
2. Activa la casilla **ARCore**.

**Para iOS (iPad, iPhones):**
1. Haz clic en la pestaña **iOS**.
2. Activa la casilla **ARKit**.

### Paso 3 — Abrir una sample scene de AR Foundation

1. En el panel **Project**, navega a:
   `Assets/Samples/AR Foundation/[versión]/AR Foundation Samples/`
2. Abre la escena `AR Foundation Samples` — es el menú principal que incluye acceso a todas las demos.
3. Alternativamente, puedes abrir directamente `PlaneDetection` para ir al grano.
4. Presiona **Play** para ver cómo funciona en el editor (se mostrará en modo simulado).

### Paso 4a — Build para Android (Samsung tablets)

#### 4a.1 — Cambiar a plataforma Android

1. Ve a **File → Build Settings**.
2. Selecciona **Android** y haz clic en **Switch Platform**.

#### 4a.2 — Player Settings para Android

1. En **Player Settings → Android**:
   - **Package Name:** `com.tugrupo.artest`
   - **Minimum API Level:** Android 7.0 (API Level 24)
   - **Graphics API:** quita Vulkan si causa problemas y deja OpenGLES3
2. En la sección **ARCore**:
   - Activa **Requires ARCore** (esto hace que la app solo aparezca en dispositivos compatibles en la Play Store).

#### 4a.3 — Build y transferir a la tablet

**Opción 1 — Cable USB:**
1. Activa el modo desarrollador en la tablet Samsung:
   - **Ajustes → Información del teléfono → Información de software → Número de compilación** (toca 7 veces).
   - Luego **Ajustes → Opciones de desarrollador → Depuración USB** → Activar.
2. Conecta la tablet con un cable USB.
3. En **Build Settings**, haz clic en **Build and Run**.

**Opción 2 — APK manual:**
1. En **Build Settings**, haz clic en **Build** (sin Run).
2. Guarda el APK en una carpeta.
3. Transfiere el APK a la tablet por cable o email.
4. En la tablet, activa **Instalar apps de fuentes desconocidas** y abre el APK.

### Paso 4b — Build para iOS (iPad Pro e iPhones)

> **Nota:** Hacer build para iOS requiere una Mac con Xcode instalado. Si la PC del salón es Windows, consulta al instructor — puede haber una Mac disponible, o una build ya compilada lista para instalar.

#### 4b.1 — Cambiar a plataforma iOS

1. Ve a **File → Build Settings**.
2. Selecciona **iOS** y haz clic en **Switch Platform**.

#### 4b.2 — Player Settings para iOS

1. En **Player Settings → iOS**:
   - **Bundle Identifier:** `com.tugrupo.artest`
   - **Minimum iOS Version:** 16.0
2. En **Player Settings → Other Settings**:
   - Agrega en **Camera Usage Description:** `Esta app usa la cámara para realidad aumentada.`
   - Este campo es obligatorio — sin él, la app se rechaza o no pide el permiso de cámara.

#### 4b.3 — Generar el proyecto Xcode

1. En **Build Settings**, haz clic en **Build** (no Build and Run).
2. Unity genera una carpeta con un proyecto de Xcode.
3. Abre el `.xcodeproj` en Xcode.
4. Conecta el iPhone o iPad a la Mac.
5. Selecciona el dispositivo en Xcode y haz clic en **Run** (triángulo).
6. La primera vez necesitas un certificado de desarrollo — el instructor tiene el Apple ID configurado.

### Paso 5 — Explorar la app de AR Foundation

Una vez en el dispositivo:

- **PlaneDetection:** mueve el dispositivo lentamente. La app detecta superficies (suelo, mesas) y las muestra con una malla coloreada.
- **Toca la pantalla** sobre un plano detectado para colocar un objeto 3D.
- **Point Cloud:** verás los puntos de profundidad que el sensor detecta.
- **Face Tracking** (solo iPhones 16 Pro Max): la app detecta y trackea la cara con la cámara frontal.

#### Código base — Colocar objetos al tocar la pantalla

Si quieres crear tu propia escena en lugar de usar los samples, usa este script. Crea un nuevo archivo C# en tu proyecto (`Assets/Scripts/ARObjectPlacer.cs`) y pega este código:

```csharp
using UnityEngine;
using UnityEngine.XR.ARFoundation;
using UnityEngine.XR.ARSubsystems;
using System.Collections.Generic;

public class ARObjectPlacer : MonoBehaviour
{
    // Arrastra el componente ARRaycastManager desde la escena
    [SerializeField] private ARRaycastManager raycastManager;

    // El prefab que se va a colocar en el mundo (arrástrale un objeto 3D)
    [SerializeField] private GameObject prefabAColocar;

    // Lista donde ARRaycastManager guarda los resultados del raycast
    private List<ARRaycastHit> hits = new List<ARRaycastHit>();

    void Update()
    {
        // Si no hay ningún toque activo, no hacemos nada
        if (Input.touchCount == 0) return;

        // Tomamos el primer toque
        Touch touch = Input.GetTouch(0);

        // Solo actuamos en el frame en que el dedo toca la pantalla
        if (touch.phase != TouchPhase.Began) return;

        // Lanzamos un ray desde la posición del toque hacia los planos detectados
        if (raycastManager.Raycast(touch.position, hits, TrackableType.PlaneWithinPolygon))
        {
            // hits[0] es el plano más cercano que intersectó el ray
            Pose hitPose = hits[0].pose;

            // Instanciamos el prefab en esa posición y rotación
            Instantiate(prefabAColocar, hitPose.position, hitPose.rotation);
        }
    }
}
```

**Cómo usarlo en la escena:**
1. Crea un GameObject vacío en la jerarquía y llámalo `ARObjectPlacer`.
2. Adjunta este script como componente.
3. En el Inspector, arrastra el componente `ARRaycastManager` de la escena al campo `Raycast Manager`.
4. Arrastra un Prefab (por ejemplo, un cubo) al campo `Prefab A Colocar`.

#### Challenge opcional

- Cambia el prefab por un modelo 3D más interesante (importa un `.fbx` desde los Assets).
- Agrega un componente `Rigidbody` al prefab para que el objeto caiga y tenga física al colocarse.
- Limita a un solo objeto en escena: antes del `Instantiate`, destruye el objeto anterior si existe.

---

### Errores comunes — Track B

| Error | Causa | Solución |
|---|---|---|
| "ARSession is not supported on this device" | El dispositivo no soporta ARCore o ARKit | Verifica que el dispositivo esté en la lista de compatibilidad de ARCore/ARKit. Los modelos del taller son todos compatibles. |
| Pantalla negra al abrir la app en iOS | Falta el permiso de cámara en Player Settings | Agrega `NSCameraUsageDescription` con un texto descriptivo en **Player Settings → Other Settings → iOS** |
| Los planos no se detectan | Poca luz o superficie sin textura | Asegúrate de tener buena iluminación. El detector de planos funciona mejor en superficies con patrones o texturas visibles. Mueve el dispositivo lentamente. |
| "Minimum API Level not met" en Android | La tablet tiene Android inferior al mínimo requerido | Baja el Minimum API Level a 24 en Player Settings |
| La app crashea al iniciar en Android | Graphics API incompatible | En Player Settings → Android → Graphics APIs, prueba cambiando el orden (pon OpenGLES3 primero) |
| Error de certificado en Xcode | No hay un certificado de desarrollo configurado | Consulta al instructor — necesita agregar su Apple ID en Xcode → Preferences → Accounts |

---

## Track C — Samsung Galaxy XR

### Resumen del track

| | |
|---|---|
| **Dispositivo** | Samsung Galaxy XR (×1) |
| **Tecnología** | Android XR (OpenXR) o AR Foundation como fallback |
| **Lo que necesitan** | Unity 6 LTS con Android Build Support |
| **Lo que van a lograr** | Una experiencia XR básica corriendo en el Samsung Galaxy XR |

**Duración estimada:** ~2 horas

> **Contexto del dispositivo:** El Samsung Galaxy XR corre Android XR, el sistema operativo de Google para headsets de realidad mixta. Es compatible con OpenXR y con las APIs de ARCore. Al ser un dispositivo nuevo en el ecosistema, algunas integraciones en Unity pueden estar en preview o requerir pasos adicionales.

---

### Opción A — OpenXR + XR Interaction Toolkit (recomendada)

Esta opción es similar al Track A pero usando el Feature Group de Android XR en lugar del de Meta.

#### Paso 1 — Instalar paquetes

En **Window → Package Manager**:

1. Instala `com.unity.xr.interaction.toolkit` con los Samples (**Starter Assets** + **XR Device Simulator**).
2. Instala `com.unity.xr.openxr`.
3. Instala el paquete específico de Android XR:
   - Busca `Android XR OpenXR`.
   - Selecciona **`com.unity.xr.androidxr-openxr`** ← el paquete oficial de Unity para Android XR / Samsung Galaxy XR.
   - Haz clic en **Install**.

> Este paquete es un subpaquete del OpenXR Plugin, mantenido por Google/Samsung para integración con el Android XR OS (el mismo que usa el Samsung Galaxy XR). Requiere **Vulkan** y se recomienda usar **Universal Render Pipeline (URP)**.

#### Paso 2 — Configurar OpenXR para Android XR

1. Ve a **Edit → Project Settings → XR Plug-in Management**.
2. En la pestaña **Android**, activa **OpenXR**.
3. Ve a la sub-sección **OpenXR** (aparece al activarlo).
4. En **OpenXR Feature Groups**, busca y activa **Android XR Feature Group**.
   - Si no aparece, asegúrate de que `com.unity.xr.androidxr-openxr` esté instalado.
5. Haz clic en **Fix All** si hay advertencias de validación.

#### Paso 3 — Build para el Samsung Galaxy XR

1. Ve a **File → Build Settings → Android → Switch Platform**.
2. En **Player Settings → Android**:
   - **Package Name:** `com.tugrupo.galaxyxr`
   - **Minimum API Level:** Android 14 (API Level 34) — Android XR requiere API 34+
   - **Graphics APIs:** deja solo **Vulkan** (elimina OpenGL ES si está en la lista)
3. Habilita el Developer Mode en el Samsung Galaxy XR (igual que en cualquier Android: toca el número de compilación 7 veces en Ajustes → Información del teléfono).
4. Conecta por USB y haz **Build and Run**.

---

### Opción B — AR Foundation + ARCore (fallback)

Si el Android XR Feature Group no está disponible en tu versión de Unity, el Samsung Galaxy XR puede correr experiencias de AR Foundation usando ARCore — ya que el headset tiene cámaras de passthrough y soporte ARCore.

1. Sigue todos los pasos del **Track B** para Android.
2. El resultado es una experiencia de AR de passthrough similar a la de las tablets.

---

### Opción C — WebXR desde el browser (más rápida, sin build)

Si hay problemas con las opciones anteriores, esta es la forma más rápida de ver XR en el Samsung Galaxy XR sin necesidad de compilar.

1. Pon el Samsung Galaxy XR y abre el **browser** del headset.
2. Navega a la URL del codelab de XR Blocks que el instructor ya tiene publicada.
3. La experiencia WebXR carga directamente en el browser del headset.
4. Interactúa con los controladores o la vista de passthrough según la experiencia.

> **Nota para el instructor:** Tener la URL del codelab WebXR lista de antemano en un QR code o en el chat del grupo agiliza mucho este paso.

---

### Errores comunes — Track C

| Error | Causa | Solución |
|---|---|---|
| Android XR Feature Group no aparece en la lista | La versión de Unity o OpenXR no incluye soporte todavía | Usa la Opción B (AR Foundation + ARCore) o la Opción C (WebXR) |
| La app se instala pero no inicia en modo XR | El headset necesita un flag especial para apps OpenXR | Verifica la documentación de Samsung Galaxy XR para Unity en developer.samsung.com |
| Problemas de ADB / dispositivo no reconocido | Driver o configuración de Developer Mode | Mismos pasos que Track A para conectar por ADB |

---

## Cierre del taller (20 min)

### Demo de grupos

Cada grupo tiene **1 minuto** para mostrar lo que logró:
- Si tienes algo corriendo en el dispositivo, muéstralo en vivo.
- Si no llegaste al build final, muestra la escena funcionando en el editor (XR Device Simulator).
- Explica brevemente qué fue lo más difícil y cómo lo resolviste.

### Demo del instructor

El instructor hará un recorrido con el Meta Quest 3 mostrando la escena más completa del taller: locomotion, grabbing y ray interaction en VR.

### Reflexión final

Piensa en tu proyecto final del curso y responde estas preguntas (discutan en grupo):

1. ¿Qué mechanic de tu proyecto final se beneficiaría de ser en VR o AR?
2. Si tuvieras que convertir una escena de tu proyecto a AR, ¿qué cambiarías en la cámara, el UI y la interacción?
3. ¿Qué limitaciones de hardware tendría que considerar un jugador real usando un dispositivo como el Quest 3?

---

## Referencia rápida de packages

| Nombre | Package ID | Para qué sirve | Plataformas |
|---|---|---|---|
| XR Interaction Toolkit | `com.unity.xr.interaction.toolkit` | Sistema de interacción VR/XR: grab, ray, locomotion | Todas |
| OpenXR Plugin | `com.unity.xr.openxr` | Backend de renderizado y entrada para dispositivos OpenXR | Meta Quest, Android XR, PC VR |
| AR Foundation | `com.unity.xr.arfoundation` | Capa de abstracción para AR: planos, raycasting, imagen tracking | Android (ARCore), iOS (ARKit) |
| ARCore XR Plugin | `com.unity.xr.arcore` | Backend de AR para dispositivos Android | Android |
| ARKit XR Plugin | `com.unity.xr.arkit` | Backend de AR para dispositivos Apple | iOS / iPadOS |
| Android XR OpenXR | `com.unity.xr.androidxr-openxr` | Integración oficial Unity para Android XR OS (Samsung Galaxy XR); requiere Vulkan + URP | Samsung Galaxy XR |
| XR Hands | `com.unity.xr.hands` | Hand tracking via `XR_EXT_hand_tracking`; articulaciones de dedos en tiempo real | Meta Quest 3, Android XR |

---

## Glosario XR en Unity

**XROrigin / XR Rig**
El objeto raíz de la escena que representa la posición física del usuario en el espacio XR. Contiene la cámara (cabeza) y los controladores (manos). En Unity 6 se llama `XR Origin`; en versiones anteriores era `XR Rig`. Todos los objetos de interacción XR son hijos de este objeto.

**ARSession**
Componente que gestiona el ciclo de vida de una sesión de AR. Es el "motor" de la experiencia AR — sin él en la escena, ARCore y ARKit no se inicializan. Debe existir exactamente uno por escena.

**ARPlaneManager**
Componente que detecta superficies planas (suelo, mesas, paredes) usando los sensores del dispositivo y las representa con prefabs de plano en la escena. Sin este componente, los planos no aparecen aunque el dispositivo los detecte.

**ARRaycastManager**
Componente que permite lanzar rays contra los planos y trackables detectados por AR Foundation. Es la forma estándar de determinar dónde tocar en el mundo real al hacer tap en la pantalla. Diferente del `Physics.Raycast` de Unity — este trabaja con la geometría de AR, no con los colliders de la escena.

**XR Interaction Toolkit**
Paquete de Unity que provee un sistema de interacción de alto nivel para XR: raycast con controladores, agarrar objetos, teleportación, movimiento continuo y UI interactiva en VR. Es la forma recomendada de construir interacción VR en Unity sin tener que escribir todo desde cero.

**OpenXR**
Estándar abierto (Khronos Group) para acceder a hardware XR de forma independiente al fabricante. En Unity, el OpenXR Plugin es el backend que traduce las llamadas de Unity al API del headset. Funciona con Meta Quest, Samsung Galaxy XR, HTC Vive, Pico y otros dispositivos compatibles.

**TrackableType**
Enumeración que indica qué tipo de superficie o elemento AR se quiere detectar con un raycast. Los valores más comunes son:
- `PlaneWithinPolygon` — solo la superficie visible del plano
- `PlaneWithinBounds` — el área total estimada del plano
- `FeaturePoint` — puntos de la nube de puntos 3D

**TrackedPoseDriver**
Componente que actualiza la posición y rotación de un GameObject según los datos del sistema de tracking del dispositivo XR. Se usa en la cámara y en los controladores para que sigan el movimiento de la cabeza y las manos en tiempo real.
