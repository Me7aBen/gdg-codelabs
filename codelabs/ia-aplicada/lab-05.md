id: ia-aplicada-lab-05
summary: Laboratorio 5 del curso IA Aplicada a Tareas Laborales y Académicas. Define de 3 a 5 KPI operativos de tu escenario (equipos, logística o asistencia) con su ficha y arma un mini-dashboard en Excel con tablas dinámicas, gráficos dinámicos y segmentaciones, verificando cada KPI con fórmulas.
status: Published
authors: Benjamin Pareja
categories: IA, Productividad, Excel
environments: Web
feedback link: https://me7aben.github.io/gdg-codelabs/

# Laboratorio 5 — KPI y mini-dashboard en Excel

## Antes de empezar
Duration: 0:03:00

Este es el **paso 2 del proyecto integrador**. Con la tabla limpia del Laboratorio 4 vas a definir los indicadores de tu escenario y a mostrarlos en un tablero que se filtra con un clic. En la S6 llevarás estos mismos KPI a Power BI.

**Objetivo:** definir de 3 a 5 KPI con su ficha (nombre, fórmula, meta y por qué importa), calcularlos con fórmulas y construir un mini-dashboard con tablas dinámicas, gráficos dinámicos y segmentaciones.

**Duración total:** 65 minutos.

### Qué entregas

| Entregable | Detalle |
|---|---|
| Archivo `.xlsx` | Nombre sugerido: `Lab05_<Apellido>_<escenario>.xlsx`. Parte de tu archivo del Lab 4 y agrega las hojas **Ficha_KPI**, **KPI**, **TD** y **Dashboard**. |
| Ficha de evidencia en PDF | Prompts, resultado, qué verificaste o corregiste y producto final (plantilla en «Arma tu ficha de evidencia»). |
| Dónde y cuándo | Tarea "Laboratorio 5" del LMS, hoy hasta las 23:59. |

### Herramientas

| Herramienta | Para qué | Alternativa |
|---|---|---|
| Microsoft Excel (Microsoft 365) | Columnas calculadas, tablas y gráficos dinámicos, segmentaciones | Todo funciona en Windows y en Mac. Si en Mac no ves la escala de tiempo, usa una segmentación por mes. |
| ChatGPT, Gemini o Copilot Chat | Proponer KPI, revisar fórmulas y criticar tu dashboard | Cualquiera de las tres en su versión gratuita. Copilot dentro de Excel solo con licencia Microsoft 365 Copilot. |

### Ten abierto

- Tu archivo del Laboratorio 4, guardado con otro nombre: **Archivo › Guardar como** › `Lab05_<Apellido>_<escenario>.xlsx`.
- Si no terminaste el Lab 4, descarga el **dataset limpio de respaldo** del LMS (mismas columnas y la columna Control). Si no ves la columna Control, omite el filtro Control = OK en todas las tablas dinámicas.
- Tu informe del Lab 2: ahí están las metas del sector que investigaste, con sus fuentes. Opcional: tu asistente del Lab 2 para proponer los KPI.

> **Ojo:** antes de calcular, revisa tu columna Control del Lab 4. Si hay filas "Revisar", corrígelas en Power Query o, si decides dejarlas, exclúyelas en las tablas dinámicas (filtro Control = OK) y también en la hoja KPI. Un KPI calculado sobre datos dudosos es un KPI dudoso.

En los pasos uso los nombres de tabla del curso: `registro_mantenimiento` (equipos), `despachos` (logística) y `asistencia`. Si tu tabla se llama distinto, cambia el nombre en las fórmulas.

## Agrega columnas calculadas de 1 y 0
Duration: 0:07:00

Muchos KPI son "cuántos cumplen / cuántos hay". La forma más simple de calcularlos (y de que funcionen en tablas dinámicas) es agregar columnas que valgan **1 si cumple y 0 si no**. Así, la suma es el conteo y el promedio es el porcentaje.

> **No agregas datos nuevos:** son columnas calculadas a partir de las que ya tienes. Las columnas originales de `datasets.md` no cambian.

En la hoja **Limpio**, escribe el encabezado en la primera columna vacía a la derecha de tu tabla y la fórmula debajo. La tabla la copia sola a todas las filas.

**Control de equipos:**

| Columna nueva | Fórmula | Significa |
|---|---|---|
| Es_Falla | `=SI([@Tipo_Falla]="Ninguna";0;1)` | 1 si ese día hubo falla |
| Es_Correctivo | `=SI([@Tipo_Mantenimiento]="Correctivo";1;0)` | 1 si el mantenimiento fue correctivo |

**Logística:**

| Columna nueva | Fórmula | Significa |
|---|---|---|
| A_Tiempo | `=SI(Y([@Estado]="Entregado";[@Fecha_Entrega]<=[@Fecha_Compromiso]);1;0)` | 1 si se entregó hasta la fecha comprometida |
| Completo | `=SI(Y([@Estado]="Entregado";[@Unidades_Entregadas]=[@Unidades_Pedidas]);1;0)` | 1 si se entregaron todas las unidades |
| OTIF | `=[@A_Tiempo]*[@Completo]` | 1 solo si fue a tiempo y completo |

**Asistencia:**

| Columna nueva | Fórmula | Significa |
|---|---|---|
| Es_Falta | `=SI(IZQUIERDA([@Estado];5)="Falta";1;0)` | 1 si fue falta justificada o injustificada |
| Es_Puntual | `=SI([@Estado]="Presente";1;0)` | 1 si llegó a su hora |

> **Verifica:** revisa 3 filas a mano: ¿el 1 o el 0 tiene sentido con los datos de esa fila? Luego haz una prueba de lógica. En logística, `=SUMA(despachos[OTIF])` nunca puede ser mayor que `=SUMA(despachos[A_Tiempo])`; en equipos, `=SUMA(registro_mantenimiento[Es_Falla])` debe ser igual a `=CONTAR.SI(registro_mantenimiento[Tipo_Falla];"<>Ninguna")`; en asistencia, `=SUMA(asistencia[Es_Falta])` debe ser igual a `=CONTAR.SI(asistencia[Estado];"Falta*")`.

> **Ojo:** si en el Lab 4 Power Query cambió "Falta justificada" por "Falta Justificada", la fórmula sigue funcionando: `IZQUIERDA` toma las 5 primeras letras y Excel no distingue mayúsculas al comparar.

## Define tus KPI con ayuda de la IA
Duration: 0:10:00

### Pide una propuesta

Copia este prompt, cambia lo que está entre corchetes y pega tus columnas (incluidas las columnas calculadas de 1 y 0):

```
ROL: Actúa como analista de operaciones de una empresa peruana del sector [industrial / logístico / servicios].
CONTEXTO: Tengo en Excel la tabla "[registro_mantenimiento / despachos / asistencia]" con datos simulados de enero a marzo de 2026. Columnas: [pega tus columnas]. Las columnas [Es_Falla, Es_Correctivo / A_Tiempo, Completo, OTIF / Es_Falta, Es_Puntual] valen 1 o 0. Mi Excel está en español y usa punto y coma (;) como separador.
TAREA: Propón 5 KPI operativos que pueda calcular SOLO con estas columnas. Para cada uno indica: nombre, qué mide, fórmula en palabras, fórmula de Excel con referencias estructuradas (Tabla[Columna]), una meta de referencia y la decisión que ayuda a tomar.
RESTRICCIONES: No inventes columnas. No promedies porcentajes: usa suma entre suma. Si una meta no tiene una fuente que puedas citar, escribe "meta interna de ejemplo". Máximo 2 líneas por campo.
FORMATO: Una tabla con columnas: KPI | Qué mide | Fórmula | Fórmula de Excel | Meta | Decisión.
```

### Revisa la propuesta antes de aceptarla

> **Verifica:** marca cada KPI propuesto con estas tres preguntas:
> 1. ¿Usa **solo** columnas que existen en tu tabla? Si aparece "Tiempo_Transito" o "Costo_Hora", descártalo o pide que lo reemplace.
> 2. ¿El **denominador** tiene sentido? (¿Incluye los pedidos pendientes? ¿Cuenta los días sin mantenimiento?)
> 3. ¿La **meta** tiene fuente? Usa la meta que investigaste en el Lab 2, con su cita. Si no la tienes, escribe "meta interna de ejemplo".

Si algo falla, pide una corrección concreta, por ejemplo: `El KPI 3 usa una columna que no existe. Reemplázalo por uno que use Costo_Flete_PEN y Transportista.`

### KPI de referencia por escenario

Compara la propuesta de la IA con esta tabla. Elige de **3 a 5 KPI**; al menos uno debe ser un porcentaje.

| Escenario | KPI | Fórmula en palabras |
|---|---|---|
| Equipos | Disponibilidad | Σ Horas_Operacion / Σ Horas_Programadas |
| Equipos | N.º de fallas | Suma de Es_Falla |
| Equipos | MTTR (h) | Σ Horas_Parada de días con falla / N.º de fallas |
| Equipos | MTBF (h) | Σ Horas_Operacion / N.º de fallas |
| Equipos | % correctivo | Correctivos / (Preventivos + Correctivos) |
| Equipos | Costo de repuestos por equipo | Σ Costo_Repuestos_PEN por Codigo_Equipo |
| Logística | % a tiempo | Σ A_Tiempo / pedidos cerrados (Entregado + Devuelto) |
| Logística | % completos | Σ Completo / pedidos cerrados |
| Logística | OTIF | Σ OTIF / pedidos cerrados |
| Logística | Costo de flete por pedido | Promedio de Costo_Flete_PEN |
| Logística | Incidencias por transportista y zona | Pedidos con Incidencia distinta de "Ninguna" |
| Asistencia | % ausentismo | Σ Es_Falta / total de filas |
| Asistencia | % puntualidad | Σ Es_Puntual / registros con Estado "Presente" o "Tardanza" |
| Asistencia | Tardanza promedio (min) | Promedio de Minutos_Tardanza cuando Estado = "Tardanza" |
| Asistencia | Horas extra por área | Σ Horas_Extra por Area |
| Asistencia | Faltas injustificadas por área | Conteo de "Falta injustificada" por Area |

### Llena la hoja Ficha_KPI

Crea la hoja **Ficha_KPI** con una tabla (Ctrl+T) con estas columnas y una fila por KPI:

| KPI | Qué mide | Fórmula (en palabras) | Fórmula en Excel | Meta y fuente | Frecuencia y responsable | Por qué importa (decisión) |
|---|---|---|---|---|---|---|
| OTIF | Pedidos entregados a tiempo y completos | Σ OTIF / pedidos cerrados | `=SUMA(despachos[OTIF])/CONTAR.SI(despachos[Estado];"<>Pendiente")` | ≥ 90 % · meta interna de ejemplo | Semanal · jefe de despachos | Si baja, revisar transportista y zona antes de que el cliente reclame. |

> **Ojo (logística):** escribe en la ficha qué cuentas en el denominador. En este laboratorio, "pedidos cerrados" = Entregado + Devuelto. Un Devuelto entra en la base, pero nunca cuenta como a tiempo, completo ni OTIF.

## Calcula tus KPI con fórmulas
Duration: 0:08:00

Crea la hoja **KPI**. En la columna A escribe el nombre de cada KPI; en la B, la fórmula; en la C, la meta (escríbela como `95%` o `4`). Dale formato **Porcentaje** a los KPI que lo son (**Inicio › Número**).

> **Ojo:** estas fórmulas usan toda la tabla. Si dejaste filas "Revisar", agrega el criterio de Control para que coincidan con las tablas dinámicas. Ejemplo (OTIF): `=SUMAR.SI.CONJUNTO(despachos[OTIF];despachos[Control];"OK")/CONTAR.SI.CONJUNTO(despachos[Estado];"<>Pendiente";despachos[Control];"OK")`.

Estas fórmulas te sirven de referencia y de **control**: más adelante, el total de cada tabla dinámica debe coincidir con ellas. Copia solo la parte que empieza con `=`.

**Control de equipos:**

```
Disponibilidad:   =SUMA(registro_mantenimiento[Horas_Operacion])/SUMA(registro_mantenimiento[Horas_Programadas])
N.º de fallas:    =SUMA(registro_mantenimiento[Es_Falla])
MTTR (h):         =SI.ERROR(SUMAR.SI.CONJUNTO(registro_mantenimiento[Horas_Parada];registro_mantenimiento[Es_Falla];1)/SUMA(registro_mantenimiento[Es_Falla]);0)
MTBF (h):         =SI.ERROR(SUMA(registro_mantenimiento[Horas_Operacion])/SUMA(registro_mantenimiento[Es_Falla]);0)
% correctivo:     =SI.ERROR(CONTAR.SI(registro_mantenimiento[Tipo_Mantenimiento];"Correctivo")/(CONTAR.SI(registro_mantenimiento[Tipo_Mantenimiento];"Preventivo")+CONTAR.SI(registro_mantenimiento[Tipo_Mantenimiento];"Correctivo"));0)
Costo EQ-105 (S/): =SUMAR.SI.CONJUNTO(registro_mantenimiento[Costo_Repuestos_PEN];registro_mantenimiento[Codigo_Equipo];"EQ-105")
```

> **Ojo:** el Promedio de Es_Correctivo en una tabla dinámica NO es el % correctivo, porque incluye los días sin mantenimiento. Si lo usas, filtra Tipo_Mantenimiento para excluir "Ninguno".

**Logística:**

```
Pedidos cerrados:      =CONTAR.SI(despachos[Estado];"<>Pendiente")
% a tiempo:            =SUMA(despachos[A_Tiempo])/CONTAR.SI(despachos[Estado];"<>Pendiente")
% completos:           =SUMA(despachos[Completo])/CONTAR.SI(despachos[Estado];"<>Pendiente")
OTIF:                  =SUMA(despachos[OTIF])/CONTAR.SI(despachos[Estado];"<>Pendiente")
Flete por pedido (S/): =PROMEDIO(despachos[Costo_Flete_PEN])
Incidencias TRA-A:     =CONTAR.SI.CONJUNTO(despachos[Transportista];"TRA-A";despachos[Incidencia];"<>Ninguna")
```

**Asistencia:**

```
% ausentismo:                 =SUMA(asistencia[Es_Falta])/FILAS(asistencia)
% puntualidad:                =SUMA(asistencia[Es_Puntual])/(CONTAR.SI(asistencia[Estado];"Presente")+CONTAR.SI(asistencia[Estado];"Tardanza"))
Tardanza promedio (min):      =SI.ERROR(PROMEDIO.SI.CONJUNTO(asistencia[Minutos_Tardanza];asistencia[Estado];"Tardanza");0)
Horas extra Producción:       =SUMAR.SI.CONJUNTO(asistencia[Horas_Extra];asistencia[Area];"Producción")
Faltas injustificadas Almacén: =CONTAR.SI.CONJUNTO(asistencia[Area];"Almacén";asistencia[Estado];"Falta injustificada")
```

En la columna D, agrega el estado frente a la meta. Para un KPI donde "más es mejor" (disponibilidad, OTIF, puntualidad): `=SI(B2>=C2;"Cumple";"No cumple")`. Para uno donde "menos es mejor" (MTTR, ausentismo, tardanza): `=SI(B2<=C2;"Cumple";"No cumple")`.

> **Verifica:** comprueba al menos un KPI a mano. Ejemplo en asistencia: filtra la tabla por Estado = "Falta justificada" y "Falta injustificada", mira el **Recuento** en la barra de estado y divídelo entre el total de filas. Debe coincidir con tu % ausentismo.

> **Ojo:** escribe la meta en una celda (C2) y compárala desde ahí. Si escribes decimales dentro de la fórmula, recuerda que en Excel en español se escriben con coma (`0,95`).

> **Ojo:** si la IA te dio `=PROMEDIO(...)` de una columna de porcentajes diarios, es la trampa de "promediar porcentajes". Pide la versión "suma entre suma" y anótalo en tu ficha de evidencia.

## Crea tus tablas dinámicas
Duration: 0:10:00

### Inserta la primera tabla dinámica

1. Haz clic en una celda de tu tabla limpia.
2. **Insertar › Tabla dinámica › De una tabla o rango**.
3. Comprueba que en Tabla/rango aparezca el **nombre de tu tabla** (por ejemplo, `despachos`), elige **Nueva hoja de cálculo** › Aceptar.
4. Cambia el nombre de la hoja nueva a `TD`.

### Arrastra los campos

En el panel **Campos de tabla dinámica**, arrastra cada campo al área indicada. Arma **al menos 2 tablas dinámicas** (TD1 y TD2) y una pequeña para las tarjetas (TD3).

**Control de equipos:**

| Tabla | Filas | Valores | Filtros | Gráfico que harás |
|---|---|---|---|---|
| TD1 · Parada por equipo | Codigo_Equipo | Suma de Horas_Parada | Control = OK | Barras ordenadas |
| TD2 · Disponibilidad por mes | Fecha (por meses) | Disponibilidad (campo calculado, ver más abajo) | Control = OK | Líneas o columnas |
| TD3 · Tarjetas | — | Disponibilidad · Suma de Es_Falla | Control = OK | Tarjetas |

**Logística:**

| Tabla | Filas | Valores | Filtros | Gráfico que harás |
|---|---|---|---|---|
| TD1 · OTIF por transportista | Transportista | Promedio de OTIF (%) | Estado sin Pendiente · Control = OK | Barras ordenadas |
| TD2 · OTIF por semana | Fecha_Pedido (agrupada por 7 días) | Promedio de OTIF (%) | Estado sin Pendiente · Control = OK | Líneas |
| TD3 · Tarjetas | — | Promedio de OTIF · Promedio de A_Tiempo | Estado sin Pendiente · Control = OK | Tarjetas |
| TD4 · Flete | — | Promedio de Costo_Flete_PEN | Control = OK (sin filtro de Estado: el flete cuenta todos los pedidos) | Tarjeta |

**Asistencia:**

| Tabla | Filas | Valores | Filtros | Gráfico que harás |
|---|---|---|---|---|
| TD1 · Ausentismo por área | Area | Promedio de Es_Falta (%) | Control = OK | Barras ordenadas |
| TD2 · Estados por turno | Turno (Columnas: Estado) | Cuenta de Codigo_Colaborador, como % del total de la fila | Control = OK | Barras apiladas al 100 % |
| TD3 · Tarjetas | — | Promedio de Es_Falta (% ausentismo) · Suma de Horas_Extra | Control = OK | Tarjetas |
| TD4 · Puntualidad (opcional) | — | Promedio de Es_Puntual | Estado = Presente y Tardanza · Control = OK | Tarjeta |

> **Tip:** para crear TD2 y TD3 más rápido, selecciona TD1 completa, cópiala (Ctrl+C) y pégala unas columnas a la derecha (Ctrl+V). Luego cambia sus campos. Las copias comparten el mismo origen y podrás conectarlas a la misma segmentación.

### Configura los valores

- Para las columnas de 1 y 0 (OTIF, A_Tiempo, Es_Falta…): clic en el campo dentro de Valores › **Configuración de campo de valor** › Resumir valores por: **Promedio** › botón **Formato de número** › Porcentaje.
- Para ver la proporción de cada estado en asistencia: en Configuración de campo de valor, pestaña **Mostrar valores como**, elige el porcentaje del total de la fila.
- Para agrupar fechas por semana: clic derecho en una fecha de la tabla dinámica › **Agrupar…** › deja seleccionado solo **Días** y escribe `7` en número de días. Para meses, selecciona **Meses**.
- Ordena las barras: clic derecho en un valor › **Ordenar** › de mayor a menor.
- Para filtrar (Control = OK, Estado sin Pendiente): arrastra el campo al área **Filtros**, abre su lista desplegable sobre la tabla dinámica, activa la selección de varios elementos y deja marcados solo los valores que quieres.

### Disponibilidad con un campo calculado (equipos)

No uses "Promedio de un porcentaje": crea un campo que divida sumas.

1. Clic en la tabla dinámica › **Analizar tabla dinámica › Campos, elementos y conjuntos › Campo calculado** (en Mac, busca la misma opción en la pestaña de la tabla dinámica).
2. Nombre: `Disponibilidad` · Fórmula: `=Horas_Operacion/Horas_Programadas` › Agregar › Aceptar.
3. Dale formato de porcentaje.

> **Verifica:** el **Total general** de cada tabla dinámica debe coincidir con la fórmula de la hoja KPI (sin filtros de segmentación aplicados). Si no coincide, busca la causa: ¿filtraste Control = OK en una y no en la otra? ¿Excluiste los pendientes en ambas? Anota la diferencia y cómo la resolviste: es tu evidencia de verificación crítica.

> **Ojo (MTTR en tabla dinámica):** si quieres el MTTR por equipo, hazlo en una tabla dinámica aparte: filtra Tipo_Falla para excluir "Ninguna" y crea el campo calculado `=Horas_Parada/Es_Falla`. Los equipos sin fallas no aparecerán: es correcto, no hay nada que promediar.

## Gráficos dinámicos y segmentaciones
Duration: 0:10:00

### Crea los gráficos

1. Haz clic en TD1 › **Analizar tabla dinámica › Gráfico dinámico** (también en **Insertar › Gráfico dinámico**).
2. Elige el tipo según la pregunta:

| Pregunta | Tipo |
|---|---|
| ¿Qué equipo, transportista o área está peor? | Barras (ordenadas de mayor a menor) |
| ¿Cómo evoluciona en el tiempo? | Líneas |
| ¿Cómo se reparte un total? | Barras apiladas al 100 % |

3. Repite con TD2.
4. Pon un título con unidad y periodo (clic en el título del gráfico): `OTIF por transportista (%) · ene–mar 2026`.
5. Oculta los botones grises del gráfico: clic derecho sobre uno de ellos › opción para ocultar todos los botones de campo.

### Agrega segmentaciones

1. Haz clic en TD1 › **Insertar › Segmentación de datos**.
2. Marca 1 o 2 campos para filtrar:

| Escenario | Segmentaciones sugeridas |
|---|---|
| Equipos | Area · Tipo_Equipo |
| Logística | Zona · Transportista |
| Asistencia | Area · Turno |

3. Conecta la segmentación a **todas** tus tablas dinámicas: selecciónala › pestaña de la segmentación › **Conexiones de informe** › marca todas tus tablas dinámicas (TD1, TD2, TD3 y TD4 si la tienes) › Aceptar.
4. (Opcional) Agrega una escala de tiempo para la fecha: clic en una tabla dinámica › **Analizar tabla dinámica › Insertar escala de tiempo** › elige Fecha o Fecha_Pedido. Conéctala igual con Conexiones de informe. Si tu versión no la tiene, usa una segmentación por mes.

> **Verifica:** haz clic en un valor de la segmentación (por ejemplo, Callao). Deben cambiar **todos** los gráficos y las tablas de tarjetas (TD3 y TD4). Luego filtra la tabla limpia a mano por Callao y compara un número: deben coincidir. Para quitar el filtro usa el botón **Borrar filtro** de la segmentación.

> **Cuando el docente lo indique (≈1:58):** sube a ClassPoint una captura de tu gráfico dinámico con una segmentación aplicada.

## Arma tu mini-dashboard
Duration: 0:10:00

### Prepara la hoja

1. Crea una hoja llamada `Dashboard`.
2. Quita la cuadrícula: **Vista › Líneas de cuadrícula** (desmárcala).
3. En A1 escribe un título con escenario y periodo: `Reporte operativo · Despachos · ene–mar 2026`.

### Tarjetas KPI que responden a las segmentaciones

Las segmentaciones filtran tablas dinámicas, **no** fórmulas sueltas. Por eso las tarjetas se enlazan a la TD3:

1. En B4 escribe `=` y haz clic en el valor de la TD3 (por ejemplo, Promedio de OTIF) (en logística, la tarjeta de flete se enlaza a la TD4). Excel escribe una fórmula `IMPORTARDATOSDINAMICOS`: es correcto.
2. Dale tamaño grande (28–36 pt) y formato de porcentaje.
3. En A5 escribe `Meta` y en B5 escribe `90%`. En B6 escribe `=SI(B4>=B5;"Cumple";"No cumple")` (si menos es mejor, usa `<=`).
4. Repite para 2 o 3 KPI.

### Mueve gráficos y segmentaciones

1. Selecciona cada gráfico dinámico › Ctrl+X › ve al Dashboard › Ctrl+V. Siguen conectados a su tabla dinámica.
2. Haz lo mismo con las segmentaciones.
3. Ordena con lectura en Z: tarjetas arriba, gráficos al medio, segmentaciones a la izquierda o arriba.

> **Verifica (checklist del dashboard):**
> - [ ] Título con escenario y periodo.
> - [ ] Cada gráfico responde una pregunta y usa el tipo correcto (barras, líneas o 100 %).
> - [ ] Unidades visibles (%, h, S/, min) y sin efectos 3D.
> - [ ] Un solo color base; la meta visible junto a cada tarjeta.
> - [ ] Al hacer clic en la segmentación cambian gráficos **y** tarjetas.
> - [ ] Los totales coinciden con la hoja KPI.

## Arma tu ficha de evidencia
Duration: 0:07:00

Crea un documento (Word, Google Docs o el que prefieras), pega lo siguiente y expórtalo a PDF.

```
LABORATORIO 5 · KPI Y MINI-DASHBOARD EN EXCEL
Nombre: ______________________   Escenario: equipos / logística / asistencia
Herramienta de IA usada: ______________________

1. PROMPTS USADOS
   a) Prompt completo con el que pediste los KPI.
   b) Al menos un prompt de corrección (KPI con columna inventada, denominador, fórmula, etc.).

2. RESULTADO
   a) Captura de la hoja Ficha_KPI con tus 3 a 5 KPI.
   b) Captura del Dashboard sin filtros.
   c) Captura del Dashboard con una segmentación aplicada.

3. QUÉ VERIFIQUÉ O CORREGÍ
   a) Tabla de control: KPI | Valor en hoja KPI | Valor en tabla dinámica | ¿Coincide? | Si no, por qué.
   b) Qué propuesta de la IA descartaste o corregiste y por qué.
   c) Un KPI comprobado a mano con un filtro (cómo lo hiciste).

4. PRODUCTO FINAL
   Nombre del archivo .xlsx: ______________________
   KPI elegidos y su estado frente a la meta (Cumple / No cumple).
   En 2 o 3 oraciones: ¿qué decisión tomarías con lo que muestra tu dashboard?
```

Sube el PDF y el .xlsx a la tarea "Laboratorio 5" del LMS hoy, hasta las 23:59.

## Rúbrica
Duration: 0:00:00

| Criterio | 5 puntos | 3 puntos | 1 punto |
|---|---|---|---|
| **Cumple el reto** | Ficha con 3 a 5 KPI completos (fórmula, meta, por qué importa) y dashboard con al menos 2 gráficos dinámicos, tarjetas KPI y 1 segmentación conectada a todo. | Ficha incompleta o dashboard con un solo gráfico, sin tarjetas o con segmentación que no filtra todo. | Solo tablas dinámicas sueltas, sin ficha ni dashboard. |
| **Calidad del prompt** | Prompt con las columnas reales, configuración regional, restricciones (no inventar columnas, no promediar %) y formato; hay al menos una iteración de corrección. | Prompt sin columnas o sin formato; no hubo iteración. | Prompt genérico ("dame KPI de logística"). |
| **Verificación crítica** | Cada KPI de la tabla dinámica coincide con su fórmula de la hoja KPI; se explican las diferencias y se descartó o corrigió al menos una propuesta de la IA. | Se verificaron algunos KPI, sin explicar diferencias. | Se usaron los KPI de la IA sin verificar. |
| **Orden y presentación** | Dashboard legible: título con periodo, gráfico adecuado a cada pregunta, sin 3D, con unidades y meta visible; hojas con nombre; solo datos simulados. | Dashboard comprensible pero con un error de visualización (circular con muchas porciones, sin unidades). | Dashboard desordenado o ilegible. |

**Total:** 20 puntos.

## Si terminas antes
Duration: 0:00:00

Elige uno o más retos:

1. **Semáforo en las tarjetas.** Selecciona la celda del KPI › **Inicio › Formato condicional** y crea una regla que la pinte de verde si cumple la meta y de rojo si no.
2. **Pide una crítica.** Sube una captura de tu dashboard a tu IA y pide: `Actúa como jefe de operaciones. Critica este dashboard en 5 viñetas: claridad, elección de gráficos y qué decisión me ayuda a tomar. No inventes datos que no se ven en la imagen.` Aplica 2 mejoras y anótalas en tu ficha.
3. **Un KPI más con detalle.** Agrega una tabla dinámica de incidencias por zona (logística), fallas por tipo (equipos) o faltas injustificadas por área (asistencia) con su gráfico de barras apiladas.
4. **Prueba la actualización.** Agrega un registro nuevo al final de la tabla de la hoja Crudo (o de tu tabla limpia, si usas el respaldo) y usa **Datos › Actualizar todo**. Si las tablas dinámicas no cambian a la primera, pulsa Actualizar todo otra vez: primero se actualiza la consulta y luego las tablas dinámicas. Comprueba que cambian la tabla limpia, las tablas dinámicas y las tarjetas.

## Resumen
Duration: 0:00:00

Hoy aprendiste a:

- Pasar del dato a la decisión: datos limpios → KPI con meta → visualización → acción.
- Definir KPI con una **ficha** (fórmula, meta con fuente, frecuencia y decisión) y revisar críticamente las propuestas de la IA.
- Calcular porcentajes sin caer en la trampa de **promediar porcentajes**: suma entre suma o promedio de columnas de 1 y 0.
- Construir un mini-dashboard con **tablas dinámicas, gráficos dinámicos, segmentaciones y tarjetas** que responden a los filtros.

**Próxima sesión (S6):** llevarás tu tabla limpia a **Power BI Desktop** (gratis, solo Windows) y construirás tu primer dashboard de una página con estos mismos KPI. Instálalo antes de clase; si usas Mac, coordina un equipo Windows o trabaja en pareja.
