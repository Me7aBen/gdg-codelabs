id: android-agente-tu-app
summary: Construye tu propia app Android conversando con un agente de IA. Sin experiencia previa en Android — terminas con tu idea corriendo en un emulador real.
status: Published
authors: GDG Local
categories: Android
environments: Web
feedback link: https://me7aben.github.io/gdg-codelabs/

# Tu app Android con IA: de idea a emulador

## Antes de empezar
Duration: 0:03:00

Este codelab tiene una sola regla: **vas a construir tu propia app, no la de alguien más**.

El agente de IA se encarga de las decisiones técnicas — qué librerías usar, cómo configurar Gradle, cómo estructurar el código. Tu trabajo es saber qué quieres construir y guiar las decisiones de producto.

Al terminar habrás instalado tu app en un emulador Android y la habrás probado en vivo.

### Lo que aprenderás

- Cómo definir una app de manera que un agente de IA pueda construirla
- Cómo usar el **Android CLI** para crear proyectos desde la terminal
- Qué son las **Android Skills** y por qué hacen que el agente genere código correcto
- Cómo ejecutar tu app en un emulador virtual sin hardware real

### Requisitos previos

| Herramienta | Estado |
|---|---|
| **Android CLI** | Requerido — lo instalas en el Paso 1 |
| **Antigravity CLI** | Requerido — lo instalas en el Paso 1 |
| **JDK 17 o superior** | Requerido para compilar |
| **Android Studio** | Opcional — solo necesario si quieres usar el emulador virtual |
| **Teléfono Android** | Recomendado — la forma más rápida de probar sin instalar nada extra |

**¿Cómo verifico el JDK?** Abre una terminal y escribe:

```bash
java -version   # debe mostrar 17 o mayor
```

Si falla, instala JDK desde [adoptium.net](https://adoptium.net) (descarga Temurin 17 LTS).

También necesitarás una **cuenta de Google** para autenticarte en Antigravity CLI.

### Una cosa antes de empezar: tu idea de app

Mientras lees esto, piensa en **qué app quieres construir**.

No tiene que ser perfecta. Solo necesitas poder responder estas tres preguntas:

1. **¿Qué problema resuelve?** (en una oración)
2. **¿Qué hace el usuario en la pantalla principal?**
3. **¿Necesita guardar datos?** (sí / no)

Anótalas. Las usarás en el Paso 2.

## Paso 1 — Instalar las herramientas
Duration: 0:08:00

### Instalar el Android CLI

El Android CLI es una herramienta de terminal creada por Google para que los agentes de IA puedan interactuar con el SDK de Android.

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

### Instalar Antigravity CLI

Antigravity CLI (`agy`) es el agente de IA que vas a usar para construir la app. Es un binario estático que no requiere Node.js ni dependencias adicionales.

> **¿Usas el IDE de Antigravity desktop?** No necesitas instalar `agy` por separado — el agente viene incluido en el IDE. Las conversaciones las haces en el panel de chat, y los comandos `android` los ejecutas desde la terminal integrada del IDE. Instala las Android Skills desde **Settings → Customizations → Build With Google Plugins** en lugar de `android skills add --all`. El resto del codelab aplica igual.

**macOS / Linux:**
```bash
curl -fsSL https://antigravity.google/cli/install.sh | bash
export PATH="$HOME/.local/bin:$PATH"
agy --version
```

**Windows (PowerShell):**
```powershell
irm https://antigravity.google/cli/install.ps1 | iex
agy --version
```

### Autenticarse

La primera vez que ejecutes `agy`, abrirá el navegador para que inicies sesión con tu cuenta de Google. Sigue las instrucciones en pantalla — es el único paso manual.

Verifica que funcione:
```bash
agy "Responde solo esto: listo"
```

### Inicializar el entorno Android

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

> **¿Qué hizo ese comando?** Detectó tu instalación del Android SDK y preparó el entorno para que el agente pueda interactuar con él.

## Paso 2 — Define tu app con el agente
Duration: 0:10:00

Antes de crear el proyecto, vamos a **tener una conversación** con el agente sobre tu idea.

El motivo es práctico: el agente va a tomar cientos de micro-decisiones técnicas al construir la app. Esta conversación es la diferencia entre un agente que adivina y uno que entiende qué estás construyendo.

### Abre Antigravity CLI

Crea una carpeta para tu proyecto y abre el agente ahí:

```bash
mkdir ~/Proyectos
cd ~/Proyectos
agy
```

### El prompt de definición

Escribe este mensaje, reemplazando las partes en corchetes con tu propia idea:

```
Hola. Voy a construir una app Android y quiero que seas mi co-developer.

Mi app se llama [nombre de tu app].

Lo que hace: [describe en 2-3 oraciones qué problema resuelve y para quién].

La pantalla principal muestra: [qué ve el usuario al abrir la app].

[Si aplica: "También tiene una pantalla de [nombre] donde el usuario puede [acción]."]

¿Necesita guardar datos? [sí/no y qué datos].
¿Necesita funcionar sin internet? [sí/no].

Con esta información, respóndeme:
1. ¿Está bien definida la app o hay algo que debería aclarar?
2. ¿Qué pantalla debería construir primero para tener algo funcional rápido?
3. ¿Hay alguna funcionalidad que parece simple pero podría complicarse?
```

### Lee la respuesta y ajusta

El agente puede hacerte preguntas o sugerir simplificaciones. Respóndelas con tus propias palabras — no hay respuestas correctas o incorrectas.

Cuando sientas que el agente entiende bien qué quieres construir, pídele:

```
Perfecto. Haz un resumen de dos párrafos:
qué hace la app y cuál es la primera pantalla que vamos a construir.
```

Guarda ese resumen. Lo pegarás en el `AGENTS.md` del proyecto.

## Paso 3 — Crear el proyecto
Duration: 0:07:00

### Crear el proyecto con el CLI

Elige un nombre para tu app sin espacios (usa CamelCase) y un paquete en formato `com.tuempresa.nombreapp`:

```bash
cd ~/Proyectos
android create --name=TuApp --package=com.tunombre.tuapp
cd TuApp
```

> **¿Qué hizo ese comando?** Descargó la plantilla oficial más reciente de Google con Android Gradle Plugin 9 y Kotlin 2.0 — configuración que antes tomaba 30 minutos manual.

### Instalar las Android Skills

```bash
android skills add --all
```

Las Android Skills son archivos de instrucciones en texto plano que le enseñan al agente las mejores prácticas actuales de Android. Con estas instaladas, el agente va a generar código moderno y correcto en lugar de código desactualizado.

### Crear el archivo de contexto

Crea el archivo `AGENTS.md` en la raíz del proyecto:

```bash
touch AGENTS.md
```

Ábrelo con cualquier editor de texto y pega este contenido, completando las partes en corchetes con la información de tu app y el resumen que guardaste en el Paso 2:

```markdown
# [Nombre de tu app] — Contexto del proyecto

## ¿Qué hace esta app?
[Pega el resumen de dos párrafos que generó el agente]

## Tecnologías a usar
- UI: Jetpack Compose (nunca XML)
- Arquitectura: MVVM
- Paquete base: [com.tunombre.tuapp]

## Reglas
- Todo el código en Kotlin
- Seguir las Android Skills instaladas en .agent/skills/
```

> **¿Por qué este archivo?** El agente lee `AGENTS.md` al inicio de cada sesión. Sin él, el agente empieza cada conversación sin contexto y puede tomar decisiones inconsistentes.

## Paso 4 — Generar el plan de construcción
Duration: 0:08:00

En lugar de darte los prompts de construcción directamente, le vamos a pedir al agente que los genere para tu app específica.

### Abre Antigravity en el proyecto

```bash
agy
```

Al ejecutarse dentro de la carpeta del proyecto, el agente lee automáticamente tu `AGENTS.md` y las Android Skills.

### Pídele el plan

```
Leíste el AGENTS.md y las Skills instaladas.

Quiero construir la app de forma progresiva. Mi objetivo para esta sesión
es tener UNA pantalla funcional corriendo en el emulador.

Basándote en lo que sabes de mi app:
1. ¿Cuál es la pantalla más importante para construir primero?
2. Genera el prompt exacto que debería darte para construirla.
   El prompt debe:
   - Estar escrito en español
   - Ser específico para mi app (no genérico)
   - Asumir que conoces el AGENTS.md y las Skills instaladas
   - Incluir qué archivos Kotlin crear y qué debe mostrar la pantalla

Genera solo ese primer prompt. Una vez que tengamos eso funcionando,
vemos si hay tiempo para más.
```

### Guarda el prompt generado

Copia el prompt en un bloc de notas. Lo usarás en el siguiente paso.

> **¿Por qué pedirle al agente que genere el prompt?** Estás aprendiendo la habilidad más transferible: cómo pedirle a un agente que planifique su propio trabajo. Eso funciona para cualquier app, no solo para esta.

## Paso 5 — Construir la primera pantalla
Duration: 0:20:00

### Ejecutar el prompt

En la sesión de Antigravity, pega el prompt que el agente generó en el Paso 4.

El agente va a crear archivos nuevos en el proyecto. Dependiendo de tu app, pueden ser cosas como:

- `ui/main/MainScreen.kt` — la pantalla principal en Compose
- `ui/main/MainViewModel.kt` — la lógica de la pantalla
- Actualizaciones en `MainActivity.kt`

### Revisa lo que generó

Antes de compilar, pídele al agente que revise su propio trabajo:

```
Antes de compilar, revisa los archivos que creaste y verifica:
1. ¿Hay imports que faltan o están mal?
2. ¿El MainActivity está correctamente configurado para mostrar la pantalla?
3. ¿Hay algún error obvio que impediría compilar?

Si encuentras algo, corrígelo antes de seguir.
```

### Si hay errores de compilación

Es normal que aparezcan errores la primera vez. Copia el error completo y pégalo en Antigravity:

```
Tengo este error al compilar:

[pega aquí el error completo tal como aparece en la terminal]

Revisa los archivos del proyecto y corrígelo.
```

Repite hasta que compile sin errores.

### Si quieres más funcionalidad

Si quedó tiempo y el agente completó la primera pantalla, puedes pedirle:

```
La pantalla compila y se ve bien. ¿Qué podríamos agregar
en 15 minutos más para que la app sea más útil o completa?
Dame 2 opciones ordenadas de menor a mayor complejidad.
```

## Paso 6 — Instalar y probar tu app
Duration: 0:12:00

Tienes dos opciones para probar la app. Elige la que mejor se adapte a tu situación:

| | Opción A — Teléfono real ⭐ | Opción B — Emulador virtual |
|---|---|---|
| **Requisito** | Un teléfono Android + cable USB | Android Studio instalado |
| **Configuración** | 2 minutos | 5-15 minutos (descarga ~1 GB) |
| **Experiencia** | Real, táctil | Virtual, en pantalla |
| **Recomendado si…** | Tienes un Android a mano (casi siempre) | No tienes Android o no tienes cable |

---

### Opción A — Teléfono Android por USB (más rápido)

**En tu teléfono:**

1. Ve a **Configuración → Acerca del teléfono**
2. Toca **"Número de compilación"** 7 veces seguidas hasta ver "Eres desarrollador"
3. Ve a **Configuración → Opciones de desarrollador**
4. Activa **"Depuración USB"**
5. Conecta el teléfono a la computadora con un cable USB
6. En la pantalla del teléfono, acepta el mensaje de "¿Permitir depuración USB?"

**En la terminal:**

```bash
android run
```

El CLI detecta automáticamente el teléfono conectado e instala la app. Busca tu app en el menú de aplicaciones del teléfono.

> **¿El comando no detecta el teléfono?** Prueba `android devices` para listar los dispositivos conectados. Si no aparece nada, cambia el cable USB (algunos cables son solo de carga) o reinstala los drivers USB de Android en Windows.

---

### Opción B — Emulador virtual

El emulador requiere Android Studio instalado (para tener el SDK y las imágenes del sistema). Si no tienes Android Studio, ve al **Apéndice** al final de este codelab para instalar solo los componentes mínimos necesarios.

#### Si tienes Android Studio

Verifica que el entorno está listo:

```bash
android doctor
```

Si reporta licencias sin aceptar:

```bash
android licenses accept
```

**Nota sobre aceleración de hardware:**
- **macOS:** funciona automáticamente
- **Windows:** necesitas Hyper-V activado (Panel de control → Programas → Activar características de Windows → Hyper-V)
- **Linux:** necesitas KVM (`sudo apt install qemu-kvm` en Ubuntu/Debian)

Crea e inicia el emulador:

```bash
android emulator create
android emulator start
```

El emulador tarda 1-2 minutos en arrancar. Cuando veas la pantalla de inicio de Android, está listo.

### Compilar e instalar tu app

Independientemente de si usaste teléfono o emulador:

```bash
android run
```

Este comando compila todo el código Kotlin, genera el APK e instala la app. **La primera compilación tarda 3-6 minutos** — las siguientes son mucho más rápidas.

### Prueba tu app

Con la app corriendo en el emulador:

- Interactúa con todos los elementos que implementaste
- Si algo no se ve como esperabas, toma nota y lo ajustas con el agente
- Si algo falla o no aparece, copia cualquier error de la terminal y pídele al agente que lo corrija

> **Tip:** Una vez instalada la primera vez, puedes volver a compilar con `android run` en cualquier momento — tarda 20-30 segundos en las compilaciones posteriores.

### Ajustes finales

Si algo en la UI no quedó como esperabas, descríbeselo al agente en lenguaje natural:

```
El botón de [acción] no aparece. Debería estar
[describe dónde y cómo debería verse].
```

El agente va a modificar los archivos correspondientes. Vuelve a ejecutar `android run` para ver los cambios.

## ¡Tu app está corriendo!
Duration: 0:02:00

Tienes tu propia app Android instalada en un emulador real. Sin haber configurado Gradle manualmente, sin haber tenido que elegir librerías, sin haber escrito el esqueleto del proyecto desde cero.

Lo que construiste hoy es un punto de partida real — no un "Hola mundo". Tiene una arquitectura correcta (MVVM), usa las librerías modernas de Android (Jetpack Compose), y está lista para crecer.

### ¿Qué sigue?

Algunas ideas para continuar:

- **Agregar más pantallas** — usa el mismo flujo: describe la pantalla al agente, genera el prompt, construye, ejecuta
- **Guardar datos** — pídele al agente que integre Room (base de datos) o DataStore (configuración) según tu app
- **Publicar** — construye un APK de release y compártelo, o publícalo en la Play Store
- **Explorar el código** — pregúntale al agente que te explique cualquier parte del código que no entiendes

## Referencia rápida
Duration: 0:00:00

```bash
# Instalación (una sola vez)
curl -fsSL https://antigravity.google/cli/install.sh | bash   # macOS / Linux
# irm https://antigravity.google/cli/install.ps1 | iex        # Windows PowerShell
android init

# Por proyecto nuevo
android create --name=TuApp --package=com.tunombre.tuapp
cd TuApp
android skills add --all
# → crear AGENTS.md con contexto de la app

# Flujo de construcción
agy                       # iniciar el agente (desde la carpeta del proyecto)
android emulator create   # crear emulador (una vez)
android emulator start    # iniciar emulador
android run               # compilar e instalar (o reinstalar)
```

### Glosario

| Término | Qué significa en este codelab |
|---|---|
| **Android Skills** | Instrucciones en texto plano que le enseñan al agente las mejores prácticas de Android |
| **AGENTS.md** | Archivo con el contexto de tu proyecto — el agente lo lee al iniciar cada sesión |
| **Compose** | La forma moderna de construir interfaces en Android, en código Kotlin |
| **Emulador** | Un teléfono Android virtual que corre en tu computadora |
| **MVVM** | Patrón que separa la interfaz, la lógica y los datos — el agente lo aplica automáticamente |
| **ViewModel** | El componente que guarda el estado de una pantalla y sobrevive a rotaciones del dispositivo |

### Recursos

- **Android CLI**: [developer.android.com/tools/android-cli](https://developer.android.com/tools/android-cli)
- **Antigravity CLI**: [antigravity.google](https://antigravity.google)
- **Android Skills**: [developer.android.com/android-skills](https://developer.android.com/android-skills)
- **Jetpack Compose**: [developer.android.com/compose](https://developer.android.com/compose)
- **Material Design 3**: [m3.material.io](https://m3.material.io)

## Apéndice — Emulador sin Android Studio
Duration: 0:00:00

Si no tienes Android Studio pero quieres usar el emulador, puedes instalar solo los componentes mínimos del SDK de Android.

### 1. Descargar las command-line tools

Ve a [developer.android.com/studio#command-line-tools-only](https://developer.android.com/studio#command-line-tools-only) y descarga el paquete para tu sistema operativo.

Luego crea la estructura de carpetas que el SDK espera:

**macOS / Linux:**
```bash
mkdir -p ~/android-sdk/cmdline-tools
unzip commandlinetools-*.zip -d ~/android-sdk/cmdline-tools
mv ~/android-sdk/cmdline-tools/cmdline-tools ~/android-sdk/cmdline-tools/latest
export ANDROID_HOME=~/android-sdk
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator
```

Agrega las últimas dos líneas `export` a `~/.zshrc` o `~/.bashrc` para que persistan.

**Windows (PowerShell):**
```powershell
# Extrae el zip en C:\android-sdk\cmdline-tools\latest\
$env:ANDROID_HOME = "C:\android-sdk"
$env:Path += ";$env:ANDROID_HOME\cmdline-tools\latest\bin;$env:ANDROID_HOME\platform-tools;$env:ANDROID_HOME\emulator"
```

### 2. Instalar los componentes necesarios

```bash
# Aceptar licencias
sdkmanager --licenses

# Instalar build tools, plataforma, emulador e imagen del sistema
sdkmanager "platform-tools" "emulator" "platforms;android-35" "build-tools;35.0.0"

# Imagen del sistema — elige según tu arquitectura:
sdkmanager "system-images;android-35;google_apis;arm64-v8a"   # macOS Apple Silicon, Raspberry Pi, etc.
sdkmanager "system-images;android-35;google_apis;x86_64"      # macOS Intel, Windows, Linux
```

### 3. Crear el emulador

```bash
avdmanager create avd \
  --name mi_emulador \
  --package "system-images;android-35;google_apis;arm64-v8a" \
  --device "pixel_8"
```

Cambia `arm64-v8a` por `x86_64` si estás en Intel/Windows/Linux.

### 4. Verificar con Android CLI

```bash
android init   # debe detectar el SDK en ANDROID_HOME
android emulator start
```
