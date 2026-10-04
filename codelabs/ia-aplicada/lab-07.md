id: ia-aplicada-lab-07
summary: Laboratorio 7 del curso IA Aplicada a Tareas Laborales y Académicas. Convierte tu primer dashboard en la versión 1 del proyecto integrador: agrega un visual de IA nativo de Power BI (influenciadores clave o árbol de descomposición), pide a una IA externa que te explique tu DAX y tus pasos de Power Query, rediseña la página con un checklist y arma tu lista de mejoras. Incluye el punto de control con el docente.
status: Published
authors: Benjamin Pareja
categories: IA, Productividad, Power BI
environments: Web
feedback link: https://me7aben.github.io/gdg-codelabs/

# Laboratorio 7 — Dashboard v1 del proyecto (punto de control)

## Antes de empezar
Duration: 0:03:00

En este laboratorio conviertes el dashboard del Laboratorio 6 en la **versión 1 de tu proyecto integrador**. Vas a sumarle un visual de IA, entender mejor lo que construiste con ayuda de una IA externa, ordenar la página con un checklist de diseño y anotar qué mejorarás antes de la presentación final.

Es tu **punto de control**: el docente revisará tu v1 contigo durante el taller.

**Duración:** 70 minutos (en clase).

**Qué entregas** en la tarea "Laboratorio 7" del LMS, hoy hasta las 23:59:

| Archivo | Qué es |
|---|---|
| `Proyecto_v1_Apellido_Nombre.pbix` | Tu dashboard v1 |
| `Proyecto_v1_Apellido_Nombre.png` | Captura de la página completa |
| `Lab07_Apellido_Nombre.pdf` | Ficha de evidencia con tu checklist de diseño y tu lista de mejoras |

### Lo que necesitas

| Requisito | Detalle |
|---|---|
| Power BI Desktop | Con tu `Lab06_Apellido_Nombre.pbix` abierto. Solo funciona en Windows. |
| Herramienta de IA | ChatGPT, Gemini o Copilot Chat. Para el paso 5.3 necesitas que acepte imágenes (las tres lo permiten). |
| Excel | Tu Excel limpio, para confirmar hallazgos. |
| Tu ficha de KPI (S5) | Para revisar que tus medidas siguen tu definición y para mostrar las metas. |

> **Ojo:** ¿usas Mac? Sigue con la opción que elegiste en el Laboratorio 6 (equipo Windows, pareja, web o máquina virtual). Los visuales de influenciadores clave y árbol de descomposición también existen en Power BI en la web. Si trabajas en Power BI en la web: en lugar del .pbix, entrega lo que acordaste con el docente en el Laboratorio 6 (por ejemplo, el PDF exportado del informe con **Exportar › PDF**, además de tu captura). Para el paso 4.2, abre en Excel (también en Mac) tu consulta de limpieza de la S4 en el Editor de Power Query, entra al Editor avanzado y copia ese código.

> **Ojo:** Copilot dentro de Power BI no está disponible en el curso (requiere una capacidad Fabric de pago, F2 o superior). La IA de este laboratorio son los **visuales de IA nativos** de Power BI Desktop, que son gratuitos, y tu **IA externa**.

### Cómo funciona el punto de control

El docente te llamará por turno (2 a 3 minutos, en sala de grupos o con pantalla compartida). **Mientras esperas, sigue avanzando** con los pasos. Si no alcanzas turno, tu carga de imagen en ClassPoint será revisada.

## Guarda tu versión 1
Duration: 0:03:00

1. Abre `Lab06_Apellido_Nombre.pbix`.
2. **Archivo › Guardar como** › `Proyecto_v1_Apellido_Nombre.pbix`. Así el archivo del Laboratorio 6 queda intacto.
3. Si cambiaste algo en tu Excel desde la S6, elige **Inicio › Actualizar** (Refresh) y revisa que tus tarjetas sigan mostrando los valores verificados.

> **Verifica:** tu página debe tener al menos 3 tarjetas, un gráfico de barras o columnas, uno de líneas, una tabla y 2 segmentaciones. Si falta algo del Laboratorio 6, complétalo primero (máximo 10 minutos) y anótalo en tu lista de mejoras.

## Agrega un visual de IA
Duration: 0:15:00

Agrega **al menos uno** de estos dos visuales. Puedes ponerlo en tu página principal o en una segunda página llamada "¿Por qué?".

### Opción A · Influenciadores clave

Responde: **¿qué factores se asocian a que mi indicador suba o baje?**

1. Haz clic en un espacio vacío del lienzo y elige en Visualizaciones **Influenciadores clave** (Key influencers). En algunas versiones aparece como "Factores de influencia clave".
2. Arrastra a **Analizar** (Analyze) la columna de tu escenario (tabla de abajo). Si aparece como "Suma de…", abre la flecha del campo y elige **No resumir** (Don't summarize).
3. Arrastra a **Explicar por** (Explain by) las columnas sugeridas. Deja vacío **Expandir por** (Expand by).
4. En el formato del visual, en la tarjeta **Análisis**, elige el tipo de análisis **Continuo**.
5. Arriba del visual, en la pregunta "¿Qué influye en que … ?", elige que **aumente** (Increase).
6. Haz clic en la primera burbuja de la izquierda y lee el gráfico de la derecha. Revisa también la pestaña **Segmentos principales** (Top segments).

| Escenario | Analizar | Explicar por | No pongas en Explicar por |
|---|---|---|---|
| Control de equipos | `Horas_Parada` | `Tipo_Equipo`, `Area`, `Turno`, `Tecnico` | `Tipo_Falla`, `Tipo_Mantenimiento`, `Horas_Operacion`, `Horas_Programadas`: son parte del mismo hecho y darán una respuesta obvia |
| Logística | `Costo_Flete_PEN` | `Zona`, `Transportista`, `Incidencia`, `Unidades_Pedidas` | `ID_Pedido` y `Cliente`: demasiados valores con pocas filas cada uno |
| Asistencia | `Minutos_Tardanza` | `Area`, `Turno` | `Estado` y `Hora_Ingreso` (ya contienen la tardanza) y `Codigo_Colaborador` (60 valores) |

> **Ojo (asistencia):** antes de leer el visual, arrastra `Estado` a **Filtros en este objeto visual** (panel Filtros) y marca solo "Tardanza". Así el promedio coincide con tu KPI Tardanza promedio (min). Con este filtro quedan menos filas: si no encuentra influenciadores, usa la opción B.

> **Ojo:** el visual necesita suficientes datos (Microsoft recomienda al menos 100 filas del caso que analizas). Con 300 a 500 filas simuladas puede responder "No se encontraron influenciadores" o que no hay datos suficientes. Si tus datos se generaron al azar, puede que no haya patrones reales. **Eso también es un resultado**: anótalo en tu ficha y usa la opción B.

### Opción B · Árbol de descomposición

Responde: **¿dónde se concentra mi indicador?**

1. Haz clic en un espacio vacío y elige en Visualizaciones **Árbol de descomposición** (Decomposition tree).
2. Arrastra a **Analizar** una medida de conteo o suma (tabla de abajo).
3. Arrastra a **Explicar por** de 3 a 5 columnas (las de la tabla de abajo).
4. Haz clic en el **+** junto a la barra del total y elige una columna, o elige **Valor alto** (High value) para que la IA escoja la columna donde la medida es más alta. Ese nivel lleva un ícono de bombilla.
5. Baja 2 o 3 niveles y anota la ruta completa. Ejemplo: Incidencias › Zona = Callao › Transportista = TRA-B.

| Escenario | Analizar | Explicar por |
|---|---|---|
| Control de equipos | Total Horas Parada (o Fallas) | `Area`, `Tipo_Equipo`, `Codigo_Equipo`, `Turno`, `Tipo_Falla` |
| Logística | Incidencias | `Zona`, `Transportista`, `Incidencia`, `Cliente` |
| Asistencia | Faltas (o Total Horas Extra) | `Area`, `Turno`, `Estado`, `Codigo_Colaborador` |

> **Ojo:** si con una medida de porcentaje (OTIF %, Ausentismo %) no aparecen las divisiones de IA, usa una medida de conteo o suma.

### Escribe y confirma el hallazgo

1. Debajo del visual, agrega un **cuadro de texto** con una frase:

```
Hallazgo: cuando [factor] es [valor], [indicador] [sube / baja / se concentra] [cuánto]. Lo confirmé con [gráfico o cálculo en Excel].
```

2. **Confírmalo con otra vista.** Por ejemplo, un gráfico de barras del factor encontrado (`Turno` con tu medida Tardanza Promedio (min)) o un filtro en tu Excel.

> **Verifica:** un visual de IA encuentra **asociaciones, no causas**. Antes de escribir "el turno noche causa más paradas", confírmalo con un segundo gráfico y pregúntate qué explicación operativa tendría (más equipos antiguos, menos técnicos, otra carga de trabajo).

## Pide a la IA que te explique tu modelo
Duration: 0:08:00

Vas a usar tu IA externa para entender, en lenguaje sencillo, lo que ya construiste.

### 4.1 Explica una medida DAX

Elige tu medida más compleja (la que usa `CALCULATE` o `FILTER`) y usa este prompt:

```
ROL: Actúa como instructor de Power BI para personas que no programan.
CONTEXTO: En mi dashboard de [control de equipos / logística / asistencia] tengo esta medida sobre la tabla [nombre de tu tabla], cuyas columnas son: [pega la lista de columnas].
[pega la medida]
TAREA: Explícame qué calcula y muéstralo con un ejemplo de 5 filas inventadas.
RESTRICCIONES: Lenguaje sencillo, sin jerga. Señala si hay casos que la medida no cubre: celdas vacías, división entre cero o estados que no cuenta.
FORMATO: 1) Qué calcula en una oración. 2) Explicación por partes. 3) Ejemplo en una tabla. 4) Riesgos o casos no cubiertos.
```

> **Verifica:** compara la explicación con tu ficha de KPI. Si la IA dice que la medida cuenta algo que tu ficha excluye (por ejemplo, pedidos "Pendiente" en el OTIF o paradas sin falla en el MTTR), corrige la medida y vuelve a verificarla contra Excel.

### 4.2 Explica tus pasos de Power Query

1. **Inicio › Transformar datos** para abrir Power Query.
2. **Inicio › Editor avanzado** (Advanced Editor). Verás en texto (lenguaje M) los mismos pasos del panel Pasos aplicados.
3. Copia todo el código y pégalo en tu IA con este prompt:

```
ROL: Actúa como analista de datos que explica Power Query a principiantes.
CONTEXTO: Este es el código M de mi consulta en Power BI. Solo contiene los pasos, no mis datos:
[pega el código]
TAREA: Explica en orden qué hace cada paso y dime si alguno podría causar errores o hacer que se pierdan filas.
RESTRICCIONES: Lenguaje sencillo. No reescribas el código salvo que encuentres un error; si lo haces, explica por qué.
FORMATO: Tabla con columnas: N.º, nombre del paso, qué hace, riesgo.
```

4. Cierra el Editor avanzado **sin cambiar nada** y vuelve con **Cerrar y aplicar**.

> **Ojo:** la primera línea del código (`Origen`) contiene la ruta de tu archivo, por ejemplo `C:\Users\tu-usuario\...`. Antes de pegarla, reemplaza la ruta por `RUTA`: puede incluir tu nombre de usuario.

> **Verifica:** la tabla de la IA debe tener los mismos pasos, en el mismo orden, que tu panel Pasos aplicados. Si la IA dice que un paso puede perder filas (por ejemplo, Quitar duplicados), compara el número de filas cargadas con tu Excel.

## Rediseña tu página con el checklist
Duration: 0:15:00

### 5.1 Ordena la página en Z

La vista recorre la página en forma de **Z**: empieza arriba a la izquierda y termina abajo a la derecha. Usa esta distribución como base:

| Franja | Izquierda | Derecha |
|---|---|---|
| 1 | Título con escenario y periodo | Segmentaciones (fecha y categoría) |
| 2 | Tarjetas de KPI, en fila, con su meta | (continúan las tarjetas) |
| 3 | Tendencia: gráfico de líneas | Comparación: gráfico de barras o columnas |
| 4 | Visual de IA con su hallazgo | Tabla de detalle |

Herramientas útiles:
- En la pestaña **Vista** (View), activa las líneas de cuadrícula y el ajuste a la cuadrícula para alinear.
- Selecciona varios visuales con **Ctrl** y usa la opción **Alinear** de la pestaña **Formato** (Format).
- En **Vista › Temas** (Themes) elige un tema sobrio y úsalo en toda la página.
- En el formato de cada visual, **General › Título**, escribe un título que diga qué responde o qué concluye.

### 5.2 Marca el checklist de diseño

Copia este checklist en tu ficha y marca cada punto:

```
[ ] 1. El título de la página dice el escenario y el periodo (ej.: "Asistencia · enero a marzo 2026").
[ ] 2. Los KPI están en tarjetas, arriba a la izquierda, y muestran su meta.
[ ] 3. La página tiene entre 5 y 8 visuales; ninguno sobra.
[ ] 4. Cada visual tiene un título con la pregunta que responde o su conclusión.
[ ] 5. Cada pregunta usa el gráfico correcto: líneas = tiempo, barras = comparar, tabla = detalle.
[ ] 6. Los formatos son claros: % con 1 decimal, soles con S/ y ningún "Suma de…".
[ ] 7. Uso un color base y uno de alerta; el mismo color significa siempre lo mismo.
[ ] 8. Las segmentaciones están agrupadas en un solo lado y filtran todos los visuales.
[ ] 9. Los visuales están alineados y tienen el mismo tamaño en cada franja.
[ ] 10. Hay un visual de IA con una frase que explica su hallazgo y cómo lo confirmé.
```

Ejemplos de títulos con conclusión (escribe los tuyos con tus propios datos):

| Escenario | Título genérico | Título con conclusión |
|---|---|---|
| Control de equipos | Suma de Horas_Parada por Tipo_Equipo | Los montacargas acumulan la mayor parte de las horas de parada |
| Logística | Incidencias por Transportista | TRA-B concentra los retrasos en Lima Sur |
| Asistencia | Faltas por Area | Producción tiene el doble de faltas que Almacén |

### 5.3 Pide una segunda opinión a la IA (opcional, recomendado)

Toma una captura de tu página (Windows + Shift + S) y súbela a tu IA con este prompt:

```
ROL: Actúa como diseñador de dashboards operativos para empresas industriales.
CONTEXTO: Te adjunto la captura de mi dashboard de [escenario] hecho en Power BI con datos simulados. Lo verá [un jefe de mantenimiento / un coordinador de despachos / una jefa de recursos humanos] en una reunión de 5 minutos.
TAREA: Evalúalo con este checklist: [pega el checklist de 10 puntos].
RESTRICCIONES: Sé concreto. No propongas visuales que necesiten datos que no aparecen en la captura.
FORMATO: Tabla con una fila por punto del checklist: punto, ¿cumple? (sí/no), sugerencia concreta (solo si no cumple), prioridad (alta/media/baja).
```

> **Ojo:** la IA solo ve la imagen, no tus datos: puede leer mal una cifra o sugerir algo imposible. Quédate solo con las sugerencias que tengan sentido y anótalas en tu lista de mejoras con origen "IA".

## Punto de control con el docente
Duration: 0:05:00

Cuando te toque el turno, comparte tu pantalla y muestra en 3 minutos:

| # | Qué muestras | Qué decir |
|---|---|---|
| 1 | Tus KPI | Qué mide cada uno, su meta y cómo los verificaste contra Excel. |
| 2 | Tu visual de IA | Qué encontró y cómo confirmaste el hallazgo. |
| 3 | Tu duda principal | Una pregunta concreta: "¿Se entiende mejor X o Y?", "¿Mi OTIF está bien definido?". |

Anota la retroalimentación del docente en tu lista de mejoras con origen "Docente".

> **Ojo:** si todavía no es tu turno, sigue con los pasos siguientes y sube tu captura a la actividad de ClassPoint cuando el docente la abra. Si no alcanzas turno, el docente revisará esa captura.

## Escribe tu lista de mejoras
Duration: 0:08:00

Haz una lista de **al menos 5 mejoras** para aplicar antes de la S8. Usa esta tabla:

| # | Mejora | Por qué (qué problema resuelve) | Origen | Prioridad | ¿Para la S8? |
|---|---|---|---|---|---|
| 1 | | | Checklist / Docente / IA / Compañero | Alta / Media / Baja | Sí / No |

Ejemplos según el escenario:

| Escenario | Mejora | Por qué | Origen | Prioridad |
|---|---|---|---|---|
| Control de equipos | Mostrar la meta de disponibilidad en la tarjeta | No se sabe si 91 % es bueno o malo | Docente | Alta |
| Control de equipos | Quitar el gráfico circular de tipos de falla | Tiene 4 tramos parecidos y no se lee | Checklist | Media |
| Logística | Agregar el árbol por zona y transportista | Confirma el hallazgo de influenciadores sobre TRA-C | Visual de IA | Alta |
| Logística | Cambiar "Suma de Costo_Flete_PEN" por "Costo de flete (S/)" | El título no se entiende | Checklist | Alta |
| Asistencia | Agregar una segmentación por turno | El jefe pidió ver el turno noche por separado | Compañero | Media |
| Asistencia | Unificar los colores de los gráficos | Cada gráfico usa un color distinto | IA | Baja |

Las mejoras de prioridad **alta** son las que aplicarás antes de la S8.

## Guarda la v1 y toma la captura
Duration: 0:03:00

1. **Archivo › Guardar** (ya se llama `Proyecto_v1_Apellido_Nombre.pbix`).
2. Captura la página completa con **Windows + Shift + S** y guárdala como `Proyecto_v1_Apellido_Nombre.png`. Si tu visual de IA está en una segunda página, captura también esa página.
3. Si aún no lo hiciste, sube la captura a la actividad de ClassPoint.

## Arma tu ficha de evidencia
Duration: 0:10:00

Crea un documento con esta estructura y expórtalo a PDF con el nombre `Lab07_Apellido_Nombre.pdf`.

| Sección | Qué va |
|---|---|
| Encabezado | Nombre, escenario y herramientas de IA usadas |
| 1. Prompts usados | El prompt para explicar una medida DAX, el prompt para explicar tus pasos de Power Query y, si lo hiciste, el de revisión de diseño, con un extracto de cada respuesta |
| 2. Resultado | Captura del visual de IA con su configuración (qué pusiste en Analizar y en Explicar por) y la frase del hallazgo. Si el visual no encontró influenciadores, explícalo |
| 3. Qué verificaste o corregiste | Cómo confirmaste el hallazgo (gráfico o Excel), qué corregiste después de leer la explicación de la IA, el checklist de diseño marcado y la retroalimentación del docente |
| 4. Producto final | Captura del dashboard v1 y tu lista de mejoras priorizada |

Sube a la tarea **Laboratorio 7** del LMS, hoy hasta las **23:59**: el PDF, el `.pbix` v1 y la captura `.png`.

## Rúbrica
Duration: 0:00:00

| Criterio | 5 puntos | 3 puntos | 1 punto |
|---|---|---|---|
| **Cumple el reto** | v1 con tus KPI verificados, al menos 1 visual de IA configurado con su hallazgo escrito y una lista de 5 o más mejoras priorizadas. | Falta el hallazgo escrito o la lista tiene menos de 5 mejoras. | Sin visual de IA o sin lista de mejoras. |
| **Calidad del prompt** | Los prompts para explicar DAX y Power Query tienen rol, contexto (medida o código y columnas), tarea, restricciones y formato. | Los prompts están incompletos (sin contexto o sin formato). | Prompt de una línea ("explícame esto"). |
| **Verificación crítica** | Confirma el hallazgo con otro gráfico o con Excel, no lo presenta como causa y revisa la explicación de la IA contra su ficha de KPI. | Muestra el hallazgo, pero sin confirmarlo, o lo presenta como causa. | Copia el resultado de la IA sin revisarlo. |
| **Orden y presentación** | La página cumple al menos 8 puntos del checklist (lectura en Z, títulos con conclusión, formatos, colores) y la ficha es clara. | Cumple de 5 a 7 puntos del checklist. | Cumple menos de 5 puntos o la ficha es ilegible. |

**Total:** 20 puntos.

## Si terminas antes
Duration: 0:00:00

Elige uno de estos retos:

1. **El otro visual de IA.** Si usaste influenciadores clave, prueba el árbol de descomposición (o al revés) y compara: ¿los dos apuntan al mismo factor?
2. **Aplica ya tus mejoras.** Empieza por las de prioridad alta y márcalas como hechas en tu lista.
3. **Ensaya tu demo.** Escribe en 5 viñetas lo que dirás en la S8: problema, KPI, hallazgo, recomendación y qué hiciste con IA.

## Resumen
Duration: 0:00:00

Hoy aprendiste a:

- Usar influenciadores clave y árbol de descomposición para buscar qué explica tu indicador.
- Confirmar un hallazgo de la IA antes de presentarlo, sin confundir asociación con causa.
- Pedir a una IA externa que explique tus medidas DAX y tus pasos de Power Query.
- Ordenar una página con lectura en Z, jerarquía y títulos con conclusión.

**Próxima sesión (S8):** presentación final. Trae tu dashboard con las mejoras de prioridad alta, tu reporte en PDF de 1 a 2 páginas y tu declaración de uso de IA. Tendrás 5 minutos de demo y 2 minutos de preguntas. La S8 tiene espacio para 14 turnos: si el grupo supera los 14 participantes, el docente anuncia hoy las parejas del mismo escenario y publica el orden de presentaciones en el LMS.
