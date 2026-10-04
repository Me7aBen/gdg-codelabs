id: ia-aplicada-lab-01
summary: Laboratorio 1 del curso IA Aplicada a Tareas Laborales y Académicas. Arma tu biblioteca de prompts: elige un escenario, escribe 3 prompts simples, mejóralos con rol, contexto, tarea, restricciones y formato, y verifica las respuestas.
status: Published
authors: Benjamin Pareja
categories: IA, Productividad
environments: Web
feedback link: https://me7aben.github.io/gdg-codelabs/

# Laboratorio 1 — Tu biblioteca de prompts

## Antes de empezar
Duration: 0:02:00

En este laboratorio vas a construir tu **biblioteca de prompts v1**: tres tareas reales de tu escenario, cada una con un prompt simple, su versión mejorada y lo que verificaste en la respuesta.

**Duración:** 60 minutos (en clase).

**Qué entregas:** una ficha de evidencia en PDF en la tarea "Laboratorio 1" del LMS, hoy hasta las 23:59.

### Lo que necesitas

| Requisito | Detalle |
|---|---|
| Herramienta de IA | ChatGPT, Gemini o Copilot Chat. Cualquiera sirve; usa la que tengas. |
| Procesador de texto | Word o Google Docs para armar la ficha y exportarla a PDF. |
| Tu escenario | Control de equipos, logística o asistencia (lo eliges en el paso 1). |

> **Ojo:** trabaja solo con **datos simulados**. No pegues nombres reales, DNI, teléfonos, sueldos ni información confidencial de una empresa (Ley 29733 de Protección de Datos Personales).

### El marco de 5 elementos

| Elemento | Pregunta que responde |
|---|---|
| **Rol** | ¿Quién debe ser la IA? |
| **Contexto** | ¿Cuál es la situación y qué datos tiene? |
| **Tarea** | ¿Qué debe hacer, con un verbo claro? |
| **Restricciones** | ¿Qué límites y reglas debe respetar? |
| **Formato** | ¿Cómo quieres recibir la respuesta? |

## Elige tu escenario
Duration: 0:03:00

Elige uno de los tres escenarios. Lo usarás en **todos los laboratorios del curso** y terminará siendo tu proyecto integrador.

| Escenario | Qué mide | KPI de ejemplo |
|---|---|---|
| **Control de equipos** | Fallas, horas de operación y disponibilidad de máquinas | Disponibilidad |
| **Logística** | Despachos, entregas a tiempo e incidencias | OTIF (a tiempo y completo) |
| **Asistencia** | Ingresos, tardanzas y ausentismo por área | % de ausentismo |

Escribe en tu ficha: *"Mi escenario es ___ en una empresa de ___ (por ejemplo, una planta de alimentos en Arequipa)"*.

## Anota 3 tareas reales
Duration: 0:05:00

Piensa en tres tareas que una persona de ese puesto hace cada semana y que podría acelerar con IA. Si no se te ocurren, usa estas ideas:

| Control de equipos | Logística | Asistencia |
|---|---|---|
| Resumir el registro de fallas del mes | Resumir las incidencias de despacho | Resumir tardanzas por área |
| Redactar el aviso de una parada programada | Escribir un correo al cliente por un retraso | Redactar un comunicado de cambio de horario |
| Crear un checklist de inspección diaria | Armar una tabla de rutas y tiempos | Diseñar una plantilla de registro de asistencia |

> **Verifica:** cada tarea debe tener un resultado concreto (un correo, una tabla, un resumen, un checklist). "Mejorar el mantenimiento" no es una tarea; "redactar el aviso de la parada del viernes" sí.

## Prueba un prompt simple
Duration: 0:10:00

Para cada tarea, escribe el pedido como lo harías normalmente, en una sola línea, y pruébalo. Por ejemplo:

```
Hazme un aviso de parada de mantenimiento.
```

1. Copia el prompt en tu ficha.
2. Copia la respuesta (o toma una captura).
3. Anota en una línea qué le falta a la respuesta: ¿es genérica?, ¿inventó datos?, ¿el formato no te sirve?

## Mejora el prompt con los 5 elementos
Duration: 0:20:00

Reescribe cada prompt con la plantilla. Copia y completa:

```
ROL:            Actúa como [puesto] de [tipo de empresa].
CONTEXTO:       [Situación, periodo y datos. Pega la tabla si aplica.]
TAREA:          [Verbo + resultado concreto.]
RESTRICCIONES:  [Extensión, tono, qué no hacer. "No inventes datos."]
FORMATO:        [Tabla, viñetas o correo. Indica columnas o secciones.]
```

### Ejemplos por escenario

**Control de equipos**

```
ROL: Actúa como jefe de mantenimiento de una planta de alimentos.
CONTEXTO: El viernes 14 de 8:00 a 14:00 se detiene la Faja transportadora EQ-104 por mantenimiento preventivo. El área de envasado trabajará con la línea 2.
TAREA: Redacta un aviso para los operarios del turno día.
RESTRICCIONES: Máximo 80 palabras, tono cordial y claro, sin tecnicismos.
FORMATO: Título, 3 viñetas (qué, cuándo, qué hacer) y una línea de contacto.
```

**Logística**

```
ROL: Actúa como coordinador de despachos de una distribuidora en Lima.
CONTEXTO: El pedido PED-0312 del cliente CLI-07 (zona Lima Sur) llegará con 2 días de retraso porque el transportista TRA-B tuvo una falla mecánica.
TAREA: Escribe un correo de disculpa al cliente con la nueva fecha de entrega.
RESTRICCIONES: Máximo 120 palabras, tono profesional, sin culpar al transportista por nombre.
FORMATO: Asunto, saludo, 2 párrafos cortos y firma genérica.
```

**Asistencia**

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

## Arma tu ficha de evidencia
Duration: 0:10:00

Crea un documento con esta estructura y expórtalo a PDF con el nombre `Lab01_Apellido_Nombre.pdf`.

| Sección | Qué va |
|---|---|
| Encabezado | Nombre, escenario elegido y herramienta de IA usada |
| 1. Prompts usados | Por cada tarea: prompt simple y prompt mejorado |
| 2. Resultado | Las dos respuestas (texto o captura) |
| 3. Qué verificaste o corregiste | 1 a 3 líneas por tarea |
| 4. Producto final | La versión final que usarías (aviso, correo, tabla, etc.) |

Súbelo a la tarea **Laboratorio 1** del LMS hoy hasta las **23:59**.

## Rúbrica
Duration: 0:00:00

| Criterio | 5 puntos | 3 puntos | 1 punto |
|---|---|---|---|
| **Cumple el reto** | 3 tareas, cada una con prompt simple, prompt mejorado, sus respuestas y la versión final. | Faltan respuestas o solo hay 2 tareas. | Una sola tarea o sin respuestas. |
| **Calidad del prompt** | Los 3 prompts mejorados tienen los 5 elementos y son específicos. | Faltan 1 o 2 elementos en algún prompt. | Los prompts mejorados casi no cambian. |
| **Verificación crítica** | Explica qué comprobó o corrigió en cada respuesta. | La verificación es genérica ("está bien"). | No hay verificación. |
| **Orden y presentación** | Ficha clara, legible, con datos simulados. | Desordenada pero completa. | Ilegible o con datos personales reales. |

**Total:** 20 puntos.

## Si terminas antes
Duration: 0:00:00

Prueba el **mismo prompt mejorado en una segunda herramienta** (por ejemplo, si usaste ChatGPT, prueba Gemini o Copilot Chat) y anota en tu ficha qué diferencias encontraste en la respuesta.

## Resumen
Duration: 0:00:00

Hoy aprendiste a:

- Estructurar un prompt con rol, contexto, tarea, restricciones y formato.
- Iterar con cambios concretos en lugar de empezar de cero.
- Verificar las respuestas y proteger los datos con información simulada.

**Próxima sesión (S2):** investigación con IA y asistentes reutilizables. Trae tu escenario: vas a investigar los KPI de tu sector y crear tu propio asistente.
