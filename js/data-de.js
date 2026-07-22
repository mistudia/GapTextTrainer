const germanExercise = {

    language: "de",

    title: "Alle Zeitformen",

    description:
        "Setze die Verben in Klammern in die richtige Form.",

    ui: {
        check: "✓ Auswerten",
        solution: "📖 Lösungen anzeigen",
        reset: "🔄 Neu starten"
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
    after:" bereits an mehreren internationalen Projekten <span class='predicate'>gearbeitet</span>. ",
    verb:"haben",
    answer:"hat",
    signal:"bereits",
    tense:"Perfekt",
formation:"hat gespielt"                    // Perfekt (haben)
},

{
    before:"Außerdem ",
    after:" sie schon mehrmals nach Spanien <span class='predicate'>gereist</span>. ",
    verb:"sein",
    answer:"ist",
    signal:"schon mehrmals",
    tense:"Perfekt",
formation:"ist gewandert"                   // Perfekt (sein)
},

{
    before:"Bevor Anna gestern ins Büro kam, ",
    after:" ihr Chef bereits eine wichtige E-Mail <span class='predicate'>geschrieben</span>. ",
    verb:"haben",
    answer:"hatte",
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
    after:" Anna nach Madrid <span class='predicate'>reisen</span>. ",
    verb:"werden",
    answer:"wird",
    signal:"nächste Woche",
    tense:"Futur I",
formation:"wird spielen"                    // Futur I
},

{
    before:"Dort ",
    after:" sie mehrere internationale Geschäftspartner <span class='predicate'>treffen</span>. ",
    verb:"werden",
    answer:"wird",
    signal:"zukünftige Handlung",
    tense:"Futur I",
formation:"wird spielen"                    // Futur I
},

{
    before:"Bis Ende der nächsten Woche ",
    after:" Anna alle wichtigen Gespräche <span class='predicate'>geführt haben</span>. ",
    verb:"werden",
    answer:"wird",
    signal:"bis Ende der nächsten Woche",
    tense:"Futur II",
formation:"wird gespielt haben"             // Futur II
},

{
    before:"Bis dahin ",
    after:" sie auch den neuen Vertrag <span class='predicate'>unterschrieben haben</span>. ",
    verb:"werden",
    answer:"wird",
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
    after:" bereits viel internationale Erfahrung <span class='predicate'>gesammelt</span>. ",
    verb:"haben",
    answer:"habe",
    signal:"indirekte Rede",
    tense:"Konjunktiv I Perfekt",
formation:"habe gespielt"                   // Konjunktiv I Perfekt
},

{
    before:"Wenn Anna mehr Freizeit hätte, ",
    after:" sie noch eine weitere Sprache <span class='predicate'>lernen</span>. ",
    verb:"werden",
    answer:"würde",
    signal:"wenn",
    tense:"Konjunktiv II",
formation:"würde spielen"                   // Konjunktiv II
},

{
    before:"Wenn sie früher von dem Projekt gewusst hätte, ",
    after:" sie sich noch besser <span class='predicate'>vorbereitet</span>. ",
    verb:"haben",
    answer:"hätte",
    signal:"wenn ... hätte",
    tense:"Konjunktiv II Vergangenheit",
formation:"hätte gespielt"                  // Konjunktiv II Vergangenheit
},

{
    before:"Der neue Vertrag ",
    after:" gestern von der Geschäftsleitung <span class='predicate'>unterschrieben</span>. ",
    verb:"werden",
    answer:"wurde",
    signal:"von der Geschäftsleitung",
    tense:"Präteritum Passiv",
formation:"wurde gespielt"                  // Präteritum Passiv
},

{
    before:"Die Reise ",
    after:" bereits von Annas Kollegin <span class='predicate'>organisiert worden</span>. ",
    verb:"sein",
    answer:"ist",
    signal:"Passiv",
    tense:"Perfekt Passiv",
formation:"ist gespielt worden"             // Perfekt Passiv
},

{
    before:"Vor Annas Ankunft ",
    after:" alle wichtigen Termine bereits <span class='predicate'>vereinbart worden</span>. ",
    verb:"sein",
    answer:"waren",
    signal:"vor Annas Ankunft",
    tense:"Plusquamperfekt Passiv",
formation:"war gespielt worden"             // Plusquamperfekt Passiv
},

{
    before:"Bis Freitag ",
    after:" der endgültige Bericht <span class='predicate'>fertiggestellt worden sein</span>. ",
    verb:"werden",
    answer:"wird",
    signal:"bis Freitag",
    tense:"Futur II Passiv",
formation:"wird gespielt worden sein"       // Futur II Passiv
}

]

};
