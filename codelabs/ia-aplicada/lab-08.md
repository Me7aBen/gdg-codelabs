id: ia-aplicada-lab-08
summary: Guía completa del proyecto integrador del curso IA Aplicada a Tareas Laborales y Académicas. Cierra tu reporte operativo, escribe un reporte en PDF de 1 a 2 páginas, prepara tu demo de 5 minutos, arma tu ficha de portafolio y declara cómo usaste la IA.
status: Published
authors: Benjamin Pareja
categories: IA, Productividad, Excel, Power BI
environments: Web
feedback link: https://me7aben.github.io/gdg-codelabs/

# Laboratorio 8 — Proyecto integrador: tu reporte operativo con IA

## Antes de empezar
Duration: 0:10:00

Llegaste al final del curso. Desde la S4 cada laboratorio fue un paso de tu proyecto: generaste y limpiaste tu dataset (S4), definiste tus KPI (S5), armaste tu primer dashboard (S6) y lo mejoraste hasta la versión 1 (S7). En esta guía lo conviertes en un **reporte operativo completo**: lo presentas en la S8, lo entregas y lo llevas a tu portafolio.

**Objetivo:** entregar un reporte operativo funcional sobre tu escenario (control de equipos, logística o asistencia) que responda una pregunta de negocio con KPI, un dashboard claro, un hallazgo y una recomendación, y documentar de forma transparente cómo usaste la IA.

**Duración estimada:** unas 2 h 30 min de trabajo autónomo, repartidas entre la S7 y la S8 y después de tu presentación.

### Calendario

| Momento | Qué haces |
|---|---|
| S7 · punto de control | Presentas tu dashboard v1 y anotas tu lista de mejoras. El docente publica el orden de presentaciones y, si el grupo supera los 14 participantes, las parejas. |
| Entre la S7 y la S8 | Pasos 1 a 4 de esta guía. Avanza también los pasos 6 y 7. |
| S8 · jornada de presentaciones | Paso 5: presentas tu demo de 5 minutos y recibes coevaluación. |
| Día de la S8, hasta las 23:59 | Ajustas con la retroalimentación y haces la entrega final (paso 8). |

### Qué entregas

| # | Entregable | Formato | Detalle |
|---|---|---|---|
| 1 | Dashboard final | `.pbix` (o `.xlsx` si no tienes Windows) | Una página con tus KPI, visuales y filtros. |
| 2 | Dataset limpio | `.xlsx` | El de la S4, con las correcciones que hayas hecho después. |
| 3 | Reporte operativo | PDF de 1 a 2 páginas | Estructura del paso 3. Incluye como anexo tu declaración de uso de IA (no cuenta dentro de las 2 páginas). |
| 4 | Ficha de portafolio | PDF de 1 página o enlace | Versión LinkedIn, GitHub o PDF (paso 6). |
| 5 | Demo en vivo | 5 min + 2 min de preguntas | Se presenta en la S8; no se sube. No necesitas diapositivas: tu dashboard es la presentación. |

Todo se sube a la tarea **"Proyecto integrador"** del LMS el día de la S8 **hasta las 23:59**.

> **Ojo:** en este laboratorio no hay ficha de evidencia aparte. Sus 4 partes ya están dentro de tu entrega: los **prompts usados** y **lo que verificaste** van en la declaración de uso de IA, el **resultado** es tu dashboard y el **producto final** es tu reporte con su ficha de portafolio.

### Herramientas

| Para | Herramienta | Alternativa |
|---|---|---|
| Dashboard | Power BI Desktop (gratis, solo Windows) | Si no tienes Windows: equipo prestado, laboratorio remoto, trabajo en pareja o tu dashboard de Excel de la S5 (tablas y gráficos dinámicos con segmentaciones). |
| Datos y verificación | Excel con Power Query | Funciona en Windows y en Mac. |
| IA | ChatGPT, Gemini o Copilot Chat (gratis con cuenta) | Copilot dentro de Word requiere licencia de Microsoft 365 Copilot: no lo necesitas. Copilot en Power BI requiere capacidad Fabric de pago: tampoco lo necesitas. |
| Reporte y ficha | Word, Google Docs o PowerPoint, exportando a PDF | Cualquier editor que exporte PDF. |

### Qué necesitas abierto

- Tu `.xlsx` limpio de la S4 y tu bitácora "prompt → fórmula → verificación".
- Tu ficha de KPI de la S5.
- Tu dashboard v1 de la S7 y tu lista de mejoras.
- Tu herramienta de IA.

> **Ojo:** todo el proyecto usa **datos simulados** con códigos (EQ-101, CLI-07, COLAB-021, TEC-03). Nunca pongas nombres reales, DNI ni datos de una empresa real, ni en la IA ni en tu portafolio (Ley 29733 de Protección de Datos Personales).

## Paso 1 — Revisa tu proyecto con el checklist
Duration: 0:20:00

Antes de escribir una línea del reporte, asegúrate de que lo que vas a presentar está bien construido. Revisa cada bloque y aplica las mejoras pendientes de tu lista de la S7.

### 1.1 Tus KPI

Debes tener **de 3 a 5 KPI** de tu escenario, cada uno con nombre, fórmula, meta y por qué importa. Estos son los KPI de referencia de cada escenario:

| Escenario | Tabla | KPI de referencia |
|---|---|---|
| Control de equipos | `registro_mantenimiento` | Disponibilidad (Σ Horas_Operacion / Σ Horas_Programadas) · N.º de fallas (filas con Tipo_Falla distinto de "Ninguna") · MTTR (Σ Horas_Parada de las filas con falla / N.º de fallas) · MTBF (Σ Horas_Operacion / N.º de fallas) · % correctivo · Costo por equipo |
| Logística | `despachos` | % de entregas a tiempo · % de pedidos completos · OTIF (a tiempo y completo) · Costo de flete por pedido · Incidencias por transportista y zona |
| Asistencia | `asistencia` | % de ausentismo · % de puntualidad · Tardanza promedio (min) · Horas extra por área · Faltas injustificadas por área |

- [ ] Cada KPI responde a la pregunta de negocio de tu reporte (no es un conteo suelto).
- [ ] Cada KPI tiene una meta y sabes de dónde salió (tu investigación de la S2, una referencia del sector o un criterio razonado).
- [ ] Las tarjetas del dashboard muestran el mismo valor que tu ficha de KPI.

### 1.2 Tus datos

- [ ] No quedan filas duplicadas.
- [ ] Las fechas son fechas (no texto) y los números son números.
- [ ] Los textos están homogéneos: `Almacén` y no `almacen`, `ALMACEN` o `Almacén ` con espacio.
- [ ] No hay valores fuera de rango: horas negativas, más unidades entregadas que pedidas, tardanzas mayores a 120 min.
- [ ] Sabes cuántas filas tenía el dataset antes y después de limpiar, y qué errores corregiste.

### 1.3 Verifica un KPI por otra vía

Un dato verificado es un KPI que calculaste de dos formas y te dio lo mismo. Recalcula en Excel tu KPI principal con una fórmula o una tabla dinámica y compáralo con la tarjeta de Power BI. Cambia el nombre de la tabla por el de la tuya.

**Control de equipos · Disponibilidad:**

```
=SUMA(registro_mantenimiento[Horas_Operacion])/SUMA(registro_mantenimiento[Horas_Programadas])
```

**Logística · % de entregas a tiempo** (usa la columna A_Tiempo de la S5; si no la tienes, agrégala con `=SI(Y([@Estado]="Entregado";[@Fecha_Entrega]<=[@Fecha_Compromiso]);1;0)`):

```
=SUMA(despachos[A_Tiempo])/CONTAR.SI(despachos[Estado];"<>Pendiente")
```

**Asistencia · % de ausentismo:**

```
=(CONTAR.SI(asistencia[Estado];"Falta justificada")+CONTAR.SI(asistencia[Estado];"Falta injustificada"))/FILAS(asistencia[Estado])
```

> **Verifica:** cuenta las filas en Excel y en Power BI (una tarjeta con el recuento de una columna). Si no coinciden, algo se perdió o se duplicó al cargar. Anota el resultado: lo usarás en tu reporte y en tu declaración de uso de IA.

### 1.4 Tu dashboard

- [ ] Una sola página con un título que diga qué muestra y de qué periodo (ene–mar 2026).
- [ ] Las tarjetas de KPI van arriba; los gráficos de detalle, abajo (lectura en Z).
- [ ] Además de las tarjetas, de 3 a 4 gráficos o tablas adecuados: líneas para tendencias, barras para comparar categorías, tabla para el detalle.
- [ ] Al menos una segmentación útil (Área, Zona, Transportista, Turno o Tipo_Equipo) que funcione.
- [ ] Ejes y títulos legibles, colores consistentes y sin decoración que distraiga.
- [ ] Si usas Power BI: un visual de IA (influenciadores clave o árbol de descomposición) que aporte a tu hallazgo.

### 1.5 Pide una segunda opinión a la IA

Toma una captura de tu dashboard (con datos simulados) y pídele a la IA una revisión crítica.

```
ROL: Actúa como analista de inteligencia de negocios con experiencia en reportes operativos.
CONTEXTO: Te comparto la captura de mi dashboard de [control de equipos / logística / asistencia], hecho en [Power BI / Excel] con datos simulados de enero a marzo de 2026. Lo verá un [jefe de mantenimiento / coordinador de despachos / jefe de recursos humanos].
TAREA: Revisa el dashboard y dame las 5 mejoras más importantes, ordenadas por impacto.
RESTRICCIONES: Enfócate en claridad, elección de gráficos, jerarquía visual y si los KPI responden a una decisión. No inventes cifras: si no puedes leer un número, dilo.
FORMATO: Tabla con columnas: Mejora, Por qué importa, Cómo hacerlo en [Power BI / Excel].
```

> **Verifica:** la IA puede leer mal los números de una captura. No cambies nada por una cifra que ella "vio": confírmala en tu archivo. Aplica solo las mejoras que tengan sentido para tu usuario.

## Paso 2 — Encuentra tu hallazgo y escribe tu recomendación
Duration: 0:15:00

Un reporte operativo no termina en el gráfico: termina en una **decisión**. Esta es la parte que más pesa en la presentación.

### La fórmula

- **Hallazgo** = dato concreto + comparación (contra la meta, otro periodo u otro grupo) + dónde ocurre.
- **Recomendación** = acción concreta + responsable (cargo) + KPI con el que se medirá + plazo.

### Ejemplos con datos simulados

| Escenario | Hallazgo | Recomendación |
|---|---|---|
| Control de equipos | En marzo, EQ-107 (compresor, Planta) acumuló el 28 % de las horas de parada y 7 de sus 9 fallas fueron mecánicas en el turno noche. Su disponibilidad fue 78 %, frente a una meta de 90 %. | Que el jefe de mantenimiento adelante el preventivo de EQ-107 de mensual a quincenal durante abril y revise el procedimiento de arranque del turno noche. Meta: disponibilidad de EQ-107 de 90 % o más al cierre de abril. |
| Logística | TRA-C entregó a tiempo solo el 72 % de sus pedidos cerrados de Lima Sur, frente al 91 % del resto de transportistas, y concentra 18 de los 30 retrasos de esa zona en el trimestre. | Que el coordinador de despachos asigne la mitad de los pedidos de Lima Sur a TRA-A durante 4 semanas de prueba y mida el % de entregas a tiempo cada semana. Meta: 90 % o más. |
| Asistencia | El turno noche de Almacén tuvo 9,5 % de ausentismo en el trimestre, más del doble del ausentismo total de la empresa (4,2 %); el 60 % de esas faltas fueron injustificadas. | Que el jefe de Almacén y Recursos Humanos revisen la programación del turno noche y hagan una conversación de seguimiento tras cada falta injustificada durante abril. Meta: ausentismo del turno noche de 6 % o menos. |

### Usa la IA para explorar, no para inventar

Copia las cifras de tu dashboard (tarjetas, totales por grupo, lo que muestra el árbol de descomposición) y pégalas en el prompt.

```
ROL: Actúa como analista de operaciones de una empresa peruana del sector [industrial / logístico / servicios].
CONTEXTO: Estas son las cifras de mi dashboard con datos simulados de enero a marzo de 2026:
[pega aquí tus KPI y totales por grupo]
TAREA: Propón 3 hallazgos posibles y, para cada uno, una recomendación.
RESTRICCIONES: Usa solo las cifras que te doy; si necesitas un dato que no está, dime cuál. Cada recomendación debe tener acción, responsable (cargo), KPI de seguimiento y plazo. No afirmes causas: usa "se asocia con" cuando solo hay relación.
FORMATO: Tabla con columnas: Hallazgo (con cifra), Recomendación, Responsable, KPI, Plazo.
```

Elige **un hallazgo principal** (el que tenga más impacto y mejor respaldo) y, si quieres, uno o dos secundarios.

> **Verifica:** cada cifra del hallazgo debe aparecer en tu dashboard o poder calcularse desde tu Excel. Si la IA escribe un número que no reconoces, bórralo.

> **Ojo:** el visual de influenciadores clave muestra **relación**, no causa. Escribe "las fallas se asocian con el turno noche", no "el turno noche causa las fallas", salvo que tengas cómo demostrarlo.

## Paso 3 — Escribe tu reporte operativo en PDF
Duration: 0:30:00

El reporte es para alguien que **no verá tu demo**: debe entenderse solo, en 1 o 2 páginas.

### Estructura

**Página 1**

1. **Encabezado:** título del reporte, escenario, periodo (enero a marzo de 2026), tu nombre, fecha y la leyenda "Datos simulados con fines académicos".
2. **Resumen ejecutivo (3 a 4 líneas):** la pregunta que responde, el hallazgo principal con su cifra y tu recomendación.
3. **Datos y limpieza:** origen (dataset simulado con IA), número de filas, periodo, qué errores encontraste y cuántos corregiste, y cómo verificaste.
4. **KPI:** tabla con KPI, fórmula, meta, resultado y estado (cumple / no cumple).
5. **Captura del dashboard:** legible, a todo el ancho de la página.

**Página 2**

6. **Hallazgos:** de 1 a 3 viñetas, cada una con su cifra.
7. **Recomendaciones:** tabla con acción, responsable, KPI de seguimiento y plazo.
8. **Limitaciones y siguientes pasos:** por ejemplo, son datos simulados de 3 meses; qué datos reales harían falta; qué mejorarías del dashboard.

**Anexo (no cuenta dentro de las 2 páginas):** declaración de uso de IA (paso 7).

### Plantilla para copiar en Word o Google Docs

```
REPORTE OPERATIVO · [Título: p. ej., Disponibilidad de equipos de Planta]
Escenario: [Control de equipos / Logística / Asistencia] · Periodo: enero a marzo de 2026
Autor(a): [tu nombre] · Fecha: [dd/mm/aaaa] · Datos simulados con fines académicos

1. RESUMEN EJECUTIVO
[Pregunta que responde el reporte.] [Hallazgo principal con cifra.] [Recomendación en una oración.]

2. DATOS Y LIMPIEZA
Dataset simulado generado con [herramienta de IA]: [n] filas, [n] columnas, enero a marzo de 2026.
Errores corregidos: [n] duplicados, [n] fechas como texto, [n] textos inconsistentes, [n] valores fuera de rango.
Verificación: [KPI] calculado en Excel ([valor]) coincide con Power BI ([valor]).

3. KPI
| KPI | Fórmula | Meta | Resultado | Estado |
| [KPI 1] | [fórmula] | [meta] | [valor] | [cumple / no cumple] |

4. DASHBOARD
[Captura]

5. HALLAZGOS
- [Hallazgo 1 con cifra]
- [Hallazgo 2 con cifra]

6. RECOMENDACIONES
| Acción | Responsable | KPI de seguimiento | Plazo |
| [acción] | [cargo] | [KPI y meta] | [plazo] |

7. LIMITACIONES Y SIGUIENTES PASOS
- [Limitación]
- [Siguiente paso]

ANEXO · DECLARACIÓN DE USO DE IA
[Paso 7]
```

### Pídele ayuda a la IA para el resumen ejecutivo

```
ROL: Actúa como jefe de operaciones que lee reportes para tomar decisiones rápidas.
CONTEXTO: Este es el borrador de mi reporte operativo con datos simulados: [pega tus secciones 2 a 6].
TAREA: Redacta un resumen ejecutivo para el inicio del reporte.
RESTRICCIONES: Máximo 70 palabras, sin tecnicismos, sin cifras que no estén en el borrador y sin adjetivos exagerados.
FORMATO: Un solo párrafo: pregunta, hallazgo principal con cifra y recomendación.
```

> **Verifica:** compara cada cifra del resumen con tu tabla de KPI. Lee el resumen en voz alta: si un jefe no entendería qué hacer después de leerlo, reescríbelo.

### Formato

- Letra de 10 a 11 puntos, márgenes normales, títulos en negrita.
- Captura en buena resolución (no la reduzcas hasta que no se lea).
- Si citas una fuente (por ejemplo, la definición de OTIF que investigaste en la S2), cítala en APA 7.
- Exporta a PDF y nómbralo `TuApellido_Escenario_Reporte.pdf`.

## Paso 4 — Prepara y ensaya tu demo de 5 minutos
Duration: 0:25:00

Tu demo se presenta **en vivo, desde tu dashboard**, en 5 minutos exactos. Luego tendrás 2 minutos de preguntas.

### El guion en 5 partes

| Minuto | Parte | Qué muestras |
|---|---|---|
| 0:00 – 0:30 | El problema | Tu escenario, para quién es el reporte y qué pregunta responde. |
| 0:30 – 1:15 | Los datos | Dataset simulado: filas, periodo, qué limpiaste y cómo lo verificaste. |
| 1:15 – 2:15 | Los KPI | De 3 a 5 KPI con su fórmula y su meta. |
| 2:15 – 4:00 | El dashboard | Recorrido en Z, un filtro en vivo y, si usas Power BI, un visual de IA. |
| 4:00 – 5:00 | Hallazgo y recomendación | Un hallazgo con cifra, una acción concreta y cómo usaste la IA. |

### Frases de apoyo

```
[0:00] Hola, soy [nombre]. Trabajé el escenario de [escenario]. Un [cargo] necesita saber [pregunta de negocio].
[0:30] Usé un dataset simulado de [n] filas, de enero a marzo de 2026, generado con IA. Encontré [errores principales] y los corregí con Power Query. Verifiqué [KPI] recalculándolo en Excel.
[1:15] Elegí [n] KPI: [KPI 1] con meta de [meta], [KPI 2]... porque [por qué importan].
[2:15] Arriba están los KPI. Aquí ven [visual]. Si filtro por [Área / Zona / Turno]... El [árbol de descomposición / influenciadores clave] muestra que...
[4:00] Mi hallazgo principal: [hallazgo con cifra]. Recomiendo que [responsable] [acción] en [plazo], y lo mediría con [KPI]. Usé IA para [para qué] y verifiqué [qué]. Gracias.
```

### Ensaya dos veces con cronómetro

1. Primer ensayo: graba tu pantalla o pide a alguien que te escuche. Anota en qué parte te pasaste de tiempo.
2. Recorta: si te pasas, reduce la parte de datos, nunca la recomendación.
3. Segundo ensayo: debes terminar entre 4:30 y 5:00.

### Antes de tu turno

- [ ] Power BI o Excel abierto en la página del dashboard, con los filtros limpios.
- [ ] Notificaciones apagadas y pestañas personales cerradas.
- [ ] Compartirás **solo la ventana** de Power BI o Excel, no toda la pantalla.
- [ ] Plan B listo: tu reporte PDF y capturas del dashboard en una carpeta a la mano.
- [ ] Subiste la captura de tu dashboard en la actividad de ClassPoint del inicio de la S8.

### Prepárate para las preguntas

Estas son las que más se repiten. Ten una respuesta de 30 segundos para cada una:

- ¿De dónde sale la meta de tu KPI principal?
- ¿Qué error encontraste en los datos y cómo lo corregiste?
- ¿Qué decisión tomaría un jefe con este hallazgo?
- ¿En qué te ayudó la IA y qué tuviste que corregirle?

### Si presentas en pareja

Con turnos de 7 minutos y 100 minutos de presentaciones en la S8 (dos rondas de 50), caben **14 presentaciones como máximo**. Por eso, si el grupo tiene **más de 14 participantes**, se presenta en parejas del mismo escenario, que el docente forma y anuncia en la S7 (si el número es impar, una persona presenta sola). Cada integrante conserva y entrega su propio proyecto. En la demo se comparte el dashboard de uno de los dos (el otro tiene el suyo abierto como plan B) y, en la parte 5, se dan los dos hallazgos con su cifra: en qué coinciden y en qué difieren. Ambos hablan:

| Persona | Partes | Tiempo |
|---|---|---|
| A | El problema, los datos y los KPI | 0:00 – 2:15 |
| B | El dashboard, el hallazgo y la recomendación | 2:15 – 5:00 |

Ambos responden las preguntas. Cada integrante entrega sus propios archivos, reporte, declaración y ficha de portafolio. Con más de 28 participantes, el docente te avisa en la S7 cómo se organiza tu turno (por ejemplo, en tríos del mismo escenario).

## Paso 5 — Presenta y coevalúa en la S8
Duration: 0:05:00

### Cómo funciona tu turno

- Cada turno dura **7 minutos: 5 de demo + 2 de preguntas**.
- **Regla de espera:** abre tu archivo mientras presenta el turno anterior. Si no estás listo cuando te llaman, pasas al final de tu ronda.
- El docente te avisa al minuto 4 (queda 1) y al minuto 5 (cierra con tu recomendación).
- Si falla tu pantalla, el docente muestra la captura que subiste a ClassPoint y tú la explicas.

### Cómo coevalúas a los demás

Mientras cada compañero responde sus preguntas, califícalo en tu pestaña de ClassPoint del 1 al 4, pensando en la rúbrica:

| Nivel | Qué significa |
|---|---|
| 4 · Logrado | KPI claros, hallazgo con cifras y recomendación concreta. |
| 3 · Bien | Se entiende, con detalles por mejorar. |
| 2 · En proceso | Faltó claridad en el hallazgo o la recomendación. |
| 1 · Inicial | No identifiqué el hallazgo ni la recomendación. |

Tus compañeros no ven tu voto. La coevaluación **no suma puntos**: es retroalimentación. La nota la pone el docente con la rúbrica.

### Después de presentar

Anota 3 cosas que te preguntaron o te sugirieron y decide cuáles incorporas antes de la entrega de las 23:59.

## Paso 6 — Arma tu ficha de portafolio
Duration: 0:20:00

Tu proyecto ya es una prueba de lo que sabes hacer. La ficha de portafolio lo cuenta para alguien que **no conoce el curso**: un reclutador, un jefe de prácticas o un profesor.

### Lo que debe tener tu ficha (en cualquier formato)

| Elemento | Ejemplo (logística) |
|---|---|
| Título | Reporte operativo de despachos: entregas a tiempo por transportista |
| Tu rol | Analista de operaciones (proyecto académico) |
| Problema | El coordinador de despachos necesita saber dónde y con quién se pierden las entregas a tiempo. |
| Datos | Dataset simulado de 420 pedidos, enero a marzo de 2026, limpiado en Power Query. |
| Herramientas | Excel, Power Query, Power BI, ChatGPT / Gemini / Copilot Chat |
| KPI | % de entregas a tiempo, % de pedidos completos, OTIF, costo de flete por pedido |
| Hallazgo | TRA-C concentra el 60 % de los retrasos de Lima Sur. |
| Recomendación | Prueba de 4 semanas reasignando pedidos de Lima Sur y midiendo el % a tiempo semanal. |
| Captura | El dashboard completo, legible. |
| Uso de IA | Versión corta de tu declaración (paso 7). |
| Aviso | Datos simulados con fines académicos. |

Elige **al menos uno** de estos tres formatos.

### Opción A · LinkedIn

1. Redacta tu publicación con este prompt:

```
ROL: Actúa como especialista en marca personal para perfiles técnicos.
CONTEXTO: Terminé un proyecto académico de [escenario] con datos simulados. KPI: [lista]. Hallazgo: [cifra]. Recomendación: [acción]. Herramientas: Excel, Power Query, Power BI e IA.
TAREA: Redacta una publicación de LinkedIn sobre el proyecto.
RESTRICCIONES: De 120 a 180 palabras, tono profesional y cercano. Usa solo mis cifras. Aclara que los datos son simulados. Máximo 4 hashtags. Sin emojis.
FORMATO: Una línea de gancho, 3 viñetas y una pregunta final para generar conversación.
```

2. Revísala y hazla tuya. Este es un ejemplo de resultado:

```
¿Cómo saber qué transportista está frenando tus entregas?

Terminé mi proyecto integrador del curso IA Aplicada a Tareas Laborales y Académicas: un reporte operativo de despachos con Excel, Power BI e IA, construido con un dataset simulado de 420 pedidos (enero a marzo de 2026).

- Limpié duplicados, fechas en formato mixto y textos inconsistentes con Power Query.
- Definí 4 KPI: % de entregas a tiempo, % de pedidos completos, OTIF y costo de flete por pedido.
- Encontré que un transportista concentraba el 60 % de los retrasos en una zona.

Mi recomendación: una prueba de 4 semanas reasignando pedidos y midiendo el % de entregas a tiempo cada semana.

Usé IA para generar el dataset simulado y para dictar fórmulas y medidas DAX; verifiqué cada cifra en Excel.

¿Qué KPI agregarías a este tablero?

#PowerBI #Excel #Logistica #AnalisisDeDatos
```

3. Publica con la captura del dashboard (y, si quieres, el PDF del reporte como documento adjunto).
4. Agrega el proyecto a la sección de proyectos o destacados de tu perfil, con el enlace a la publicación.

### Opción B · GitHub

1. Crea un repositorio público nuevo, por ejemplo `reporte-operativo-despachos`, y marca la opción para crear un archivo README.
2. Sube tus archivos con la opción de subir archivos del repositorio: el reporte PDF, las capturas (en una carpeta `capturas/`) y, si pesan poco, el `.pbix` y el `.xlsx` limpio.
3. Reemplaza el README con esta plantilla:

```
# Reporte operativo de despachos (proyecto académico)

> Datos simulados con fines académicos. No contiene datos de personas ni de empresas reales.

## Problema
El coordinador de despachos necesita saber dónde y con quién se pierden las entregas a tiempo.

## Datos
Dataset simulado de [n] pedidos, enero a marzo de 2026. Limpieza en Power Query: [errores corregidos].

## KPI
| KPI | Fórmula | Meta | Resultado |
|---|---|---|---|
| [KPI 1] | [fórmula] | [meta] | [valor] |

## Dashboard
![Dashboard](capturas/dashboard.png)

## Hallazgo y recomendación
- Hallazgo: [hallazgo con cifra]
- Recomendación: [acción, responsable, KPI y plazo]

## Herramientas
Excel · Power Query · Power BI Desktop · [ChatGPT / Gemini / Copilot Chat]

## Uso de IA
[Versión corta de tu declaración de uso de IA]

## Archivos
- `reporte_operativo.pdf`
- `dashboard.pbix`
- `datos_limpios.xlsx`

## Autor(a)
[Tu nombre] · [enlace a tu LinkedIn]
```

> **Ojo:** GitHub no acepta archivos muy pesados desde la web (el límite de carga por archivo es de unos 25 MB). Si tu `.pbix` pesa más, sube solo el PDF y las capturas.

### Opción C · PDF de una página

Ideal para adjuntar a tu CV o enviar en una postulación. Usa una sola página horizontal o vertical:

1. **Franja superior:** título del proyecto, tu nombre, tu rol y la leyenda "Datos simulados".
2. **Columna izquierda:** problema, datos, herramientas y KPI (en viñetas).
3. **Centro:** captura grande del dashboard.
4. **Franja inferior:** hallazgo, recomendación y la versión corta de tu declaración de uso de IA.

Nómbralo `TuApellido_Escenario_Portafolio.pdf`.

### Publica sin exponer datos

- [ ] Solo datos simulados y códigos (EQ-101, CLI-07, COLAB-021).
- [ ] Sin logos, nombres ni datos de una empresa real (tampoco de tu centro de trabajo).
- [ ] La captura no muestra correos, rutas de archivos ni pestañas personales.
- [ ] Dice "Datos simulados con fines académicos".

## Paso 7 — Escribe tu declaración de uso de IA
Duration: 0:10:00

Declarar cómo usaste la IA es una muestra de **criterio profesional**: dice qué hizo la herramienta, qué verificaste tú y qué es aporte propio. En el Perú, la Ley 31814 y su reglamento (DS 115-2025-PCM, vigente desde el 22 de enero de 2026) promueven un uso responsable y transparente de la IA, y la Ley 29733 protege los datos personales.

La declaración va como **anexo de tu reporte PDF** (no cuenta dentro de las 2 páginas) y, en versión corta, en tu ficha de portafolio.

### Plantilla

```
DECLARACIÓN DE USO DE INTELIGENCIA ARTIFICIAL
Proyecto: [título] · Autor(a): [tu nombre] · Fecha: [dd/mm/aaaa]

1. HERRAMIENTAS Y PARA QUÉ LAS USÉ
| Herramienta | Etapa | Para qué la usé |
| [ChatGPT / Gemini / Copilot Chat] | Datos (S4) | [Generar el dataset simulado] |
| [herramienta] | Limpieza (S4) | [Dictar fórmulas de Excel y pasos de Power Query] |
| [herramienta] | KPI y dashboard (S5–S7) | [Explicar medidas DAX, revisar el diseño] |
| [herramienta] | Reporte y portafolio (S8) | [Mejorar la redacción del resumen y la publicación] |

2. PROMPTS CLAVE (máximo 3)
- [Prompt 1, resumido]
- [Prompt 2, resumido]
- [Prompt 3, resumido]

3. QUÉ VERIFIQUÉ O CORREGÍ
- [Ej.: recalculé la disponibilidad en Excel y coincidió con Power BI.]
- [Ej.: la IA propuso una fórmula con comas; la corregí a punto y coma.]
- [Ej.: eliminé una cifra del resumen que no estaba en mis datos.]

4. QUÉ ES APORTE PROPIO
- [Elección de la pregunta de negocio y de los KPI, metas, diseño del dashboard, hallazgo y recomendación.]

5. DATOS Y RESPONSABILIDAD
[x] Usé solo datos simulados; no compartí con la IA datos personales (Ley 29733) ni información confidencial.
[x] Revisé todo el contenido generado por IA y asumo la responsabilidad del resultado.
```

### Ejemplo resuelto (control de equipos)

```
1. HERRAMIENTAS Y PARA QUÉ LAS USÉ
| Gemini | Datos (S4) | Generar el CSV simulado de 400 filas de registro_mantenimiento. |
| ChatGPT | Limpieza (S4) | Dictar las fórmulas ESPACIOS, NOMPROPIO y BUSCARX y los pasos de Power Query. |
| Copilot Chat | Dashboard (S6–S7) | Explicar la medida DAX de disponibilidad con DIVIDE y CALCULATE. |
| ChatGPT | Reporte (S8) | Acortar el resumen ejecutivo a 70 palabras. |

3. QUÉ VERIFIQUÉ O CORREGÍ
- La disponibilidad de Planta en Excel (86,4 %) coincidió con la tarjeta de Power BI.
- La IA usó comas como separador en una fórmula; la cambié a punto y coma.
- El resumen decía "reducción del 15 % de costos"; esa cifra no estaba en mis datos y la eliminé.
```

### Versión corta para tu portafolio

```
Uso de IA: usé [Gemini] para generar el dataset simulado y [ChatGPT] para dictar fórmulas y medidas DAX. Verifiqué cada KPI en Excel; la elección de KPI, el análisis y las recomendaciones son míos. Datos simulados con fines académicos.
```

> **Ojo:** no declares lo que no hiciste ni ocultes lo que sí hiciste. Usar IA está permitido y se valora; lo que se penaliza es no verificar o no declarar.

## Paso 8 — Haz tu entrega final
Duration: 0:05:00

Antes de subir, revisa:

- [ ] Dashboard final: `TuApellido_Escenario_Dashboard.pbix` (o `.xlsx` si no tienes Windows).
- [ ] Dataset limpio: `TuApellido_Escenario_Datos.xlsx`.
- [ ] Reporte: `TuApellido_Escenario_Reporte.pdf`, de 1 a 2 páginas más el anexo con tu declaración de uso de IA.
- [ ] Ficha de portafolio: `TuApellido_Escenario_Portafolio.pdf` o el enlace a tu publicación de LinkedIn o repositorio de GitHub.
- [ ] Incorporaste la retroalimentación de tu presentación.
- [ ] Todo usa datos simulados.

Sube todo a la tarea **"Proyecto integrador"** del LMS, **hoy hasta las 23:59**.

> **Ojo:** si tu `.pbix` supera el límite de tamaño de la tarea, súbelo a OneDrive o Google Drive y pega el enlace con permiso de lectura. Verifica el enlace en una ventana de incógnito antes de entregar.

## Rúbrica del proyecto integrador
Duration: 0:05:00

El proyecto integrador vale el **50 % de la nota práctica** (30 % de la nota final). Se califica con 5 criterios de 1 a 4 puntos cada uno: **total sobre 20**. Los criterios 1 a 4 se califican con tus archivos entregados y tu demo; el criterio 5, con tu demo, tu reporte y tu declaración.

| Criterio | 4 · Logrado | 3 · Bien | 2 · En proceso | 1 · Inicial |
|---|---|---|---|---|
| **1. KPI pertinentes** | De 3 a 5 KPI que responden a la pregunta de negocio de tu escenario, cada uno con fórmula correcta, meta justificada y explicación de por qué importa. | De 3 a 5 KPI pertinentes con fórmula y meta, pero alguna meta no está justificada o la explicación es débil. | Menos de 3 KPI, KPI poco relacionados con el escenario (conteos sin contexto) o sin metas. | KPI ausentes, mal calculados o que no responden a ninguna pregunta de negocio. |
| **2. Datos limpios y verificados** | Sin duplicados, tipos correctos, textos homogéneos y valores en rango. Documentas qué errores corregiste (con conteos) y recalculas al menos un KPI por otra vía. | Datos limpios con algún detalle menor (un texto inconsistente, por ejemplo). Documentas la limpieza, pero la verificación es parcial. | Quedan errores visibles que afectan algún KPI (duplicados, fechas como texto) o la limpieza no está documentada. | Datos sin limpiar o sin evidencia de verificación: las cifras no se pueden reproducir. |
| **3. Dashboard claro** | Una página con título, tarjetas de KPI arriba, 3 o 4 gráficos o tablas adecuados, segmentaciones que funcionan, lectura en Z y colores consistentes. Se entiende en menos de un minuto. | Dashboard ordenado y funcional con 1 o 2 detalles: un gráfico poco adecuado, ejes sin título o exceso de colores. | Dashboard recargado o desordenado, con visuales que no corresponden al dato o filtros que no funcionan. | Dashboard incompleto, ilegible o no entregado. |
| **4. Hallazgo y recomendación de negocio** | Al menos un hallazgo respaldado por cifras del dashboard y una recomendación coherente con acción, responsable, KPI de seguimiento y plazo. Distingues relación de causa. | Hallazgo con cifras y recomendación pertinente, pero incompleta (sin responsable, plazo o KPI de seguimiento). | Hallazgo solo descriptivo ("las fallas subieron") o recomendación genérica ("mejorar el mantenimiento"). | Sin hallazgo ni recomendación, o no se sostienen en los datos. |
| **5. Comunicación y uso responsable de IA** | Demo de 5 minutos con las 5 partes del guion y respuestas seguras. Reporte claro de 1 a 2 páginas. Declaración de uso de IA completa (herramientas, para qué, qué verificaste) y solo datos simulados. | Comunicación clara, con un desfase de tiempo o una sección del reporte débil. Declaración completa pero general. | Demo desordenada o muy fuera de tiempo, reporte incompleto o de más de 2 páginas, o declaración incompleta. | No presenta o el reporte no se entiende; sin declaración de uso de IA, o expone datos personales reales. |

**Puntaje:** suma de los 5 criterios (mínimo 5, máximo 20). Un proyecto no entregado vale 0.

**En pareja:** los criterios 1 a 4 se califican con los archivos que entrega cada integrante; el criterio 5 exige que ambos hablen en la demo y que cada uno entregue su propia declaración.

> **Ojo:** si por una razón justificada no puedes presentar en la S8, avisa al docente antes de la sesión para coordinar una alternativa (por ejemplo, un video de 5 minutos con el mismo guion).

## Si terminas antes
Duration: 0:03:00

Retos opcionales para llevar tu proyecto un paso más allá:

- **Crea un revisor de reportes:** arma un asistente reutilizable (un Gem en Gemini, un agente en Copilot Chat o un GPT personalizado si tienes plan de pago de ChatGPT) con esta rúbrica como instrucción. Pásale tu reporte y compara su evaluación con la tuya.
- **Agrega un mes más:** genera abril de 2026 con el mismo prompt de la S4, añádelo a tu Excel y actualiza tu dashboard. ¿Se mantiene tu hallazgo?
- **Página de detalle:** agrega una segunda página al dashboard con el detalle por equipo, transportista o área.
- **Publica hoy:** no esperes. Sube tu publicación de LinkedIn o tu repositorio de GitHub y comparte el enlace con el grupo.

## Resumen
Duration: 0:02:00

En este laboratorio:

- Revisaste tu proyecto contra un checklist y verificaste un KPI por dos vías.
- Convertiste cifras en un **hallazgo** y una **recomendación** con responsable, KPI y plazo.
- Escribiste un reporte operativo que se entiende sin tu presencia.
- Preparaste y presentaste una demo de 5 minutos.
- Llevaste tu proyecto a tu portafolio y declaraste con transparencia cómo usaste la IA.

### ¿Qué sigue?

Este fue el último laboratorio del curso. Tu siguiente paso es **usar lo aprendido**: publica tu proyecto esta semana, repite el flujo con otro escenario o con más meses de datos, y sigue aprendiendo Power BI con las rutas gratuitas de Microsoft Learn.

Gracias por construir tu reporte operativo con nosotros.
