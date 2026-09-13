/* ==========================================================
   js/data-de-sss.js
   Zusatzübung Deutsch: s, ss oder ß?
   Kernregel: ß nach langem Vokal/Diphthong, ss nach kurzem
   Vokal, einfaches s u. a. zwischen Vokalen (stimmhaft).
   Enthält Wortpaare mit gleichem Stamm (z. B. essen/aß), um
   die Regel direkt im Kontrast sichtbar zu machen, dazu
   Einzelwörter und den Unterschied das (Artikel/Pronomen)
   vs. dass (Konjunktion).
========================================================== */

const germanSSS = {

    language: "de-sss",

    title: "s, ss oder ß?",

    description:
        "Setze die richtige Schreibweise ein: s, ss oder ß.",

    ui: {
        check: "✓ Auswerten",
        solution: "📖 Lösungen",
        reset: "🔄 Neu"
    },

    labels: {
        signal: "💡 Signal",
        tense: "💡 Regel",
        formation: "💡 Beispiel"
    },

    messages: {
        perfect: "🏆 Perfekt! Alle Antworten sind richtig.",
        good: "👏 Sehr gut!",
        ok: "👍 Gut gemacht. Noch ein wenig üben.",
        tryAgain: "📚 Weiter üben!",
        solutionsShown: "Die Lösungen wurden angezeigt."
    },

    story: [

{
before:"Ich e",
after:"e gerne Pizza.",
verb:"s/ss/ß",
answer:"ss",
signal:"kurzer Vokal (e)",
tense:"ss nach kurzem Vokal",
formation:"ich esse, du isst, wir essen"
},

{
before:"Gestern a",
after:" ich Pizza.",
verb:"s/ss/ß",
answer:"ß",
signal:"langer Vokal (a)",
tense:"ß nach langem Vokal/Diphthong",
formation:"ich aß, du aßt, wir aßen"
},

{
before:"Ich wohne in einer ruhigen Stra",
after:"e.",
verb:"s/ss/ß",
answer:"ß",
signal:"langer Vokal (a)",
tense:"ß nach langem Vokal/Diphthong",
formation:"die Straße"
},

{
before:"Ich trinke gerne kaltes Wa",
after:"er.",
verb:"s/ss/ß",
answer:"ss",
signal:"kurzer Vokal (a)",
tense:"ss nach kurzem Vokal",
formation:"das Wasser"
},

{
before:"Ich glaube, ",
after:" er heute kommt.",
verb:"das/dass",
answer:"dass",
signal:"Konjunktion (\"that\")",
tense:"dass (Konjunktion)",
formation:"..., dass ..."
},

{
before:"La",
after:" mich in Ruhe!",
verb:"s/ss/ß",
answer:"ss",
signal:"kurzer Vokal (a)",
tense:"ss nach kurzem Vokal",
formation:"ich lasse, du lässt, wir lassen"
},

{
before:"Er lie",
after:" mich in Ruhe.",
verb:"s/ss/ß",
answer:"ß",
signal:"langer Vokal (ie)",
tense:"ß nach langem Vokal/Diphthong",
formation:"ich ließ, du ließt, wir ließen"
},

{
before:"Ich le",
after:"e gerne Bücher.",
verb:"s/ss/ß",
answer:"s",
signal:"zwischen Vokalen (stimmhaftes s)",
tense:"s zwischen Vokalen",
formation:"lesen, die Rose, die Wiese"
},

{
before:"",
after:" Auto steht vor dem Haus.",
verb:"das/dass",
answer:"Das",
signal:"Artikel/Pronomen (\"the/this\")",
tense:"das (Artikel/Pronomen)",
formation:"das + Nomen"
},

{
before:"Ich habe mir den Fu",
after:" verletzt.",
verb:"s/ss/ß",
answer:"ß",
signal:"langer Vokal (u)",
tense:"ß nach langem Vokal/Diphthong",
formation:"der Fuß"
},

{
before:"Das Papier rei",
after:"t leicht.",
verb:"s/ss/ß",
answer:"ß",
signal:"Diphthong (ei)",
tense:"ß nach langem Vokal/Diphthong",
formation:"es reißt, gerissen"
},

{
before:"Das Papier ist geri",
after:"en.",
verb:"s/ss/ß",
answer:"ss",
signal:"kurzer Vokal (i)",
tense:"ss nach kurzem Vokal",
formation:"es reißt, gerissen"
},

{
before:"Ich esse gerne eine Nu",
after:".",
verb:"s/ss/ß",
answer:"ss",
signal:"kurzer Vokal (u)",
tense:"ss nach kurzem Vokal",
formation:"die Nuss"
},

{
before:"Sie schenkte ihm eine Ro",
after:"e.",
verb:"s/ss/ß",
answer:"s",
signal:"zwischen Vokalen (stimmhaftes s)",
tense:"s zwischen Vokalen",
formation:"lesen, die Rose, die Wiese"
},

{
before:"Ich glaube, ",
after:" du recht hast.",
verb:"das/dass",
answer:"dass",
signal:"Konjunktion (\"that\")",
tense:"dass (Konjunktion)",
formation:"..., dass ..."
},

{
before:"Bitte schlie",
after:"en Sie die Tür.",
verb:"s/ss/ß",
answer:"ß",
signal:"langer Vokal (ie)",
tense:"ß nach langem Vokal/Diphthong",
formation:"es schließt, geschlossen"
},

{
before:"Die Tür ist bereits geschlo",
after:"en.",
verb:"s/ss/ß",
answer:"ss",
signal:"kurzer Vokal (o)",
tense:"ss nach kurzem Vokal",
formation:"es schließt, geschlossen"
},

{
before:"Das Haus ist sehr gro",
after:".",
verb:"s/ss/ß",
answer:"ß",
signal:"langer Vokal (o)",
tense:"ß nach langem Vokal/Diphthong",
formation:"groß"
},

{
before:"Der Rhein ist ein großer Flu",
after:".",
verb:"s/ss/ß",
answer:"ss",
signal:"kurzer Vokal (u)",
tense:"ss nach kurzem Vokal",
formation:"der Fluss"
},

{
before:"Die Kühe stehen auf der Wie",
after:"e.",
verb:"s/ss/ß",
answer:"s",
signal:"zwischen Vokalen (stimmhaftes s)",
tense:"s zwischen Vokalen",
formation:"lesen, die Rose, die Wiese"
},

{
before:"",
after:" ist mein Buch.",
verb:"das/dass",
answer:"Das",
signal:"Artikel/Pronomen (\"the/this\")",
tense:"das (Artikel/Pronomen)",
formation:"das + Nomen"
},

{
before:"Ich me",
after:"e die Temperatur.",
verb:"s/ss/ß",
answer:"ss",
signal:"kurzer Vokal (e)",
tense:"ss nach kurzem Vokal",
formation:"es misst, maß"
},

{
before:"Gestern ma",
after:" ich die Temperatur.",
verb:"s/ss/ß",
answer:"ß",
signal:"langer Vokal (a)",
tense:"ß nach langem Vokal/Diphthong",
formation:"es misst, maß"
},

{
before:"Der Kaffee ist noch hei",
after:".",
verb:"s/ss/ß",
answer:"ß",
signal:"Diphthong (ei)",
tense:"ß nach langem Vokal/Diphthong",
formation:"heiß"
},

{
before:"Er gab ihr einen Ku",
after:".",
verb:"s/ss/ß",
answer:"ss",
signal:"kurzer Vokal (u)",
tense:"ss nach kurzem Vokal",
formation:"der Kuss"
},

{
before:"Weißt du, ",
after:" morgen Feiertag ist?",
verb:"das/dass",
answer:"dass",
signal:"Konjunktion (\"that\")",
tense:"dass (Konjunktion)",
formation:"..., dass ..."
},

{
before:"Ich verge",
after:"e oft meinen Schlüssel.",
verb:"s/ss/ß",
answer:"ss",
signal:"kurzer Vokal (e)",
tense:"ss nach kurzem Vokal",
formation:"es vergisst, vergaß"
},

{
before:"Er verga",
after:" seinen Schlüssel.",
verb:"s/ss/ß",
answer:"ß",
signal:"langer Vokal (a)",
tense:"ß nach langem Vokal/Diphthong",
formation:"es vergisst, vergaß"
},

{
before:"Wir möchten nächstes Jahr nach Italien rei",
after:"en.",
verb:"s/ss/ß",
answer:"s",
signal:"zwischen Vokalen (stimmhaftes s)",
tense:"s zwischen Vokalen",
formation:"reisen, die Pause"
},

{
before:"Wir hatten viel Spa",
after:" auf der Party.",
verb:"s/ss/ß",
answer:"ß",
signal:"langer Vokal (a)",
tense:"ß nach langem Vokal/Diphthong",
formation:"der Spaß"
},

{
before:"Ich hätte gerne eine Ta",
after:"e Kaffee.",
verb:"s/ss/ß",
answer:"ss",
signal:"kurzer Vokal (a)",
tense:"ss nach kurzem Vokal",
formation:"die Tasse"
},

{
before:"Wir wi",
after:"en die Antwort.",
verb:"s/ss/ß",
answer:"ss",
signal:"kurzer Vokal (i)",
tense:"ss nach kurzem Vokal",
formation:"wir wissen, ich weiß"
},

{
before:"Ich wei",
after:" die Antwort nicht.",
verb:"s/ss/ß",
answer:"ß",
signal:"Diphthong (ei)",
tense:"ß nach langem Vokal/Diphthong",
formation:"wir wissen, ich weiß"
},

{
before:"Herzliche Grü",
after:"e aus Berlin!",
verb:"s/ss/ß",
answer:"ß",
signal:"langer Vokal (ü)",
tense:"ß nach langem Vokal/Diphthong",
formation:"der Gruß, die Grüße"
},

{
before:"Meine Kla",
after:"e hat dreißig Schüler.",
verb:"s/ss/ß",
answer:"ss",
signal:"kurzer Vokal (a)",
tense:"ss nach kurzem Vokal",
formation:"die Klasse"
},

{
before:"Wir machen jetzt eine Pau",
after:"e.",
verb:"s/ss/ß",
answer:"s",
signal:"zwischen Vokalen (stimmhaftes s)",
tense:"s zwischen Vokalen",
formation:"reisen, die Pause"
}

]

};
