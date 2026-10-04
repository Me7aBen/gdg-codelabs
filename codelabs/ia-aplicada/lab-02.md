id: ia-aplicada-lab-02
summary: Laboratorio 2 del curso IA Aplicada a Tareas Laborales y Académicas. Investiga los KPI y buenas prácticas del sector de tu escenario con investigación profunda, verifica cada cita con un semáforo, redacta un informe breve y crea tu asistente reutilizable (Gem, agente de Copilot o GPT).
status: Published
authors: Benjamin Pareja
categories: IA, Productividad
environments: Web
feedback link: https://me7aben.github.io/gdg-codelabs/

# Laboratorio 2 — Investiga tu sector y crea tu asistente

## Antes de empezar
Duration: 0:03:00

En este laboratorio harás dos cosas:

1. **Investigar** qué KPI y buenas prácticas usa el sector de tu escenario, verificando cada cita antes de usarla.
2. **Crear un asistente reutilizable** con instrucciones propias, que te acompañará en las próximas sesiones (documentos, fórmulas de Excel y KPI).

**Duración:** 65 minutos (en clase).

**Qué entregas:** en la tarea "Laboratorio 2" del LMS, hoy hasta las 23:59:

- Ficha de evidencia en PDF (`Lab02_Apellido_Nombre.pdf`), con las capturas de tu asistente y sus instrucciones.
- Informe breve de 1 página (`Lab02_Informe_Apellido_Nombre.docx`).

### Lo que necesitas

| Requisito | Detalle |
|---|---|
| Herramienta de investigación | Deep Research de Gemini (recomendado; gratis con límite mensual), Deep Research de ChatGPT (versión ligera con pocos usos en el plan gratis) o el agente Investigador (Researcher) de Copilot si tu cuenta lo tiene. |
| Herramienta para el asistente | Gem de Gemini (gratis con cuenta Google), agente de Copilot Chat (cuenta de trabajo o estudio) o GPT personalizado (crearlo requiere ChatGPT de pago). |
| Procesador de texto | Word o Google Docs para el informe y la ficha. |
| Tu escenario | El que elegiste en el Laboratorio 1: control de equipos, logística o asistencia. |
| Tu ficha del Lab 1 | Tu mejor prompt mejorado: será la base de tu asistente. |

> **Ojo:** los planes gratuitos permiten pocas investigaciones profundas al mes. Prepara bien tu pregunta antes de lanzarla. Si ya no te quedan usos, usa el chat normal con búsqueda web y pide fuentes con enlace: el método de verificación es el mismo.

> **Ojo:** trabaja solo con **datos simulados**. No pegues nombres reales, DNI ni información confidencial de una empresa en la investigación ni en las instrucciones del asistente (Ley 29733 de Protección de Datos Personales).

### Las dos partes del laboratorio

| Parte | Resultado |
|---|---|
| **A. Investigación** | Informe breve con 3 a 5 KPI, 3 buenas prácticas y al menos 3 referencias verificadas. |
| **B. Asistente** | Un Gem, agente o GPT con instrucciones de 5 elementos, probado con 2 pedidos. |

## Plantea tu pregunta y lanza la investigación
Duration: 0:10:00

### 1. Escribe tu pregunta de investigación

Una buena pregunta es clara y acotada: dice el sector, el país y qué buscas. Usa la de tu escenario o ajústala:

| Escenario | Pregunta sugerida |
|---|---|
| **Control de equipos** | ¿Qué KPI usan las empresas industriales para medir el desempeño del mantenimiento y qué buenas prácticas ayudan a mejorarlos? |
| **Logística** | ¿Qué KPI usan las empresas de distribución para medir sus entregas y qué buenas prácticas reducen las incidencias de despacho? |
| **Asistencia** | ¿Qué KPI se usan para medir el ausentismo y la puntualidad del personal y qué buenas prácticas de control de asistencia aplican en Perú? |

### 2. Activa la investigación profunda

- **Gemini:** entra a gemini.google.com y, en las herramientas del chat, elige **Deep Research**. Antes de buscar, Gemini te muestra un **plan de investigación**: léelo y edítalo si falta algo (por ejemplo, "incluye fuentes peruanas") antes de iniciar.
- **ChatGPT:** entra a chatgpt.com y, en el menú **+** del chat, elige la investigación profunda (deep research). Si te hace preguntas antes de empezar, respóndelas con datos de tu escenario.
- **Copilot:** si tu cuenta tiene el agente **Researcher (Investigador)**, ábrelo desde la lista de agentes de Microsoft 365 Copilot.

### 3. Copia el prompt de tu escenario y lánzalo

**Control de equipos**

```
ROL: Actúa como analista de mantenimiento industrial.
CONTEXTO: Trabajo en una planta en Perú con 12 equipos: compresores,
bombas, fajas transportadoras, montacargas y generadores. Registramos
horas programadas, horas de operación, horas de parada, tipo de falla,
tipo de mantenimiento y costo de repuestos.
TAREA: Investiga qué KPI de mantenimiento usa el sector, cómo se calculan
y qué buenas prácticas ayudan a mejorarlos.
RESTRICCIONES: Prioriza normas técnicas, organismos y asociaciones
profesionales, y publicaciones con autor. Incluye el enlace de cada
afirmación. Si no encuentras fuente para algo, escribe "sin fuente".
No inventes cifras ni valores de referencia.
FORMATO: 1) Tabla con columnas KPI, fórmula, para qué sirve y fuente
(con enlace). 2) De 3 a 5 buenas prácticas, cada una con su fuente.
3) Lista final de fuentes.
```

**Logística**

```
ROL: Actúa como analista de operaciones logísticas.
CONTEXTO: Trabajo en una distribuidora en Perú que despacha a Lima Norte,
Lima Sur, Lima Centro, Callao y Arequipa con 4 transportistas.
Registramos fecha de pedido, fecha de compromiso, fecha de entrega,
estado del pedido, unidades pedidas y entregadas, incidencias (retraso,
dirección errada, producto dañado) y costo de flete.
TAREA: Investiga qué KPI de entregas usa el sector (por ejemplo, OTIF),
cómo se calculan y qué buenas prácticas reducen las incidencias.
RESTRICCIONES: Prioriza organismos y asociaciones de cadena de
suministro, entidades oficiales y publicaciones con autor. Incluye el
enlace de cada afirmación. Si no encuentras fuente, escribe "sin fuente".
No inventes cifras ni promedios del sector.
FORMATO: 1) Tabla con columnas KPI, fórmula, para qué sirve y fuente
(con enlace). 2) De 3 a 5 buenas prácticas, cada una con su fuente.
3) Lista final de fuentes.
```

**Asistencia**

```
ROL: Actúa como analista de recursos humanos.
CONTEXTO: Trabajo en una empresa de manufactura en Perú con 60
colaboradores en 4 áreas (Producción, Almacén, Administración y
Mantenimiento) y 3 turnos. Registramos hora de ingreso, minutos de
tardanza, faltas justificadas e injustificadas, horas trabajadas y
horas extra.
TAREA: Investiga qué KPI se usan para medir el ausentismo, la
puntualidad y las horas extra, cómo se calculan y qué buenas prácticas
de control de asistencia se recomiendan.
RESTRICCIONES: Incluye la normativa peruana vigente sobre el registro
de asistencia citando la fuente oficial (El Peruano o gob.pe). Prioriza
entidades oficiales y publicaciones con autor. Incluye el enlace de cada
afirmación. Si no encuentras fuente, escribe "sin fuente". No inventes
cifras ni porcentajes "aceptables".
FORMATO: 1) Tabla con columnas KPI, fórmula, para qué sirve y fuente
(con enlace). 2) De 3 a 5 buenas prácticas, cada una con su fuente.
3) Lista final de fuentes.
```

### 4. Deja que trabaje

La investigación tarda de 5 a 15 minutos. **No cierres la pestaña** y pasa al siguiente paso mientras tanto.

> **Verifica:** copia en tu ficha (parte 1) el prompt exacto que usaste. Si editaste el plan de Gemini o respondiste preguntas de ChatGPT, anota qué cambiaste.

## Mientras investiga: escribe las instrucciones de tu asistente
Duration: 0:08:00

Un asistente reutilizable es un chat con **instrucciones guardadas**: cada vez que lo abres ya sabe quién es, qué datos manejas y cómo debe responder. Es tu prompt de 5 elementos, escrito para durar.

Escribe tus instrucciones en un documento (las pegarás en la herramienta en el paso 6). Usa esta plantilla:

```
ROL: Eres el asistente de [tema] de [tipo de empresa] en Perú.
CONTEXTO: [Qué hace la empresa, qué datos registras (columnas), qué
códigos usas (EQ-101, PED-0001, COLAB-001) y qué KPI te interesan.]
TAREAS: 1) [Tarea frecuente 1]. 2) [Tarea frecuente 2]. 3) [Tarea 3].
REGLAS: Usa solo los datos que te doy; si falta algo, pregúntame antes
de responder. No inventes cifras ni fuentes. Si pego nombres reales o
DNI, recuérdame anonimizarlos. Las fórmulas de Excel van en español y
con punto y coma (;).
FORMATO: [Extensión, tono, cuándo usar tablas y cómo cerrar la respuesta.]
```

### Ejemplos por escenario

**Control de equipos**

```
ROL: Eres el asistente de reportes de mantenimiento de una planta
industrial en Perú.
CONTEXTO: La planta tiene 12 equipos (EQ-101 a EQ-112): compresores,
bombas, fajas transportadoras, montacargas y generadores, en las áreas
Planta, Almacén y Taller. Registramos por día: horas programadas, horas
de operación, horas de parada, tipo de falla, tipo de mantenimiento,
costo de repuestos y técnico (TEC-01 a TEC-06). Los KPI que seguimos son
disponibilidad, MTTR, MTBF y % de mantenimiento correctivo.
TAREAS: 1) Resumir registros de fallas. 2) Calcular y explicar KPI con
los datos que te pase. 3) Redactar avisos de parada e informes breves.
REGLAS: Usa solo los datos que te doy; si falta algo, pregúntame antes
de responder. No inventes cifras ni fuentes. Si pego nombres reales o
DNI, recuérdame anonimizarlos. Las fórmulas de Excel van en español y
con punto y coma (;).
FORMATO: Respuestas de máximo 200 palabras, tono claro y sin
tecnicismos innecesarios, con tabla cuando haya datos. Termina con una
línea "Siguiente paso:".
```

**Logística**

```
ROL: Eres el asistente de despachos e incidencias de una distribuidora
en Lima, Perú.
CONTEXTO: Registramos cada pedido con ID_Pedido (PED-0001), cliente
(CLI-01 a CLI-25), zona (Lima Norte, Lima Sur, Lima Centro, Callao,
Arequipa), transportista (TRA-A a TRA-D), fechas de pedido, compromiso
y entrega, estado (Entregado, Pendiente, Devuelto), unidades pedidas y
entregadas, incidencia y costo de flete.
Los KPI que seguimos son % de entregas a tiempo, % de pedidos completos
y OTIF.
TAREAS: 1) Resumir las incidencias de la semana. 2) Calcular y explicar
los KPI con los datos que te pase. 3) Redactar correos a clientes y
transportistas.
REGLAS: Usa solo los datos que te doy; si falta algo, pregúntame antes
de responder. No inventes cifras ni fuentes. Si pego nombres reales,
direcciones o DNI, recuérdame anonimizarlos. Las fórmulas de Excel van
en español y con punto y coma (;).
FORMATO: Respuestas de máximo 200 palabras, tono profesional, con tabla
cuando haya datos. Termina con una línea "Siguiente paso:".
```

**Asistencia**

```
ROL: Eres el asistente de control de asistencia del área de recursos
humanos de una empresa de manufactura en Perú.
CONTEXTO: Tenemos 60 colaboradores (COLAB-001 a COLAB-060) en
Producción, Almacén, Administración y Mantenimiento, con turnos mañana
(07:00), tarde (15:00) y noche (23:00). Registramos por día: hora de
ingreso, minutos de tardanza, estado (presente, tardanza, falta
justificada, falta injustificada), horas trabajadas y horas extra.
Los KPI que seguimos son % de ausentismo, % de puntualidad, tardanza
promedio y horas extra por área.
TAREAS: 1) Resumir la asistencia de la semana por área. 2) Calcular y
explicar los KPI con los datos que te pase. 3) Redactar comunicados
internos.
REGLAS: Usa solo los datos que te doy; si falta algo, pregúntame antes
de responder. No inventes cifras ni fuentes. Nunca pidas ni repitas
nombres, DNI o datos de salud: si los pego, recuérdame anonimizarlos.
Las fórmulas de Excel van en español y con punto y coma (;).
FORMATO: Respuestas de máximo 200 palabras, tono respetuoso, con tabla
cuando haya datos. Termina con una línea "Siguiente paso:".
```

Ponle un **nombre** claro a tu asistente, por ejemplo: *Asistente de despachos — Lab 2*.

> **Verifica:** revisa que tus instrucciones tengan los 5 elementos (rol, contexto, tareas, reglas y formato) y que no incluyan datos reales de personas ni de una empresa.

## Verifica las citas
Duration: 0:12:00

Cuando termine la investigación, lee el informe completo. Luego elige **5 afirmaciones importantes**: los KPI y las buenas prácticas que piensas poner en tu informe.

### El método de 4 pasos

Para cada afirmación:

1. **Abre el enlace.** ¿Carga? ¿Es la página o el documento que dice la IA?
2. **Busca el dato.** Usa Ctrl+F con la cifra o una palabra clave. ¿Aparece? ¿Dice lo mismo?
3. **Revisa autor y fecha.** ¿Quién lo publica? ¿Sigue vigente?
4. **Confirma con otra fuente.** Busca el mismo dato en una segunda fuente confiable (lectura lateral).

### El semáforo

| Estado | Significa | ¿Va en tu informe? |
|---|---|---|
| ✅ Verificada | La fuente existe y respalda el dato. | Sí |
| ⚠️ Parcial | La fuente existe, pero no dice exactamente eso (otra cifra, otro contexto). | No, hasta encontrar una fuente que sí lo diga |
| ❌ Descartada | La fuente no existe, no carga, no contiene el dato o no es confiable. | No |

### Tu tabla de verificación

Copia esta tabla en tu ficha y complétala:

| # | Afirmación de la IA | Fuente citada (enlace) | ¿Existe? | ¿Dice eso? | Autor y fecha | Segunda fuente | Estado |
|---|---|---|---|---|---|---|---|
| 1 | | | | | | | ✅ / ⚠️ / ❌ |
| 2 | | | | | | | |
| 3 | | | | | | | |
| 4 | | | | | | | |
| 5 | | | | | | | |

> **Ojo:** señales de alerta frecuentes: enlaces que llevan a la página principal y no al documento; cifras muy redondas sin autor ("el 80 % de las empresas…"); valores "de clase mundial" sin fuente original; normas sin número o con un año que no coincide.

> **Verifica:** para normas peruanas, confirma en la publicación oficial (Diario Oficial El Peruano o gob.pe), no en un resumen de terceros. Para KPI, contrasta la fórmula con una segunda fuente; si dos fuentes la definen distinto, anota ambas. En el proyecto integrador (S5–S8) usarás las definiciones de KPI del curso, que verás en la S5. Si tu fuente define un KPI de otra forma, no está mal: anótalo en el informe como variante del sector.

### Si una cita sale ⚠️ o ❌

Pídele a la IA que la corrija y vuelve a verificar la nueva fuente:

```
La afirmación "[pega la afirmación]" no aparece en la fuente que
citaste ([pega el enlace]). Busca una fuente que sí la respalde e
indica el párrafo exacto donde aparece. Si no la encuentras, responde
"no encontré fuente".
```

> A mitad del laboratorio, el docente abrirá en ClassPoint la actividad **"Sube tu tabla de verificación de citas"**: sube una captura de esta tabla.

## Redacta tu informe breve
Duration: 0:09:00

Usa la IA para **planificar** y **redactar**, pero solo con lo que verificaste.

### 1. Planifica

```
ROL: Actúa como redactor técnico.
CONTEXTO: Investigué los KPI y buenas prácticas de [mi escenario]. Estas
son las afirmaciones que verifiqué, con su fuente: [pega solo las filas
marcadas con ✅].
TAREA: Propón el esquema de un informe de 1 página para [el jefe de
planta / el gerente de operaciones / la jefa de recursos humanos].
RESTRICCIONES: Usa solo la información que te pego. Usa exactamente estas
5 secciones: Pregunta, KPI del sector, Buenas prácticas, Referencias y
Uso de IA.
FORMATO: Lista de secciones con una línea que explique qué va en cada una.
```

### 2. Redacta

```
Con ese esquema, redacta el informe. Máximo 400 palabras. Incluye una
tabla de KPI (nombre, fórmula, para qué sirve, fuente) y 3 buenas
prácticas. Cita cada dato con (Autor, año). Al final, agrega la lista
de referencias con autor, año, título y enlace. No agregues nada que no
esté en las fuentes que te pegué.
```

### 3. Revisa y arma el documento

Pega el borrador en Word o Google Docs, corrígelo con tus palabras y verifica que tenga estas secciones:

| Sección | Qué va |
|---|---|
| Título y datos | Título, tu nombre, escenario y fecha |
| Pregunta | Tu pregunta de investigación y la herramienta que usaste |
| KPI del sector | Tabla de 3 a 5 KPI: nombre, fórmula, para qué sirve y fuente |
| Buenas prácticas | 3 prácticas aplicables a tu escenario, cada una con su fuente |
| Referencias | Al menos 3, todas con ✅: autor, año, título y enlace |
| Uso de IA | 1 o 2 líneas: qué herramienta usaste y para qué |

**Formato básico de referencia** (en la S3 verás APA 7 con más detalle):

```
Organización o Autor. (Año). Título del documento o página. Nombre del sitio. URL
```

**Ejemplo de declaración de uso de IA:**

```
Usé Deep Research de Gemini para buscar fuentes y Gemini para proponer
el esquema y redactar el borrador. Verifiqué cada cita abriendo la fuente;
descarté 2 afirmaciones que no tenían respaldo.
```

> **Verifica:** antes de guardar, busca en el informe cada cifra y cada fórmula y confirma que está en tu tabla de verificación con ✅. Si no está, bórrala.

Guarda el informe como `.docx`. En Google Docs: **Archivo › Descargar › Microsoft Word (.docx)**.

## Crea tu asistente en la herramienta
Duration: 0:10:00

Elige **una** opción, según la cuenta que tengas.

### Opción A — Gem de Gemini (recomendada, gratis)

1. Entra a gemini.google.com con tu cuenta Google.
2. En el menú lateral, abre la sección de **Gems** (Gem manager) y elige crear un **nuevo Gem**.
3. Escribe el **nombre** de tu asistente.
4. Pega tus instrucciones en el campo de **instrucciones**.
5. (Opcional) En la sección de **conocimiento**, sube tu informe breve para que lo consulte siempre.
6. Prueba en la vista previa y, cuando funcione, **guarda**.

### Opción B — Agente de Copilot Chat (cuenta de trabajo o estudio)

1. Entra a Copilot Chat con tu cuenta de trabajo o estudio de Microsoft 365.
2. En el panel lateral, elige la opción para **crear un agente** (Agent Builder).
3. Puedes describir lo que quieres en lenguaje natural, pero para este laboratorio usa la pestaña de **configuración** y pega tus instrucciones.
4. Completa nombre, descripción e instrucciones.
5. En **conocimiento**: sin licencia de Microsoft 365 Copilot solo puedes agregar sitios web públicos (no archivos). Agrega 1 o 2 de las fuentes que verificaste con ✅.
6. Agrega 2 o 3 **mensajes sugeridos** (por ejemplo, "Calcula el OTIF de esta semana").
7. Prueba en el panel de la derecha y elige **Crear**.

### Opción C — GPT personalizado (solo con ChatGPT de pago)

1. Entra a chatgpt.com › **GPTs** › **Crear**.
2. En la pestaña de configuración, completa nombre, descripción, instrucciones e iniciadores de conversación.
3. En **conocimiento**, sube tu informe breve.
4. Prueba en la vista previa y guárdalo con acceso **solo para ti**.

### Si no puedes usar ninguna

Guarda tus instrucciones en un documento llamado `Asistente_[escenario].txt` y pégalas al inicio de cada chat nuevo. Es menos cómodo, pero cumple el reto.

> **Ojo:** deja tu asistente en privado por ahora. Si algún día lo compartes, revisa antes que sus instrucciones y archivos no tengan información sensible.

**Toma 3 capturas para tu ficha:** (1) la pantalla de configuración con el nombre y las instrucciones visibles, y (2) y (3) una captura de cada prueba del paso siguiente.

## Prueba y mejora tu asistente
Duration: 0:06:00

Haz **2 pruebas**: la prueba 1 y una de las pruebas 2 o 3.

### Prueba 1 — Una tarea normal

| Escenario | Pedido | Resultado esperado |
|---|---|---|
| Equipos | Calcula la disponibilidad de EQ-103 si tuvo 168 horas programadas y 150 horas de operación. Explica la fórmula. | 150 / 168 = 89,3 % |
| Logística | Esta semana cerramos 120 pedidos (entregados o devueltos) y 108 llegaron a tiempo. Calcula el % de entregas a tiempo y dime si cumplimos una meta de 95 %. | 108 / 120 = 90,0 %: no cumple |
| Asistencia | En marzo, Almacén tuvo 280 jornadas programadas y 9 faltas. Calcula el % de ausentismo. | 9 / 280 = 3,2 % |

### Prueba 2 — La trampa (¿respeta sus reglas?)

Pídele un dato que no le diste, por ejemplo: *"¿Cuál fue la disponibilidad de EQ-107 en febrero?"*, *"¿Cuál es el OTIF de TRA-C?"* o *"¿Cuántas tardanzas tuvo Producción ayer?"*.

**Lo correcto:** que te pida los datos o diga que no los tiene. Si inventa una cifra, tus reglas no son lo bastante claras.

### Prueba 3 — Fórmula de Excel en español

```
Dame la fórmula de Excel para calcular en la fila 2 la división de la
columna G entre la columna F, y que muestre 0 si hay error.
```

**Lo correcto:** `=SI.ERROR(G2/F2;0)`, en español y con punto y coma. Si responde `=IFERROR(G2/F2,0)`, corrige la regla.

### Si falla, ajusta las instrucciones

Agrega o refuerza la regla que no cumplió (por ejemplo: *"Nunca respondas con cifras que no estén en mis datos"*), guarda y repite la prueba.

> **Verifica:** recalcula tú el resultado de la prueba 1. Anota en tu ficha si el asistente acertó, si cayó en la trampa y qué cambiaste en sus instrucciones.

## Arma tu ficha de evidencia
Duration: 0:07:00

Crea un documento con esta estructura y expórtalo a PDF con el nombre `Lab02_Apellido_Nombre.pdf`.

| Sección | Qué va |
|---|---|
| Encabezado | Nombre, escenario, herramienta de investigación y herramienta del asistente |
| 1. Prompts usados | Prompt de investigación (y cambios al plan), prompts para planificar y redactar, instrucciones completas del asistente |
| 2. Resultado | Captura del inicio del informe de la IA, captura de la configuración del asistente y capturas de las 2 pruebas |
| 3. Qué verificaste o corregiste | Tabla de verificación de 5 citas con el semáforo, qué descartaste y qué cambiaste en las instrucciones tras las pruebas |
| 4. Producto final | Tu informe breve (adjunto como .docx) y el nombre de tu asistente |

Sube **los dos archivos** (PDF y .docx) a la tarea **Laboratorio 2** del LMS hoy hasta las **23:59**.

## Rúbrica
Duration: 0:00:00

| Criterio | 5 puntos | 3 puntos | 1 punto |
|---|---|---|---|
| **Cumple el reto** | Informe de 1 página con 3–5 KPI, 3 buenas prácticas y al menos 3 referencias; asistente creado, con capturas de sus instrucciones y de 2 pruebas. | Falta una parte: menos KPI o referencias, o el asistente sin pruebas. | Solo una de las dos partes (informe o asistente). |
| **Calidad del prompt** | El prompt de investigación y las instrucciones del asistente tienen los 5 elementos y son específicos de su escenario. | Faltan 1 o 2 elementos, o son genéricos. | Prompts de una línea, sin estructura. |
| **Verificación crítica** | Tabla con al menos 5 citas clasificadas con el semáforo; el informe solo usa citas ✅; explica qué descartó y por qué. | Verifica menos de 5 citas o no explica su criterio. | No verifica o usa citas inexistentes. |
| **Orden y presentación** | Ficha e informe claros, referencias completas con enlace, capturas legibles, datos simulados y declaración de uso de IA. | Completo pero desordenado o con referencias incompletas. | Ilegible, sin referencias o con datos personales reales. |

**Total:** 20 puntos.

## Si terminas antes
Duration: 0:00:00

Lanza la **misma pregunta en una segunda herramienta** de investigación (por ejemplo, si usaste Gemini, prueba ChatGPT) y compara: ¿coinciden los KPI?, ¿cuántas citas de cada una pasaron tu verificación? Anota en tu ficha cuál fue más confiable para tu tema.

Otra opción: pide a un compañero de tu mismo escenario que pruebe tu asistente con un pedido suyo y anota qué mejorarías.

## Resumen
Duration: 0:00:00

Hoy aprendiste a:

- Lanzar una investigación profunda con un prompt que pide fuentes verificables.
- Verificar cada cita en 4 pasos y clasificarla con el semáforo ✅ ⚠️ ❌.
- Planificar y redactar un informe breve usando solo fuentes verificadas.
- Crear un asistente reutilizable con instrucciones de 5 elementos y probarlo.

**Próxima sesión (S3):** documentos con IA. Vas a subir documentos de tu escenario a Gemini Notebook (antes NotebookLM) o al chat para resumirlos, compararlos y extraer información a tablas, y luego convertirla en un informe ejecutivo y una presentación. Ten a mano tu asistente.
