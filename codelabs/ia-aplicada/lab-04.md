id: ia-aplicada-lab-04
summary: Laboratorio 4 del curso IA Aplicada a Tareas Laborales y Académicas. Genera con IA el dataset simulado de tu escenario (equipos, logística o asistencia), límpialo en Excel con Power Query y verifica el resultado con fórmulas en español dictadas por la IA. Entregable: .xlsx limpio + bitácora prompt → fórmula → verificación.
status: Published
authors: Benjamin Pareja
categories: IA, Productividad, Excel
environments: Web
feedback link: https://me7aben.github.io/gdg-codelabs/

# Laboratorio 4 — Tu dataset limpio con Excel, Power Query e IA

## Antes de empezar
Duration: 0:03:00

Este es el **paso 1 del proyecto integrador**. Hoy construyes la materia prima de todo lo que harás en las sesiones 5 a 8: un dataset simulado de tu escenario, limpio y verificado.

**Objetivo:** generar con IA un dataset simulado con errores típicos, limpiarlo con Power Query y comprobar con fórmulas (dictadas por la IA y verificadas por ti) que quedó bien.

**Duración total:** 65 minutos.

### Qué entregas

| Entregable | Detalle |
|---|---|
| Archivo `.xlsx` | Nombre sugerido: `Lab04_<Apellido>_<escenario>.xlsx`. Con 4 hojas: **Crudo**, **Limpio**, **Verificacion** y **Bitacora**. |
| Ficha de evidencia en PDF | Las 4 partes de siempre: prompts, resultado, qué verificaste o corregiste y producto final (plantilla en «Arma tu ficha de evidencia»). |
| Dónde y cuándo | Tarea "Laboratorio 4" del LMS, hoy hasta las 23:59. |

### Herramientas

| Herramienta | Para qué | Alternativa |
|---|---|---|
| ChatGPT, Gemini o Copilot Chat | Generar el dataset y pedir fórmulas | Cualquiera de las tres en su versión gratuita. Copilot dentro de Excel solo si tienes licencia Microsoft 365 Copilot. |
| Microsoft Excel (Microsoft 365) | Tabla, Power Query y fórmulas | Funciona en Windows y en Mac. En Mac, Power Query se abre desde Datos › Obtener datos (Power Query). |
| Bloc de notas o TextEdit | Abrir el .csv si la IA te da un archivo | Cualquier editor de texto plano. |

### Ten abierto

- Tu IA con sesión iniciada.
- Un libro nuevo de Excel guardado como `Lab04_<Apellido>_<escenario>.xlsx`.
- El dataset de respaldo del LMS, por si la IA no logra generar el tuyo.
- Opcional: tu asistente del Lab 2. Ya trae la regla de fórmulas en español con punto y coma; úsalo en lugar del chat general.

> **Ojo:** trabaja solo con **datos simulados** y códigos (EQ-101, CLI-07, COLAB-021). Nunca nombres reales, DNI ni datos de salud (Ley 29733).

> **Ojo:** la función `=COPILOT()` de Excel se retiró el 14 de septiembre de 2026. No la uses: en este laboratorio pides las fórmulas a una IA externa y las escribes tú.

### Tu escenario en este laboratorio

| Escenario | Nombre de la tabla limpia | Una fila es… | Sector para el prompt |
|---|---|---|---|
| Control de equipos | `registro_mantenimiento` | un equipo en un día | industrial |
| Logística | `despachos` | un pedido | logístico |
| Asistencia | `asistencia` | un colaborador en un día | servicios |

## Genera tu dataset con IA
Duration: 0:12:00

### Copia el prompt base

Este es el prompt oficial del curso (`datasets.md`). Cambia lo que está entre corchetes:

```
ROL: Actúa como analista de datos de una empresa peruana del sector [industrial / logístico / servicios].
CONTEXTO: Necesito un dataset SIMULADO para practicar limpieza y análisis en Excel. No uses nombres ni datos de personas reales.
TAREA: Genera un CSV con [400] filas de la tabla [registro_mantenimiento / despachos / asistencia] con estas columnas: [pega la tabla de columnas de este documento].
RESTRICCIONES: Fechas de enero a marzo de 2026. Que entre el 5 % y el 10 % de las filas tenga errores típicos: duplicados, celdas vacías, texto inconsistente (mayúsculas, tildes y espacios), fechas en formato mixto y valores fuera de rango. Mantén los demás datos coherentes.
FORMATO: Solo el CSV, separado por comas, con encabezados en la primera fila. Si es muy largo, entrégalo como archivo descargable.
```

### Pega las columnas de tu escenario

Reemplaza `[pega la tabla de columnas de este documento]` por el bloque de tu escenario. No agregues ni cambies columnas en el CSV: son las que usarás hasta la S8. Las columnas calculadas (Control, Valida y las que verás en la S5) las agregarás tú en Excel más adelante.

**Control de equipos** (`registro_mantenimiento`, una fila por equipo y día):

```
Fecha (fecha, ej. 2026-01-15)
Codigo_Equipo (texto: EQ-101 … EQ-112)
Tipo_Equipo (texto: Compresor, Bomba, Faja transportadora, Montacargas, Generador)
Area (texto: Planta, Almacén, Taller)
Turno (texto: Día, Noche)
Horas_Programadas (número: 8 a 12)
Horas_Operacion (número: 0 a 12)
Horas_Parada (número: Horas_Programadas − Horas_Operacion)
Tipo_Falla (texto: Mecánica, Eléctrica, Hidráulica, Ninguna)
Tipo_Mantenimiento (texto: Preventivo, Correctivo, Ninguno)
Costo_Repuestos_PEN (número: 0 a 4500)
Tecnico (texto: TEC-01 … TEC-06)
```

**Logística** (`despachos`, una fila por pedido):

```
ID_Pedido (texto, ej. PED-0001)
Fecha_Pedido (fecha, ej. 2026-02-03)
Cliente (texto: CLI-01 … CLI-25)
Zona (texto: Lima Norte, Lima Sur, Lima Centro, Callao, Arequipa)
Transportista (texto: TRA-A, TRA-B, TRA-C, TRA-D)
Fecha_Compromiso (fecha: Fecha_Pedido + 1 a 5 días)
Fecha_Entrega (fecha: vacía si está pendiente)
Estado (texto: Entregado, Pendiente, Devuelto)
Unidades_Pedidas (número: 1 a 200)
Unidades_Entregadas (número: 0 a Unidades_Pedidas)
Incidencia (texto: Ninguna, Retraso, Dirección errada, Producto dañado)
Costo_Flete_PEN (número: 25 a 900)
```

**Asistencia** (`asistencia`, una fila por colaborador y día):

```
Fecha (fecha, ej. 2026-03-02)
Codigo_Colaborador (texto: COLAB-001 … COLAB-060)
Area (texto: Producción, Almacén, Administración, Mantenimiento)
Turno (texto: Mañana, Tarde, Noche)
Hora_Programada (hora: 07:00, 15:00, 23:00)
Hora_Ingreso (hora: vacía si faltó)
Minutos_Tardanza (número: 0 a 120)
Estado (texto: Presente, Tardanza, Falta justificada, Falta injustificada)
Horas_Trabajadas (número: 0 a 12)
Horas_Extra (número: 0 a 4)
```

### Consigue el CSV completo

- Si tu IA puede crear archivos, pide: `Entrégalo como archivo .csv descargable.`
- Si te lo da como texto en el chat y se corta, pide: `Continúa desde la fila 101 hasta la 200, sin repetir encabezados.` Repite hasta completar.
- Si después de **dos intentos** no lo logras, descarga el **dataset de respaldo** del LMS (mismas columnas) y sigue. No pierdas el laboratorio por esto.

> **Verifica:** antes de seguir, revisa en la respuesta que (1) los encabezados sean exactamente los de tu escenario, (2) las fechas estén entre enero y marzo de 2026 y (3) no haya nombres de personas. Si algo falla, pide una corrección concreta: `Cambia el encabezado "Codigo" por "Codigo_Equipo" y vuelve a entregar el CSV completo.`

> **Ojo:** guarda el prompt exacto que usaste: va en tu ficha de evidencia y en la bitácora.

## Lleva los datos a Excel como tabla
Duration: 0:07:00

Vas a pegar los datos **tal cual** en una hoja llamada **Crudo**. Así conservas el original y puedes comparar el antes y el después.

### Pega el CSV en la hoja Crudo

1. Cambia el nombre de la Hoja1 a `Crudo` (doble clic en la pestaña).
2. Copia todo el CSV:
   - Si está en el chat: selecciónalo y cópialo.
   - Si es un archivo .csv: ábrelo con el Bloc de notas (Windows: clic derecho › Abrir con › Bloc de notas) o TextEdit (Mac), presiona Ctrl+A (Cmd+A) y copia.
3. Haz clic en la celda **A1** de Crudo y pega. Todo quedará en la columna A: es normal.

### Separa las columnas sin que Excel "corrija" nada

1. Con la columna A seleccionada, ve a **Datos › Texto en columnas**.
2. Elige **Delimitados** › Siguiente.
3. Marca solo **Coma** como separador › Siguiente.
4. En la vista previa, selecciona **todas** las columnas (clic en la primera, Shift+clic en la última) y marca **Texto** como formato de los datos.
5. Finalizar.

> **Ojo:** si alguna fila queda con más columnas que los encabezados, un decimal con coma (12,5) no venía entre comillas. Pide a tu IA: `Encierra entre comillas dobles todos los valores que tengan coma y vuelve a entregar el CSV completo.` En el asistente deja el **Calificador de texto** en comillas dobles (").

> **¿Por qué Texto?** Si dejas que Excel convierta, "12.5" o "15/01/2026" pueden cambiar sin avisarte. Así los errores quedan a la vista y tú decides cómo corregirlos en Power Query.

### Conviértelo en tabla y nómbrala

1. Haz clic en cualquier celda de los datos y presiona **Ctrl+T** (en Mac también funciona Cmd+T).
2. Verifica que esté marcada la casilla **La tabla tiene encabezados** › Aceptar.
3. En la pestaña **Diseño de tabla** (en Mac: **Tabla**), escribe `crudo` en **Nombre de la tabla** y presiona Enter.

> **Verifica:** escribe en una celda vacía, fuera de la tabla, `=FILAS(crudo)`. Debe darte entre 300 y 500. Anota el número: es tu "antes".

> **Ruta alternativa (si ya conoces Power Query):** puedes importar el .csv con **Datos › Obtener datos › Desde archivo › Desde texto/CSV** y elegir **Transformar datos**. En ese caso tu "crudo" es el archivo .csv: entrégalo junto con el .xlsx.

## Diagnostica en Power Query
Duration: 0:05:00

### Abre el editor

1. Haz clic en una celda de la tabla `crudo`.
2. Ve a **Datos › Obtener y transformar datos › De la tabla o rango** (en algunas versiones: *Desde tabla o rango*). En Mac: usa **Desde tabla o rango** en la pestaña Datos si aparece; si tu versión no la tiene, importa el .csv con **Datos › Obtener datos (Power Query) › Texto/CSV**, como en la ruta alternativa.
3. Se abre el **Editor de Power Query**. A la derecha, en **Configuración de la consulta › Propiedades › Nombre**, cambia el nombre de la consulta a `registro_mantenimiento`, `despachos` o `asistencia`.

### Activa las herramientas de diagnóstico

En la pestaña **Vista**, marca:

- **Calidad de columnas**: barra bajo cada encabezado con % válido, error y vacío.
- **Distribución de columnas**: cuántos valores distintos y únicos tiene cada columna.
- **Perfil de columnas**: detalle de la columna seleccionada.

> **Ojo:** si en Pasos aplicados aparece un paso **Tipo cambiado** al inicio y ves celdas con `Error` en fechas o números, elimínalo con la **X** que aparece a su izquierda. Vas a definir los tipos tú mismo en «Tipos de datos y duplicados», después de limpiar el texto.

### Anota lo que encuentras

En una hoja nueva llamada **Verificacion**, escribe una lista rápida: qué columnas tienen vacíos, cuántos valores distintos tiene tu columna de categoría principal (Area o Zona) y qué variantes ves (por ejemplo: `almacen`, `Almacén `, `ALMACEN`).

> **Verifica:** pregunta a tu IA: `¿Qué errores inyectaste en el CSV y en aproximadamente cuántas filas?` Compara su respuesta con lo que ves en Power Query. La IA suele exagerar o equivocarse: lo que vale es tu diagnóstico. Si coincide o no, anótalo en la bitácora.

## Limpia el texto
Duration: 0:08:00

### Recortar y Limpiar todas las columnas de texto

1. Selecciona las columnas de texto con **Ctrl+clic** en sus encabezados (por ejemplo, en logística: ID_Pedido, Cliente, Zona, Transportista, Estado, Incidencia).
2. Ve a **Transformar › Formato › Recortar** (quita espacios al inicio y al final).
3. Con las mismas columnas seleccionadas: **Transformar › Formato › Limpiar** (quita caracteres invisibles).

### Códigos en MAYÚSCULAS

Selecciona las columnas de códigos y aplica **Transformar › Formato › MAYÚSCULAS**:

| Escenario | Columnas de códigos |
|---|---|
| Equipos | Codigo_Equipo, Tecnico |
| Logística | ID_Pedido, Cliente, Transportista |
| Asistencia | Codigo_Colaborador |

### Categorías con mayúscula inicial

Selecciona las columnas de categorías (Area, Zona, Turno, Estado, Tipo_Falla, etc.) y aplica **Transformar › Formato › Poner En Mayúsculas Cada Palabra** (en algunas versiones: *Mayúscula Inicial En Cada Palabra*).

> **Ojo:** esta opción convierte "Faja transportadora" en "Faja Transportadora" y "Falta justificada" en "Falta Justificada". No es un error: las fórmulas de Excel no distinguen mayúsculas. Solo mantén el mismo criterio en toda la columna.

### Tildes y variantes con Reemplazar valores

Las mayúsculas no ponen tildes: "almacen" quedó "Almacen". Corrígelo así:

1. Selecciona la columna (por ejemplo, Area).
2. **Inicio › Reemplazar valores**.
3. Escribe el valor a buscar (`Almacen`) y el valor correcto (`Almacén`).
4. Abre **Opciones avanzadas** y marca la casilla para que coincida con **todo el contenido de la celda**. Así no cambias pedazos de otras palabras.
5. Aceptar. Repite por cada variante.

Variantes típicas por escenario:

| Escenario | Busca | Reemplaza con |
|---|---|---|
| Equipos | Almacen · Mecanica · Electrica · Hidraulica · Dia | Almacén · Mecánica · Eléctrica · Hidráulica · Día |
| Logística | Lima␣␣Norte (doble espacio) · Direccion Errada · Producto Danado | Lima Norte · Dirección Errada · Producto Dañado |
| Asistencia | Produccion · Almacen · Administracion · Manana | Producción · Almacén · Administración · Mañana |

> **Ojo:** Recortar solo quita los espacios del inicio y del final. Un doble espacio en medio (`Lima  Norte`) se corrige con Reemplazar valores: busca dos espacios y reemplaza con uno (sin marcar "todo el contenido").

> **Tip con IA:** en una celda libre de la hoja Verificacion (lejos de tu tabla) escribe `=UNICOS(crudo[Area])` (o `crudo[Zona]`) y copia la lista que aparece (UNICOS junta mayúsculas y minúsculas, pero eso ya lo resolviste). Luego pide:
> ```
> Estos son los valores distintos de mi columna Area: [pega la lista].
> Los únicos valores válidos son: Planta, Almacén, Taller.
> Dame una tabla "valor actual → valor correcto" solo para los que hay que cambiar.
> ```

> **Verifica:** selecciona la columna y mira **Distribución de columnas**: Area de equipos debe tener **3** valores distintos; Zona de logística, **5**; Area de asistencia, **4** (más los vacíos, si quedan). Anota el antes y el después en la bitácora.

> **Cuando el docente lo indique (≈1:45):** sube a ClassPoint una captura del editor de Power Query con las barras de calidad y tus Pasos aplicados.

## Tipos de datos y duplicados
Duration: 0:05:00

### Números con coma y punto mezclados

En las columnas numéricas con decimales, unifica primero el separador:

1. Selecciona la columna (por ejemplo, Horas_Operacion). Mientras sea Texto, **Inicio › Reemplazar valores**: busca `,` y reemplaza con `.` (aquí **sin** marcar "todo el contenido").
2. Clic derecho en el encabezado › **Cambiar tipo › Usando la configuración regional…**
3. Tipo de datos: **Número decimal** (o **Número entero** si no lleva decimales). Configuración regional: **Inglés (Estados Unidos)** › Aceptar.

| Escenario | Número decimal | Número entero |
|---|---|---|
| Equipos | Horas_Programadas, Horas_Operacion, Horas_Parada, Costo_Repuestos_PEN | — |
| Logística | Costo_Flete_PEN | Unidades_Pedidas, Unidades_Entregadas |
| Asistencia | Horas_Trabajadas, Horas_Extra | Minutos_Tardanza |

> **¿Por qué Inglés (Estados Unidos)?** Porque, después del reemplazo, todos los números usan punto decimal, como en el CSV. Excel los mostrará luego con la configuración de tu equipo (en español, con coma).

### Fechas y horas

1. Clic derecho en la columna de fecha › **Cambiar tipo › Usando la configuración regional…** › Tipo **Fecha** · Configuración regional **Español (Perú)**. Así se leen bien `15/01/2026` y `2026-01-15`.
2. En asistencia, haz lo mismo con Hora_Programada y Hora_Ingreso, con tipo **Hora**.
3. Las columnas de texto déjalas como **Texto** (ícono ABC en el encabezado o **Inicio › Tipo de datos**).

> **Verifica:** mira la barra de calidad. Si una columna muestra errores (rojo), revisa esas filas antes de borrarlas: **Inicio › Conservar filas › Conservar errores** (según la versión, *Mantener errores*). Anota cuántas son y qué tenían; luego elimina ese paso con la X y decide: corrígelas con Reemplazar valores o quítalas con **Inicio › Quitar filas › Quitar errores**.

### Quita los duplicados

1. Haz clic en cualquier celda de la vista previa y presiona **Ctrl+A** para seleccionar todas las columnas.
2. **Inicio › Quitar filas › Quitar duplicados**.

> **Ojo:** este paso va **después** de limpiar el texto. Power Query distingue mayúsculas y espacios: antes de limpiar, "Almacén " y "almacén" no se consideraban duplicados.

> **Verifica (logística):** el ID_Pedido no debe repetirse. Selecciona solo ID_Pedido › **Inicio › Conservar filas › Conservar duplicados** para ver si queda algún pedido con dos filas distintas. Míralo, anótalo y elimina ese paso.

## Vacíos, valores fuera de rango y carga
Duration: 0:05:00

### Decide qué hacer con cada vacío

No todo vacío es error. Usa esta guía:

| Caso | Ejemplo | Qué hacer |
|---|---|---|
| Vacío válido | Fecha_Entrega en un pedido Pendiente; Hora_Ingreso en una falta | Déjalo como está. |
| El valor es "igual que el de arriba" | Area de EQ-107 cuando ordenaste por Codigo_Equipo y cada equipo siempre está en la misma área | Rellenar hacia abajo (ver abajo). |
| No sabes el valor | Transportista vacío en un pedido | Reemplazar valores por `Sin dato`. |
| Falta un dato obligatorio numérico | Horas_Operacion vacía | Quita la fila y anótalo en la bitácora. |

**Para rellenar hacia abajo:**

1. Ordena: flecha del encabezado de la columna de código › Orden ascendente.
2. Convierte los vacíos de texto en null: selecciona la columna › **Inicio › Reemplazar valores**, deja **vacío** el valor que buscas y escribe `null` en el valor de reemplazo.
3. **Transformar › Rellenar › Abajo**.

> **Ojo:** Rellenar solo llena los valores `null`. Si el primer registro de un código está vacío, tomará el valor del código anterior: verifícalo en la hoja Limpio: filtra cada código que tenía vacíos y comprueba que todas sus filas tengan la misma área. Opcional: `=CONTARA(UNICOS(FILTRAR(registro_mantenimiento[Area];registro_mantenimiento[Codigo_Equipo]="EQ-107")))` debe dar 1 (cambia EQ-107 por tu código).

**Para quitar filas con un dato obligatorio vacío:** abre la flecha del encabezado y desmarca `(null)` o usa la opción para quitar vacíos.

### Valores imposibles

Abre la flecha del encabezado › **Filtros de número** › elige la condición (por ejemplo, *Entre…* o *mayor o igual*) y escribe el rango válido:

| Escenario | Columnas a filtrar | Rango válido |
|---|---|---|
| Equipos | Horas_Operacion, Horas_Programadas, Costo_Repuestos_PEN | Horas 0–12 · Costo 0–4500 |
| Logística | Unidades_Pedidas, Unidades_Entregadas, Costo_Flete_PEN | Unidades ≥ 0 · Flete 25–900 |
| Asistencia | Horas_Trabajadas, Horas_Extra, Minutos_Tardanza | Horas 0–12 · Extra 0–4 · Tardanza 0–120 |

Las incoherencias **entre columnas** (más unidades entregadas que pedidas, una falta con horas trabajadas) no se ven con un filtro: las detectarás con fórmulas en el siguiente paso.

> **Regla de oro:** nunca borres en silencio. Anota en la bitácora cuántas filas quitó cada paso y por qué.

### Carga el resultado

1. Revisa el panel **Pasos aplicados**: debe contar la historia de tu limpieza (Recortar, Reemplazar, Tipo cambiado, Quitar duplicados…). Puedes renombrar un paso con clic derecho › Cambiar nombre.
2. **Inicio › Cerrar y cargar**. Excel crea una hoja nueva con una tabla verde llamada como tu consulta.
3. Cambia el nombre de esa hoja a `Limpio`.

> **Verifica:** en la hoja Verificacion escribe `=FILAS(despachos)` (o el nombre de tu tabla). Compáralo con `=FILAS(crudo)`. La diferencia debe coincidir con las filas que anotaste como quitadas.

## Verifica con fórmulas dictadas por la IA
Duration: 0:10:00

Ahora la IA te ayuda a escribir fórmulas que comprueben tu limpieza. Tú las pruebas antes de creerles.

### Pide la columna Control

Usa esta plantilla (cambia la tabla, las columnas y la regla según tu escenario):

```
ROL: Actúa como experto en Excel 365 en español (Perú).
CONTEXTO: Tengo una tabla llamada "despachos" con estas columnas: ID_Pedido, Fecha_Pedido, Cliente, Zona, Transportista, Fecha_Compromiso, Fecha_Entrega, Estado, Unidades_Pedidas, Unidades_Entregadas, Incidencia, Costo_Flete_PEN. Mi Excel usa funciones en español y punto y coma (;) como separador.
TAREA: Dame una fórmula para una columna nueva llamada Control que diga "OK" si la fila es coherente y "Revisar" si no. Reglas: Unidades_Entregadas no puede ser mayor que Unidades_Pedidas; Fecha_Compromiso no puede ser anterior a Fecha_Pedido; si el Estado no es "Pendiente", debe tener Fecha_Entrega.
RESTRICCIONES: Usa referencias estructuradas ([@Columna]). No uses macros ni la función COPILOT.
FORMATO: La fórmula en una línea, una explicación breve de cada parte y 2 filas de ejemplo para probarla.
```

Escribe la fórmula en la primera celda vacía a la derecha de tu tabla Limpio, con el encabezado `Control`. La tabla la copia sola a todas las filas.

Compara lo que te dio la IA con estas fórmulas de referencia:

| Escenario | Fórmula de referencia para Control |
|---|---|
| Equipos | `=SI(Y([@Horas_Operacion]>=0;[@Horas_Operacion]<=[@Horas_Programadas];REDONDEAR([@Horas_Programadas]-[@Horas_Operacion];2)=REDONDEAR([@Horas_Parada];2));"OK";"Revisar")` |
| Logística | `=SI(Y([@Unidades_Entregadas]<=[@Unidades_Pedidas];[@Fecha_Compromiso]>=[@Fecha_Pedido];O([@Estado]="Pendiente";[@Fecha_Entrega]<>""));"OK";"Revisar")` |
| Asistencia | `=SI(Y([@Horas_Trabajadas]>=0;[@Horas_Trabajadas]<=12;[@Horas_Extra]<=4;O(IZQUIERDA([@Estado];5)<>"Falta";[@Horas_Trabajadas]=0));"OK";"Revisar")` |

> **Verifica:** filtra la columna Control en "Revisar" y mira la barra de estado (Recuento). Revisa **3 filas a mano**: ¿de verdad tienen el problema? Luego quita el filtro y revisa 3 filas "OK".

> **Ojo (equipos):** si la fórmula marca "Revisar" en filas que se ven bien, es por los decimales (12,5 − 8,3 puede dar 4,1999999). Por eso la referencia usa `REDONDEAR`. Si la IA no lo incluyó, pídeselo y anota la corrección en la bitácora: es un excelente ejemplo de verificación crítica.

> **Ojo (asistencia):** si quieres revisar Minutos_Tardanza contra las horas, recuerda que el turno de 23:00 puede ingresar después de medianoche y la resta da negativa. Pide a la IA que lo considere o revisa esas filas a mano.

### Valida la categoría principal con BUSCARX (opcional si te alcanza el tiempo; si no, pásalo a «Si terminas antes»)

1. En una hoja nueva llamada `Listas`, escribe en una columna los valores válidos de tu categoría principal, con encabezado:

| Escenario | Encabezado | Valores válidos |
|---|---|---|
| Equipos | Area | Planta, Almacén, Taller |
| Logística | Zona | Lima Norte, Lima Sur, Lima Centro, Callao, Arequipa |
| Asistencia | Area | Producción, Almacén, Administración, Mantenimiento |

2. Conviértela en tabla (Ctrl+T) y nómbrala `Areas_Validas` o `Zonas_Validas`.
3. En tu tabla Limpio agrega la columna `Valida` con:

```
=BUSCARX([@Zona];Zonas_Validas[Zona];Zonas_Validas[Zona];"No válido")
```

(En equipos o asistencia: `=BUSCARX([@Area];Areas_Validas[Area];Areas_Validas[Area];"No válido")`.)

> **Verifica:** BUSCARX no distingue mayúsculas, pero sí tildes. Si aparece "No válido", vuelve a Power Query y agrega un Reemplazar valores. Después usa **Datos › Actualizar todo**: la limpieza se repite sola y tus columnas Control y Valida se mantienen.

### Arma la hoja Verificacion

**Obligatorio:** Filas, repetidos (ID o equipo/colaborador y día) y Filas a revisar, más las tres fórmulas del 'antes' con `crudo`. El resto de indicadores (incluido Área/Zona no válida) es opcional si te alcanza el tiempo.

En la hoja Verificacion, crea una tabla con cuatro columnas: **Indicador · Antes (crudo) · Después (limpio) · Esperado**. Usa las fórmulas de tu escenario (cambia `crudo` por la tabla de la hoja Crudo para el "antes" cuando tenga sentido).

**Control de equipos** (`registro_mantenimiento`):

| Indicador | Fórmula | Esperado |
|---|---|---|
| Filas | `=FILAS(registro_mantenimiento)` | 300–500 |
| Equipo y día repetidos | `=FILAS(registro_mantenimiento)-FILAS(UNICOS(registro_mantenimiento[[Fecha]:[Codigo_Equipo]]))` | 0 |
| Fechas que no son fecha | `=FILAS(registro_mantenimiento)-CONTAR(registro_mantenimiento[Fecha])` | 0 |
| Primera y última fecha | `=MIN(registro_mantenimiento[Fecha])` y `=MAX(registro_mantenimiento[Fecha])` | Entre 01/01/2026 y 31/03/2026 |
| Áreas distintas | `=CONTARA(UNICOS(registro_mantenimiento[Area]))` | 3 |
| Área no válida | `=CONTAR.SI(registro_mantenimiento[Valida];"No válido")` | 0 |
| Técnico vacío | `=CONTAR.BLANCO(registro_mantenimiento[Tecnico])` | 0 o explicado |
| Falla "Ninguna" con mantenimiento correctivo | `=CONTAR.SI.CONJUNTO(registro_mantenimiento[Tipo_Falla];"Ninguna";registro_mantenimiento[Tipo_Mantenimiento];"Correctivo")` | 0 o explicado |
| Filas a revisar | `=CONTAR.SI(registro_mantenimiento[Control];"Revisar")` | 0 o explicado |

**Logística** (`despachos`):

| Indicador | Fórmula | Esperado |
|---|---|---|
| Filas | `=FILAS(despachos)` | 300–500 |
| ID_Pedido repetidos | `=FILAS(despachos)-CONTARA(UNICOS(despachos[ID_Pedido]))` | 0 |
| Fechas de pedido que no son fecha | `=FILAS(despachos)-CONTAR(despachos[Fecha_Pedido])` | 0 |
| Entregados sin fecha de entrega | `=CONTAR.SI.CONJUNTO(despachos[Estado];"Entregado";despachos[Fecha_Entrega];"")` | 0 |
| Pendientes con fecha de entrega | `=CONTAR.SI.CONJUNTO(despachos[Estado];"Pendiente";despachos[Fecha_Entrega];"<>")` | 0 |
| Flete fuera de 25–900 | `=CONTAR.SI.CONJUNTO(despachos[Costo_Flete_PEN];"<25")+CONTAR.SI.CONJUNTO(despachos[Costo_Flete_PEN];">900")` | 0 |
| Zona no válida | `=CONTAR.SI(despachos[Valida];"No válido")` | 0 |
| Filas a revisar | `=CONTAR.SI(despachos[Control];"Revisar")` | 0 o explicado |

**Asistencia** (`asistencia`):

| Indicador | Fórmula | Esperado |
|---|---|---|
| Filas | `=FILAS(asistencia)` | 300–500 |
| Colaborador y día repetidos | `=FILAS(asistencia)-FILAS(UNICOS(asistencia[[Fecha]:[Codigo_Colaborador]]))` | 0 |
| Fechas que no son fecha | `=FILAS(asistencia)-CONTAR(asistencia[Fecha])` | 0 |
| Faltas con hora de ingreso | `=CONTAR.SI.CONJUNTO(asistencia[Estado];"Falta*";asistencia[Hora_Ingreso];"<>")` | 0 |
| "Presente" con minutos de tardanza | `=CONTAR.SI.CONJUNTO(asistencia[Estado];"Presente";asistencia[Minutos_Tardanza];">0")` | 0 |
| Tardanza mayor a 120 min | `=CONTAR.SI.CONJUNTO(asistencia[Minutos_Tardanza];">120")` | 0 |
| Áreas distintas | `=CONTARA(UNICOS(asistencia[Area]))` | 4 |
| Área no válida | `=CONTAR.SI(asistencia[Valida];"No válido")` | 0 |
| Filas a revisar | `=CONTAR.SI(asistencia[Control];"Revisar")` | 0 o explicado |

Para la columna **Antes (crudo)** usa al menos estas tres, que funcionan aunque los datos sean texto: `=FILAS(crudo)`, `=CONTAR.BLANCO(crudo[Area])` (o `crudo[Zona]`) y `=CONTARA(UNICOS(crudo[Area]))`.

> **Ojo:** UNICOS no distingue mayúsculas: en Crudo, 'almacen' y 'ALMACEN' cuentan como uno. Por eso tu 'antes' puede ser menor que lo que muestra Power Query; anota también el número de Power Query en la bitácora.

> **Ojo:** MIN y MAX devuelven un número de serie: dale formato **Fecha corta** (Inicio › Número). Si la columna tiene vacíos, `UNICOS` agrega un 0 a la lista y `CONTARA` lo cuenta: réstalo o explícalo.

> **Ojo:** UNICOS y las referencias como `[[Fecha]:[Codigo_Equipo]]` funcionan en Excel de Microsoft 365. Si tu Excel no tiene UNICOS, usa la flecha de filtro de la columna para ver la lista de valores distintos.

> **Verifica:** si un indicador no da lo esperado, no lo maquilles. Vuelve a Power Query, corrige, usa **Datos › Actualizar todo** y registra el cambio. Si decides dejar filas "Revisar", explica por qué en la bitácora: en la S5 las filtrarás.

## Completa tu bitácora
Duration: 0:05:00

En una hoja nueva llamada **Bitacora**, crea una tabla (Ctrl+T) con estas columnas:

| N.º | Qué necesitaba | Prompt (resumen) | Fórmula o paso que dio la IA | ¿Funcionó a la primera? | Cómo lo verifiqué | Corrección final |
|---|---|---|---|---|---|---|
| 1 | Unificar variantes de Zona | Pegué los valores distintos y pedí la tabla de reemplazos | Reemplazar valores × 4 con "todo el contenido" | Sí | Distribución de columnas: de 8 valores a 5 | — |
| 2 | Marcar filas incoherentes | Plantilla de la columna Control | `=SI(Y(...);"OK";"Revisar")` | No: usaba comas | Excel mostró un aviso de error al dar Enter; pedí la versión con ; | Fórmula con punto y coma |
| 3 | Contar pendientes con fecha | "Dame una fórmula que cuente…" | `=CONTAR.SI.CONJUNTO(...;"<>")` | Sí | Filtré Estado = Pendiente y Fecha_Entrega ≠ vacío: 2 = 2 | — |

**Mínimo 3 entradas:** al menos 1 paso de Power Query y 2 fórmulas, y **al menos una corrección** que le hayas hecho a la IA.

Agrega al final una línea con el resumen de filas: `Crudo: 412 · Quitadas: 23 (14 duplicados, 6 errores de fecha, 3 horas negativas) · Limpio: 389`.

## Arma tu ficha de evidencia
Duration: 0:05:00

Crea un documento (Word, Google Docs o el que prefieras), pega lo siguiente y expórtalo a PDF.

```
LABORATORIO 4 · DATASET LIMPIO CON EXCEL, POWER QUERY E IA
Nombre: ______________________   Escenario: equipos / logística / asistencia
Herramienta de IA usada: ______________________

1. PROMPTS USADOS
   a) Prompt completo para generar el dataset.
   b) Dos prompts que usaste para pedir fórmulas (o pasos de Power Query).

2. RESULTADO
   a) Captura de la hoja Crudo con errores visibles (primeras 15 filas).
   b) Captura del editor de Power Query con las barras de calidad y los Pasos aplicados.
   c) Captura de la hoja Limpio.

3. QUÉ VERIFIQUÉ O CORREGÍ
   a) Captura de la hoja Verificacion (antes y después).
   b) Las 3 entradas de la bitácora, incluida la corrección que le hiciste a la IA.
   c) En 2 o 3 oraciones: ¿qué error de los datos o de la IA te habría engañado si no verificabas?

4. PRODUCTO FINAL
   Nombre del archivo .xlsx: ______________________
   Filas en Crudo: ___   Filas quitadas: ___ (motivos)   Filas en Limpio: ___
   Hojas incluidas: Crudo · Limpio · Verificacion · Bitacora
```

Sube el PDF y el .xlsx a la tarea "Laboratorio 4" del LMS hoy, hasta las 23:59.

## Rúbrica
Duration: 0:00:00

| Criterio | 5 puntos | 3 puntos | 1 punto |
|---|---|---|---|
| **Cumple el reto** | .xlsx con Crudo, Limpio (300–500 filas, columnas exactas de su escenario), Verificacion y Bitacora; consulta de Power Query con al menos 5 pasos. | Falta una hoja o quedan errores visibles (variantes de texto, fechas como texto, duplicados). | Solo el dataset generado, sin limpieza en Power Query. |
| **Calidad del prompt** | Prompt del dataset con los 5 elementos y las columnas exactas; prompts de fórmulas que indican tabla, columnas, español y punto y coma. | Prompts incompletos: sin configuración regional o sin las columnas. | Prompts genéricos ("hazme una fórmula para revisar"). |
| **Verificación crítica** | Hoja Verificacion con antes y después, y 3 entradas de bitácora que explican cómo comprobaste cada resultado, con al menos una corrección a la IA. | Verificación parcial: pocos indicadores o bitácora sin explicar cómo verificaste. | Sin verificación: se usaron las fórmulas sin probarlas. |
| **Orden y presentación** | Hojas y tablas con nombre, tipos de datos correctos, ficha clara y legible, solo datos simulados. | Ficha o libro desordenados, pero comprensibles. | Ficha incompleta o con datos que no son simulados. |

**Total:** 20 puntos.

## Si terminas antes
Duration: 0:00:00

Elige uno o más retos:

1. **Prueba la receta.** Agrega 5 filas "sucias" al final de la tabla `crudo` (espacios, minúsculas, una fecha 2026-02-30) y usa **Datos › Actualizar todo**. ¿La limpieza se aplicó sola? ¿Qué pasó con la fecha imposible?
2. **Pide que te expliquen tu receta.** En Power Query abre **Inicio › Editor avanzado**, copia el código y pide a tu IA: `Explícame en lenguaje simple qué hace cada paso de esta consulta de Power Query. No cambies nada.` Verifica que la explicación coincida con tus Pasos aplicados. Lo usarás en la S7.
3. **Recalcula en lugar de confiar (equipos).** Si Horas_Parada no siempre es Horas_Programadas − Horas_Operacion, recalcúlala en Power Query: selecciona las dos columnas y busca en **Agregar columna** la operación estándar de resta. Después reemplaza la columna original y anota el cambio.
4. **Una columna de control más.** Pide a la IA una fórmula que marque los pedidos entregados después de la fecha de compromiso (logística) o las tardanzas mayores a 30 minutos (asistencia) y verifícala con un filtro.

## Resumen
Duration: 0:00:00

Hoy aprendiste a:

- Generar con IA un dataset simulado con errores controlados, sin datos personales.
- Convertir datos en una **tabla con nombre** y limpiarlos con **Power Query**: Recortar, Limpiar, mayúsculas, Reemplazar valores, tipos con configuración regional, Quitar duplicados y Rellenar.
- Pedir a la IA fórmulas en español con punto y coma (SI, Y, BUSCARX, CONTAR.SI.CONJUNTO) y **verificarlas** con filas conocidas, filtros y conteos antes y después.
- Documentar cada decisión en una bitácora: nada se borra en silencio.

**Próxima sesión (S5):** con tu tabla limpia definirás de 3 a 5 KPI de tu escenario (disponibilidad, MTTR, OTIF o ausentismo) y armarás un mini-dashboard en Excel con tablas dinámicas, gráficos dinámicos y segmentaciones. Trae tu archivo `Lab04_<Apellido>_<escenario>.xlsx`.
