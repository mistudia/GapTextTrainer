/* ==========================================================
   js/data-de-wechsel.js
   Zusatzübung Deutsch: Wechselpräpositionen
   (an, auf, hinter, in, neben, über, unter, vor, zwischen)
   Akkusativ (wohin? Bewegung) vs. Dativ (wo? Ort),
   gemischt, plus Sätze mit zwei Lücken (alle vier
   Kombinationen: Akk+Dat, Dat+Akk, Akk+Akk, Dat+Dat).
========================================================== */

const germanWechselpraepositionen = {

    language: "de-wechsel",

    title: "Wechselpräpositionen",

    description:
        "Setze den richtigen Artikel ein: Akkusativ (wohin?) oder Dativ (wo?).",

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
before:"Das Kind kriecht unter ",
after:" Tisch.",
verb:"der Tisch (Akk./Dat.)",
answer:"den",
signal:"kriechen (Wohin?)",
tense:"Akkusativ – Bewegung/Richtung",
formation:"unter den/die/das ..."
},

{
before:"Die Fernbedienung liegt auf ",
after:" Sofa.",
verb:"das Sofa (Akk./Dat.)",
answer:"dem",
signal:"liegen (Wo?)",
tense:"Dativ – Ort/Lage",
formation:"auf dem/der/dem ..."
},

{
before:"Die Lampe hängt über ",
after:" Esstisch.",
verb:"der Esstisch (Akk./Dat.)",
answer:"dem",
signal:"hängen (Wo?)",
tense:"Dativ – Ort/Lage",
formation:"über dem/der/dem ..."
},

{
before:"Leg die Fernbedienung auf ",
after:" Sofa.",
verb:"das Sofa (Akk./Dat.)",
answer:"das",
signal:"legen (Wohin?)",
tense:"Akkusativ – Bewegung/Richtung",
formation:"auf den/die/das ..."
},

{
before:"Ich hänge den Mantel an ",
after:" Haken.",
verb:"der Haken (Akk./Dat.)",
answer:"den",
signal:"hängen (Wohin?)",
tense:"Akkusativ – Bewegung/Richtung",
formation:"an den/die/das ..."
},

{
before:"Sie arbeitet in ",
after:" Bibliothek.",
verb:"die Bibliothek (Akk./Dat.)",
answer:"der",
signal:"arbeiten (Wo?)",
tense:"Dativ – Ort/Lage",
formation:"in dem/der/dem ..."
},

{
before:"Er stellt sich vor ",
after:" Spiegel.",
verb:"der Spiegel (Akk./Dat.)",
answer:"den",
signal:"sich stellen (Wohin?)",
tense:"Akkusativ – Bewegung/Richtung",
formation:"vor den/die/das ..."
},

{
before:"Der Hund liegt vor ",
mid:" Kamin, und die Katze schläft auf ",
after:" Sessel.",
verb:"der Kamin / der Sessel (Akk./Dat.)",
answer:"dem",
answer2:"dem",
signal:"liegen (Wo?) + schlafen (Wo?)",
tense:"Dativ + Dativ",
formation:"dem + dem"
},

{
before:"Wir sitzen an ",
after:" Tisch.",
verb:"der Tisch (Akk./Dat.)",
answer:"dem",
signal:"sitzen (Wo?)",
tense:"Dativ – Ort/Lage",
formation:"an dem/der/dem ..."
},

{
before:"Die Leiter steht vor ",
after:" Regal.",
verb:"das Regal (Akk./Dat.)",
answer:"dem",
signal:"stehen (Wo?)",
tense:"Dativ – Ort/Lage",
formation:"vor dem/der/dem ..."
},

{
before:"Er hängt das Bild an ",
mid:" Wand, jetzt hängt es an ",
after:" Wand.",
verb:"die Wand (Akk./Dat.)",
answer:"die",
answer2:"der",
signal:"hängen (Wohin?) + hängen (Wo?)",
tense:"Akkusativ + Dativ",
formation:"die + der"
},

{
before:"Sie fährt ihr Auto hinter ",
after:" Haus.",
verb:"das Haus (Akk./Dat.)",
answer:"das",
signal:"fahren (Wohin?)",
tense:"Akkusativ – Bewegung/Richtung",
formation:"hinter den/die/das ..."
},

{
before:"Der Stuhl steht zwischen ",
after:" Tisch und der Wand.",
verb:"der Tisch (Akk./Dat.)",
answer:"dem",
signal:"stehen (Wo?)",
tense:"Dativ – Ort/Lage",
formation:"zwischen dem/der/dem ..."
},

{
before:"Sie geht in ",
after:" Bibliothek.",
verb:"die Bibliothek (Akk./Dat.)",
answer:"die",
signal:"gehen (Wohin?)",
tense:"Akkusativ – Bewegung/Richtung",
formation:"in den/die/das ..."
},

{
before:"Wir gehen in ",
after:" Kino.",
verb:"das Kino (Akk./Dat.)",
answer:"das",
signal:"gehen (Wohin?)",
tense:"Akkusativ – Bewegung/Richtung",
formation:"in den/die/das ..."
},

{
before:"Der Vogel sitzt über ",
after:" Fluss auf einem Ast.",
verb:"der Fluss (Akk./Dat.)",
answer:"dem",
signal:"sitzen (Wo?)",
tense:"Dativ – Ort/Lage",
formation:"über dem/der/dem ..."
},

{
before:"Der Vogel fliegt über ",
after:" Fluss.",
verb:"der Fluss (Akk./Dat.)",
answer:"den",
signal:"fliegen (Wohin?)",
tense:"Akkusativ – Bewegung/Richtung",
formation:"über den/die/das ..."
},

{
before:"Wir stellen den Schrank neben ",
after:" Tür.",
verb:"die Tür (Akk./Dat.)",
answer:"die",
signal:"stellen (Wohin?)",
tense:"Akkusativ – Bewegung/Richtung",
formation:"neben den/die/das ..."
},

{
before:"Das Kind sitzt unter ",
after:" Tisch.",
verb:"der Tisch (Akk./Dat.)",
answer:"dem",
signal:"sitzen (Wo?)",
tense:"Dativ – Ort/Lage",
formation:"unter dem/der/dem ..."
},

{
before:"Ich lege das Buch auf ",
after:" Tisch.",
verb:"der Tisch (Akk./Dat.)",
answer:"den",
signal:"legen (Wohin?)",
tense:"Akkusativ – Bewegung/Richtung",
formation:"auf den/die/das ..."
},

{
before:"Er hängt das Bild an ",
after:" Wand.",
verb:"die Wand (Akk./Dat.)",
answer:"die",
signal:"hängen (Wohin?)",
tense:"Akkusativ – Bewegung/Richtung",
formation:"an den/die/das ..."
},

{
before:"Der Mantel hängt an ",
after:" Haken.",
verb:"der Haken (Akk./Dat.)",
answer:"dem",
signal:"hängen (Wo?)",
tense:"Dativ – Ort/Lage",
formation:"an dem/der/dem ..."
},

{
before:"Wir setzen uns an ",
after:" Tisch.",
verb:"der Tisch (Akk./Dat.)",
answer:"den",
signal:"sich setzen (Wohin?)",
tense:"Akkusativ – Bewegung/Richtung",
formation:"an den/die/das ..."
},

{
before:"Häng die Lampe über ",
after:" Esstisch.",
verb:"der Esstisch (Akk./Dat.)",
answer:"den",
signal:"hängen (Wohin?)",
tense:"Akkusativ – Bewegung/Richtung",
formation:"über den/die/das ..."
},

{
before:"Die Vase steht auf ",
after:" Fensterbank.",
verb:"die Fensterbank (Akk./Dat.)",
answer:"der",
signal:"stehen (Wo?)",
tense:"Dativ – Ort/Lage",
formation:"auf dem/der/dem ..."
},

{
before:"Das Handy liegt zwischen ",
after:" Tastatur und der Maus.",
verb:"die Tastatur (Akk./Dat.)",
answer:"der",
signal:"liegen (Wo?)",
tense:"Dativ – Ort/Lage",
formation:"zwischen dem/der/dem ..."
},

{
before:"Stell die Leiter vor ",
after:" Regal.",
verb:"das Regal (Akk./Dat.)",
answer:"das",
signal:"stellen (Wohin?)",
tense:"Akkusativ – Bewegung/Richtung",
formation:"vor den/die/das ..."
},

{
before:"Das Buch liegt auf ",
mid:" Regal, aber ich lege es jetzt auf ",
after:" Tisch.",
verb:"das Regal / der Tisch (Akk./Dat.)",
answer:"dem",
answer2:"den",
signal:"liegen (Wo?) + legen (Wohin?)",
tense:"Dativ + Akkusativ",
formation:"dem + den"
},

{
before:"Ihr Auto steht hinter ",
after:" Haus.",
verb:"das Haus (Akk./Dat.)",
answer:"dem",
signal:"stehen (Wo?)",
tense:"Dativ – Ort/Lage",
formation:"hinter dem/der/dem ..."
},

{
before:"Er steht vor ",
after:" Spiegel.",
verb:"der Spiegel (Akk./Dat.)",
answer:"dem",
signal:"stehen (Wo?)",
tense:"Dativ – Ort/Lage",
formation:"vor dem/der/dem ..."
},

{
before:"Setz dich neben ",
after:" Fenster.",
verb:"das Fenster (Akk./Dat.)",
answer:"das",
signal:"sich setzen (Wohin?)",
tense:"Akkusativ – Bewegung/Richtung",
formation:"neben den/die/das ..."
},

{
before:"Die Schuhe stehen unter ",
mid:" Bett, und die Jacke hängt an ",
after:" Tür.",
verb:"das Bett / die Tür (Akk./Dat.)",
answer:"dem",
answer2:"der",
signal:"stehen (Wo?) + hängen (Wo?)",
tense:"Dativ + Dativ",
formation:"dem + der"
},

{
before:"Ich stelle die Flasche auf ",
mid:" Tisch, und jetzt steht sie auf ",
after:" Tisch.",
verb:"der Tisch (Akk./Dat.)",
answer:"den",
answer2:"dem",
signal:"stellen (Wohin?) + stehen (Wo?)",
tense:"Akkusativ + Dativ",
formation:"den + dem"
},

{
before:"Sie stellt die Vase auf ",
after:" Fensterbank.",
verb:"die Fensterbank (Akk./Dat.)",
answer:"die",
signal:"stellen (Wohin?)",
tense:"Akkusativ – Bewegung/Richtung",
formation:"auf den/die/das ..."
},

{
before:"Du sitzt neben ",
after:" Fenster.",
verb:"das Fenster (Akk./Dat.)",
answer:"dem",
signal:"sitzen (Wo?)",
tense:"Dativ – Ort/Lage",
formation:"neben dem/der/dem ..."
},

{
before:"Der Schrank steht neben ",
after:" Tür.",
verb:"die Tür (Akk./Dat.)",
answer:"der",
signal:"stehen (Wo?)",
tense:"Dativ – Ort/Lage",
formation:"neben dem/der/dem ..."
},

{
before:"Die Katze springt unter ",
after:" Bett.",
verb:"das Bett (Akk./Dat.)",
answer:"das",
signal:"springen (Wohin?)",
tense:"Akkusativ – Bewegung/Richtung",
formation:"unter den/die/das ..."
},

{
before:"Er läuft hinter ",
after:" Bus her, aber er bleibt dort.",
verb:"der Bus (Akk./Dat.)",
answer:"dem",
signal:"sich befinden (Wo?)",
tense:"Dativ – Ort/Lage",
formation:"hinter dem/der/dem ..."
},

{
before:"Leg das Handy zwischen ",
after:" Tastatur und die Maus.",
verb:"die Tastatur (Akk./Dat.)",
answer:"die",
signal:"legen (Wohin?)",
tense:"Akkusativ – Bewegung/Richtung",
formation:"zwischen den/die/das ..."
},

{
before:"Er läuft hinter ",
after:" Bus.",
verb:"der Bus (Akk./Dat.)",
answer:"den",
signal:"laufen (Wohin?)",
tense:"Akkusativ – Bewegung/Richtung",
formation:"hinter den/die/das ..."
},

{
before:"Wir hängen das Poster an ",
mid:" Wand und den Spiegel über ",
after:" Kommode.",
verb:"die Wand / die Kommode (Akk./Dat.)",
answer:"die",
answer2:"die",
signal:"hängen (Wohin?) + hängen (Wohin?)",
tense:"Akkusativ + Akkusativ",
formation:"die + die"
},

{
before:"Der Kellner stellt den Stuhl zwischen ",
after:" Tisch und die Wand.",
verb:"der Tisch (Akk./Dat.)",
answer:"den",
signal:"stellen (Wohin?)",
tense:"Akkusativ – Bewegung/Richtung",
formation:"zwischen den/die/das ..."
},

{
before:"Das Bild hängt an ",
after:" Wand.",
verb:"die Wand (Akk./Dat.)",
answer:"der",
signal:"hängen (Wo?)",
tense:"Dativ – Ort/Lage",
formation:"an dem/der/dem ..."
},

{
before:"Die Katze schläft unter ",
after:" Bett.",
verb:"das Bett (Akk./Dat.)",
answer:"dem",
signal:"schlafen (Wo?)",
tense:"Dativ – Ort/Lage",
formation:"unter dem/der/dem ..."
},

{
before:"Die Kinder spielen in ",
mid:" Garten, aber jetzt laufen sie in ",
after:" Haus.",
verb:"der Garten / das Haus (Akk./Dat.)",
answer:"dem",
answer2:"das",
signal:"spielen (Wo?) + laufen (Wohin?)",
tense:"Dativ + Akkusativ",
formation:"dem + das"
},

{
before:"Wir sind in ",
after:" Kino.",
verb:"das Kino (Akk./Dat.)",
answer:"dem",
signal:"sein (Wo?)",
tense:"Dativ – Ort/Lage",
formation:"in dem/der/dem ..."
},

{
before:"Sie stellt den Tisch neben ",
mid:" Sofa und die Lampe auf ",
after:" Tisch.",
verb:"das Sofa / der Tisch (Akk./Dat.)",
answer:"das",
answer2:"den",
signal:"stellen (Wohin?) + stellen (Wohin?)",
tense:"Akkusativ + Akkusativ",
formation:"das + den"
},

{
before:"Das Buch liegt auf ",
after:" Tisch.",
verb:"der Tisch (Akk./Dat.)",
answer:"dem",
signal:"liegen (Wo?)",
tense:"Dativ – Ort/Lage",
formation:"auf dem/der/dem ..."
}

]

};
