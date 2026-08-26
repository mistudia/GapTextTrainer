// js/app.js
// Teil 1/4
// miStudia Gap Text Trainer

"use strict";

const App = {
    language: "de",
    data: null,
    hintState: [],
    inputs: []
};

const Data = {
    de: germanExercise,
    "de-wechsel": germanWechselpraepositionen,
    en: englishExercise,
    "en-picture": englishPictureExercise,
    "en-directions": englishDirectionsExercise,
    es: spanishExercise,
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

    loadLanguage("de");

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

    document.getElementById("exerciseTitle").textContent =
        App.data.title;

    document.getElementById("exerciseDescription").textContent =
        App.data.description;

    document.getElementById("checkButton").textContent =
        App.data.ui.check;

    document.getElementById("solutionButton").textContent =
        App.data.ui.solution;

    document.getElementById("resetButton").textContent =
        App.data.ui.reset;

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

            if (input.value.trim() !== "") {
                checkSingleInput(input);
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

        if (input.value.trim() !== "") {
            checkSingleInput(input);
        }

        focusNext(index);

        return;

    }

    if (event.key === "Tab") {

        if (input.value.trim() !== "") {
            checkSingleInput(input);
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
    const labels = App.data.labels;

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

function checkSingleInput(input) {

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

        if (checkSingleInput(input)) {
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

    let message = "";

if (percent === 100) {

    message = App.data.messages.perfect;

    jubelChoreo();

}
else if (percent >= 80) {

        message = App.data.messages.good;

    } else if (percent >= 60) {

        message = App.data.messages.ok;

    } else {

        message = App.data.messages.tryAgain;

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
        App.data.messages.solutionsShown;

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