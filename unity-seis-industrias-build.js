const pptxgen = require("pptxgenjs");
const path = require("path");
const fs = require("fs");
const M = "/Users/bpareja/gdg-codelabs/unity-seis-industrias-media/";
const OUT = "/Users/bpareja/gdg-codelabs/unity-seis-industrias.pptx";
const img = (f) => path.join(M, f);
const ex = (f) => fs.existsSync(img(f));

// Paleta Coresearch
const BG = "131313", SURF = "1A1A1A", LINE = "3A3A3A", T0 = "FFFFFF", T1 = "E8E8E8", T2 = "999999", OR = "FF6600";
const SERIF = "Cambria", SANS = "Calibri", MONO = "Courier New";

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.33 x 7.5
pres.author = "Benjamin Pareja"; pres.title = "Unity: un motor, seis industrias";
const W = 13.333, H = 7.5, MX = 0.6;

pres.defineSlideMaster({
  title: "DARK", background: { color: BG },
  objects: [
    { image: { x: MX, y: 6.85, h: 0.36, w: 0.19, path: img("logo-coresearch.png") } },
    { text: { text: "ARAQUIPA XR DAY".replace("ARAQUIPA", "AREQUIPA") + "  ·  17.10.2026  ·  CORESEARCH.STUDIO", options: { x: MX + 0.3, y: 6.83, w: 7, h: 0.4, fontFace: MONO, fontSize: 9, color: T2, charSpacing: 2, margin: 0, isTextBox: true } } },
  ],
  slideNumber: { x: W - MX - 0.8, y: 6.83, w: 0.8, h: 0.4, fontFace: MONO, fontSize: 9, color: T2, align: "right" },
});
pres.defineSlideMaster({ title: "PLAIN", background: { color: BG }, objects: [] });

const fresh = () => ({}); let n = 0;
function slide(master = "DARK") { n++; return pres.addSlide({ masterName: master }); }
function lab(s, text, x, y, w, opts = {}) {
  // etiqueta mono: "§ XR  TEXTO"; el "§" y lo que vaya en orange va en opts.orange
  const runs = [];
  if (opts.orange) runs.push({ text: opts.orange + "  ", options: { color: OR } });
  runs.push({ text: text.toUpperCase(), options: { color: opts.color || T2 } });
  s.addText(runs, { x, y, w, h: opts.h || 0.35, fontFace: MONO, fontSize: opts.size || 11, charSpacing: 2, margin: 0, isTextBox: true, align: opts.align || "left", valign: "middle" });
}
function title(s, text, x, y, w, h, size, opts = {}) {
  // *palabra* -> itálica naranja
  const parts = text.split(/\*/); const runs = parts.map((p, i) => ({ text: p, options: i % 2 ? { italic: true, color: OR } : { color: opts.color || T0 } }));
  s.addText(runs, { x, y, w, h, fontFace: SERIF, fontSize: size, margin: 0, isTextBox: true, valign: opts.valign || "top", align: opts.align || "left", lineSpacingMultiple: 0.95, fit: "shrink" });
}
function body(s, text, x, y, w, h, size = 16, opts = {}) {
  s.addText(text, { x, y, w, h, fontFace: SANS, fontSize: size, color: opts.color || T2, margin: 0, isTextBox: true, valign: opts.valign || "top", align: opts.align || "left", lineSpacingMultiple: 1.15, fit: "shrink" });
}
function bullets(s, items, x, y, w, h, size = 16, color = T1) {
  s.addText(items.map((t, i) => ({ text: t, options: { bullet: { code: "25B8" }, breakLine: i < items.length - 1, color, paraSpaceAfter: 6 } })),
    { x, y, w, h, fontFace: SANS, fontSize: size, margin: 0, isTextBox: true, valign: "top", fit: "shrink" });
}
function frame(s, x, y, w, h) {
  s.addShape(pres.ShapeType.rect, { x, y, w, h, line: { color: LINE, width: 0.75 }, fill: { type: "none" } });
  const k = 0.18, o = 0.08;
  for (const [cx, cy, fx, fy] of [[x - o, y - o, 1, 1], [x + w + o, y - o, -1, 1], [x - o, y + h + o, 1, -1], [x + w + o, y + h + o, -1, -1]]) {
    s.addShape(pres.ShapeType.line, { x: Math.min(cx, cx + fx * k), y: cy, w: k, h: 0, line: { color: OR, width: 1.5 } });
    s.addShape(pres.ShapeType.line, { x: cx, y: Math.min(cy, cy + fy * k), w: 0, h: k, line: { color: OR, width: 1.5 } });
  }
}
function pic(s, file, x, y, w, h, opts = {}) {
  if (!ex(file)) { s.addShape(pres.ShapeType.rect, { x, y, w, h, fill: { color: SURF }, line: { color: LINE, width: 0.75 } }); body(s, "[IMAGEN PENDIENTE: " + file + "]", x + 0.2, y + h / 2 - 0.25, w - 0.4, 0.5, 11, { align: "center" }); return; }
  const o = { path: img(file), x, y, w, h, sizing: { type: "cover", w, h } };
  if (opts.link) o.hyperlink = { url: opts.link, tooltip: "Abrir video" };
  if (opts.transparency) o.transparency = opts.transparency;
  s.addImage(o); if (!opts.noframe) frame(s, x, y, w, h);
  if (opts.link) { // botón play
    s.addShape(pres.ShapeType.ellipse, { x: x + w / 2 - 0.4, y: y + h / 2 - 0.4, w: 0.8, h: 0.8, fill: { color: OR }, line: { color: OR } });
    s.addText("▶", { x: x + w / 2 - 0.4, y: y + h / 2 - 0.4, w: 0.8, h: 0.8, fontFace: SANS, fontSize: 22, color: "000000", align: "center", valign: "middle", margin: 0, isTextBox: true, hyperlink: { url: opts.link } });
    lab(s, opts.caption || "Video · clic para abrir en YouTube", x, y + h + 0.1, w, { size: 9 });
  }
}
function allies(s, x, y, hh = 0.42) {
  lab(s, "Junto a", x, y + 0.02, 1.0, { size: 9 });
  s.addImage({ path: img("logo-gdg.png"), x: x + 0.95, y: y + 0.03, h: hh * 0.78, w: hh * 0.78 * 465 / 68 });
  s.addImage({ path: img("logo-ptw.png"), x: x + 0.95 + hh * 0.78 * 465 / 68 + 0.4, y, h: hh, w: hh * 1220 / 220 });
}
function stat(s, num, caption, x, y, w) {
  s.addText(num, { x, y, w, h: 1.6, fontFace: MONO, fontSize: 88, bold: true, color: OR, margin: 0, isTextBox: true, valign: "bottom", fit: "shrink" });
  body(s, caption, x, y + 1.7, w, 1.4, 16, { color: T1 });
}
function chapter(s, kicker, t, sub, bgfile) {
  if (bgfile) pic(s, bgfile, 0, 0, W, H, { transparency: 72, noframe: true });
  lab(s, kicker, MX, 2.2, 8, { orange: "§" });
  title(s, t, MX, 2.6, 11.5, 2.2, 66);
  if (sub) body(s, sub, MX, 4.9, 10, 0.8, 22);
}
const SRC = (s, t) => lab(s, t, MX, 6.3, 12, { size: 9 });

const OBS = "/Users/bpareja/Repositorios/Coresearch/marketing/evento-xr-labs-latam/obs/";
function full(file, note) { const sl = pres.addSlide({ masterName: "PLAIN" }); sl.addImage({ path: OBS + file, x: 0, y: 0, w: W, h: H }); if (note) sl.addNotes(note); n++; return sl; }

// ===================== APERTURA =====================
full("slide-01-inicio.png", "Pantalla de espera mientras llega la gente. Bienvenida y agenda del día.");
full("slide-02-evento.png", "Nombre del evento en grande. Dejarla al presentar la charla y en pausas.");
let s = slide("PLAIN");
pic(s, "s01-s26-broca-quest.jpg", 0, 0, W, H, { transparency: 65, noframe: true });
s.addImage({ path: img("logo-coresearch.png"), x: MX, y: 0.6, h: 0.9, w: 0.47 });
lab(s, "Arequipa XR Day · 17 de octubre de 2026", MX + 0.7, 0.85, 8, { orange: "§ XR", size: 12 });
title(s, "Unity: un motor,\n*seis industrias*", MX, 2.3, 11, 2.6, 80);
body(s, "Lo que un motor de videojuegos hace hoy fuera de los videojuegos", MX, 5.0, 10, 0.6, 24, { color: T1 });
body(s, "Benjamin Pareja · Coresearch · XRLabs", MX, 5.6, 8, 0.5, 16);
allies(s, MX, 6.5);
s.addNotes("No empieces hablando. Deja la portada mientras el público se acomoda. La primera frase es la de la slide siguiente.");

s = slide("PLAIN");
title(s, "El motor con el que haces juegos para el celular hoy entrena a técnicos de *minería*.", MX, 1.6, 12, 3.2, 54);
body(s, "Y casi nadie fuera de esta sala lo sabe.", MX, 5.0, 10, 0.6, 24, { color: T1 });
s.addNotes("Esta es la tesis. Dila y quédate callado tres segundos. Toda la charla es la defensa de esta frase.");

s = slide();
lab(s, "Quién les habla", MX, 0.6, 6, { orange: "§ 00" });
title(s, "Benjamin Pareja", MX, 1.0, 7, 1.0, 44);
bullets(s, ["Ingeniero de sistemas, docente en Tecsup Arequipa.", "Lidero XRLabs: entrenamiento en realidad virtual para formación técnica, hecho en Unity para Meta Quest.", "Coresearch: estudio de investigación y desarrollo en XR, educación y fabricación 3D.", "GDG Arequipa · 404 Devs not Found."], MX, 2.2, 6.6, 3.6, 18);
pic(s, "s03-benjamin-escenario.jpg", 7.9, 0.8, 4.8, 5.6);
s.addNotes("Treinta segundos, no más. Lo único que debe quedar: este tipo construye cosas reales con esto.");

// ===================== 1. NOTICIAS =====================
s = slide();
chapter(s, "Sección 1", "Lo que acaba de pasar en *XR*", "Tres noticias de los últimos cuatro meses");
pic(s, "s05-meta-connect-keynote.jpg", 8.9, 4.3, 3.8, 2.14, { link: "https://youtu.be/SdKFDIAGF24", caption: "Meta Connect Keynote 2026 · canal Meta · 20 s de las VR Glasses" });

s = slide();
lab(s, "2026 en tres fechas", MX, 0.6, 6, { orange: "§ 01" });
title(s, "Lo que cambió este año", MX, 1.0, 9, 0.9, 40);
const news = [
  ["s05-android-xr-eyewear-io26.jpg", "19 MAY", "Android XR SDK, Developer Preview 4", "Un solo SDK para visores, gafas con cable y gafas con pantalla o audio. Si sabes Android, ya tienes ventaja.", "https://youtu.be/otzSN5pSNZk"],
  ["s05-unity-6.jpg", "16 JUN", "Unity 6.5: Galaxy XR y XREAL Aura con un solo APK", "Un proyecto, varios dispositivos Android XR. Sin reescribir.", null],
  ["s05-meta-connect-keynote.jpg", "23 SEP", "Meta Connect: Meta VR Glasses", "Unos 100 gramos, pantalla 5K, cómputo en un puck. Llegan en 2027. El visor deja de ser un casco.", "https://youtu.be/SdKFDIAGF24"],
];
news.forEach(([f, d, h, t, link], i) => {
  const x = MX + i * 4.1, cw = 3.9;
  pic(s, f, x, 2.05, cw, 2.0, link ? { link, caption: "Video · YouTube" } : {});
  s.addText(d, { x, y: 4.45, w: cw, h: 0.35, fontFace: MONO, fontSize: 14, bold: true, color: OR, margin: 0, isTextBox: true });
  body(s, h, x, 4.8, cw, 0.7, 16, { color: T0 });
  body(s, t, x, 5.5, cw, 0.9, 13);
});
SRC(s, "Fuentes: developer.android.com (19.05.2026) · discussions.unity.com (16.06.2026) · meta.com/blog (23.09.2026)");
s.addNotes("Lee la columna de 'qué significa para ti', no las especificaciones. Si preguntan el precio de las Meta VR Glasses: US$1.299,99 según Meta.");

s = slide();
lab(s, "Dos plataformas, un mismo problema", MX, 0.6, 8, { orange: "§ 01" });
title(s, "Meta y Android XR", MX, 1.0, 9, 0.9, 40);
[["Meta · Quest, Horizon OS", ["El visor más vendido del mundo.", "Standalone: no necesita PC.", "Aquí corre XRLabs hoy."]], ["Android XR · Google + Samsung", ["Galaxy XR es el único dispositivo a la venta; las gafas vienen después.", "Gemini integrado.", "Jetpack XR para Android nativo, Unity para 3D."]]].forEach(([h, items], i) => {
  const x = MX + i * 6.2;
  s.addShape(pres.ShapeType.rect, { x, y: 2.1, w: 5.9, h: 3.3, fill: { color: SURF }, line: { color: LINE, width: 0.75 } });
  body(s, h, x + 0.35, 2.4, 5.2, 0.5, 20, { color: T0 });
  bullets(s, items, x + 0.35, 3.05, 5.2, 2.2, 16);
});
body(s, "El problema común: ambos necesitan contenido 3D interactivo. Y eso se construye con un motor.", MX, 5.6, 12, 0.6, 18, { color: OR });
s.addNotes("Aquí haces el puente a Unity: las plataformas cambian cada año; el motor con el que construyes el contenido, no.");

s = slide("PLAIN");
title(s, "Las plataformas cambian cada año.\nLo que construyes *dentro*, no.", MX, 1.8, 12, 3.0, 54);
body(s, "Por eso hablamos del motor y no del visor.", MX, 5.0, 10, 0.6, 24, { color: T1 });

// ===================== 2. UNITY =====================
s = slide(); chapter(s, "Sección 2", "Qué es *Unity*", "En tres palabras y un modelo mental");

s = slide();
lab(s, "Modelo mental", MX, 0.6, 6, { orange: "§ 02" });
title(s, "Escena → Objeto → Componente", MX, 1.0, 10, 0.9, 40);
[["A · Escena", "El espacio. Un taller, una mina, una sala de operaciones."], ["B · Objeto", "Las cosas que hay en el espacio. Una broca, una mesa, una luz, la cámara."], ["C · Componente", "Lo que hace cada cosa: tener física, sonar, reaccionar cuando la tomas, mostrar un texto."]].forEach(([h, t], i) => {
  const x = MX + i * 2.55;
  s.addShape(pres.ShapeType.rect, { x, y: 2.1, w: 2.35, h: 2.6, fill: { color: SURF }, line: { color: LINE, width: 0.75 } });
  s.addText(h, { x: x + 0.2, y: 2.3, w: 2.0, h: 0.4, fontFace: MONO, fontSize: 13, bold: true, color: OR, margin: 0, isTextBox: true });
  body(s, t, x + 0.2, 2.8, 2.0, 1.8, 14, { color: T1 });
});
body(s, "Programar en Unity es combinar componentes. Escribes código solo cuando no existe el componente que necesitas.", MX, 4.95, 7.3, 1.1, 16, { color: T1 });
pic(s, "s09-editor-sim1.png", 8.4, 1.0, 4.3, 5.2);
s.addNotes("Lego con comportamiento: cada bloque sabe hacer algo. Si tienes la captura de Sim 1 en el editor, señala la broca en la jerarquía y sus componentes en el inspector. Nada de código.");

s = slide();
lab(s, "Un proyecto, muchas pantallas", MX, 0.6, 8, { orange: "§ 02" });
title(s, "Exportas a Android, iOS, Windows, web, Quest, Galaxy XR y Vision Pro desde el *mismo proyecto*", MX, 1.0, 7.4, 2.2, 30);
bullets(s, ["Unity 6.3 LTS es la versión estable actual, con soporte hasta diciembre de 2027.", "Unity Personal es gratis para personas y equipos con menos de US$200.000 de ingresos.", "Desde Unity 6, la pantalla de “Made with Unity” es opcional."], MX, 3.4, 7.2, 2.6, 16);
pic(s, "s05-unity-6.jpg", 8.3, 1.0, 4.4, 2.48, { link: "https://youtu.be/1SyqN3D6khI", caption: "Unity 6 trailer · canal Unity · 0:00 a 0:30, sin audio" });
SRC(s, "Fuentes: unity.com/releases/unity-6 · unity.com/products/pricing-updates");
s.addNotes("La frase que importa: lo que vas a ver en las próximas seis industrias se hizo con la misma herramienta que puedes instalar gratis esta noche.");

// ===================== 3. INDUSTRIAS =====================
s = slide(); chapter(s, "Sección 3", "Seis *industrias*", "Un caso real por industria. Un minuto cada uno.");
s.addNotes("Ritmo rápido: un minuto por slide. Si vas tarde, salta cine y automotriz.");

function industry(num, name, big, caption, learn, file, link, src, vcap) {
  const sl = slide();
  lab(sl, name, MX, 0.6, 8, { orange: "§ Industria " + num });
  if (big) { stat(sl, big, caption, MX, 1.0, 6.6); bullets(sl, learn, MX, 4.25, 6.6, 1.9, 14); }
  else { title(sl, caption, MX, 1.0, 6.6, 1.8, 34); bullets(sl, learn, MX, 3.0, 6.6, 3.0, 15); }
  pic(sl, file, 7.9, 1.0, 4.8, 2.7, link ? { link, caption: vcap } : {});
  SRC(sl, "Fuente: " + src);
  return sl;
}
industry("01", "Videojuegos", "US$2 M", "Google Play Indie Games Fund para Latinoamérica, 2024. Todos los estudios ganadores desarrollan con Unity.",
  ["Entre los ganadores: Dicefolk, de Leap Game Studios, Perú.", "Los videojuegos siguen siendo el origen y el mayor laboratorio de Unity.", "Todo lo que viene después nació de técnicas de juego."],
  "s12-dicefolk.jpg", "https://youtu.be/D5QpseqnV6c", "unity.com/blog/google-play-indie-games-fund-2024-winners (16.12.2024)", "Dicefolk · tráiler oficial · LEAP Game Studios · 0:31");
industry("02", "Cine y animación", null, "Rodar *dentro* del motor",
  ["Estudios de producción virtual usan Unity para previsualizar, iluminar y renderizar en tiempo real, sin esperar horas por cada cuadro.", "El director mueve la cámara y ve el resultado al instante.", "Lo que Renzo esculpe en ZBrush termina en un motor como este."],
  "s13-unity-virtual-production-siggraph.jpg", "https://youtu.be/Bn-QU4iGbw0", "Unity, SIGGRAPH 2022: Real-time virtual production (sin cifras públicas)", "Charla de Unity en SIGGRAPH 2022 · elige 30 s con set LED").addNotes("Aquí no hay cifra, y está bien. Di que es cualitativo. Conecta con la charla de Renzo.");
industry("03", "Arquitectura y construcción", "15–20 %", "Mejora de eficiencia reportada por Sitowise (Finlandia) con Aura, un gemelo digital urbano 3D construido en Unity.",
  ["Un gemelo digital es una copia 3D de algo real que se actualiza con datos.", "Sirve para decidir antes de construir.", "La misma lógica de un simulador de entrenamiento, aplicada a una ciudad."],
  "s14-sitowise.jpg", null, "unity.com/case-study/sitowise (18.07.2025)");
industry("04", "Automotriz y manufactura", null, "La pantalla del auto también es una *escena*",
  ["Toyota y Lexus eligieron Unity para la interfaz de sus tableros de próxima generación.", "La misma herramienta que mueve un personaje mueve el velocímetro, el mapa y las alertas.", "Resultado reportado: mejora drástica en eficiencia de desarrollo, sin cifra pública."],
  "s15-toyota-lexus.png", null, "unity.com/resources/toyota-lexus-next-gen-hmi-development (Industrial DX, Tokio, 2025)");
industry("05", "Salud", "437", "Participantes de 18 países practicaron intubación en el simulador XR de Lucid Reality Labs para Medtronic y el hospital CHUV. 491 escenarios completados.",
  ["71 % lo calificó útil para enseñar; 65 % quiere usarlo en formación continua.", "Hecho con Unity, XR Interaction Toolkit y OpenXR: las mismas piezas de XRLabs.", "Practicar sin riesgo. Recuerden esta frase."],
  "s16-lucid.jpg", "https://youtu.be/am1sJIbmmvE", "unity.com/en/resources/lucid-reality-labs (12.12.2025)", "AI Powered XR Intubation Simulation · Lucid Reality Labs · 0:00 a 0:30");
industry("06", "Capacitación industrial", "75 %", "Menos tiempo de entrenamiento: de un día a una o dos horas, en el simulador VR de montacargas de Travancore Analytics, hecho en Unity.",
  ["Un error en una máquina real cuesta dinero y puede costar una lesión.", "En el simulador cuesta un reinicio.", "Esto es exactamente lo que hicimos en Arequipa."],
  "s17-travancore.png", "https://youtu.be/kXnhInrhYOI", "unity.com/resources/travancore-analytics (10.05.2024)", "VR Forklift Simulator · TravancoreAnalytics · 0:00 a 0:25").addNotes("Puente al caso propio: esto lo hicieron en Estados Unidos con montacargas. Nosotros lo hicimos aquí, con brocas de perforación.");

// ===================== 4. CASO PROPIO =====================
s = slide(); chapter(s, "Sección 4", "Lo hicimos en *Arequipa*", "Laboratorios Inmersivo · Sim 1: Fallas en brocas de perforación", "s18-laboratorio-tecsup.jpg");

s = slide();
lab(s, "El problema, con datos", MX, 0.6, 8, { orange: "§ 04" });
stat(s, "53 %", "de 133 estudiantes de Operaciones Mineras y Electrotecnia dice que su mayor obstáculo para practicar es el miedo a dañar equipos costosos.", MX, 1.0, 6.6);
[["58 %", "accede a equipos reales menos de dos veces al mes."], ["26 %", "nunca accedió durante el ciclo."], ["89 %", "percibe una brecha media o grande entre el aula y el campo."]].forEach(([nn, t], i) => {
  const y = 1.3 + i * 1.55;
  s.addText(nn, { x: 8.0, y, w: 2.0, h: 0.9, fontFace: MONO, fontSize: 40, bold: true, color: T0, margin: 0, isTextBox: true, valign: "middle" });
  body(s, t, 10.1, y + 0.1, 2.7, 0.9, 14);
});
SRC(s, "Encuesta propia a 133 estudiantes, Tecsup Arequipa, 2025. Laboratorios Inmersivo.");
s.addNotes("El problema con datos, no con opinión. Encuestamos antes de construir. Lee los números despacio.");

s = slide("PLAIN");
lab(s, "Cita", MX, 1.6, 4, { orange: "§" });
title(s, "“El miedo a cometer errores, porque si cometes algún error tienes que reponer el equipo y no es nada barato.”", MX, 2.1, 12, 3.0, 40, { color: T1 });
body(s, "Estudiante de Electrotecnia, 5.º semestre, Tecsup Arequipa", MX, 5.3, 10, 0.5, 16);

s = slide();
lab(s, "Sim 1: aprender, practicar, evaluar", MX, 0.6, 8, { orange: "§ 04" });
[["Fase 1 · Aprendizaje guiado", ["Taller de inspección virtual, con EPP.", "Tomas la broca con las manos, la giras, la acercas.", "Tres fallas reales: rajadura en el borde, rotura anular, botones agrietados.", "Un coach de voz te guía."], "s21-sim1-taller.jpg"], ["Fase 2 · Evaluación con puntaje", ["Tres casos sin ayudas.", "Identificas la falla, la causa y la acción correcta.", "Cada interacción se registra.", "El docente ve el resultado en un portal web."], "s21-sim1-evaluacion.png"]].forEach(([h, items, f], i) => {
  const x = MX + i * 6.2;
  pic(s, f, x, 1.05, 5.9, 2.5);
  body(s, h, x, 3.75, 5.9, 0.45, 18, { color: OR });
  bullets(s, items, x, 4.25, 5.9, 1.9, 14);
});
SRC(s, "Meta Quest, standalone, 100 % offline · Unity, URP, Meta XR SDK · contenido validado con Sandvik Rock Tools");

s = slide("PLAIN");
pic(s, "s22-sim1-video.jpg", 1.2, 0.6, 10.9, 6.13, { link: "https://youtu.be/xcyEq3Tg__o", caption: "Sim 1 en 60 segundos · YouTube · reemplaza esta miniatura por el video local (Insertar → Video)" });
s.addNotes("No hables encima del video. Si tiene la voz del coach, déjala sonar. Al terminar: 'Eso que vieron corre en un visor de menos de 500 dólares, sin PC.'");

s = slide();
lab(s, "Qué pasó cuando lo probaron", MX, 0.6, 8, { orange: "§ 04" });
stat(s, "5,76 → 7,53", "Puntaje de conocimiento técnico sobre 9, antes y después del simulador. 17 estudiantes de Operaciones Mineras. 12 de 17 mejoraron.", MX, 1.0, 7.2);
bullets(s, ["Usabilidad (SUS): 70,6 sobre 100. El umbral de aceptabilidad es 68.", "Intención de uso (TAM): 4,55 sobre 5.", "De los 133 encuestados, 84 % dijo que lo usaría cada semana o más. Solo uno dijo que no."], MX, 4.3, 7.2, 1.9, 14);
pic(s, "s23-entrevistas-video.jpg", 8.3, 1.0, 4.4, 2.48, { link: "https://youtu.be/Z29kH6Xai5o", caption: "Entrevistas a los 17 estudiantes · elige un testimonio de 20 s" });
SRC(s, "Validación propia, N = 17, Arequipa, 2025. Encuesta N = 133.");
s.addNotes("Sé preciso: 133 respondieron la encuesta; 17 probaron el simulador. No mezcles los dos grupos.");

s = slide();
lab(s, "Lo que no salió como esperábamos", MX, 0.6, 8, { orange: "§ 04" });
[["Aprendizaje", ["[COMPLETAR con uno o dos problemas reales: puesta a punto del visor por sesión, hand tracking en piezas pequeñas, mareo, los 5 de 17 que no mejoraron.]"]], ["Recomendación", ["Medir antes de construir, y volver a medir después.", "Validar el contenido técnico con especialistas, no con desarrolladores.", "Diseñar la tarea primero; el dispositivo se elige al final."]]].forEach(([h, items], i) => {
  const x = MX + i * 6.2;
  s.addShape(pres.ShapeType.rect, { x, y: 1.3, w: 5.9, h: 4.6, fill: { color: SURF }, line: { color: LINE, width: 0.75 } });
  body(s, h, x + 0.35, 1.6, 5.2, 0.5, 20, { color: OR });
  bullets(s, items, x + 0.35, 2.3, 5.2, 3.4, 16);
});
s.addNotes("Esta slide es la que más credibilidad te da. Elige un problema real y cuéntalo en 40 segundos.");

// ===================== 5. RUTA =====================
s = slide();
lab(s, "Por dónde empezar", MX, 0.6, 8, { orange: "§ 05" });
title(s, "Tu ruta, gratis, esta semana", MX, 1.0, 9, 0.9, 40);
[["Instala", "Unity Hub y Unity 6.3 LTS. Licencia Personal gratis."], ["Aprende", "Unity Learn, pathway “VR Development”. Gratuito, unas seis semanas, las primeras misiones sin programar."], ["Construye sin Blender", "ProBuilder, incluido en Unity."], ["Si eres estudiante", "Plan Unity Student: Unity Pro gratis y descuento en la Asset Store."], ["No construyas solo", "GDG Arequipa, XR Perú, y esta tarde: los visores están aquí."]].forEach(([h, t], i) => {
  const col = i % 3, row = Math.floor(i / 3), x = MX + col * 4.1, y = 2.1 + row * 2.1;
  s.addShape(pres.ShapeType.rect, { x, y, w: 3.9, h: 1.9, fill: { color: SURF }, line: { color: LINE, width: 0.75 } });
  s.addText("0" + (i + 1), { x: x + 0.25, y: y + 0.2, w: 1, h: 0.35, fontFace: MONO, fontSize: 12, color: OR, margin: 0, isTextBox: true });
  body(s, h, x + 0.25, y + 0.5, 3.4, 0.4, 17, { color: T0 });
  body(s, t, x + 0.25, y + 0.95, 3.4, 0.9, 13);
});
s.addNotes("Esta slide debe estar en pantalla cuando saquen el celular a fotografiar. Déjala 30 segundos.");

// ===================== CIERRE =====================
s = slide("PLAIN");
pic(s, "s01-s26-broca-quest.jpg", 0, 0, W, H, { transparency: 75, noframe: true });
title(s, "Lo que viste hoy empezó como un *modelo 3D*.", MX, 1.9, 12, 2.4, 56);
body(s, "Lo que construyas tú, también. Los visores están en esta sala.", MX, 4.6, 11, 0.7, 24, { color: T1 });
s.addNotes("Puente a las demos de las 3:55. Luego preguntas. Si sobran más de cuatro minutos, pasa a la demo.");

s = slide("PLAIN");
lab(s, "Demo opcional", MX, 2.4, 6, { orange: "§" });
title(s, "Sim 1 por dentro: dos minutos en el *editor*", MX, 2.8, 12, 1.6, 48);
body(s, "Jerarquía del taller → componentes de la broca → Play. Nada más.", MX, 4.6, 10, 0.6, 20);
s.addNotes("Solo si sobra tiempo. Proyecto ya abierto. Tres cosas y nada más. No compiles.");

s = slide("PLAIN");
s.addImage({ path: img("logo-coresearch.png"), x: MX, y: 1.4, h: 1.1, w: 0.58 });
title(s, "Gracias", MX, 2.7, 10, 1.4, 72);
body(s, "Benjamin Pareja · LinkedIn: @me7aben · coresearch.studio", MX, 4.2, 10, 0.5, 20, { color: T1 });
body(s, "Arequipa XR Day · GDG Arequipa · Perú Tech Week 2026", MX, 4.75, 10, 0.5, 16);
allies(s, MX, 6.3);
s.addImage({ path: img("logo-tecsup.png"), x: MX + 7.4, y: 6.3, h: 0.42, w: 0.42 * 761 / 220 });

full("slide-03-agradecimientos.png", "Agradecimientos: Coresearch, Tecsup, Perú Tech Week y GDG Arequipa.");
full("slide-04-cierre.png", "Cierre del evento: compartir con #ArequipaXRDay, seguir a coresearch.studio y @gdgaqp.");

pres.writeFile({ fileName: OUT }).then(() => console.log("OK", OUT, n, "slides"));
