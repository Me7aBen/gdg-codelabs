id: android-agente-tu-app
summary: Construí tu propia app Android conversando con un agente de IA. Sin experiencia previa en Android — terminás con tu idea corriendo en un emulador real.
status: Published
authors: GDG Local
categories: Android
environments: Web
feedback link: https://me7aben.github.io/gdg-codelabs/

# Tu app Android con IA: de idea a emulador

## Antes de empezar
Duration: 0:03:00

Este codelab tiene una sola regla: **vas a construir tu propia app, no la de alguien más**.

El agente de IA se encarga de las decisiones técnicas — qué librerías usar, cómo configurar Gradle, cómo estructurar el código. Tu trabajo es saber qué querés construir y guiar las decisiones de producto.

Al terminar habrás instalado tu app en un emulador Android y la habrás probado en vivo.

### Lo que aprenderás

- Cómo definir una app de manera que un agente de IA pueda construirla
- Cómo usar el **Android CLI** para crear proyectos desde la terminal
- Qué son las **Android Skills** y por qué hacen que el agente genere código correcto
- Cómo ejecutar tu app en un emulador virtual sin hardware real

### Requisitos previos

| Software | Para qué sirve |
|---|---|
| **Android Studio** (versión Ladybug o superior) | Instala el Android SDK que todo lo demás necesita |
| **JDK 17 o superior** | Compila el código Kotlin |

**¿Cómo verifico si ya los tengo?** Abre una terminal y escribe:

```bash
java -version   # debe mostrar 17 o mayor
```

Si falla o muestra una versión menor, instalalo antes de continuar:

- Android Studio → [developer.android.com/studio](https://developer.android.com/studio)
- JDK → [adoptium.net](https://adoptium.net) (descarga Temurin 17 LTS)

También necesitarás una **cuenta de Google** para autenticarte en Antigravity CLI.

### Una cosa antes de arrancar: tu idea de app

Mientras instalás las herramientas, pensá en **qué app querés construir**.

No tiene que ser perfecta. Solo necesitás poder responder estas tres preguntas:

1. **¿Qué problema resuelve?** (en una oración)
2. **¿Qué hace el usuario en la pantalla principal?**
3. **¿Necesita guardar datos?** (sí / no)

Anotalas. Las vas a usar en el Paso 2.

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

> **¿Usás el IDE de Antigravity desktop?** No necesitás instalar `agy` por separado — el agente viene incluido en el IDE. Las conversaciones las hacés en el panel de chat, y los comandos `android` los ejecutás desde la terminal integrada del IDE. Instalá las Android Skills desde **Settings → Customizations → Build With Google Plugins** en lugar de `android skills add --all`. El resto del codelab aplica igual.

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

La primera vez que ejecutes `agy`, va a abrir el navegador para que inicies sesión con tu cuenta de Google. Seguí las instrucciones en pantalla — es el único paso manual.

Verificá que funcione:
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

Creá una carpeta para tu proyecto y abrí el agente ahí:

```bash
mkdir ~/Proyectos
cd ~/Proyectos
agy
```

### El prompt de definición

Escribí este mensaje, reemplazando las partes en corchetes con tu propia idea:

```
Hola. Voy a construir una app Android y quiero que seas mi co-developer.

Mi app se llama [nombre de tu app].

Lo que hace: [describe en 2-3 oraciones qué problema resuelve y para quién].

La pantalla principal muestra: [qué ve el usuario al abrir la app].

[Si aplica: "También tiene una pantalla de [nombre] donde el usuario puede [acción]."]

¿Necesita guardar datos? [sí/no y qué datos].
¿Necesita funcionar sin internet? [sí/no].

Con esta información, respondeme:
1. ¿Está bien definida la app o hay algo que debería aclarar?
2. ¿Qué pantalla debería construir primero para tener algo funcional rápido?
3. ¿Hay alguna funcionalidad que parece simple pero podría complicarse?
```

### Lee la respuesta y ajustá

El agente puede hacerte preguntas o sugerir simplificaciones. Respondelas con tus propias palabras — no hay respuestas correctas o incorrectas.

Cuando sientas que el agente entiende bien qué querés construir, pedile:

```
Perfecto. Hacé un resumen de dos párrafos:
qué hace la app y cuál es la primera pantalla que vamos a construir.
```

Guardá ese resumen. Lo vas a pegar en el `AGENTS.md` del proyecto.

## Paso 3 — Crear el proyecto
Duration: 0:07:00

### Crear el proyecto con el CLI

Elegí un nombre para tu app sin espacios (usá CamelCase) y un paquete en formato `com.tuempresa.nombreapp`:

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

Creá el archivo `AGENTS.md` en la raíz del proyecto:

```bash
touch AGENTS.md
```

Abrilo con cualquier editor de texto y pegá este contenido, completando las partes en corchetes con la información de tu app y el resumen que guardaste en el Paso 2:

```markdown
# [Nombre de tu app] — Contexto del proyecto

## ¿Qué hace esta app?
[Pegá el resumen de dos párrafos que generó el agente]

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

### Abrí Antigravity en el proyecto

```bash
agy
```

Al ejecutarse dentro de la carpeta del proyecto, el agente lee automáticamente tu `AGENTS.md` y las Android Skills.

### Pedile el plan

```
Leíste el AGENTS.md y las Skills instaladas.

Quiero construir la app de forma progresiva. Mi objetivo para esta sesión
es tener UNA pantalla funcional corriendo en el emulador.

Basándote en lo que sabés de mi app:
1. ¿Cuál es la pantalla más importante para construir primero?
2. Generá el prompt exacto que debería darte para construirla.
   El prompt debe:
   - Estar escrito en español
   - Ser específico para mi app (no genérico)
   - Asumir que conocés el AGENTS.md y las Skills instaladas
   - Incluir qué archivos Kotlin crear y qué debe mostrar la pantalla

Generá solo ese primer prompt. Una vez que tengamos eso funcionando,
vemos si hay tiempo para más.
```

### Guardá el prompt generado

Copiá el prompt en un bloc de notas. Lo usás en el siguiente paso.

> **¿Por qué pedirle al agente que genere el prompt?** Estás aprendiendo la habilidad más transferible: cómo pedirle a un agente que planifique su propio trabajo. Eso funciona para cualquier app, no solo para esta.

## Paso 5 — Construir la primera pantalla
Duration: 0:20:00

### Ejecutar el prompt

En la sesión de Antigravity, pegá el prompt que el agente generó en el Paso 4.

El agente va a crear archivos nuevos en el proyecto. Dependiendo de tu app, pueden ser cosas como:

- `ui/main/MainScreen.kt` — la pantalla principal en Compose
- `ui/main/MainViewModel.kt` — la lógica de la pantalla
- Actualizaciones en `MainActivity.kt`

### Revisá lo que generó

Antes de compilar, pedile al agente que revise su propio trabajo:

```
Antes de compilar, revisá los archivos que creaste y verificá:
1. ¿Hay imports que faltan o están mal?
2. ¿El MainActivity está correctamente configurado para mostrar la pantalla?
3. ¿Hay algún error obvio que impediría compilar?

Si encontrás algo, corregilo antes de seguir.
```

### Si hay errores de compilación

Es normal que aparezcan errores la primera vez. Copiá el error completo y pégalo en Antigravity:

```
Tengo este error al compilar:

[pega aquí el error completo tal como aparece en la terminal]

Revisá los archivos del proyecto y corregilo.
```

Repetí hasta que compile sin errores.

### Si querés más funcionalidad

Si quedó tiempo y el agente completó la primera pantalla, podés pedirle:

```
La pantalla compila y se ve bien. ¿Qué podríamos agregar
en 15 minutos más para que la app sea más útil o completa?
Dame 2 opciones ordenadas de menor a mayor complejidad.
```

## Paso 6 — Lanzar en el emulador
Duration: 0:08:00

### Crear el emulador

```bash
android emulator create
```

Este comando descarga una imagen del sistema Android y crea un teléfono virtual en tu computadora. Puede tardar 2-3 minutos la primera vez.

### Iniciar el emulador

```bash
android emulator start
```

El emulador tarda 1-2 minutos en arrancar. Cuando veas la pantalla de inicio de Android, está listo.

### Compilar e instalar tu app

```bash
android run
```

Este comando compila todo el código Kotlin, genera el APK e instala la app en el emulador. **La primera compilación tarda 3-6 minutos** — es normal, las siguientes son mucho más rápidas.

### Probá tu app

Con la app corriendo en el emulador:

- Interactuá con todos los elementos que implementaste
- Si algo no se ve como esperabas, tomá nota y lo ajustás con el agente
- Si algo falla o no aparece, copiá cualquier error de la terminal y pedile al agente que lo corrija

> **Tip:** Una vez instalada la primera vez, podés volver a compilar con `android run` en cualquier momento — tarda 20-30 segundos en las compilaciones posteriores.

### Ajustes finales

Si algo en la UI no quedó como esperabas, describíselo al agente en lenguaje natural:

```
El botón de [acción] no aparece. Debería estar
[describí dónde y cómo debería verse].
```

El agente va a modificar los archivos correspondientes. Volvé a ejecutar `android run` para ver los cambios.

## ¡Tu app está corriendo!
Duration: 0:02:00

Tenés tu propia app Android instalada en un emulador real. Sin haber configurado Gradle manualmente, sin haber tenido que elegir librerías, sin haber escrito el esqueleto del proyecto desde cero.

Lo que construiste hoy es un punto de partida real — no un "Hola mundo". Tiene una arquitectura correcta (MVVM), usa las librerías modernas de Android (Jetpack Compose), y está lista para crecer.

### ¿Qué sigue?

Algunas ideas para continuar:

- **Agregar más pantallas** — usá el mismo flujo: describí la pantalla al agente, generá el prompt, construí, corré
- **Guardar datos** — pedile al agente que integre Room (base de datos) o DataStore (configuración) según tu app
- **Publicar** — construí un APK de release y compartilo, o publicalo en la Play Store
- **Explorar el código** — preguntale al agente que te explique cualquier parte del código que no entendés

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
