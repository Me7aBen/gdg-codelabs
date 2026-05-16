id: pomodorotec-v2
summary: Aprende a construir una app Android de productividad usando agentes de IA, Android CLI y Gemini CLI. No se requiere experiencia previa en Android.
status: Published
authors: GDG Local
categories: Android
environments: Web
feedback link: https://me7aben.github.io/gdg-codelabs/

# Tu primera app Android construida conversando: PomodoroTec

## Antes de empezar
Duration: 0:03:00

Este codelab no te va a enseñar Android.

Te va a enseñar a **trabajar con un agente de IA para construir una app Android**, sin necesidad de conocer todos los detalles técnicos del ecosistema. Las decisiones de arquitectura, las librerías correctas, la configuración de Gradle — todo eso es trabajo de la IA. Tu trabajo es darle contexto, revisar lo que produce, y guiar las decisiones de negocio.

Al terminar habrás construido una app real, corriendo en un emulador real. No un "Hola mundo" — una app con lógica, pantallas y datos.

### Lo que aprenderás

- Cómo usar el **Android CLI** para crear y ejecutar proyectos sin abrir interfaces gráficas
- Qué son las **Android Skills** y cómo hacen que la IA genere código moderno y correcto
- Cómo tener una conversación productiva con un agente de IA para **planear y construir una app**
- Cómo el agente te ayuda a **generar los prompts de construcción** a partir de una descripción simple
- Cómo ejecutar y probar la app en un emulador

### Requisitos previos

Antes de comenzar, necesitas tener instalado:

| Software | Para qué sirve |
|---|---|
| **Android Studio** (versión Ladybug o superior) | Instala el Android SDK que todo lo demás necesita |
| **JDK 17 o superior** | Compila el código Kotlin |
| **Node.js 18 o superior** | Para instalar Gemini CLI |

**¿Cómo verifico si ya los tengo?** Abre una terminal y escribe:

```bash
java -version   # debe mostrar 17 o mayor
node -v         # debe mostrar 18 o mayor
```

Si alguno falla o muestra una versión menor, instálalo antes de continuar:

- Android Studio → [developer.android.com/studio](https://developer.android.com/studio)
- JDK → [adoptium.net](https://adoptium.net) (descarga Temurin 17 LTS)
- Node.js → [nodejs.org](https://nodejs.org) (descarga la versión LTS)

También necesitarás una **cuenta de Google** para obtener el API Key de Gemini (gratuito).

## Paso 1 — Instalar las herramientas
Duration: 0:10:00

### Instalar el Android CLI

El Android CLI es una herramienta de terminal creada por Google específicamente para que los agentes de IA puedan interactuar con el SDK de Android.

**macOS (Apple Silicon — M1, M2, M3, M4):**
```bash
curl -o android https://dl.google.com/android/cli/latest/darwin_arm64/android
chmod +x android
sudo mv android /usr/local/bin/android
```

**macOS (Intel):**
```bash
curl -o android https://dl.google.com/android/cli/latest/darwin_x86_64/android
chmod +x android
sudo mv android /usr/local/bin/android
```

**Linux:**
```bash
curl -o android https://dl.google.com/android/cli/latest/linux_x86_64/android
chmod +x android
sudo mv android /usr/local/bin/android
```

**Windows (PowerShell como administrador):**
```powershell
Invoke-WebRequest -Uri "https://dl.google.com/android/cli/latest/windows_x86_64/android.exe" -OutFile "android.exe"
Move-Item android.exe "C:\Windows\System32\android.exe"
```

Verifica que se instaló correctamente:
```bash
android --version
```

### Instalar Gemini CLI

```bash
npm install -g @google/gemini-cli
gemini --version
```

### Obtener el API Key de Gemini

1. Ve a [aistudio.google.com](https://aistudio.google.com)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en **"Get API key"** → **"Create API key"**
4. Copia la clave generada

Configúrala en tu sistema:

**macOS / Linux:**
```bash
export GEMINI_API_KEY="pega-tu-clave-aqui"
echo 'export GEMINI_API_KEY="pega-tu-clave-aqui"' >> ~/.zshrc
source ~/.zshrc
```

**Windows:**
```powershell
$env:GEMINI_API_KEY = "pega-tu-clave-aqui"
[System.Environment]::SetEnvironmentVariable("GEMINI_API_KEY", "pega-tu-clave-aqui", "User")
```

Prueba que funciona:
```bash
gemini "Responde solo esto: configuración correcta"
```

### Inicializar el entorno Android para agentes

```bash
android init
```

Verás algo como:
```
✓ Android SDK detected
✓ Created .agent/skills/ directory
✓ Installed skill: android-cli
✓ Environment ready for agentic development
```

> **¿Qué hizo ese comando?** Detectó dónde tienes instalado el Android SDK, creó una carpeta especial llamada `.agent/skills/` en tu sistema, y descargó la primera instrucción para el agente: cómo usar el Android CLI.

## Paso 2 — Habla con la IA sobre tu app
Duration: 0:10:00

Antes de escribir una sola línea de código, vamos a **tener una conversación**.

La razón es simple: un agente de IA no puede construir algo que no entiende. Cuanto mejor le expliques qué quieres, mejor será el resultado.

### El meta-prompt: darle contexto al agente

Abre Gemini CLI:
```bash
gemini
```

Escribe este mensaje, adaptando las partes en corchetes con tu propia idea de app (o usa PomodoroTec como ejemplo):

```
Hola. Voy a construir una app Android y quiero que seas mi co-developer
durante este proceso.

Mi app se llama [nombre de tu app].

Lo que hace: [describe en 2-3 oraciones qué problema resuelve y para quién].

Las pantallas que imagino que necesita:
- [pantalla 1]: [qué muestra o hace]
- [pantalla 2]: [qué muestra o hace]
- [pantalla 3 si aplica]: [qué muestra o hace]

¿Necesita guardar datos? [sí/no y qué datos].
¿Necesita funcionar sin internet? [sí/no].

Con esta información, ayúdame a responder:
1. ¿Está bien definida la app o hay algo que debería aclarar?
2. ¿Qué pantalla debería construir primero?
3. ¿Hay alguna funcionalidad que parece simple pero podría complicarse?
```

> **¿Por qué hacer esto primero?** El agente va a tomar cientos de micro-decisiones técnicas al construir tu app. Esta conversación es la diferencia entre un agente que adivina y uno que entiende.

### Lee la respuesta y ajusta

Responde las preguntas del agente. Cuando sientas que entiende bien la app, escribe:

```
Perfecto. Ahora genera un documento de requisitos simplificado:
qué hace la app, cuáles son sus pantallas principales, y qué datos
necesita guardar. Sé conciso.
```

Guarda ese documento. Lo usarás en los siguientes pasos.

## Paso 3 — Conoce PomodoroTec
Duration: 0:08:00

El resto del codelab usa **PomodoroTec** como ejemplo de referencia.

### ¿Qué es el método Pomodoro?

Una técnica de productividad simple:

1. Trabajas con concentración total durante **25 minutos** (un "pomodoro")
2. Tomas un descanso de **5 minutos**
3. Repites el ciclo
4. Después de 4 pomodoros, tomas un descanso más largo de 15-30 minutos

### Las pantallas de PomodoroTec

**Pantalla 1 — Timer (pantalla principal)**
El corazón de la app. Muestra el temporizador en `MM:SS`, el modo actual (concentración o descanso), una barra de progreso, el contador de sesiones del día, y los botones Iniciar / Pausar / Reiniciar / Saltar descanso.

**Pantalla 2 — Historial de sesiones**
Lista cronológica de todas las sesiones completadas, guardadas localmente. Incluye fecha, hora de inicio, duración, y una nota breve por sesión.

**Pantalla 3 — Estadísticas**
Total de sesiones completadas hoy, esta semana y este mes. Gráfico de barras con sesiones por día (últimos 7 días).

**Pantalla 4 — Logros**
Sistema de recompensas: *Primera sesión*, *Racha de fuego* (5 sesiones en un día), *Semana productiva* (20 sesiones), *Madrugador* (sesión antes de las 7 AM).

**Pantalla 5 — Configuración**
Duraciones personalizables, modo oscuro, idioma, sonido y vibración.

### Las decisiones técnicas

| Decisión | ¿Por qué? |
|---|---|
| **Jetpack Compose** | Estándar actual de Android para interfaces |
| **Room Database** | Forma oficial de guardar datos estructurados sin internet |
| **DataStore** | Almacenamiento de preferencias, más moderno que SharedPreferences |
| **Navigation 3** | Librería de navegación más reciente de Google, diseñada para Compose |
| **Foreground Service** | Permite que el timer siga contando aunque el usuario cambie de app |
| **Material Design 3** | Sistema de diseño oficial de Google, con modo oscuro automático |

### Lo que construiremos en este codelab

- ✅ Pantalla del Timer — completamente funcional
- ✅ Pantalla de Historial — lista de sesiones guardadas
- ✅ Pantalla de Configuración — duraciones personalizables
- ✅ Navegación entre las tres pantallas
- ✅ App corriendo en un emulador real

Las pantallas de Estadísticas y Logros quedan como **challenges opcionales** al final.

## Paso 4 — Crear el proyecto
Duration: 0:08:00

### Crear el proyecto con el CLI

```bash
cd ~/Proyectos   # o la carpeta que prefieras
android create --name=PomodoroTec --package=com.gdg.pomodorotec
cd PomodoroTec
```

> **¿Qué hizo ese comando?** Descargó la plantilla oficial más reciente de Google y generó el esqueleto completo del proyecto con Android Gradle Plugin 9 y Kotlin 2.0. Lo que antes tomaba 30 minutos de configuración manual, tomó segundos.

### Instalar las Android Skills

```bash
android skills add --all
```

Verás algo como:
```
✓ Installed skill: android-cli
✓ Installed skill: edge-to-edge
✓ Installed skill: navigate-xml-views-to-jetpack-compose
✓ Installed skill: agp-9-upgrade
✓ Installed skill: navigation-3
✓ Installed skill: r8-analyzer
✓ 6 skills installed in .agent/skills/
```

Cada línea es un archivo de instrucciones que el agente leerá automáticamente cuando la tarea lo requiera.

**¿Quieres ver qué hay dentro?**
```bash
cat .agent/skills/edge-to-edge/SKILL.md
```

Verás texto plano en Markdown: instrucciones escritas para la IA, no código.

### Dar contexto global al agente

Crea el archivo `AGENTS.md` en la raíz del proyecto:

```bash
touch AGENTS.md
```

Agrégale este contenido:

```markdown
# PomodoroTec — Contexto del proyecto

## ¿Qué hace esta app?
PomodoroTec es una app de productividad basada en el método Pomodoro.
El usuario trabaja 25 minutos, descansa 5 minutos, y la app lleva el registro.

## Tecnologías a usar
- UI: Jetpack Compose (nunca XML)
- Base de datos: Room con KSP
- Preferencias: DataStore
- Navegación: Navigation 3
- Arquitectura: MVVM
- Paquete base: com.gdg.pomodorotec

## Reglas
- Todo el código en Kotlin
- Seguir las Android Skills instaladas en .agent/skills/
```

> **¿Por qué este archivo?** El agente lee `AGENTS.md` al inicio de cada conversación. Sin él, el agente podría olvidar el contexto entre sesiones y generar código inconsistente.

### Explorar lo que se generó

```bash
# macOS
open -a "Android Studio" .
```

```
PomodoroTec/
├── app/src/main/
│   ├── java/com/gdg/pomodorotec/
│   │   └── MainActivity.kt
│   ├── res/
│   └── AndroidManifest.xml
├── .agent/skills/
├── AGENTS.md
└── build.gradle.kts
```

## Paso 5 — Pedirle al agente que planee el desarrollo
Duration: 0:08:00

En lugar de darte los prompts de construcción directamente, le pediremos al agente que los genere.

### Abrir Gemini CLI en el proyecto

```bash
gemini
```

Al abrirse dentro de la carpeta `PomodoroTec`, el agente automáticamente tiene acceso a tu `AGENTS.md` y las Android Skills.

### Darle el plan de construcción

```
Tengo el proyecto PomodoroTec ya creado con android create.
Leíste el AGENTS.md y las Skills instaladas.

Voy a construir el núcleo de la app en este orden:
1. Pantalla del Timer (pantalla principal con cuenta regresiva)
2. Historial de sesiones (lista guardada con Room)
3. Pantalla de Configuración (duraciones personalizables con DataStore)
4. Navegación entre las tres pantallas

Para cada uno de estos 4 puntos, genera el prompt exacto que yo
debería darte para construirlo. Los prompts deben:
- Estar escritos en español
- Ser específicos para PomodoroTec
- Asumir que conoces el AGENTS.md y las Skills instaladas
- Ser lo suficientemente detallados para que puedas generar código correcto

Genera los 4 prompts numerados y listos para usar.
```

### Guardar los prompts generados

Copia los 4 prompts en un archivo de texto. Los usarás en los siguientes pasos.

> **¿Por qué hacemos esto en lugar de darte los prompts directo?** Porque estás aprendiendo la habilidad más importante: cómo hablarle a un agente de IA de forma que produzca resultados útiles.

## Paso 6 — Construir la Pantalla del Timer
Duration: 0:15:00

### Entender qué vamos a construir

La pantalla del Timer tiene dos capas:

1. **La lógica** (`TimerViewModel`): maneja la cuenta regresiva, sabe si está corriendo o pausado, y registra las sesiones completadas.
2. **La interfaz** (`TimerScreen`): el número grande, la barra de progreso, los botones.

La separación existe por una razón práctica: si mezclamos la lógica con la interfaz, rotar el teléfono reiniciaría el timer.

### Ejecutar el primer prompt

En Gemini, escribe el **Prompt 1** que generaste en el paso anterior.

El agente creará varios archivos nuevos:

- `ui/timer/TimerViewModel.kt` — la lógica del timer
- `ui/timer/TimerScreen.kt` — la pantalla Compose
- Posiblemente actualizará `MainActivity.kt`

### Revisar el código generado

En `TimerViewModel.kt`, busca:
- Una clase de estado como `TimerUiState` con campos `timeRemainingSeconds`, `isRunning`, `mode`
- Funciones `startTimer()`, `pauseTimer()`, `resetTimer()`

En `TimerScreen.kt`, busca:
- Un texto grande para el tiempo
- Botones con los textos "Iniciar", "Pausar", "Reiniciar"

Si algo no coincide, díselo al agente en lenguaje natural:

```
El botón de "Saltar descanso" no aparece. Debería ser visible
solo cuando el modo es descanso, no cuando es concentración.
```

### Agregar Hilt (inyección de dependencias)

Si el agente usó `@HiltViewModel`, configura Hilt explícitamente:

```
El proyecto necesita Hilt configurado para que los ViewModels funcionen.
Configura Hilt completo: dependencias en build.gradle.kts, la clase
Application con @HiltAndroidApp, y la anotación @AndroidEntryPoint
en MainActivity. Registra la Application en el AndroidManifest.
```

## Paso 7 — Construir el Historial de Sesiones
Duration: 0:15:00

### Entender qué vamos a construir

El historial usa **Room**, la forma oficial de Android de guardar datos estructurados en el dispositivo. Room necesita tres piezas:

- **Entity**: la plantilla de un registro (cómo es una sesión: fecha, duración, tipo)
- **DAO**: las operaciones disponibles (guardar, obtener lista, borrar)
- **Database**: la base de datos que une todo

### Ejecutar el segundo prompt

En Gemini, escribe el **Prompt 2**.

El agente creará:

- `data/db/SessionEntity.kt`
- `data/db/SessionDao.kt`
- `data/db/PomodoroDatabase.kt`
- `data/repository/SessionRepository.kt`
- `ui/history/HistoryScreen.kt`
- `ui/history/HistoryViewModel.kt`

### Conectar el timer con el historial

```
Cuando el timer llega a cero en TimerViewModel, debe guardar
automáticamente la sesión completada en Room usando SessionRepository.
La sesión debe incluir la hora de inicio, la duración y el modo
(concentración o descanso). Conecta el repositorio al ViewModel.
```

La pantalla de historial debe mostrar "Aún no hay sesiones" si está vacía, y la lista de sesiones con fecha, hora y duración cuando hay datos.

## Paso 8 — Construir la Pantalla de Configuración
Duration: 0:12:00

### Entender qué vamos a construir

La configuración usa **DataStore**, que guarda preferencias del usuario como pares clave-valor.

La diferencia con Room: Room guarda listas de registros. DataStore guarda configuraciones simples (la duración de la sesión es 25 minutos).

### Ejecutar el tercer prompt

En Gemini, escribe el **Prompt 3**.

El agente creará:

- `data/preferences/UserPreferencesRepository.kt`
- `ui/settings/SettingsScreen.kt`
- `ui/settings/SettingsViewModel.kt`

### Conectar las preferencias al timer

```
El TimerViewModel debe leer la duración de las sesiones desde
UserPreferencesRepository. Si el usuario cambia la duración a 30 minutos
en configuración, el timer debe mostrar 30:00 la próxima vez que se reinicie.
```

## Paso 9 — Conectar las tres pantallas con Navigation
Duration: 0:12:00

### Entender qué vamos a construir

Conectaremos las tres pantallas con una barra de navegación inferior usando **Navigation 3**, la versión más reciente del sistema de navegación de Android.

### Ejecutar el cuarto prompt

En Gemini, escribe el **Prompt 4**.

El agente creará o modificará:

- `ui/navigation/AppNavigation.kt`
- `MainActivity.kt` — con la navegación completa

La app tendrá una barra inferior con tres íconos: Timer, Historial y Configuración.

### Si algo no funciona

```
La barra de navegación inferior no muestra el ícono activo resaltado
cuando estoy en la pantalla de Historial. El ícono del Timer sigue
resaltado aunque no esté en esa pantalla. ¿Cómo se corrige?
```

## Paso 10 — Ejecutar en el emulador
Duration: 0:08:00

### Crear y lanzar el emulador

```bash
android emulator create
android emulator start
```

El emulador tardará 1-2 minutos en arrancar la primera vez.

### Compilar e instalar la app

```bash
android run
```

Este comando compila el código Kotlin, empaqueta todo en un APK, e instala ese APK en el emulador. La primera compilación tarda 2-4 minutos.

### ¿Y si hay un error de compilación?

Copia el error completo y pégalo en Gemini:

```
Tengo este error al compilar:

[pega aquí el error completo]

Revisa los archivos del proyecto y corrígelo.
```

### Probar la app

Con la app corriendo en el emulador:

1. Toca **"Iniciar"** → el timer debe contar regresivamente
2. Toca **"Pausar"** → debe detenerse
3. Toca **"Reiniciar"** → debe volver a 25:00
4. Navega a **Historial** → inicialmente vacío
5. Ve a **Configuración** → cambia la duración a 1 minuto, regresa y verifica que muestra 01:00

> **Tip:** Para probar el historial sin esperar 25 minutos, pídele al agente: "Agrega un modo de prueba donde el timer dura 10 segundos."

## Paso 11 — Pulido final
Duration: 0:05:00

### Modo oscuro

```
Configura el tema de PomodoroTec para que soporte modo oscuro automático.
Cuando el sistema operativo esté en modo oscuro, la app debe verse oscura.
Usa Material Design 3 con Dynamic Color para Android 12 y superior.
```

Prueba yendo a la configuración del emulador → "Display" → "Dark theme".

### Revisar la arquitectura

```
Revisa los archivos del proyecto y verifica:
1. ¿Hay algo que pueda causar un crash al rotar la pantalla?
2. ¿Hay operaciones de base de datos que estén bloqueando el hilo principal?
3. ¿Hay imports sin usar o código duplicado evidente?
Reporta lo que encuentres y corrige lo que sea urgente.
```

## ¡Felicitaciones!
Duration: 0:02:00

Construiste una app Android funcional con:

- **3 pantallas** conectadas con navegación
- **Timer** que cuenta regresivamente y alterna entre concentración y descanso
- **Historial** guardado localmente en una base de datos
- **Configuración** que persiste entre sesiones de la app
- **Arquitectura MVVM** correcta
- **Material Design 3** con soporte de modo oscuro

Y lo hiciste sin necesitar saber qué es un StateFlow, cómo funciona Room internamente, o cómo se configura Gradle.

## Challenges opcionales
Duration: 0:00:00

### Challenge 1 — Notificaciones persistentes

```
Cuando el timer esté corriendo y el usuario salga de la app,
debe aparecer una notificación persistente mostrando el tiempo
restante. La notificación debe tener botones de Pausar y Detener.
Implementa un Foreground Service para mantener el timer
funcionando en segundo plano.
```

### Challenge 2 — Pantalla de Estadísticas

```
Crea una cuarta pantalla llamada Estadísticas.
Muestra el total de sesiones completadas hoy, esta semana y este mes.
Agrega un gráfico de barras con las sesiones por día de los últimos 7 días.
Usa la librería Vico para el gráfico. Agrégala a la navegación inferior.
```

### Challenge 3 — Sistema de Logros

```
Crea una quinta pantalla de Logros.
Implementa al menos 4 logros:
- "Primera sesión": completar 1 pomodoro
- "Racha de fuego": 5 sesiones en un día
- "Semana productiva": 20 sesiones en una semana
- "Madrugador": iniciar una sesión antes de las 7 AM
Cuando se desbloquee un logro, muestra una animación de celebración.
```

### Challenge 4 — Widget de pantalla de inicio

```
Crea un widget para la pantalla de inicio del teléfono que muestre
el tiempo restante del timer y tenga botones de Iniciar y Detener.
Usa Glance, la librería moderna de widgets para Compose.
```

### Challenge 5 — Tu propia skill

```
Crea una Skill personalizada para PomodoroTec que le enseñe a
cualquier agente las convenciones específicas de este proyecto.
Agrégala en .agent/skills/pomodorotec-conventions/SKILL.md
```

## Referencia rápida de comandos
Duration: 0:00:00

```bash
# Instalación (una sola vez)
android init
npm install -g @google/gemini-cli

# Por proyecto nuevo
android create --name=NombreApp --package=com.paquete.app
cd NombreApp
android skills add --all

# Flujo diario
gemini                    # iniciar el agente
android emulator create   # crear emulador (una vez)
android emulator start    # iniciar emulador
android run               # compilar e instalar

# Utilidades
android screen capture    # captura de pantalla del emulador
android layout            # jerarquía de UI en JSON
android docs search "tema" # buscar en la Knowledge Base oficial
```

### Glosario

| Término | Qué significa en este codelab |
|---|---|
| **Android Skills** | Instrucciones en texto plano que le enseñan a la IA las mejores prácticas actuales de Android |
| **AGENTS.md** | Archivo con el contexto de tu proyecto que el agente lee en cada conversación |
| **Compose** | La forma moderna de construir interfaces en Android, todo en código Kotlin |
| **DataStore** | El "cajón" donde la app guarda configuraciones del usuario de forma persistente |
| **Emulador** | Un teléfono Android virtual que corre en tu computadora |
| **Foreground Service** | Un componente que mantiene la app "viva" en segundo plano con una notificación visible |
| **Hilt** | La herramienta que conecta automáticamente las dependencias entre las partes de la app |
| **Material Design 3** | El sistema de diseño visual de Google — colores, tipografía, componentes |
| **MVVM** | Patrón que separa la interfaz, la lógica y los datos en capas independientes |
| **Navigation 3** | La librería de Google para moverse entre pantallas de una app |
| **Room** | La forma oficial de guardar datos estructurados en el dispositivo |
| **ViewModel** | El componente que guarda la lógica y el estado de una pantalla, y sobrevive a rotaciones |

### Repositorio de referencia

¿Quieres ver cómo quedó la app terminada? Puedes revisar el código completo aquí:
[github.com/Me7aBen/PomodoroTec-V2](https://github.com/Me7aBen/PomodoroTec-V2)

### Recursos

- **Android Skills**: [developer.android.com/android-skills](https://developer.android.com/android-skills)
- **Android CLI**: [developer.android.com/tools/android-cli](https://developer.android.com/tools/android-cli)
- **Gemini CLI**: [geminicli.com](https://geminicli.com)
- **Jetpack Compose**: [developer.android.com/compose](https://developer.android.com/compose)
- **Material Design 3**: [m3.material.io](https://m3.material.io)
