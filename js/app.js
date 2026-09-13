// js/app.js
// Teil 1/4
// miStudia Gap Text Trainer

"use strict";

const App = {
    language: "de",
    uiLanguage: "de",
    data: null,
    hintState: [],
    inputs: [],
    immediateFeedback: true
};

// Menüsprache: übersetzt Button-Beschriftungen, Hinweis-Label
// und Rückmeldungen JEDER Übung - unabhängig von der Sprache
// des gerade gewählten Übungsinhalts.
const UI_TEXT = {

    de: {
        check: "✓ Auswerten",
        solution: "📖 Lösungen",
        reset: "🔄 Neu",
        signal: "💡 Signal",
        tense: "💡 Regel",
        formation: "💡 Beispiel",
        perfect: "🏆 Perfekt! Alle Antworten sind richtig.",
        good: "👏 Sehr gut!",
        ok: "👍 Gut gemacht. Noch ein wenig üben.",
        tryAgain: "📚 Weiter üben!",
        solutionsShown: "Die Lösungen wurden angezeigt.",
        feedbackToggle: "Sofortige Rückmeldung beim Ausfüllen (statt nur bei \"Auswerten\")"
    },

    en: {
        check: "✓ Check",
        solution: "📖 Solutions",
        reset: "🔄 Reset",
        signal: "💡 Hint",
        tense: "💡 Rule",
        formation: "💡 Pattern",
        perfect: "🏆 Perfect! Excellent work!",
        good: "👏 Very good!",
        ok: "👍 Good job. Keep practising.",
        tryAgain: "📚 Keep practising!",
        solutionsShown: "The solutions have been shown.",
        feedbackToggle: "Immediate feedback while typing (instead of only after \"Check\")"
    },

    es: {
        check: "✓ Comprobar",
        solution: "📖 Soluciones",
        reset: "🔄 Reiniciar",
        signal: "💡 Indicador",
        tense: "💡 Regla",
        formation: "💡 Ejemplo",
        perfect: "🏆 ¡Perfecto! ¡Excelente trabajo!",
        good: "👏 ¡Muy bien!",
        ok: "👍 Buen trabajo. Sigue practicando.",
        tryAgain: "📚 Sigue practicando.",
        solutionsShown: "Se han mostrado las soluciones.",
        feedbackToggle: "Retroalimentación inmediata al escribir (en vez de solo al pulsar \"Comprobar\")"
    },

    zh: {
        check: "✓ 检查",
        solution: "📖 答案",
        reset: "🔄 重新",
        signal: "💡 提示",
        tense: "💡 规则",
        formation: "💡 例子",
        perfect: "🏆 太棒了！全部正确！",
        good: "👏 很好！",
        ok: "👍 做得不错，继续练习。",
        tryAgain: "📚 继续加油！",
        solutionsShown: "答案已显示。",
        feedbackToggle: "输入时立即反馈（而不是只有点击\"检查\"后才反馈）"
    }

};

// Titel und Beschreibung jeder Übung in allen 4 Menüsprachen.
// Der eigentliche Übungsinhalt (Sätze) bleibt unverändert in
// seiner Zielsprache - hier geht es nur um die Kopfzeile.
const EXERCISE_META = {

    de: {
        de: { title: "Alle Zeitformen", description: "Setze die Verben in Klammern in die richtige Form." },
        en: { title: "All Tenses (German)", description: "Put the verbs in brackets into the correct form." },
        es: { title: "Todos los tiempos verbales (alemán)", description: "Pon los verbos entre paréntesis en la forma correcta." },
        zh: { title: "所有时态（德语）", description: "把括号里的动词填成正确的形式。" }
    },

    "de-wechsel": {
        de: { title: "Wechselpräpositionen", description: "Setze den richtigen Artikel ein: Akkusativ (wohin?) oder Dativ (wo?)." },
        en: { title: "Two-Way Prepositions", description: "Fill in the correct article: accusative (where to?) or dative (where?)." },
        es: { title: "Preposiciones de doble régimen", description: "Completa con el artículo correcto: acusativo (¿adónde?) o dativo (¿dónde?)." },
        zh: { title: "德语双格介词", description: "填入正确的冠词：第四格（去哪儿？）还是第三格（在哪儿？）。" }
    },

    "de-sss": {
        de: { title: "s, ss oder ß?", description: "Setze die richtige Schreibweise ein: s, ss oder ß." },
        en: { title: "s, ss, or ß?", description: "Fill in the correct spelling: s, ss, or ß." },
        es: { title: "¿s, ss o ß?", description: "Completa con la grafía correcta: s, ss o ß." },
        zh: { title: "s、ss 还是 ß？", description: "填入正确的拼写：s、ss 还是 ß。" }
    },

    en: {
        de: { title: "Alle Zeitformen (Englisch)", description: "Vervollständige den Text mit der richtigen Verbform." },
        en: { title: "All Tenses", description: "Complete the text with the correct verb forms." },
        es: { title: "Todos los tiempos verbales (inglés)", description: "Completa el texto con la forma correcta del verbo." },
        zh: { title: "所有时态（英语）", description: "用正确的动词形式补全课文。" }
    },

    "en-picture": {
        de: { title: "Bild beschreiben", description: "Schau dir das Bild an und vervollständige die Sätze dazu." },
        en: { title: "Describe the Picture", description: "Look at the picture and complete the sentences about it." },
        es: { title: "Describe la imagen (inglés)", description: "Mira la imagen y completa las frases sobre ella." },
        zh: { title: "看图说话", description: "看图片，补全关于它的句子。" }
    },

    "en-directions": {
        de: { title: "Wegbeschreibung", description: "Schau dir die Karte von miStudia City an. Du kommst mit dem Boot an, holst dein gelbes Auto ab und fährst zum Viewpoint Tower. Vervollständige die Wegbeschreibung." },
        en: { title: "Giving Directions", description: "Look at the map of miStudia City. You arrive by boat, pick up your yellow car, and drive to the Viewpoint Tower. Complete the directions." },
        es: { title: "Cómo dar indicaciones", description: "Mira el mapa de miStudia City. Llegas en barco, recoges tu coche amarillo y conduces hasta el Viewpoint Tower. Completa las indicaciones." },
        zh: { title: "问路指路", description: "看看miStudia市的地图。你乘船抵达，取走你的黄色汽车，开车前往观景塔。补全路线说明。" }
    },

    "en-simplepast": {
        de: { title: "Simple Past – 50 Verben", description: "Vervollständige den Text mit der richtigen Verbform im Simple Past (regelmäßige und unregelmäßige Verben)." },
        en: { title: "Simple Past – 50 Verbs", description: "Complete the text with the correct verb form in the simple past (regular and irregular verbs)." },
        es: { title: "Simple Past – 50 verbos", description: "Completa el texto con la forma correcta del verbo en pasado simple (verbos regulares e irregulares)." },
        zh: { title: "一般过去时 – 50个动词", description: "用正确的一般过去时动词形式（规则动词和不规则动词）补全课文。" }
    },

    es: {
        de: { title: "Alle Zeitformen (Spanisch)", description: "Vervollständige den Text mit der richtigen Verbform." },
        en: { title: "All Tenses (Spanish)", description: "Complete the text with the correct verb form." },
        es: { title: "Todos los tiempos verbales", description: "Completa el texto con la forma correcta del verbo." },
        zh: { title: "所有时态（西班牙语）", description: "用正确的动词形式补全课文。" }
    },

    "es-presente": {
        de: { title: "Präsens – Regelmäßige Verben", description: "Vervollständige den Text mit der richtigen Präsensform (Verben auf -ar, -er, -ir)." },
        en: { title: "Present – Regular Verbs", description: "Complete the text with the correct present-tense form (verbs ending in -ar, -er, -ir)." },
        es: { title: "Presente – Verbos Regulares", description: "Completa el texto con la forma correcta del verbo en presente (verbos en -ar, -er, -ir)." },
        zh: { title: "现在时 – 规则动词", description: "用正确的现在时动词形式补全课文（-ar、-er、-ir 动词）。" }
    },

    "es-picture": {
        de: { title: "Bild beschreiben (Spanisch)", description: "Schau dir das Bild an und vervollständige die Sätze dazu." },
        en: { title: "Describe the Picture (Spanish)", description: "Look at the picture and complete the sentences about it." },
        es: { title: "Describe la imagen", description: "Mira la imagen y completa las frases sobre ella." },
        zh: { title: "看图说话（西班牙语）", description: "看图片，补全关于它的句子。" }
    },

    "es-ii": {
        de: { title: "Indefinido vs. Imperfekt", description: "Vervollständige den Text mit der richtigen Form: Indefinido oder Imperfecto." },
        en: { title: "Preterite vs. Imperfect", description: "Complete the text with the correct form: preterite or imperfect." },
        es: { title: "Indefinido vs. Imperfecto", description: "Completa el texto con la forma correcta: pretérito indefinido o pretérito imperfecto." },
        zh: { title: "简单过去时 vs. 未完成过去时", description: "用正确的形式补全课文：简单过去时还是未完成过去时。" }
    },

    "es-subj": {
        de: { title: "Indikativ vs. Subjunktiv", description: "Vervollständige den Text mit der richtigen Form: Indikativ oder Subjunktiv." },
        en: { title: "Indicative vs. Subjunctive", description: "Complete the text with the correct form: indicative or subjunctive." },
        es: { title: "Indicativo vs. Subjuntivo", description: "Completa el texto con la forma correcta: indicativo o subjuntivo." },
        zh: { title: "陈述式 vs. 虚拟式", description: "用正确的形式补全课文：陈述式还是虚拟式。" }
    },

    "es-porpara": {
        de: { title: "Por vs. Para", description: "Setze die richtige Präposition ein: por oder para." },
        en: { title: "Por vs. Para", description: "Fill in the correct preposition: por or para." },
        es: { title: "Por vs. Para", description: "Completa el texto con la preposición correcta: por o para." },
        zh: { title: "Por 还是 Para？", description: "填入正确的介词：por 还是 para。" }
    },

    "es-serestar": {
        de: { title: "Ser vs. Estar", description: "Vervollständige den Text mit der richtigen Form von ser oder estar." },
        en: { title: "Ser vs. Estar", description: "Complete the text with the correct form of ser or estar." },
        es: { title: "Ser vs. Estar", description: "Completa el texto con la forma correcta de ser o estar." },
        zh: { title: "Ser 还是 Estar？", description: "用 ser 或 estar 的正确形式补全课文。" }
    },

    fr: {
        de: { title: "Alle Zeitformen (Französisch)", description: "Vervollständige den Text mit der richtigen Verbform." },
        en: { title: "All Tenses (French)", description: "Complete the text with the correct verb form." },
        es: { title: "Todos los tiempos verbales (francés)", description: "Completa el texto con la forma correcta del verbo." },
        zh: { title: "所有时态（法语）", description: "用正确的动词形式补全课文。" }
    },

    zh: {
        de: { title: "Chinesische Aspektpartikel", description: "Setze je nach Zeitsignal im Satz das richtige Aspektpartikel ein (了 / 过 / 着 usw.)." },
        en: { title: "Chinese Aspect Particles", description: "Based on the time signal in the sentence, fill in the correct aspect particle (了 / 过 / 着, etc.)." },
        es: { title: "Partículas de aspecto en chino", description: "Según la señal temporal de la frase, completa con la partícula de aspecto correcta (了 / 过 / 着, etc.)." },
        zh: { title: "汉语时体助词练习", description: "根据句子中的时间信号词，填入正确的时体助词（了 / 过 / 着 等）。" }
    }

};


const Data = {
    de: germanExercise,
    "de-wechsel": germanWechselpraepositionen,
    "de-sss": germanSSS,
    en: englishExercise,
    "en-picture": englishPictureExercise,
    "en-directions": englishDirectionsExercise,
    "en-simplepast": englishSimplePast,
    es: spanishExercise,
    "es-presente": spanishPresenteRegular,
    "es-picture": spanishPictureExercise,
    "es-ii": spanishIndefinidoImperfecto,
    "es-subj": spanishIndicativoSubjuntivo,
    "es-porpara": spanishPorPara,
    "es-serestar": spanishSerEstar,
    fr: frenchExercise,
    zh: chineseExercise
};

document.addEventListener("DOMContentLoaded", init);

function init() {

    document
        .querySelectorAll(".language-button")
        .forEach(button => {

            button.addEventListener("click", () => {

                loadLanguage(button.dataset.language);

            });

        });

    document
        .getElementById("checkButton")
        .addEventListener("click", checkAnswers);

    document
        .getElementById("solutionButton")
        .addEventListener("click", showSolutions);

    document
        .getElementById("resetButton")
        .addEventListener("click", resetExercise);

    document
        .getElementById("immediateFeedbackToggle")
        .addEventListener("change", event => {

            App.immediateFeedback = event.target.checked;

        });

    document
        .querySelectorAll(".ui-lang-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                loadUiLanguage(button.dataset.uilang);

            });

        });

    loadLanguage("de");

}

function loadUiLanguage(uiLanguage) {

    App.uiLanguage = uiLanguage;

    document
        .querySelectorAll(".ui-lang-btn")
        .forEach(button =>
            button.classList.remove("active")
        );

    document
        .querySelector(`[data-uilang="${uiLanguage}"]`)
        .classList.add("active");

    updateInterface();

}

function loadLanguage(language) {

    App.language = language;
    App.data = Data[language];

    document
        .querySelectorAll(".language-button")
        .forEach(button =>
            button.classList.remove("active")
        );

    document
        .querySelector(`[data-language="${language}"]`)
        .classList.add("active");

    updateInterface();
    buildExercise();
    updateImage();

}

function updateImage() {

    const imageContainer =
        document.getElementById("exerciseImage");

    if (App.data.image) {

        imageContainer.innerHTML = `
            <img
                src="${App.data.image}"
                alt="${App.data.imageAlt || ""}"
                class="exercise-image">
        `;

    } else {

        imageContainer.innerHTML = "";

    }

}

function updateInterface() {

    const t = UI_TEXT[App.uiLanguage];

    const meta =
        EXERCISE_META[App.language][App.uiLanguage];

    document.getElementById("exerciseTitle").textContent =
        meta.title;

    document.getElementById("exerciseDescription").textContent =
        meta.description;

    document.getElementById("checkButton").textContent =
        t.check;

    document.getElementById("solutionButton").textContent =
        t.solution;

    document.getElementById("resetButton").textContent =
        t.reset;

    document.getElementById("feedbackToggleLabel").textContent =
        t.feedbackToggle;

}

/* ----------------------------------------------------------
   Text mit optionalem Pinyin-Tooltip umschließen.
   Wird nur benutzt, wenn ein Item ein *Pinyin-Feld
   (z. B. beforePinyin) mitliefert - für alle anderen
   Sprachen ändert sich nichts.
---------------------------------------------------------- */

function escapeAttr(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;");

}

function textWithPinyin(text, pinyin) {

    if (!pinyin) {
        return text;
    }

    return `<span class="pinyin-tooltip" data-pinyin="${escapeAttr(pinyin)}">${text}</span>`;

}

function buildExercise() {

    const container =
        document.getElementById("exercise");

    container.innerHTML = "";

    App.inputs = [];
    App.hintState = [];

    App.data.story.forEach((item, index) => {

        App.hintState.push(0);

const hasSecondGap = item.answer2 !== undefined;

let html = `
${textWithPinyin(item.before, item.beforePinyin)}
<input
    class="gapInput"
    id="gap-${index}-0"
    data-item="${index}"
    data-gap="0"
    autocomplete="off"
    spellcheck="false">
`;

if (hasSecondGap) {

    html += `
${textWithPinyin(item.mid, item.midPinyin)}
<input
    class="gapInput"
    id="gap-${index}-1"
    data-item="${index}"
    data-gap="1"
    autocomplete="off"
    spellcheck="false">
`;

}

html += `
<span class="afterGap">

    <span class="verb">(${item.verb})</span>

    <button
        type="button"
        class="hintButton"
        data-index="${index}">
        💡
    </button>

    <span
        class="hintText"
        id="hint-${index}">
    </span>

</span>

${textWithPinyin(item.after, item.afterPinyin)}
`;

container.insertAdjacentHTML("beforeend", html);


    });

    initInputs();
    initHints();

    document.getElementById("result").innerHTML = "";

    if (App.inputs.length) {
        App.inputs[0].focus();
    }

}

function initInputs() {

    App.inputs =
        [...document.querySelectorAll("#exercise input")];

    App.inputs.forEach((input, index) => {

        input.dataset.index = index;
        // input.dataset.item / input.dataset.gap were already set
        // when the input was created in buildExercise() and tell us
        // which story item and which gap (0 = first, 1 = second) this
        // field belongs to.

        input.addEventListener("keydown", handleKeyDown);

        input.addEventListener("blur", () => {

            if (App.immediateFeedback && input.value.trim() !== "") {
                checkSingleInput(input, true);
            }

        });

        input.addEventListener("input", () => {

            input.classList.remove(
                "correct",
                "wrong",
                "flash-correct",
                "flash-wrong"
            );

        });

        input.addEventListener("animationend", () => {

            input.classList.remove(
                "flash-correct",
                "flash-wrong"
            );

            if (input.dataset.autoClear === "true") {

                input.classList.remove(
                    "correct",
                    "wrong"
                );

            }

        });

    });

}

// js/app.js
// Teil 2/4

function handleKeyDown(event) {

    const input = event.target;
    const index = Number(input.dataset.index);

    if (event.key === "Enter") {

        event.preventDefault();

        if (App.immediateFeedback && input.value.trim() !== "") {
            checkSingleInput(input, true);
        }

        focusNext(index);

        return;

    }

    if (event.key === "Tab") {

        if (App.immediateFeedback && input.value.trim() !== "") {
            checkSingleInput(input, true);
        }

    }

}

function focusNext(index) {

    if (index < App.inputs.length - 1) {

        App.inputs[index + 1].focus();

    }

}

function initHints() {

    document
        .querySelectorAll(".hintButton")
        .forEach(button => {

            button.addEventListener("click", () => {

                showHint(
                    Number(button.dataset.index)
                );

            });

        });

}

function showHint(index) {

    const item = App.data.story[index];
    const labels = UI_TEXT[App.uiLanguage];

const hints = [

    `${labels.tense}: ${item.tense}`,

    `${labels.signal}: ${item.signal}`,

    `${labels.formation}: ${item.formation}`

];

    const level =
        App.hintState[index] % hints.length;

    document.getElementById(
        "hint-" + index
    ).textContent = hints[level];

    App.hintState[index]++;

}

function checkSingleInput(input, autoClear) {

    const itemIndex =
        Number(input.dataset.item);

    const gap =
        Number(input.dataset.gap);

    const item =
        App.data.story[itemIndex];

    const answer =
        gap === 1 ? item.answer2 : item.answer;

    const correct =
        normalize(input.value) ===
        normalize(answer);

    input.classList.remove(
        "correct",
        "wrong",
        "flash-correct",
        "flash-wrong"
    );

    if (correct) {

        input.classList.add(
            "correct",
            "flash-correct"
        );

    } else {

        input.classList.add(
            "wrong",
            "flash-wrong"
        );

    }

    // Merkt sich, ob die farbliche Markierung nach dem
    // kurzen Aufblinken automatisch wieder verschwinden soll
    // (Zwischenprüfung) oder bestehen bleibt (Auswerten-Button).
    input.dataset.autoClear = autoClear ? "true" : "false";

    return correct;

}

function normalize(text) {

    return text
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");

}

// js/app.js
// Teil 3/4

function checkAnswers() {

    let correct = 0;

    App.inputs.forEach(input => {

        if (checkSingleInput(input, false)) {
            correct++;
        }

    });

    showResult(correct);

}

function showResult(correct) {

    const total = App.inputs.length;

    const percent = Math.round(
        (correct / total) * 100
    );

    const t = UI_TEXT[App.uiLanguage];

    let message = "";

if (percent === 100) {

    message = t.perfect;

    jubelChoreo();

}
else if (percent >= 80) {

        message = t.good;

    } else if (percent >= 60) {

        message = t.ok;

    } else {

        message = t.tryAgain;

    }

    document.getElementById("result").innerHTML = `
        <strong>${correct} / ${total}</strong><br>
        ${percent}%<br><br>
        ${message}
    `;

}

function showSolutions() {

    App.inputs.forEach(input => {

        const itemIndex =
            Number(input.dataset.item);

        const gap =
            Number(input.dataset.gap);

        const item = App.data.story[itemIndex];

        input.value =
            gap === 1 ? item.answer2 : item.answer;

        input.classList.remove(
            "wrong",
            "flash-wrong",
            "flash-correct"
        );

        input.classList.add("correct");

    });

    document.getElementById("result").innerHTML =
        UI_TEXT[App.uiLanguage].solutionsShown;

}

// js/app.js
// Teil 4/4
// Hilfsfunktionen und Abschluss

/* ----------------------------------------------------------
   Erstes Eingabefeld fokussieren
---------------------------------------------------------- */

function focusFirstInput() {

    if (App.inputs.length > 0) {
        App.inputs[0].focus();
    }

}

/* ----------------------------------------------------------
   Alle Eingabefelder leeren
---------------------------------------------------------- */

function clearInputs() {

    App.inputs.forEach(input => {

        input.value = "";

        input.classList.remove(
            "correct",
            "wrong",
            "flash-correct",
            "flash-wrong"
        );

    });

}

/* ----------------------------------------------------------
   Hinweise zurücksetzen
---------------------------------------------------------- */

function clearHints() {

    App.hintState =
        new Array(App.data.story.length).fill(0);

    document
        .querySelectorAll(".hintText")
        .forEach(hint => {

            hint.textContent = "";

        });

}

/* ----------------------------------------------------------
   Ergebnis zurücksetzen
---------------------------------------------------------- */

function clearResult() {

    document.getElementById("result").innerHTML = "";

}

/* ----------------------------------------------------------
   Kompletter Reset
---------------------------------------------------------- */

function resetExercise() {

    buildExercise();

    clearHints();

    clearResult();

    focusFirstInput();

}

/* ----------------------------------------------------------
   Optional:
   aktuelle Sprache neu laden
---------------------------------------------------------- */

function reloadCurrentLanguage() {

    loadLanguage(App.language);

}

function konfettiAusRüssel(){

    const elefant = document.getElementById("jubelElefant");
    const rect = elefant.getBoundingClientRect();

const startX = rect.left + 20;
const startY = rect.top + 70;

    for(let i=0;i<40;i++){

        const k = document.createElement("div");

        k.style.position="fixed";
        k.style.left=startX+"px";
        k.style.top=startY+"px";

        k.style.width="8px";
        k.style.height="8px";

        k.style.borderRadius="50%";

        k.style.background=`hsl(${Math.random()*360},100%,50%)`;

        k.style.zIndex="10001";

        document.body.appendChild(k);

const x = -(120 + Math.random()*260);
const y = Math.random()*180 - 90;

        k.animate([
            {
                transform:"translate(0,0)",
                opacity:1
            },
            {
                transform:`translate(${x}px,${y}px)`,
                opacity:0
            }
        ],{
            duration:1200+Math.random()*500,
            easing:"ease-out"
        });

        setTimeout(()=>k.remove(),1700);

    }

}

function jubelChoreo(){

    const elefant =
        document.getElementById("jubelElefant");

    elefant.style.display="block";

    const interval =
        setInterval(konfettiAusRüssel,300);

    setTimeout(()=>{

        clearInterval(interval);

        elefant.style.display="none";

    },4000);

}

/* ==========================================================
   Ende app.js
========================================================== */