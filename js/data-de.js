const germanExercise = {

    language: "de",

    title: "Alle Zeitformen",

    description:
        "Setze die Verben in Klammern in die richtige Form.",

    ui: {
        check: "✓ Auswerten",
        solution: "📖 Lösungen",

        reset: "🔄 Neu"
    },

    labels: {
        signal: "💡 Signal",
        tense: "💡 Zeitform",
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
    before:"Jeden Morgen ",
    after:" Anna eine Tasse Kaffee, bevor sie mit der Arbeit beginnt. ",
    verb:"trinken",
    answer:"trinkt",
    signal:"jeden Morgen",
    tense:"Präsens",
formation:"spielt"                          // Präsens
},

{
    before:"Im Moment ",
    after:" Anna an einem wichtigen internationalen Projekt. ",
    verb:"arbeiten",
    answer:"arbeitet",
    signal:"im Moment",
    tense:"Präsens",
formation:"spielt"                          // Präsens
},

{
    before:"Gestern ",
    after:" Anna schon sehr früh ins Büro. ",
    verb:"fahren",
    answer:"fuhr",
    signal:"gestern",
    tense:"Präteritum",
formation:"spielte"                         // Präteritum
},

{
    before:"Dort ",
    after:" sie ihren Chef vor dem Besprechungsraum. ",
    verb:"treffen",
    answer:"traf",
    signal:"Erzählung in der Vergangenheit",
    tense:"Präteritum",
formation:"spielte"                         // Präteritum
},

{
    before:"Anna ",
    mid:" bereits an mehreren internationalen Projekten ",
    after:". ",
    verb:"arbeiten",
    answer:"hat",
    answer2:"gearbeitet",
    signal:"bereits",
    tense:"Perfekt",
formation:"hat gespielt"                    // Perfekt (haben)
},

{
    before:"Außerdem ",
    mid:" sie schon mehrmals nach Spanien ",
    after:". ",
    verb:"reisen",
    answer:"ist",
    answer2:"gereist",
    signal:"schon mehrmals",
    tense:"Perfekt",
formation:"ist gewandert"                   // Perfekt (sein)
},

{
    before:"Bevor Anna gestern ins Büro kam, ",
    mid:" ihr Chef bereits eine wichtige E-Mail ",
    after:". ",
    verb:"schreiben",
    answer:"hatte",
    answer2:"geschrieben",
    signal:"bevor",
    tense:"Plusquamperfekt",
formation:"hatte gespielt"                  // Plusquamperfekt
},

{
    before:"Anna war gut vorbereitet, weil sie alle Unterlagen vorher ",
    after:".",
    verb:"lesen",
    answer:"gelesen hatte",
    signal:"vorher",
    tense:"Plusquamperfekt",
formation:"hatte gespielt"                  // Plusquamperfekt
},

{
    before:"Nächste Woche ",
    mid:" Anna nach Madrid ",
    after:". ",
    verb:"reisen",
    answer:"wird",
    answer2:"reisen",
    signal:"nächste Woche",
    tense:"Futur I",
formation:"wird spielen"                    // Futur I
},

{
    before:"Dort ",
    mid:" sie mehrere internationale Geschäftspartner ",
    after:". ",
    verb:"treffen",
    answer:"wird",
    answer2:"treffen",
    signal:"zukünftige Handlung",
    tense:"Futur I",
formation:"wird spielen"                    // Futur I
},

{
    before:"Bis Ende der nächsten Woche ",
    mid:" Anna alle wichtigen Gespräche ",
    after:". ",
    verb:"führen",
    answer:"wird",
    answer2:"geführt haben",
    signal:"bis Ende der nächsten Woche",
    tense:"Futur II",
formation:"wird gespielt haben"             // Futur II
},

{
    before:"Bis dahin ",
    mid:" sie auch den neuen Vertrag ",
    after:". ",
    verb:"unterschreiben",
    answer:"wird",
    answer2:"unterschrieben haben",
    signal:"bis dahin",
    tense:"Futur II",
formation:"wird gespielt haben"             // Futur II
},

{
    before:"Annas Chef sagt, sie ",
    after:" für das neue Projekt besonders gut geeignet. ",
    verb:"sein",
    answer:"sei",
    signal:"indirekte Rede",
    tense:"Konjunktiv I",
formation:"spiele"                          // Konjunktiv I
},

{
    before:"Er erklärt außerdem, Anna ",
    mid:" bereits viel internationale Erfahrung ",
    after:". ",
    verb:"sammeln",
    answer:"habe",
    answer2:"gesammelt",
    signal:"indirekte Rede",
    tense:"Konjunktiv I Perfekt",
formation:"habe gespielt"                   // Konjunktiv I Perfekt
},

{
    before:"Wenn Anna mehr Freizeit hätte, ",
    mid:" sie noch eine weitere Sprache ",
    after:". ",
    verb:"lernen",
    answer:"würde",
    answer2:"lernen",
    signal:"wenn",
    tense:"Konjunktiv II",
formation:"würde spielen"                   // Konjunktiv II
},

{
    before:"Wenn sie früher von dem Projekt gewusst hätte, ",
    mid:" sie sich noch besser ",
    after:". ",
    verb:"vorbereiten",
    answer:"hätte",
    answer2:"vorbereitet",
    signal:"wenn ... hätte",
    tense:"Konjunktiv II Vergangenheit",
formation:"hätte gespielt"                  // Konjunktiv II Vergangenheit
},

{
    before:"Der neue Vertrag ",
    mid:" gestern von der Geschäftsleitung ",
    after:". ",
    verb:"unterschreiben",
    answer:"wurde",
    answer2:"unterschrieben",
    signal:"von der Geschäftsleitung",
    tense:"Präteritum Passiv",
formation:"wurde gespielt"                  // Präteritum Passiv
},

{
    before:"Die Reise ",
    mid:" bereits von Annas Kollegin ",
    after:". ",
    verb:"organisieren",
    answer:"ist",
    answer2:"organisiert worden",
    signal:"Passiv",
    tense:"Perfekt Passiv",
formation:"ist gespielt worden"             // Perfekt Passiv
},

{
    before:"Vor Annas Ankunft ",
    mid:" alle wichtigen Termine bereits ",
    after:". ",
    verb:"vereinbaren",
    answer:"waren",
    answer2:"vereinbart worden",
    signal:"vor Annas Ankunft",
    tense:"Plusquamperfekt Passiv",
formation:"war gespielt worden"             // Plusquamperfekt Passiv
},

{
    before:"Bis Freitag ",
    mid:" der endgültige Bericht ",
    after:". ",
    verb:"fertigstellen",
    answer:"wird",
    answer2:"fertiggestellt worden sein",
    signal:"bis Freitag",
    tense:"Futur II Passiv",
formation:"wird gespielt worden sein"       // Futur II Passiv
}

]

};
