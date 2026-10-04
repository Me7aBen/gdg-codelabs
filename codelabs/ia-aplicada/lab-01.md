id: ia-aplicada-lab-01
summary: Laboratorio 1 del curso IA Aplicada a Tareas Laborales y Académicas. Arma tu biblioteca de prompts: define tu contexto, mira un caso completo, escribe 2 prompts simples, mejóralos con rol, contexto, tarea, restricciones y formato, y verifica las respuestas.
status: Published
authors: Benjamin Pareja
categories: IA, Productividad
environments: Web
feedback link: https://me7aben.github.io/gdg-codelabs/

# Laboratorio 1 — Tu biblioteca de prompts

## Antes de empezar
Duration: 0:02:00

En este laboratorio vas a construir tu **biblioteca de prompts v1**: dos tareas reales de tu trabajo, cada una con un prompt simple, su versión mejorada y lo que verificaste en la respuesta.

**Duración:** 60 minutos (en clase).

**Qué entregas:** tu ficha de evidencia en PDF en la tarea "Laboratorio 1" del LMS, hoy hasta las 23:59. La ficha es un documento de Word que descargas de esa misma tarea.

### Lo que necesitas

| Requisito | Detalle |
|---|---|
| Herramienta de IA | ChatGPT, Gemini o Copilot Chat. Cualquiera sirve; usa la que tengas. |
| Ficha de evidencia | El Word de la tarea "Laboratorio 1" del LMS. Si no tienes Word, ábrela en Google Docs. |
| Tu contexto | Tu trabajo o área, o un escenario de ejemplo (lo eliges en el paso 2). |

> **Ojo:** trabaja solo con **datos simulados**. No pegues nombres reales, DNI, teléfonos, sueldos ni información confidencial de una empresa (Ley 29733 de Protección de Datos Personales).

### El marco de 5 elementos

| Elemento | Pregunta que responde |
|---|---|
| **Rol** | ¿Quién debe ser la IA? |
| **Contexto** | ¿Cuál es la situación y qué datos tiene? |
| **Tarea** | ¿Qué debe hacer, con un verbo claro? |
| **Restricciones** | ¿Qué límites y reglas debe respetar? |
| **Formato** | ¿Cómo quieres recibir la respuesta? |

## Elige tu contexto
Duration: 0:03:00

Trabaja con un contexto que conozcas: tu puesto actual, uno anterior o el área en la que te gustaría trabajar. Así tus tareas y tus datos serán realistas. Te servirá también en los próximos laboratorios.

Si no tienes uno a mano, usa uno de estos escenarios de ejemplo:

| Escenario | Qué mide | KPI de ejemplo |
|---|---|---|
| **Control de equipos** | Fallas, horas de operación y disponibilidad de máquinas | Disponibilidad |
| **Logística** | Despachos, entregas a tiempo e incidencias | OTIF (a tiempo y completo) |
| **Asistencia** | Ingresos, tardanzas y ausentismo por área | % de ausentismo |

Escribe en tu ficha: *"Trabajo como ___ en ___"* (por ejemplo, *"Trabajo como planner de mantenimiento en una planta de alimentos"*).

## Mira un caso de principio a fin
Duration: 0:05:00

Antes de empezar con tus tareas, mira cómo lo resolvió Rosa. Es el mismo recorrido que harás tú en los pasos 4 a 7.

### 1. Contexto y tarea

**Rosa** es planner de mantenimiento en una planta de alimentos. El viernes 14, de 8:00 a 14:00, se detiene la faja transportadora EQ-104 por mantenimiento preventivo; mientras tanto, envasado trabajará con la línea 2.

**Tarea:** redactar el aviso de la parada para los operarios del turno día.

### 2. Prompt simple

```
Hazme un aviso de parada de mantenimiento.
```

La respuesta fue un texto de unas 200 palabras con espacios por llenar (*"se realizará un mantenimiento el día [FECHA]"*), un horario inventado y ninguna indicación para los operarios.

**Qué le faltó:** es genérica. No dice qué equipo se detiene, cuándo ni qué deben hacer los operarios, y además inventó un horario.

### 3. Prompt mejorado

```
ROL: Actúa como planner de mantenimiento de una planta de alimentos.
CONTEXTO: El viernes 14, de 8:00 a 14:00, se detiene la faja transportadora EQ-104 por mantenimiento preventivo. Mientras tanto, envasado trabaja con la línea 2.
TAREA: Redacta un aviso para los operarios del turno día.
RESTRICCIONES: Máximo 80 palabras, tono cordial y claro, sin tecnicismos. Usa solo los datos que te doy.
FORMATO: Título, 3 viñetas (qué, cuándo, qué hacer) y una línea de contacto.
```

### 4. Verificación

Rosa revisó la nueva respuesta con la lista del paso 7:

- La fecha y el horario coinciden con sus datos.
- La IA agregó *"el equipo vuelve a operar el sábado 15"*, un dato que Rosa no le dio. Le pidió: *"Quita la fecha de reinicio: no está en mis datos"*.
- La respuesta respeta las 80 palabras y el formato pedido.

### 5. Producto final

```
PARADA PROGRAMADA · FAJA EQ-104
• Qué: mantenimiento preventivo de la faja transportadora EQ-104.
• Cuándo: viernes 14, de 8:00 a 14:00.
• Qué hacer: envasado trabaja con la línea 2 durante la parada.
Consultas: supervisor de turno.
```

> **En tu ficha:** la tarea 1 trae ejemplos tomados de este caso. Úsalos como guía, no los copies.

## Anota 2 tareas reales
Duration: 0:05:00

Piensa en dos tareas que haces (o que hace alguien en tu puesto) cada semana y que podrías acelerar con IA. Que sean de **tipo distinto**:

- Una de **redacción**: un correo, un aviso, un resumen o un informe corto.
- Una de **organización**: una tabla, un checklist o una plantilla.

Si no se te ocurren, usa estas ideas:

| Control de equipos | Logística | Asistencia |
|---|---|---|
| Resumir el registro de fallas del mes | Resumir las incidencias de despacho | Resumir tardanzas por área |
| Redactar el aviso de una parada programada | Escribir un correo al cliente por un retraso | Redactar un comunicado de cambio de horario |
| Crear un checklist de inspección diaria | Armar una tabla de rutas y tiempos | Diseñar una plantilla de registro de asistencia |

> **Verifica:** cada tarea debe tener un resultado concreto (un correo, una tabla, un resumen, un checklist). "Mejorar el mantenimiento" no es una tarea; "redactar el aviso de la parada del viernes" sí.

## Prueba un prompt simple
Duration: 0:08:00

Para cada tarea, escribe el pedido como lo harías normalmente, en una sola línea, y pruébalo. Por ejemplo:

```
Hazme un checklist de inspección de una faja transportadora.
```

1. Copia el prompt en tu ficha.
2. Copia la respuesta (o toma una captura).
3. Anota en una línea qué le falta a la respuesta: ¿es genérica?, ¿inventó datos?, ¿el formato no te sirve?

## Mejora el prompt con los 5 elementos
Duration: 0:17:00

Reescribe cada prompt con la plantilla. Copia y completa:

```
ROL:            Actúa como [puesto] de [tipo de empresa].
CONTEXTO:       [Situación, periodo y datos. Pega la tabla si aplica.]
TAREA:          [Verbo + resultado concreto.]
RESTRICCIONES:  [Extensión, tono, qué no hacer. "No inventes datos."]
FORMATO:        [Tabla, viñetas o correo. Indica columnas o secciones.]
```

### Más ejemplos

**Organización: un checklist (control de equipos)**

```
ROL: Actúa como supervisor de mantenimiento de una planta de alimentos.
CONTEXTO: Los operarios revisan cada mañana la faja transportadora EQ-104 antes de arrancar la línea. Hoy no tienen una lista y a veces olvidan puntos.
TAREA: Crea un checklist de inspección diaria de la faja.
RESTRICCIONES: Máximo 10 puntos, que se puedan revisar a simple vista y sin herramientas. No inventes valores de referencia.
FORMATO: Tabla con las columnas N°, Punto a revisar, OK / No OK y Observación.
```

**Redacción: un correo (logística)**

```
ROL: Actúa como coordinador de despachos de una distribuidora en Lima.
CONTEXTO: El pedido PED-0312 del cliente CLI-07 (zona Lima Sur) llegará con 2 días de retraso porque el transportista TRA-B tuvo una falla mecánica.
TAREA: Escribe un correo de disculpa al cliente con la nueva fecha de entrega.
RESTRICCIONES: Máximo 120 palabras, tono profesional, sin culpar al transportista por nombre.
FORMATO: Asunto, saludo, 2 párrafos cortos y firma genérica.
```

**Organización: una tabla con resumen (asistencia)**

```
ROL: Actúa como analista de recursos humanos de una empresa de manufactura.
CONTEXTO: Te paso las tardanzas de marzo por área (datos simulados): Producción 42, Almacén 18, Administración 6, Mantenimiento 11.
TAREA: Resume la situación para la jefatura y propone 2 acciones.
RESTRICCIONES: No inventes datos que no estén en la tabla. Máximo 100 palabras.
FORMATO: Una tabla ordenada de mayor a menor y 2 viñetas con las acciones.
```

### Si la respuesta todavía no te sirve, itera

No empieces de cero: pide un cambio concreto en la misma conversación.

```
Hazlo más corto, en 3 viñetas.
Agrega una columna con el porcentaje del total.
Antes de responder, hazme 3 preguntas que necesites para hacerlo mejor.
```

> **Cuando el docente lo indique (≈1:45):** sube a ClassPoint una captura de tu mejor prompt mejorado y su respuesta.

## Verifica las respuestas
Duration: 0:10:00

Revisa cada respuesta mejorada con esta lista y anota en tu ficha qué comprobaste o corregiste:

- ¿Las cifras cuadran con los datos que le diste? Recalcula a mano o en Excel.
- ¿Inventó nombres, fechas, normas o datos que no estaban en tu prompt?
- ¿Respetó las restricciones (extensión, tono) y el formato que pediste?
- ¿Lo usarías tal cual en tu trabajo? Si no, ¿qué cambiaste?

> **Ojo:** si la IA inventa un dato, pídele: *"Si algo no está en mis datos, responde: no tengo esa información"*. Anota si eso corrigió el problema.

## Completa y entrega tu ficha
Duration: 0:10:00

Tu ficha de evidencia es un documento de Word con un recuadro para cada evidencia. Descárgala de la tarea **Laboratorio 1** del LMS y complétala mientras avanzas. Si no tienes Word, ábrela en Google Docs.

| Parte de la ficha | Qué registras |
|---|---|
| Portada | Tu nombre, tu contexto, la herramienta de IA que usaste y la fecha |
| Paso 2 | Tu contexto en una frase |
| Paso 4 | Tus 2 tareas y el resultado concreto que esperas de cada una |
| Tarea 1 y Tarea 2 | Prompt simple, respuesta, qué le faltó, prompt mejorado, nueva respuesta, verificación y producto final |
| Conclusiones | Qué aprendiste y qué tarea de tu trabajo harías así desde mañana |

Al terminar, revisa la lista **Antes de entregar** del final de la ficha, guárdala como PDF con el nombre `Lab01_Apellido_Nombre.pdf` y súbela a la tarea **Laboratorio 1** del LMS hoy hasta las **23:59**.

## Rúbrica
Duration: 0:00:00

| Criterio | 5 puntos | 3 puntos | 1 punto |
|---|---|---|---|
| **Cumple el reto** | 2 tareas, cada una con prompt simple, prompt mejorado, sus respuestas y la versión final. | Falta alguna respuesta o la versión final, o solo hay 1 tarea completa. | Una sola tarea incompleta o sin respuestas. |
| **Calidad del prompt** | Los 2 prompts mejorados tienen los 5 elementos y son específicos. | Falta 1 elemento o alguno es vago. | Los prompts mejorados casi no cambian. |
| **Verificación crítica** | Explica qué comprobó o corrigió en cada respuesta. | La verificación es genérica ("está bien"). | No hay verificación. |
| **Orden y presentación** | Ficha clara, legible, con datos simulados. | Desordenada pero completa. | Ilegible o con datos personales reales. |

**Total:** 20 puntos.

## Si terminas antes
Duration: 0:00:00

Prueba el **mismo prompt mejorado en una segunda herramienta** (por ejemplo, si usaste ChatGPT, prueba Gemini o Copilot Chat) y anota en el recuadro **Reto extra** de tu ficha qué diferencias encontraste en la respuesta.

## Resumen
Duration: 0:00:00

Hoy aprendiste a:

- Estructurar un prompt con rol, contexto, tarea, restricciones y formato.
- Iterar con cambios concretos en lugar de empezar de cero.
- Verificar las respuestas y proteger los datos con información simulada.

**Próxima sesión (S2):** investigación con IA y asistentes reutilizables. Trae tu contexto: vas a investigar los KPI de tu sector y crear tu propio asistente.
