id: ia-aplicada-lab-06
summary: Laboratorio 6 del curso IA Aplicada a Tareas Laborales y Académicas. Carga tu Excel limpio en Power BI Desktop, revísalo con Power Query, crea medidas DAX con ayuda de una IA externa, verifícalas contra Excel y arma el primer dashboard de una página de tu proyecto integrador.
status: Published
authors: Benjamin Pareja
categories: IA, Productividad, Power BI
environments: Web
feedback link: https://me7aben.github.io/gdg-codelabs/

# Laboratorio 6 — Tu primer dashboard en Power BI

## Antes de empezar
Duration: 0:03:00

En este laboratorio das un paso más en tu proyecto integrador: conviertes el Excel limpio de la S4 y los KPI de la S5 en tu **primer dashboard de una página en Power BI Desktop**. La IA te ayudará a escribir las medidas DAX; tú las verificarás contra Excel.

**Duración:** 65 minutos (en clase).

**Qué entregas** en la tarea "Laboratorio 6" del LMS, hoy hasta las 23:59:

| Archivo | Qué es |
|---|---|
| `Lab06_Apellido_Nombre.pbix` | Tu archivo de Power BI con la página y las medidas |
| `Lab06_Apellido_Nombre.png` | Captura de la página completa |
| `Lab06_Apellido_Nombre.pdf` | Ficha de evidencia (4 partes) |

### Lo que necesitas

| Requisito | Detalle |
|---|---|
| Power BI Desktop | Gratis, **solo para Windows 10 u 11**. Instálalo desde Microsoft Store (busca "Power BI Desktop"). No necesitas iniciar sesión para trabajar. |
| Tu Excel limpio (S4) | Con los datos como tabla de Excel (Ctrl+T). Sirve el archivo del Lab 4 o el del Lab 5, que lo contiene. Si no lo tienes, usa el dataset de respaldo del docente: tiene las mismas columnas. |
| Tu ficha de KPI (S5) | Nombre, fórmula y meta de 3 a 5 KPI. |
| Herramienta de IA | ChatGPT, Gemini o Copilot Chat (gratis con cuenta Microsoft). |
| Excel | Para verificar tus medidas. Funciona también en Mac. |

> **Ojo:** Copilot **dentro** de Power BI no está disponible en el curso: requiere una capacidad Fabric de pago (F2 o superior) que activa el administrador. En este laboratorio usas una IA externa para el DAX.

### Tu tabla según el escenario

| Escenario | Nombre de la tabla | Una fila es… |
|---|---|---|
| Control de equipos | `registro_mantenimiento` | un equipo en un día |
| Logística | `despachos` | un pedido |
| Asistencia | `asistencia` | un colaborador en un día |

> **Ojo:** las medidas de esta guía usan estos nombres de tabla y las columnas de la guía de datasets, escritos exactamente igual (con guion bajo y sin tildes). Si tu tabla o tus columnas se llaman distinto, renómbralas en Power Query (paso 4) o ajusta las medidas.

Si tu Power BI está en inglés, los nombres equivalentes de menús y botones van entre paréntesis.

## Si usas Mac (o no tienes Windows)
Duration: 0:02:00

Power BI Desktop **solo funciona en Windows**: no existe versión para Mac. Lo ideal es resolverlo antes de clase. Si no pudiste, elige una de estas opciones:

| Opción | Cómo | Ten en cuenta |
|---|---|---|
| 1. Equipo Windows | Una PC prestada, del trabajo o el laboratorio remoto que indique el docente. | Es la mejor opción: haces el laboratorio igual que los demás. |
| 2. En pareja | Un compañero con Windows comparte su pantalla y te da el control remoto (en Zoom o Teams se solicita desde la pantalla compartida). Armas **tu propio** .pbix con **tu** dataset y él te envía el archivo. | Cada uno entrega su propio .pbix y su propia ficha. |
| 3. Power BI en la web | Si tu cuenta institucional tiene Power BI habilitado, entra a app.powerbi.com y crea un informe nuevo a partir de tu Excel. | Tiene menos opciones que Desktop. Consulta antes con el docente qué entregar. |
| 4. Máquina virtual | Windows 11 en una máquina virtual (por ejemplo, Parallels en una Mac con chip Apple). | Solo si ya la tienes: no es una opción oficial y algunos visuales pueden fallar. |

Mientras consigues acceso, avanza lo que **sí funciona en Mac**:

1. Pide tus medidas DAX a la IA (paso 5) y guárdalas en un documento.
2. Calcula en Excel para Mac los valores con los que vas a verificarlas (paso 6).
3. Dibuja en papel o en PowerPoint el boceto de tu página (paso 7).

> **Ojo:** si hoy no logras abrir Power BI, avísale al docente antes de que termine la clase para acordar cómo completar tu entrega.

## Carga tu Excel limpio
Duration: 0:05:00

1. Abre **Power BI Desktop**. Si aparece una ventana para iniciar sesión, puedes cerrarla.
2. En la pestaña **Inicio**, elige **Obtener datos › Libro de Excel** (Get data › Excel workbook) y abre tu archivo limpio de la S4.
3. En la ventana **Navegador** (Navigator) verás tus hojas y tus tablas. Marca la **tabla** (ícono de tabla), no la hoja.
4. Haz clic en **Transformar datos** (Transform data), no en Cargar. Se abre el Editor de Power Query.

> **Verifica:** en la vista previa del Navegador, la primera fila deben ser tus encabezados (`Fecha`, `Codigo_Equipo`… o `ID_Pedido`, `Fecha_Pedido`… o `Fecha`, `Codigo_Colaborador`…). Si ves `Column1`, `Column2`, marcaste algo que no es la tabla.

## Revisa tus datos en Power Query
Duration: 0:07:00

Tu Excel ya está limpio: aquí solo confirmas que Power BI lo entiende bien.

1. **Nombre de la consulta.** En el panel **Consultas** de la izquierda, revisa que se llame `registro_mantenimiento`, `despachos` o `asistencia`. Si no, haz doble clic sobre el nombre y cámbialo.
2. **Tipos de datos.** Mira el ícono a la izquierda de cada encabezado. Si no es el correcto, haz clic en el ícono y elige el tipo:

| Tipo | Ícono | Columnas |
|---|---|---|
| Fecha | Calendario | `Fecha`, `Fecha_Pedido`, `Fecha_Compromiso`, `Fecha_Entrega` |
| Hora | Reloj | `Hora_Programada`, `Hora_Ingreso` |
| Número decimal | 1.2 | `Horas_Programadas`, `Horas_Operacion`, `Horas_Parada`, `Costo_Repuestos_PEN`, `Costo_Flete_PEN`, `Horas_Trabajadas`, `Horas_Extra` |
| Número entero | 123 | `Unidades_Pedidas`, `Unidades_Entregadas`, `Minutos_Tardanza` |
| Texto | ABC | Códigos y categorías: `Codigo_Equipo`, `Area`, `Zona`, `Estado`, `Tipo_Falla`, etc. |

3. **Calidad.** En la pestaña **Vista** (View), activa **Calidad de columnas** y **Distribución de columnas**. En la esquina inferior izquierda, haz clic en el aviso de "las primeras 1000 filas" y cámbialo para que use **todo el conjunto de datos**.
4. Si aparece algo en rojo (error) o vacío donde no debería, corrígelo:
   - Filas duplicadas: **Inicio › Quitar filas › Quitar duplicados**.
   - Espacios sobrantes: selecciona la columna › **Transformar › Formato › Recortar**.
   - Textos distintos (`ALMACEN`, `Almacén `): clic derecho en la columna › **Reemplazar valores**.
   - Fechas como texto: clic derecho en el encabezado › **Cambiar tipo** usando la configuración regional **Español (Perú)**.
5. Si tu tabla tiene la columna `Control` del Lab 4 y en la S5 dejaste fuera de tus KPI las filas "Revisar" (filtro Control = OK), aplica aquí el mismo filtro: flecha de la columna `Control` y deja marcado solo **OK**. Así tus medidas coincidirán con tu hoja KPI de la S5. Si corregiste todas las filas, no hace falta.
6. Cuando todo esté bien: **Inicio › Cerrar y aplicar** (Close & Apply).

> **Ojo:** no todo vacío es un error. `Fecha_Entrega` queda vacía si el pedido está **Pendiente**, y `Hora_Ingreso` queda vacía si el colaborador **faltó**. No borres esas filas.

> **Verifica:** abre la **Vista de tabla** (Table view) y anota en tu ficha cuántas filas se cargaron (aparece en la barra inferior). Compáralo con las filas de tu Excel limpio: deben coincidir.

## Crea tus medidas DAX con ayuda de la IA
Duration: 0:15:00

Una **medida** es un cálculo que Power BI vuelve a hacer cada vez que filtras. Tus KPI serán medidas.

### 5.1 Pide la medida a la IA

Abre ChatGPT, Gemini o Copilot Chat y usa esta plantilla para tu KPI principal. Pega solo los **nombres y tipos de las columnas** (puedes copiarlos de la tabla de la guía de datasets), nunca tus filas de datos.

```
ROL: Actúa como especialista en Power BI que enseña DAX a personas que no programan.
CONTEXTO: En Power BI Desktop tengo una sola tabla llamada [registro_mantenimiento / despachos / asistencia] con estas columnas y tipos: [pega la lista de columnas]. Mi Power BI está en español, pero sé que las funciones DAX van en inglés.
TAREA: Escribe una medida DAX llamada "[nombre del KPI]" que calcule: [fórmula del KPI de tu ficha de la S5].
RESTRICCIONES: Usa exactamente mis nombres de tabla y columnas. Funciones DAX en inglés, coma como separador y DIVIDE para las divisiones. No inventes columnas ni uses columnas calculadas. Si te falta información, pregúntame antes de responder.
FORMATO: 1) La medida lista para pegar en Power BI. 2) Explicación por partes en lenguaje sencillo. 3) Una fórmula de Excel en español (con punto y coma) para comprobar el resultado en mi tabla de Excel.
```

Ejemplos de la línea **TAREA** para cada escenario:

```
Equipos: Escribe una medida DAX llamada "Disponibilidad %" que calcule la suma de Horas_Operacion dividida entre la suma de Horas_Programadas.

Logística: Escribe una medida DAX llamada "OTIF %" que calcule los pedidos con Estado "Entregado", con Fecha_Entrega en o antes de Fecha_Compromiso y con Unidades_Entregadas igual a Unidades_Pedidas, divididos entre los pedidos con Estado "Entregado" o "Devuelto".

Asistencia: Escribe una medida DAX llamada "Ausentismo %" que calcule las filas con Estado "Falta justificada" o "Falta injustificada", divididas entre el total de filas.
```

Pide **al menos 2 medidas** a la IA: tu KPI principal y una que use `CALCULATE`.

### 5.2 Crea la medida en Power BI

1. En el panel **Datos** (Data), haz clic en el nombre de tu tabla.
2. Elige **Inicio › Nueva medida** (New measure). Se abre la barra de fórmulas sobre el lienzo.
3. Borra el texto `Medida =` y pega la medida completa de la IA. Presiona **Enter**.
4. Si no hay error, la medida aparece en el panel Datos con un ícono de calculadora.
5. Con la medida seleccionada, en la pestaña **Herramientas de medición** (Measure tools) elige el formato: **Porcentaje** con 1 decimal para los %, **Moneda** con S/ para los costos y **Número entero** para los conteos.

> **Ojo:** errores frecuentes de la IA en DAX: funciones en español (`SUMA` en vez de `SUM`), punto y coma como separador, columnas inventadas (`Fecha_Real`), textos sin comillas o con otra tilde (`"Mecanica"` en vez de `"Mecánica"`). DAX no distingue mayúsculas, pero sí tildes y espacios.

> **Ojo:** si Power BI no acepta las comas, entra a **Archivo › Opciones y configuración › Opciones › Global › Configuración regional** y, en **Separadores DAX**, elige **Usar separadores DAX estándar** (coma). Luego reinicia Power BI.

### 5.3 Compara con las medidas de referencia

Abajo tienes las medidas de referencia de cada escenario. Compara la que te dio la IA con la de referencia:

- Si son iguales o equivalentes, anótalo en tu ficha.
- Si son distintas, pregúntale a la IA por qué y decide cuál respeta la definición oficial del KPI (la de tu ficha de la S5). Anota la diferencia: es evidencia de verificación.

Después crea el resto de tus medidas (**mínimo 4 en total**, al menos 1 con `DIVIDE` y 1 con `CALCULATE`), pidiéndolas a la IA o copiándolas de la referencia. Crea primero las medidas base (sumas y conteos), porque las demás las usan.

> **Ojo:** cada medida se crea por separado: **una medida = una vez Nueva medida**. No pegues todo el bloque de una sola vez.

### Medidas de referencia · Control de equipos

```
Total Horas Programadas = SUM(registro_mantenimiento[Horas_Programadas])

Total Horas Operacion = SUM(registro_mantenimiento[Horas_Operacion])

Total Horas Parada = SUM(registro_mantenimiento[Horas_Parada])

Disponibilidad % = DIVIDE([Total Horas Operacion], [Total Horas Programadas])

Fallas = CALCULATE(COUNTROWS(registro_mantenimiento), registro_mantenimiento[Tipo_Falla] <> "Ninguna")

MTTR (h) = DIVIDE(CALCULATE([Total Horas Parada], registro_mantenimiento[Tipo_Falla] <> "Ninguna"), [Fallas])

MTBF (h) = DIVIDE([Total Horas Operacion], [Fallas])

Correctivo % =
DIVIDE(
    CALCULATE(COUNTROWS(registro_mantenimiento), registro_mantenimiento[Tipo_Mantenimiento] = "Correctivo"),
    CALCULATE(COUNTROWS(registro_mantenimiento), registro_mantenimiento[Tipo_Mantenimiento] IN {"Preventivo", "Correctivo"})
)

Total Costo Repuestos = SUM(registro_mantenimiento[Costo_Repuestos_PEN])
```

> **Ojo:** el MTTR suma solo las horas de parada de las filas con falla (definición oficial del curso). Las paradas por mantenimiento preventivo sin falla no cuentan. Si la IA te da DIVIDE([Total Horas Parada], [Fallas]), está sumando esas paradas: corrígela.

> **Ojo:** el KPI *Costo por equipo* es la medida Total Costo Repuestos mostrada por Codigo_Equipo (en la tabla o en un gráfico de barras). No la dividas entre el número de equipos.

### Medidas de referencia · Logística

```
Pedidos = COUNTROWS(despachos)

Pedidos Cerrados = CALCULATE([Pedidos], despachos[Estado] IN {"Entregado", "Devuelto"})

Pedidos A Tiempo =
CALCULATE(
    [Pedidos],
    FILTER(
        despachos,
        despachos[Estado] = "Entregado"
            && NOT ISBLANK(despachos[Fecha_Entrega])
            && despachos[Fecha_Entrega] <= despachos[Fecha_Compromiso]
    )
)

A Tiempo % = DIVIDE([Pedidos A Tiempo], [Pedidos Cerrados])

Pedidos Completos =
CALCULATE(
    [Pedidos],
    FILTER(
        despachos,
        despachos[Estado] = "Entregado"
            && despachos[Unidades_Entregadas] = despachos[Unidades_Pedidas]
    )
)

Completos % = DIVIDE([Pedidos Completos], [Pedidos Cerrados])

Pedidos OTIF =
CALCULATE(
    [Pedidos],
    FILTER(
        despachos,
        despachos[Estado] = "Entregado"
            && NOT ISBLANK(despachos[Fecha_Entrega])
            && despachos[Fecha_Entrega] <= despachos[Fecha_Compromiso]
            && despachos[Unidades_Entregadas] = despachos[Unidades_Pedidas]
    )
)

OTIF % = DIVIDE([Pedidos OTIF], [Pedidos Cerrados])

Costo Flete por Pedido = DIVIDE(SUM(despachos[Costo_Flete_PEN]), [Pedidos])

Incidencias = CALCULATE([Pedidos], despachos[Incidencia] <> "Ninguna")
```

> **Ojo:** "Pedidos Cerrados" son los entregados y los devueltos. Un pedido **Devuelto** cuenta como cerrado, pero no como entregado a tiempo ni completo. Los **Pendientes** no entran en el cálculo.

> **Ojo:** en DAX, una fecha vacía se compara como si fuera una fecha muy antigua, así que `Fecha_Entrega <= Fecha_Compromiso` sería verdadero para un pedido sin entregar. Por eso las medidas incluyen `NOT ISBLANK`. Si la IA no lo incluye, pídeselo.

### Medidas de referencia · Asistencia

```
Registros = COUNTROWS(asistencia)

Faltas = CALCULATE([Registros], asistencia[Estado] IN {"Falta justificada", "Falta injustificada"})

Ausentismo % = DIVIDE([Faltas], [Registros])

Asistencias = CALCULATE([Registros], asistencia[Estado] IN {"Presente", "Tardanza"})

Puntualidad % = DIVIDE(CALCULATE([Registros], asistencia[Estado] = "Presente"), [Asistencias])

Tardanza Promedio (min) = CALCULATE(AVERAGE(asistencia[Minutos_Tardanza]), asistencia[Estado] = "Tardanza")

Total Horas Extra = SUM(asistencia[Horas_Extra])

Faltas Injustificadas = CALCULATE([Registros], asistencia[Estado] = "Falta injustificada")
```

> **Ojo:** la Tardanza Promedio (min) promedia solo las filas con Estado "Tardanza" (definición oficial del curso). Si la IA promedia toda la columna Minutos_Tardanza, los ceros de quienes llegaron puntuales bajan el promedio: corrígela.

> **Ojo:** en DAX, una celda vacía cuenta como "distinta de Ninguna". Si te quedaron vacíos en `Tipo_Falla` o `Incidencia`, se contarán como falla o incidencia: vuelve a Power Query y corrígelos.

## Verifica tus medidas contra Excel
Duration: 0:07:00

Que una medida "no dé error" no significa que esté bien. Comprueba **al menos 2 medidas** (tu KPI principal y una con `CALCULATE`) de dos formas.

### 6.1 Compara el total

1. En Power BI, crea una **Tarjeta** (Card) con la medida y anota su valor.
2. En tu Excel limpio, calcula lo mismo con una fórmula (Excel en español, con punto y coma) o con tu tabla dinámica de la S5.

| Medida | Fórmula de Excel para comprobar |
|---|---|
| Disponibilidad % | `=SUMA(registro_mantenimiento[Horas_Operacion])/SUMA(registro_mantenimiento[Horas_Programadas])` |
| Fallas | `=CONTAR.SI.CONJUNTO(registro_mantenimiento[Tipo_Falla];"<>Ninguna")` |
| MTTR (h) | `=SUMAR.SI.CONJUNTO(registro_mantenimiento[Horas_Parada];registro_mantenimiento[Tipo_Falla];"<>Ninguna")/CONTAR.SI.CONJUNTO(registro_mantenimiento[Tipo_Falla];"<>Ninguna")` |
| Correctivo % | `=CONTAR.SI.CONJUNTO(registro_mantenimiento[Tipo_Mantenimiento];"Correctivo")/(CONTAR.SI.CONJUNTO(registro_mantenimiento[Tipo_Mantenimiento];"Preventivo")+CONTAR.SI.CONJUNTO(registro_mantenimiento[Tipo_Mantenimiento];"Correctivo"))` |
| A Tiempo % | `=SUMAPRODUCTO((despachos[Estado]="Entregado")*(despachos[Fecha_Entrega]<>"")*(despachos[Fecha_Entrega]<=despachos[Fecha_Compromiso]))/(CONTAR.SI.CONJUNTO(despachos[Estado];"Entregado")+CONTAR.SI.CONJUNTO(despachos[Estado];"Devuelto"))` |
| OTIF % | `=SUMAPRODUCTO((despachos[Estado]="Entregado")*(despachos[Fecha_Entrega]<>"")*(despachos[Fecha_Entrega]<=despachos[Fecha_Compromiso])*(despachos[Unidades_Entregadas]=despachos[Unidades_Pedidas]))/(CONTAR.SI.CONJUNTO(despachos[Estado];"Entregado")+CONTAR.SI.CONJUNTO(despachos[Estado];"Devuelto"))` |
| Incidencias | `=CONTAR.SI.CONJUNTO(despachos[Incidencia];"<>Ninguna")` |
| Costo Flete por Pedido | `=SUMA(despachos[Costo_Flete_PEN])/FILAS(despachos)` |
| Ausentismo % | `=(CONTAR.SI.CONJUNTO(asistencia[Estado];"Falta justificada")+CONTAR.SI.CONJUNTO(asistencia[Estado];"Falta injustificada"))/FILAS(asistencia)` |
| Tardanza Promedio (min) | `=PROMEDIO.SI.CONJUNTO(asistencia[Minutos_Tardanza];asistencia[Estado];"Tardanza")` |

Si tu tabla de Excel tiene otro nombre (por ejemplo, `Tabla1`), cámbialo en la fórmula.

### 6.2 Compara con un filtro

1. En Power BI, agrega una **Segmentación de datos** (Slicer) con una categoría (por ejemplo, `Area`, `Zona` o `Turno`) y elige un valor.
2. En Excel, usa la misma segmentación en tu tabla dinámica de la S5 o agrega la condición a la fórmula. Por ejemplo:

```
=CONTAR.SI.CONJUNTO(despachos[Incidencia];"<>Ninguna";despachos[Zona];"Callao")
```

> **Verifica:** anota en tu ficha una tabla como esta: **Medida · Valor en Power BI · Valor en Excel · ¿Coincide? · Qué corregí**. Incluye el total y el valor con filtro.

> **Ojo:** si no coincide, revisa en este orden: (1) ¿son las mismas filas? (compara el número de filas cargadas); (2) ¿los textos son iguales? (tildes y espacios); (3) ¿la definición es la misma? (qué cuenta en el numerador y en el denominador); (4) ¿es solo formato? (0,92 y 92 % son el mismo valor).

Si sigues sin encontrar la diferencia, pídele ayuda a la IA así:

```
Mi medida DAX [pega la medida] da [valor] en Power BI, pero en Excel, con la fórmula [pega la fórmula], obtengo [valor]. Las dos usan la misma tabla de [n] filas. ¿Qué filas podría estar tratando distinto cada fórmula? Dame 3 posibles causas y cómo comprobar cada una.
```

## Arma tu página
Duration: 0:12:00

Vuelve a la **Vista de informe** (Report view). Antes de elegir cada visual nuevo, haz clic en un espacio vacío del lienzo; si no, cambiarás el visual que está seleccionado.

1. **Título.** **Insertar › Cuadro de texto** (Insert › Text box): por ejemplo, "Control de equipos · enero a marzo 2026".
2. **Tarjetas (mínimo 3).** Elige el visual **Tarjeta** (Card) y marca tu medida en el panel Datos. Puedes poner una medida por tarjeta o varias medidas en la misma tarjeta.
3. **Gráfico de columnas o barras agrupadas.** Compara una categoría: arrastra la categoría a **Eje X** (o Eje Y en barras) y la medida al otro eje.
4. **Gráfico de líneas.** Muestra la tendencia: pon la columna de fecha en **Eje X**. Si aparecen Año, Trimestre, Mes y Día, abre la flecha del campo y elige **Fecha** (en lugar de Jerarquía de fechas) para verla día por día, o deja solo el Mes.
5. **Tabla.** Detalle por código o categoría con 2 o 3 medidas.

| Visual | Control de equipos | Logística | Asistencia |
|---|---|---|---|
| Tarjetas | Disponibilidad %, Fallas, MTTR (h), Total Costo Repuestos | A Tiempo %, OTIF %, Incidencias, Costo Flete por Pedido | Ausentismo %, Puntualidad %, Tardanza Promedio (min), Faltas Injustificadas |
| Columnas o barras | Total Horas Parada por `Tipo_Equipo` | Incidencias por `Transportista` | Faltas por `Area` |
| Líneas | Disponibilidad % por `Fecha` | OTIF % por `Fecha_Pedido` | Ausentismo % por `Fecha` |
| Tabla | `Codigo_Equipo`, Fallas, MTTR (h), Total Costo Repuestos | `Zona`, Pedidos, OTIF %, Costo Flete por Pedido | `Area`, `Turno`, Ausentismo %, Total Horas Extra |

6. **Formato básico.** Con el visual seleccionado, abre el ícono de pincel (formato del objeto visual): escribe un título claro (que no diga "Suma de…"), activa las etiquetas de datos en las barras y usa el mismo color base en todos los gráficos.

> **Ojo:** para tus KPI usa siempre tus medidas. Si arrastras una columna numérica, Power BI crea "Suma de…" o "Promedio de…", que no es lo mismo: por ejemplo, el promedio de porcentajes diarios no es igual a tu Disponibilidad %.

Cuando tengas al menos 2 visuales, **sube tu avance** a la actividad de ClassPoint que abrirá el docente.

## Agrega segmentaciones y filtros
Duration: 0:05:00

1. Deja **2 segmentaciones de datos** (Slicer) en tu página (puedes reutilizar la que creaste en el paso 6.2):
   - Una de fecha (`Fecha` o `Fecha_Pedido`). En su formato, elige el estilo **Entre** para un rango de fechas, o un estilo de lista o desplegable si prefieres elegir por mes.
   - Una de categoría: `Area` (equipos o asistencia), `Zona` o `Transportista` (logística), o `Turno`.
2. Prueba: elige un valor y revisa que **todas** las tarjetas y gráficos cambien.
3. Haz clic en una barra de tu gráfico: los demás visuales se filtran (filtro cruzado). Vuelve a hacer clic para quitarlo.
4. Abre el panel **Filtros** (Filters) y mira sus tres niveles: este objeto visual, esta página y todas las páginas. Úsalo para una regla fija. Por ejemplo:
   - Equipos: en un gráfico de fallas por `Tipo_Falla`, excluye "Ninguna".
   - Logística: en un gráfico por `Incidencia`, excluye "Ninguna".
   - Asistencia: en un gráfico por `Estado`, deja solo las faltas.

> **Verifica:** este es el valor con filtro que comparaste en el paso 6.2. Si cambiaste algo en las medidas, vuelve a comprobarlo.

## Guarda tu .pbix y toma la captura
Duration: 0:02:00

1. **Archivo › Guardar como** › `Lab06_Apellido_Nombre.pbix`.
2. Captura la página completa con **Windows + Shift + S** y guárdala como `Lab06_Apellido_Nombre.png`. También puedes usar **Archivo › Exportar › Exportar a PDF**.

> **Ojo:** el .pbix guarda una copia de tus datos. Como trabajas con datos simulados, puedes compartirlo. En un trabajo real, revisa antes qué datos contiene.

## Arma tu ficha de evidencia
Duration: 0:07:00

Crea un documento con esta estructura y expórtalo a PDF con el nombre `Lab06_Apellido_Nombre.pdf`.

| Sección | Qué va |
|---|---|
| Encabezado | Nombre, escenario, herramienta de IA usada y dónde trabajaste (Windows, en pareja o en la web) |
| 1. Prompts usados | Al menos 2 prompts DAX completos y la medida que te devolvió la IA en cada caso |
| 2. Resultado | Captura del panel Datos con tus medidas y captura de la página |
| 3. Qué verificaste o corregiste | Filas cargadas vs. filas del Excel. Tabla **Medida · Power BI · Excel · ¿Coincide? · Qué corregí** con al menos 2 medidas, en total y con filtro. Diferencias entre la medida de la IA y la de referencia |
| 4. Producto final | Captura final y 2 o 3 líneas: qué muestra tu dashboard y una primera conclusión (ej.: "La disponibilidad del turno noche es 6 puntos menor que la del turno día") |

Sube a la tarea **Laboratorio 6** del LMS, hoy hasta las **23:59**: el PDF, el `.pbix` y la captura `.png`.

## Rúbrica
Duration: 0:00:00

| Criterio | 5 puntos | 3 puntos | 1 punto |
|---|---|---|---|
| **Cumple el reto** | .pbix de una página con al menos 4 medidas (1 con DIVIDE y 1 con CALCULATE), 3 tarjetas, barras, líneas, tabla y 2 segmentaciones; incluye la captura. | Falta un tipo de visual o una segmentación, o tiene menos de 4 medidas. | Visuales sueltos sin medidas propias, o falta el .pbix. |
| **Calidad del prompt** | Los prompts DAX tienen rol, contexto con la tabla y las columnas exactas, tarea con la fórmula del KPI, restricciones (DAX en inglés, coma, DIVIDE) y formato. | Falta el contexto de columnas o las restricciones. | Prompt de una línea ("hazme una medida de disponibilidad"). |
| **Verificación crítica** | Compara al menos 2 medidas con Excel, en total y con un filtro, y explica cualquier diferencia o corrección. | Compara solo el total o solo una medida. | No hay verificación, o dice "está bien" sin valores. |
| **Orden y presentación** | Página ordenada, títulos claros sin "Suma de…", % y S/ con formato; ficha legible y con datos simulados. | Página completa, pero desordenada o sin formato de números. | Ilegible o sin captura. |

**Total:** 20 puntos.

## Si terminas antes
Duration: 0:00:00

Elige uno de estos retos y anótalo en tu ficha:

1. **Muestra la meta.** Crea una medida con la meta de tu ficha (por ejemplo, `Meta Disponibilidad = 0.9`, con formato de porcentaje) y ponla junto a tu KPI en la tarjeta o en el gráfico de líneas, para que se vea si estás por encima o por debajo.
2. **Una medida más.** Pide a la IA una medida que aún no tengas (MTBF (h), Completos % o Puntualidad %), créala y verifícala contra Excel.
3. **Una matriz.** Agrega un visual **Matriz** (Matrix) con una categoría en filas, el mes en columnas y tu KPI principal en valores.

## Resumen
Duration: 0:00:00

Hoy aprendiste a:

- Cargar un Excel limpio en Power BI Desktop y revisarlo con Power Query.
- Construir una página con tarjetas, barras, líneas, tabla y segmentaciones.
- Pedir medidas DAX a una IA externa con un buen prompt y verificarlas contra Excel.

**Próxima sesión (S7):** visuales de IA nativos de Power BI (influenciadores clave y árbol de descomposición) y diseño de una página. Trae tu `.pbix`: será la base de tu **dashboard v1** y tendrás un punto de control con el docente.
