id: ia-aplicada-lab-03
summary: Laboratorio 3 del curso IA Aplicada a Tareas Laborales y Académicas. Trabaja con 3 documentos simulados de tu escenario en Gemini Notebook o en el chat: resúmelos con citas, extrae la información a una tabla, compáralos para encontrar brechas y convierte los hallazgos en un informe ejecutivo y una presentación de 3 diapositivas con referencias en APA 7.
status: Published
authors: Benjamin Pareja
categories: IA, Productividad
environments: Web
feedback link: https://me7aben.github.io/gdg-codelabs/

# Laboratorio 3 — Del documento al informe y la presentación

## Antes de empezar
Duration: 0:03:00

En este laboratorio vas a trabajar con **3 documentos de tu escenario** (un procedimiento, un reporte semanal y un tercer documento de apoyo). Con ayuda de la IA los resumirás con citas, extraerás la información a una tabla, los compararás para encontrar lo que no se cumplió y convertirás los hallazgos en un informe ejecutivo y una presentación.

**Duración:** 65 minutos (en clase).

**Qué entregas:** en la tarea "Laboratorio 3" del LMS, hoy hasta las 23:59:

- Ficha de evidencia en PDF (`Lab03_Apellido_Nombre.pdf`).
- Informe ejecutivo de 1 página, con la tabla extraída como anexo (`Lab03_Informe_Apellido_Nombre.docx`).
- Presentación de 3 diapositivas (`Lab03_Presentacion_Apellido_Nombre.pptx`).

### Lo que necesitas

| Requisito | Detalle |
|---|---|
| Herramienta para documentos | Gemini Notebook (antes NotebookLM) en notebooklm.google, gratis con cuenta Google (recomendado). Alternativa: ChatGPT, Gemini o Copilot Chat con archivos adjuntos. |
| Procesador de texto | Word o Google Docs. |
| Presentaciones | PowerPoint o Google Slides. Con IA: Gamma (créditos gratuitos), Copilot en PowerPoint (requiere licencia de Microsoft 365 Copilot) o Gemini en Google Slides (requiere plan elegible). |
| Excel (opcional) | Para contar filas y recalcular totales de tu tabla. |
| Tus documentos | Los 3 documentos de ejemplo de tu escenario, en el paso siguiente. |
| Tu asistente del Lab 2 | Opcional: puedes usarlo en lugar del chat general. |

> **Ojo:** los documentos de esta guía son **simulados**. Si quieres agregar un documento propio, que sea público (por ejemplo, el manual de un fabricante) y nunca un documento interno con datos de personas o información confidencial (Ley 29733 de Protección de Datos Personales).

> **Ojo:** como en la vida real, los documentos traen **al menos 2 inconsistencias a propósito** (cifras que no cuadran, reglas que no se cumplieron). Encontrarlas cuenta para tu nota de verificación crítica.

### El flujo del laboratorio

| Paso | Resultado |
|---|---|
| Resumir con citas | 5 ideas clave por documento, con su fuente |
| Extraer | Una tabla limpia con los datos del reporte |
| Comparar | Una tabla de brechas: qué no se cumplió y qué regla lo pide |
| Informe ejecutivo | 1 página con hallazgos, impacto y recomendaciones |
| Presentación | 3 diapositivas: situación, hallazgos y recomendaciones |

## Prepara tus documentos
Duration: 0:05:00

1. Busca abajo los 3 documentos de **tu escenario**.
2. Copia cada uno, desde su título hasta el final, en un documento nuevo de Google Docs o Word. Guárdalos como `Doc1_Procedimiento` (en asistencia, `Doc1_Reglamento`), `Doc2_Reporte` y `Doc3_[nombre]`.
3. Si usarás Gemini Notebook, también puedes agregar cada documento directamente como fuente de **texto pegado**.

> **Verifica:** revisa que cada documento conserve su título, su código y sus tablas. Los necesitarás para citar.

### Escenario 1 · Control de equipos

#### Documento 1 — Procedimiento de mantenimiento preventivo de compresores

**Industrias Demo S.A.C. (empresa simulada) · Código: PRO-MAN-004 · Versión 03 · Enero de 2026**

**1. Objetivo.** Asegurar la disponibilidad de los compresores de aire de la planta mediante inspecciones diarias y mantenimiento preventivo programado.

**2. Alcance.** Compresores EQ-101, EQ-102 y EQ-103 del área Planta.

**3. Responsables.**

- Jefe de mantenimiento: aprueba el programa preventivo mensual.
- Técnico asignado (solo TEC-01 o TEC-02, capacitados en este procedimiento): ejecuta el mantenimiento.
- Supervisor de turno: coordina la parada y libera el equipo.

**4. Frecuencias.**

| Frecuencia | Actividad |
|---|---|
| Cada turno | Revisar el nivel de aceite, purgar el condensado y registrar presión y temperatura. |
| Cada 250 horas de operación | Limpiar el filtro de aire de admisión y revisar la tensión de las fajas. |
| Cada 1000 horas de operación | Cambiar aceite, filtro de aceite y filtro separador. |

**5. Seguridad.** Antes de intervenir, aplicar bloqueo y etiquetado y registrarlo en la orden de trabajo (OT). EPP obligatorio: lentes, guantes y protección auditiva. Esperar 10 minutos después de despresurizar.

**6. Pasos del mantenimiento de 250 horas.**

1. Coordinar la parada con el supervisor de turno con al menos 24 horas de anticipación.
2. Aplicar bloqueo y etiquetado.
3. Despresurizar y esperar 10 minutos.
4. Limpiar o cambiar el filtro de admisión.
5. Revisar las fajas y cambiarlas si tienen grietas o desgaste.
6. Retirar el bloqueo, arrancar en vacío 5 minutos y verificar la presión.
7. Registrar en la OT las horas, los repuestos usados y su costo.

**7. Criterios de aceptación.** Presión de trabajo entre 7 y 8 bar. Temperatura de descarga menor a 95 °C. Sin fugas audibles.

**8. Registros.** La OT se cierra en un máximo de 24 horas después del trabajo. Las fallas se informan en el reporte semanal de fallas y paradas.

**9. Indicadores.** Disponibilidad mensual de compresores mayor o igual a 95 %. Cumplimiento del programa preventivo mayor o igual a 90 %.

#### Documento 2 — Reporte semanal de fallas y paradas: semana 06

**Industrias Demo S.A.C. (empresa simulada) · Del 2 al 8 de febrero de 2026 · Elaborado por: SUP-02**

**Resumen de la semana:** 7 eventos registrados, 22,5 horas de parada y S/ 7340 en repuestos.

| Fecha | Equipo | Tipo | Área | Turno | Falla | Mantenimiento | Horas de parada | Repuestos (S/) | Técnico | Observación |
|---|---|---|---|---|---|---|---|---|---|---|
| 02/02/2026 | EQ-101 | Compresor | Planta | Día | Mecánica | Correctivo | 4,0 | 1250 | TEC-01 | Faja rota. El mantenimiento de 250 h estaba vencido hace 60 h. |
| 03/02/2026 | EQ-105 | Bomba | Planta | Noche | Hidráulica | Correctivo | 3,5 | 980 | TEC-03 | Fuga en el sello mecánico. |
| 04/02/2026 | EQ-103 | Compresor | Planta | Día | Ninguna | Preventivo | 2,0 | 420 | TEC-02 | Mantenimiento de 250 h según PRO-MAN-004. |
| 05/02/2026 | EQ-108 | Montacargas | Almacén | Día | Eléctrica | Correctivo | 5,0 | 1600 | TEC-04 | Falla de batería. Se usó un montacargas de respaldo. |
| 06/02/2026 | EQ-102 | Compresor | Planta | Noche | Mecánica | Correctivo | 3,0 | 890 | TEC-05 | Temperatura de descarga de 102 °C. Se intervino sin bloqueo registrado. |
| 07/02/2026 | EQ-110 | Generador | Taller | Día | Eléctrica | Correctivo | 2,5 | 1200 | TEC-06 | Cambio del regulador de voltaje. |
| 08/02/2026 | EQ-105 | Bomba | Planta | Día | Hidráulica | Correctivo | 2,5 | 500 | TEC-03 | Se repite la fuga del 03/02. |

**Pendientes:** la OT-0216 (EQ-102) sigue abierta desde el 06/02; falta registrar los repuestos usados.

#### Documento 3 — Acta de reunión semanal de mantenimiento

**Industrias Demo S.A.C. (empresa simulada) · Lunes 9 de febrero de 2026, de 8:00 a 8:45 · Participantes: JEF-MAN-01, SUP-02, TEC-01, TEC-03 y PLAN-01**

**Temas tratados:**

1. Revisión del reporte de fallas de la semana 06.
2. Cumplimiento del programa preventivo de compresores.
3. Seguridad en las intervenciones.

**Disponibilidad de la semana:** Planta 93 %, Almacén 96 %, Taller 97 %. Meta: 95 %.

**Acuerdos:**

| N.º | Acuerdo | Responsable | Fecha límite |
|---|---|---|---|
| 1 | Reprogramar el mantenimiento de 250 h de EQ-101 y EQ-102. | TEC-01 | 12/02/2026 |
| 2 | Analizar la causa raíz de la fuga repetida de EQ-105 con el método de los 5 porqués. | TEC-03 | 16/02/2026 |
| 3 | Recordar a todo el personal técnico que el bloqueo y etiquetado es obligatorio y se registra en la OT. | SUP-02 | 10/02/2026 |
| 4 | Comprar 2 fajas de repuesto para compresores como stock mínimo. | PLAN-01 | 13/02/2026 |

**Pendiente de semanas anteriores:** capacitación de TEC-05 en el procedimiento PRO-MAN-004 (sin fecha asignada).

### Escenario 2 · Logística

#### Documento 1 — Procedimiento de despacho y gestión de incidencias

**Distribuidora Demo S.A.C. (empresa simulada) · Código: PRO-LOG-002 · Versión 02 · Enero de 2026**

**1. Objetivo.** Entregar los pedidos completos y en la fecha comprometida, y gestionar las incidencias de forma oportuna.

**2. Alcance.** Despachos desde el centro de distribución de Lima a Lima Norte, Lima Sur, Lima Centro, Callao y Arequipa.

**3. Plazos de compromiso.** Lima y Callao: de 1 a 2 días desde el pedido. Arequipa: de 3 a 5 días desde el pedido.

**4. Pasos del despacho.**

1. Confirmar el stock y generar la guía de remisión el mismo día del pedido (hora de corte: 3:00 p. m.).
2. Preparar el pedido y verificar las unidades con doble conteo.
3. Asignar el transportista según la zona.
4. Registrar la fecha y hora de entrega con la conformidad del cliente (firma o foto).
5. Cerrar el pedido en el sistema el mismo día de la entrega.

**5. Gestión de incidencias.**

| Incidencia | Qué hacer | Plazo |
|---|---|---|
| Retraso | Avisar al cliente antes de la hora comprometida y reprogramar la entrega. | Reprogramar en un máximo de 24 h |
| Dirección errada | Validar la dirección con el área comercial antes de un nuevo intento. Máximo 2 intentos; después, el pedido regresa al almacén. | Antes del segundo intento |
| Producto dañado | Tomar fotos, reponer las unidades y abrir un reclamo al transportista. | Reponer en un máximo de 48 h |

Toda incidencia se registra en el reporte semanal dentro de las 24 horas siguientes.

**6. Indicadores.** Entregas a tiempo mayor o igual a 95 %. Pedidos completos mayor o igual a 98 %. OTIF (a tiempo y completo) mayor o igual a 93 %.

#### Documento 2 — Reporte semanal de incidencias de despacho: semana 09

**Distribuidora Demo S.A.C. (empresa simulada) · Del 23 de febrero al 1 de marzo de 2026 · Elaborado el 02/03/2026 por: COORD-03**

**Resumen de la semana:** 118 pedidos despachados · 2 pendientes · 106 entregados a tiempo · 9 pedidos con incidencia.

| ID_Pedido | Fecha de pedido | Cliente | Zona | Transportista | Compromiso | Entrega | Incidencia | Unidades pedidas | Unidades entregadas | Flete (S/) | Observación |
|---|---|---|---|---|---|---|---|---|---|---|---|
| PED-0412 | 23/02/2026 | CLI-07 | Lima Centro | TRA-B | 24/02/2026 | 26/02/2026 | Retraso | 40 | 40 | 85 | No se avisó al cliente. |
| PED-0415 | 23/02/2026 | CLI-12 | Callao | TRA-A | 25/02/2026 | 25/02/2026 | Producto dañado | 120 | 112 | 140 | 8 cajas golpeadas. Reposición pendiente al 01/03. |
| PED-0421 | 24/02/2026 | CLI-03 | Arequipa | TRA-D | 27/02/2026 | 02/03/2026 | Retraso | 200 | 200 | 860 | Bloqueo de vía. Se avisó al cliente. |
| PED-0428 | 24/02/2026 | CLI-19 | Lima Norte | TRA-B | 25/02/2026 | — | Dirección errada | 15 | 0 | 60 | Tercer intento programado para el 02/03. |
| PED-0433 | 25/02/2026 | CLI-07 | Lima Centro | TRA-B | 26/02/2026 | 27/02/2026 | Retraso | 35 | 35 | 80 | Unidad del transportista averiada. Se avisó al cliente. |
| PED-0440 | 26/02/2026 | CLI-22 | Lima Sur | TRA-C | 27/02/2026 | 27/02/2026 | Producto dañado | 60 | 55 | 95 | Reclamo abierto. Reposición entregada el 28/02. |
| PED-0447 | 26/02/2026 | CLI-15 | Callao | TRA-A | 27/02/2026 | 28/02/2026 | Retraso | 25 | 25 | 70 | Se avisó al cliente. |
| PED-0452 | 27/02/2026 | CLI-09 | Lima Norte | TRA-C | 28/02/2026 | 28/02/2026 | Dirección errada | 50 | 50 | 65 | Entregado en el segundo intento. |
| PED-0458 | 28/02/2026 | CLI-03 | Arequipa | TRA-D | 04/03/2026 | — | Ninguna | 180 | 0 | 820 | En tránsito (pendiente). |

#### Documento 3 — Acuerdo de nivel de servicio con transportistas (resumen)

**Distribuidora Demo S.A.C. (empresa simulada) · Aplica a TRA-A, TRA-B, TRA-C y TRA-D · Vigente desde el 1 de enero de 2026**

1. **Metas mensuales por transportista:** entregas a tiempo mayor o igual a 95 %; pedidos completos mayor o igual a 98 %; pedidos con producto dañado menor o igual a 1 %.
2. **Aviso de retraso:** el transportista informa al coordinador de despachos al menos 2 horas antes de la hora comprometida.
3. **Penalidades:** 10 % del flete del pedido por cada entrega fuera de plazo sin aviso. Costo total de reposición por producto dañado atribuible al transportista.
4. **Excepciones:** bloqueos de vías, huelgas o desastres naturales, con evidencia (noticia o comunicado oficial). En estos casos no se aplican penalidades.
5. **Seguimiento:** reunión mensual con cada transportista. Tres meses seguidos debajo de la meta llevan a evaluar su reemplazo.
6. **Resultados de enero de 2026 (entregas a tiempo):** TRA-A 96 %, TRA-B 91 %, TRA-C 97 %, TRA-D 94 %.

### Escenario 3 · Asistencia

#### Documento 1 — Reglamento interno de control de asistencia (extracto)

**Manufacturas Demo S.A.C. (empresa simulada) · Código: RIT-ASI-01 · Vigente desde enero de 2026**

**Artículo 1. Ámbito.** Se aplica a todo el personal de Producción, Almacén, Administración y Mantenimiento.

**Artículo 2. Horarios.**

| Turno | Ingreso | Salida | Áreas |
|---|---|---|---|
| Mañana | 07:00 | 15:00 | Todas |
| Tarde | 15:00 | 23:00 | Producción, Almacén y Mantenimiento |
| Noche | 23:00 | 07:00 | Producción y Almacén |

**Artículo 3. Registro.** Cada colaborador marca su ingreso y su salida en el reloj biométrico. Si el equipo falla, se usa el registro manual, que debe estar firmado por el supervisor del turno.

**Artículo 4. Tardanzas.** Hay una tolerancia de 5 minutos, que se registra pero no se considera tardanza. Desde el minuto 6 es tardanza. Tres tardanzas en un mes dan lugar a una amonestación escrita.

**Artículo 5. Faltas justificadas.** El colaborador entrega el sustento a Recursos Humanos en un máximo de 48 horas. Sin sustento en ese plazo, la falta se considera injustificada.

**Artículo 6. Faltas injustificadas.** Se descuenta el día no trabajado. Dos faltas injustificadas en un mes dan lugar a una reunión con el jefe de área y Recursos Humanos.

**Artículo 7. Horas extra.** Son voluntarias, requieren autorización escrita previa del jefe de área y se pagan con la sobretasa que establece la ley. Por política interna, el máximo es de 4 horas extra por día.

**Artículo 8. Indicadores.** Ausentismo mensual, calculado como (faltas justificadas + faltas injustificadas) / jornadas programadas, menor o igual a 3 %. Puntualidad mayor o igual a 95 %.

#### Documento 2 — Reporte semanal de asistencia: semana 10

**Manufacturas Demo S.A.C. (empresa simulada) · Del 2 al 6 de marzo de 2026 (lunes a viernes) · Elaborado por: ANA-RH-01**

**Resumen de la semana:** 60 colaboradores · 300 jornadas programadas · ausentismo: 2,0 % · puntualidad: 93,1 %.

| Área | Colaboradores | Jornadas programadas | Faltas justificadas | Faltas injustificadas | Tardanzas | Minutos de tardanza | Horas extra |
|---|---|---|---|---|---|---|---|
| Producción | 24 | 120 | 2 | 3 | 9 | 162 | 38 |
| Almacén | 14 | 70 | 1 | 2 | 6 | 95 | 22 |
| Administración | 10 | 50 | 1 | 0 | 2 | 18 | 4 |
| Mantenimiento | 12 | 60 | 0 | 1 | 3 | 41 | 26 |
| **Total** | **60** | **300** | **4** | **6** | **20** | **316** | **90** |

**Casos a revisar:**

| Código | Área | Turno | Situación |
|---|---|---|---|
| COLAB-014 | Producción | Noche | 3 tardanzas en la semana: 12, 25 y 40 minutos. |
| COLAB-022 | Producción | Mañana | Faltó el 02/03 y entregó el sustento el 06/03. Se registró como falta justificada. |
| COLAB-031 | Almacén | Tarde | 2 faltas injustificadas (03/03 y 05/03). |
| COLAB-047 | Mantenimiento | Mañana | 6 horas extra el 04/03. No hay autorización escrita en el registro. |
| — | Almacén | Todos | El 05/03 el reloj biométrico no funcionó; se usó el registro manual sin firma del supervisor. |

#### Documento 3 — Comunicado interno: cambio de horario y horas extra

**Manufacturas Demo S.A.C. (empresa simulada) · Comunicado COM-RH-005 · Lima, 20 de febrero de 2026 · De: Recursos Humanos · Para: todo el personal**

**Asunto:** cambio de horario del turno tarde de Almacén y control de horas extra.

1. Desde el lunes 9 de marzo de 2026, el turno tarde de **Almacén** será de 14:00 a 22:00, para coordinar mejor con la salida de los camiones. Los demás turnos y áreas no cambian.
2. Desde el 1 de marzo de 2026, toda hora extra se solicita con el formato FOR-RH-03, firmado por el jefe de área **antes** de empezar. Recursos Humanos no pagará horas extra sin este formato.
3. La movilidad de la empresa para el turno tarde de Almacén saldrá a las 22:15.
4. Consultas: Recursos Humanos, anexo 205.

## Sube tus fuentes y pide un resumen con citas
Duration: 0:08:00

### Opción A — Gemini Notebook (recomendada)

1. Entra a notebooklm.google con tu cuenta Google y crea un cuaderno nuevo. Llámalo `Lab 3 — [tu escenario]`.
2. Agrega tus 3 documentos como fuentes: sube los archivos, elígelos desde Drive o pega el texto de cada uno.
3. Pega en el chat el prompt de resumen.
4. Haz clic en los números de las citas para ver el párrafo exacto de cada idea.

### Opción B — Chat con archivos

1. Abre ChatGPT, Gemini, Copilot Chat o tu asistente del Laboratorio 2.
2. Adjunta los 3 documentos (o pega su texto uno por uno, indicando el título de cada uno).
3. Pega el prompt de resumen.

### El prompt

```
ROL: Actúa como [supervisor de mantenimiento / coordinador de despachos /
analista de recursos humanos].
CONTEXTO: Te comparto 3 documentos simulados de mi empresa: [título y
código de cada documento].
TAREA: Resume cada documento en 5 ideas clave para mi jefe.
RESTRICCIONES: Usa solo la información de los documentos. Indica el
documento y la sección de cada idea. Si algo no aparece, escribe
"no indicado". No agregues recomendaciones todavía.
FORMATO: Tres listas numeradas, una por documento, de máximo 25 palabras
por idea.
```

### La pregunta trampa

Haz una pregunta cuya respuesta **no está** en los documentos:

| Escenario | Pregunta trampa |
|---|---|
| Equipos | ¿Cuánto costó el mantenimiento de EQ-112 en febrero? |
| Logística | ¿Cuánto ganan los conductores de TRA-B? |
| Asistencia | ¿Cuántos días de vacaciones le quedan a COLAB-014? |

**Lo correcto:** que responda que esa información no está en las fuentes. Si inventa una respuesta, anótalo en tu ficha.

> **Verifica:** abre 2 citas al azar (o busca en el documento la sección que indicó la IA) y confirma que la idea está ahí. Si la IA atribuyó una idea al documento equivocado, anótalo.

## Extrae la información a una tabla
Duration: 0:12:00

### 1. Pide la tabla

Usa el prompt de tu escenario. Los nombres de columnas son los mismos de tu dataset del proyecto: te servirán en Excel en la S4.

**Control de equipos**

```
ROL: Actúa como analista de mantenimiento.
CONTEXTO: Te comparto el reporte semanal de fallas y paradas de la
semana 06 (datos simulados).
TAREA: Extrae cada evento del reporte en una tabla.
RESTRICCIONES: Una fila por evento. Copia los valores tal como están:
no calcules ni completes datos. Si falta un valor, escribe "no
indicado". Al final, indica cuántas filas extrajiste y suma las horas
de parada y el costo de repuestos.
FORMATO: Tabla con columnas Fecha, Codigo_Equipo, Tipo_Equipo, Area,
Turno, Tipo_Falla, Tipo_Mantenimiento, Horas_Parada,
Costo_Repuestos_PEN, Tecnico, Observacion.
```

**Logística**

```
ROL: Actúa como analista de logística.
CONTEXTO: Te comparto el reporte semanal de incidencias de despacho de
la semana 09 (datos simulados).
TAREA: Extrae cada pedido del reporte en una tabla.
RESTRICCIONES: Una fila por pedido. Copia los valores tal como están:
no calcules ni completes datos. Si falta un valor, escribe "no
indicado". Al final, indica cuántas filas extrajiste y cuántos pedidos
tienen una incidencia distinta de "Ninguna".
FORMATO: Tabla con columnas ID_Pedido, Fecha_Pedido, Cliente, Zona,
Transportista, Fecha_Compromiso, Fecha_Entrega, Incidencia,
Unidades_Pedidas, Unidades_Entregadas, Costo_Flete_PEN, Observacion.
```

**Asistencia**

```
ROL: Actúa como analista de recursos humanos.
CONTEXTO: Te comparto el reporte semanal de asistencia de la semana 10
(datos simulados).
TAREA: Extrae la tabla por área (sin la fila Total) y la tabla de casos
a revisar.
RESTRICCIONES: Copia los valores tal como están; si falta un valor,
escribe "no indicado". En la primera tabla agrega una columna
Ausentismo_Pct calculada como (Faltas_Justificadas +
Faltas_Injustificadas) / Jornadas_Programadas, y muestra el cálculo
del ausentismo total.
FORMATO: Tabla 1 con columnas Area, Colaboradores, Jornadas_Programadas,
Faltas_Justificadas, Faltas_Injustificadas, Tardanzas, Minutos_Tardanza,
Horas_Extra, Ausentismo_Pct. Tabla 2 con columnas Codigo_Colaborador,
Area, Turno, Situacion.
```

### 2. Verifica la tabla contra el documento

Copia la tabla en Excel (o en Google Sheets) a partir de la celda A1 y revisa:

1. **Número de filas:** cuenta las filas del documento original y compáralas con las de la tabla.
2. **3 filas al azar:** compáralas celda por celda con el documento.
3. **Totales:** recalcúlalos tú mismo.

| Escenario | Fórmula para recalcular (Excel en español) | Compárala con |
|---|---|---|
| Equipos | `=SUMA(H2:H8)` (horas de parada) y `=SUMA(I2:I8)` (repuestos) | El resumen del reporte |
| Logística | `=CONTAR.SI(H2:H10;"<>Ninguna")` (pedidos con incidencia) | El resumen del reporte |
| Asistencia | `=(SUMA(D2:D5)+SUMA(E2:E5))/SUMA(C2:C5)` (ausentismo total, con formato de porcentaje) | El ausentismo del resumen |

4. **Celdas vacías:** ¿la IA escribió "no indicado" donde el documento no tenía dato, o inventó un valor?

> **Verifica:** si un total que calculas no coincide con el del documento, revisa el original antes de culpar a la IA: el error puede estar **en el documento**. Anota en tu ficha qué encontraste y dónde.

> **Ojo:** si Excel no reconoce algún número (queda alineado a la izquierda), revísalo a mano. En la S4 aprenderás a corregir tipos de datos con Power Query.

### 3. Si la IA se equivocó, corrígela

```
Revisa la fila [ID o fecha]: en el documento el valor de [columna] es
[valor correcto]. Corrige la tabla y dime si completaste alguna otra
celda que no estaba en el documento.
```

Guarda la tabla final: la pegarás como anexo de tu informe.

> A mitad del laboratorio, el docente abrirá en ClassPoint la actividad **"Sube tu tabla extraída"**: sube una captura de tu tabla y escribe qué corregiste o qué inconsistencia encontraste.

## Compara documentos y encuentra brechas
Duration: 0:07:00

Ahora cruza los 3 documentos para encontrar qué no se cumplió. Usa el prompt de tu escenario:

**Control de equipos**

```
ROL: Actúa como auditor de mantenimiento.
CONTEXTO: Te comparto 3 documentos simulados: el procedimiento
PRO-MAN-004, el reporte de fallas de la semana 06 y el acta de reunión
del 9 de febrero.
TAREA: 1) Identifica qué eventos o situaciones del reporte no cumplen
el procedimiento. 2) Revisa si los acuerdos del acta atienden cada
problema.
RESTRICCIONES: Cita el documento y la sección en cada caso. No supongas
causas ni datos que no estén en los documentos. Si un problema no tiene
acuerdo en el acta, escribe "sin acuerdo".
FORMATO: Tabla con columnas Caso, Regla (documento y sección), Qué no se
cumple, Acuerdo del acta, Acción sugerida.
```

**Logística**

```
ROL: Actúa como auditor de operaciones logísticas.
CONTEXTO: Te comparto 3 documentos simulados: el procedimiento
PRO-LOG-002, el reporte de incidencias de la semana 09 y el acuerdo de
nivel de servicio (ANS) con transportistas.
TAREA: 1) Identifica qué pedidos o situaciones del reporte no cumplen el
procedimiento. 2) Indica si aplica una penalidad o una excepción del ANS.
RESTRICCIONES: Cita el documento y la sección en cada caso. No supongas
causas ni datos que no estén en los documentos.
FORMATO: Tabla con columnas Caso, Regla (documento y sección), Qué no se
cumple, Penalidad o excepción del ANS, Acción sugerida.
```

**Asistencia**

```
ROL: Actúa como auditor interno de recursos humanos.
CONTEXTO: Te comparto 3 documentos simulados: el reglamento RIT-ASI-01,
el reporte de asistencia de la semana 10 y el comunicado COM-RH-005.
TAREA: 1) Identifica qué casos o situaciones del reporte no cumplen el
reglamento o el comunicado. 2) Indica qué artículo del reglamento
habría que actualizar por el comunicado.
RESTRICCIONES: Cita el documento y el artículo o punto en cada caso.
No supongas causas ni datos que no estén en los documentos.
FORMATO: Tabla con columnas Caso, Regla (documento y artículo), Qué no
se cumple, Acción sugerida.
```

> **Verifica:** para cada brecha, abre la sección citada y confirma que la regla dice eso. Desconfía de las "causas" que la IA agregue por su cuenta (por ejemplo, "falta de capacitación" o "mala planificación") si no aparecen en los documentos.

## Redacta el informe ejecutivo
Duration: 0:10:00

### 1. Pide el borrador

```
ROL: Actúa como [jefe de mantenimiento / jefe de operaciones logísticas /
jefa de recursos humanos] que reporta a la gerencia.
CONTEXTO: Te paso la tabla extraída y la tabla de brechas que ya
verifiqué (datos simulados): [pega las tablas].
TAREA: Redacta un informe ejecutivo de 1 página.
RESTRICCIONES: Máximo 350 palabras. Usa solo las cifras de las tablas.
Cita los documentos en APA 7 dentro del texto (Autor, año). Tono
directo, sin tecnicismos innecesarios.
FORMATO: Título; Contexto (2 líneas); 3 hallazgos con cifras; Impacto;
Recomendaciones en una tabla (acción, responsable, plazo); Referencias.
```

Si tienes **Copilot en Word** (licencia de Microsoft 365 Copilot y archivo en OneDrive o SharePoint), puedes pedirle el borrador directamente en Word y agregar tus documentos como referencia. Sin licencia, usa el prompt en ChatGPT, Gemini, Copilot Chat o Gemini Notebook.

### 2. Arma el documento

Pega el borrador en Word o Google Docs, corrígelo con tus palabras y agrega al final:

- **Anexo:** tu tabla extraída y verificada.
- **Referencias en APA 7.** Cuando citas varios documentos del mismo autor y del mismo año, ordénalos por título y agrega a, b, c al año:

| Escenario | Referencias |
|---|---|
| Equipos | Industrias Demo S.A.C. (2026a). *Acta de reunión semanal de mantenimiento* [Documento interno]. · Industrias Demo S.A.C. (2026b). *Procedimiento de mantenimiento preventivo de compresores* (PRO-MAN-004) [Documento interno]. · Industrias Demo S.A.C. (2026c). *Reporte semanal de fallas y paradas: semana 06* [Documento interno]. |
| Logística | Distribuidora Demo S.A.C. (2026a). *Acuerdo de nivel de servicio con transportistas* [Documento interno]. · Distribuidora Demo S.A.C. (2026b). *Procedimiento de despacho y gestión de incidencias* (PRO-LOG-002) [Documento interno]. · Distribuidora Demo S.A.C. (2026c). *Reporte semanal de incidencias de despacho: semana 09* [Documento interno]. |
| Asistencia | Manufacturas Demo S.A.C. (2026a). *Comunicado interno: cambio de horario y horas extra* (COM-RH-005) [Documento interno]. · Manufacturas Demo S.A.C. (2026b). *Reglamento interno de control de asistencia* (RIT-ASI-01) [Documento interno]. · Manufacturas Demo S.A.C. (2026c). *Reporte semanal de asistencia: semana 10* [Documento interno]. |

En el texto se citan así: (Distribuidora Demo S.A.C., 2026c).

- **Declaración de uso de IA**, por ejemplo:

```
Usé Gemini Notebook para resumir los documentos y extraer la tabla, y
ChatGPT para redactar el borrador. Verifiqué la tabla contra los
documentos originales: corregí 1 fila y encontré que el total de
repuestos del reporte no coincide con la suma de la tabla.
```

Si el texto de una IA aparece tal cual en tu informe, cítala también en las referencias, por ejemplo: Google. (2026). *Gemini Notebook* (versión del [fecha de uso]) [Modelo de lenguaje de gran tamaño]. https://notebooklm.google

> **Verifica:** cada cifra del informe debe estar en tu tabla verificada o en un documento. Si no puedes señalar de dónde salió, bórrala.

Guarda el informe como `.docx`. En Google Docs: **Archivo › Descargar › Microsoft Word (.docx)**.

## Crea tu presentación de 3 diapositivas
Duration: 0:10:00

### 1. Pide el guion

```
ROL: Actúa como consultor que presenta resultados a la gerencia.
CONTEXTO: Te comparto mi informe ejecutivo sobre [tema de tu escenario]
(datos simulados): [pega el informe].
TAREA: Propón el contenido de 3 diapositivas: 1) situación,
2) hallazgos con cifras, 3) recomendaciones.
RESTRICCIONES: Máximo 30 palabras por diapositiva. Usa solo cifras del
informe. Sugiere un gráfico o ícono para cada una.
FORMATO: Para cada diapositiva: título, 3 viñetas, visual sugerido y
nota para el presentador.
```

### 2. Arma las diapositivas (elige una opción)

| Opción | Cómo | Requisito |
|---|---|---|
| **A. Gamma** | En gamma.app, crea una presentación con IA a partir de texto pegado, pega tu guion e indica 3 diapositivas. Revisa y exporta a PowerPoint. | Créditos gratuitos al registrarte |
| **B. Copilot en PowerPoint** | Con tu informe guardado en OneDrive, pide a Copilot que cree una presentación a partir de ese archivo y recórtala a 3 diapositivas. | Licencia de Microsoft 365 Copilot |
| **C. Gemini en Google Slides** | Abre el panel de Gemini en Slides, pega tu guion y genera las diapositivas. Descarga con **Archivo › Descargar › Microsoft PowerPoint (.pptx)**. | Plan elegible de Workspace o Google AI |
| **D. Manual (siempre gratis)** | Abre PowerPoint o Google Slides, crea 3 diapositivas y pega títulos y viñetas del guion. Usa un diseño simple. | Ninguno |

### 3. Revisa cada diapositiva

| Diapositiva | Debe tener |
|---|---|
| 1. Situación | Qué revisaste, de qué periodo y por qué importa. |
| 2. Hallazgos | 3 hallazgos con cifras; destaca el más importante. |
| 3. Recomendaciones | Acción, responsable y plazo. |

En cada diapositiva, agrega la fuente al pie en formato corto, por ejemplo: *Fuente: (Distribuidora Demo S.A.C., 2026c)*.

> **Ojo:** Gamma y otras herramientas pueden agregar imágenes, íconos o cifras que no pediste. Revisa cada diapositiva y borra todo lo que no venga de tu informe.

Guarda la presentación como `.pptx`.

## Arma tu ficha de evidencia
Duration: 0:10:00

Crea un documento con esta estructura y expórtalo a PDF con el nombre `Lab03_Apellido_Nombre.pdf`.

| Sección | Qué va |
|---|---|
| Encabezado | Nombre, escenario y herramientas usadas (documentos, informe y presentación) |
| 1. Prompts usados | Prompts de resumen, extracción, comparación, informe y guion de diapositivas |
| 2. Resultado | Capturas del resumen con citas, de la tabla extraída y de la tabla de brechas |
| 3. Qué verificaste o corregiste | Conteo de filas, las 3 filas revisadas, los totales recalculados, las inconsistencias que encontraste en los documentos, lo que corregiste a la IA y qué pasó con la pregunta trampa |
| 4. Producto final | Captura de tus 3 diapositivas y referencia a tus archivos .docx y .pptx |

Sube **los tres archivos** (PDF, .docx y .pptx) a la tarea **Laboratorio 3** del LMS hoy hasta las **23:59**.

## Rúbrica
Duration: 0:00:00

| Criterio | 5 puntos | 3 puntos | 1 punto |
|---|---|---|---|
| **Cumple el reto** | Tabla extraída, informe ejecutivo de 1 página y presentación de 3 diapositivas, basados en los 3 documentos. | Falta uno de los 3 productos o usa solo 1 documento. | Solo entrega uno de los productos. |
| **Calidad del prompt** | Prompts con los 5 elementos que piden citar documento y sección, y escribir "no indicado" cuando falta un dato. | Faltan 1 o 2 elementos o no piden citar la fuente. | Prompts de una línea, sin estructura. |
| **Verificación crítica** | Cuenta filas, revisa 3 filas, recalcula totales y documenta al menos una inconsistencia de los documentos y una corrección a la IA. | Verificación parcial o genérica ("revisé y está bien"). | No hay verificación. |
| **Orden y presentación** | Informe de 1 página y diapositivas legibles, referencias APA 7 correctas, fuente al pie de las diapositivas y declaración de uso de IA. | Completo, pero con referencias incompletas o un informe de más de 1 página. | Desordenado, sin referencias o con datos personales reales. |

**Total:** 20 puntos.

## Si terminas antes
Duration: 0:00:00

Prueba la operación **transformar**: pide a la IA que convierta el procedimiento de tu escenario en un **checklist de una página** para el técnico, el coordinador o el supervisor, y revisa que no agregue pasos que no estén en el documento.

Si usaste Gemini Notebook, explora el panel **Studio**: genera un mapa mental o un resumen en audio de tus 3 documentos y compáralo con tu informe. ¿Destacó los mismos hallazgos? Anótalo en tu ficha.

## Resumen
Duration: 0:00:00

Hoy aprendiste a:

- Usar tus documentos como fuente en Gemini Notebook o en el chat, pidiendo citas.
- Resumir, extraer a tablas y comparar documentos para encontrar brechas.
- Verificar lo extraído: filas, celdas al azar y totales recalculados.
- Convertir los hallazgos en un informe ejecutivo y una presentación con referencias APA 7.

**Próxima sesión (S4):** Excel con IA. Generarás con IA el dataset simulado de tu escenario y lo limpiarás con tablas, Power Query y fórmulas dictadas por la IA en español. Trae Excel instalado (funciona en Windows y en Mac).
