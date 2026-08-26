/* ==========================================================
   js/data-es-subj.js
   Ejercicio adicional de español:
   Indicativo vs. subjuntivo, con verbos de alta frecuencia,
   mezclados, más frases con dos huecos (las cuatro
   combinaciones: indicativo+subjuntivo, subjuntivo+indicativo,
   subjuntivo+subjuntivo, indicativo+indicativo).
========================================================== */

const spanishIndicativoSubjuntivo = {

    language: "es-subj",

    title: "Indicativo vs. Subjuntivo",

    description:
        "Completa el texto con la forma correcta: indicativo o subjuntivo.",

    ui: {

        check: "✓ Comprobar",

        solution: "📖 Soluciones",

        reset: "🔄 Reiniciar"

    },

    labels: {

        signal: "💡 Indicador",

        tense: "💡 Modo/Tiempo",

        formation: "💡 Ejemplo"

    },

    messages: {

        perfect: "🏆 ¡Perfecto! ¡Excelente trabajo!",

        good: "👏 ¡Muy bien!",

        ok: "👍 Buen trabajo. Sigue practicando.",

        tryAgain: "📚 Sigue practicando.",

        solutionsShown:
            "Se han mostrado las soluciones."

    },

    story: [

{
before:"Quiero que ",
mid:" más y que ",
after:" el examen.",
verb:"estudiar / aprobar",
answer:"estudies",
answer2:"apruebes",
signal:"quiero que ... y que",
tense:"Subjuntivo + Subjuntivo",
formation:"hable / hable"
},

{
before:"Noto que él ",
after:" triste últimamente.",
verb:"parecer",
answer:"parece",
signal:"noto que",
tense:"Indicativo (presente)",
formation:"habla"
},

{
before:"No creo que él ",
after:" pronto.",
verb:"volver",
answer:"vuelva",
signal:"no creo que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Antes de que ",
after:" la película, compremos palomitas.",
verb:"empezar",
answer:"empiece",
signal:"antes de que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Es cierto que él ",
after:" la verdad.",
verb:"decir",
answer:"dijo",
signal:"es cierto que",
tense:"Indicativo (pretérito indefinido)",
formation:"habló"
},

{
before:"Es importante que ",
after:" para el examen.",
verb:"estudiar",
answer:"estudies",
signal:"es importante que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Sé que ella ",
mid:" mucho y que siempre ",
after:" temprano.",
verb:"trabajar / llegar",
answer:"trabaja",
answer2:"llega",
signal:"sé que ... y que",
tense:"Indicativo + Indicativo",
formation:"habla / habla"
},

{
before:"Sin que nadie se ",
after:" cuenta, ella salió temprano.",
verb:"darse cuenta",
answer:"dé",
signal:"sin que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Veo que ellos ",
after:" de la fiesta.",
verb:"disfrutar",
answer:"disfrutan",
signal:"veo que",
tense:"Indicativo (presente)",
formation:"habla"
},

{
before:"Quiero que ella me ",
after:" con esto.",
verb:"ayudar",
answer:"ayude",
signal:"quiero que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Aunque ",
after:" con cuidado, siempre hay riesgos.",
verb:"conducir",
answer:"conduzca",
signal:"aunque (incertidumbre)",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Es obvio que él no ",
after:" la situación.",
verb:"entender",
answer:"entendió",
signal:"es obvio que",
tense:"Indicativo (pretérito indefinido)",
formation:"habló"
},

{
before:"Es necesario que ",
after:" ejercicio todos los días.",
verb:"hacer",
answer:"hagas",
signal:"es necesario que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Es posible que ella ",
after:" mañana.",
verb:"venir",
answer:"venga",
signal:"es posible que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Sabemos que la Tierra ",
after:" alrededor del Sol.",
verb:"girar",
answer:"gira",
signal:"sabemos que",
tense:"Indicativo (presente)",
formation:"habla"
},

{
before:"A menos que ",
after:", iremos a la playa.",
verb:"llover",
answer:"llueva",
signal:"a menos que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"No pienso que esto ",
after:" mucho.",
verb:"cambiar",
answer:"cambie",
signal:"no pienso que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Es verdad que nosotros ",
after:" más tiempo.",
verb:"necesitar",
answer:"necesitábamos",
signal:"es verdad que",
tense:"Indicativo (imperfecto)",
formation:"hablaba"
},

{
before:"Espero que tú ",
after:" el examen.",
verb:"aprobar",
answer:"apruebes",
signal:"espero que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Confirmo que ",
after:" tu mensaje.",
verb:"recibir",
answer:"recibí",
signal:"confirmo que",
tense:"Indicativo (pretérito indefinido)",
formation:"habló"
},

{
before:"Exijo que me ",
after:" la verdad.",
verb:"decir",
answer:"digas",
signal:"exijo que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Reconozco que ella ",
after:" mucho esfuerzo en el proyecto.",
verb:"poner",
answer:"puso",
signal:"reconozco que",
tense:"Indicativo (pretérito indefinido)",
formation:"habló"
},

{
before:"Cuando ",
after:" a casa, llámame.",
verb:"llegar",
answer:"llegues",
signal:"cuando + futuro",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Supongo que ella ",
after:" pronto.",
verb:"venir",
answer:"vendrá",
signal:"supongo que",
tense:"Indicativo (futuro)",
formation:"hablará"
},

{
before:"Afirmo que ellos ",
after:" las normas.",
verb:"cumplir",
answer:"cumplieron",
signal:"afirmo que",
tense:"Indicativo (pretérito indefinido)",
formation:"habló"
},

{
before:"Sé que ella ",
mid:" mucho, aunque dudo que ",
after:" el proyecto hoy.",
verb:"trabajar / terminar",
answer:"trabaja",
answer2:"termine",
signal:"indicativo (hecho) + subjuntivo (duda)",
tense:"Indicativo + Subjuntivo",
formation:"habla / hable"
},

{
before:"Es una lástima que te ",
after:" tan pronto.",
verb:"irse",
answer:"vayas",
signal:"es una lástima que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Busco un empleado que ",
after:" programar.",
verb:"saber",
answer:"sepa",
signal:"antecedente indefinido",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Aunque ",
mid:" mañana, sé que ",
after:" de excursión.",
verb:"llover / ir",
answer:"llueva",
answer2:"iremos",
signal:"subjuntivo (incertidumbre) + indicativo (hecho)",
tense:"Subjuntivo + Indicativo",
formation:"hable / hablará"
},

{
before:"Es evidente que ella ",
after:" cansada.",
verb:"estar",
answer:"está",
signal:"es evidente que",
tense:"Indicativo (presente)",
formation:"habla"
},

{
before:"Espero que ",
mid:" a la fiesta y que ",
after:" el regalo.",
verb:"venir / traer",
answer:"vengas",
answer2:"traigas",
signal:"espero que ... y que",
tense:"Subjuntivo + Subjuntivo",
formation:"hable / hable"
},

{
before:"Ojalá que ",
after:" las llaves.",
verb:"encontrar",
answer:"encuentres",
signal:"ojalá que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Aunque él no ",
mid:" mucho dinero, es evidente que ",
after:" bien.",
verb:"tener / vivir",
answer:"tenga",
answer2:"vive",
signal:"subjuntivo (concesión) + indicativo (hecho)",
tense:"Subjuntivo + Indicativo",
formation:"hable / habla"
},

{
before:"Prohíbo que ",
after:" aquí.",
verb:"fumar",
answer:"fumes",
signal:"prohíbo que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Recuerdo que ella ",
after:" aquí de niña.",
verb:"vivir",
answer:"vivía",
signal:"recuerdo que",
tense:"Indicativo (imperfecto)",
formation:"hablaba"
},

{
before:"Siento que ",
after:" que trabajar hoy.",
verb:"tener",
answer:"tengas",
signal:"siento que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Deseo que todo ",
after:" bien.",
verb:"salir",
answer:"salga",
signal:"deseo que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Creo que él ",
mid:" razón, pero es posible que se ",
after:".",
verb:"tener / equivocarse",
answer:"tiene",
answer2:"equivoque",
signal:"indicativo (hecho) + subjuntivo (posibilidad)",
tense:"Indicativo + Subjuntivo",
formation:"habla / hable"
},

{
before:"Temo que ",
after:" demasiado tarde.",
verb:"ser",
answer:"sea",
signal:"temo que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"En caso de que ",
after:" ayuda, llámame.",
verb:"necesitar",
answer:"necesites",
signal:"en caso de que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Estoy seguro de que ellos ",
after:" a tiempo.",
verb:"llegar",
answer:"llegarán",
signal:"estoy seguro de que",
tense:"Indicativo (futuro)",
formation:"hablará"
},

{
before:"No hay nadie que ",
after:" la respuesta.",
verb:"conocer",
answer:"conozca",
signal:"antecedente negativo",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Permito que ",
after:" mi coche.",
verb:"usar",
answer:"uses",
signal:"permito que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Está demostrado que el ejercicio ",
after:" la salud.",
verb:"mejorar",
answer:"mejora",
signal:"está demostrado que",
tense:"Indicativo (presente)",
formation:"habla"
},

{
before:"Me alegro de que ",
after:" aquí.",
verb:"estar",
answer:"estés",
signal:"me alegro de que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Es raro que él no ",
after:" el teléfono.",
verb:"contestar",
answer:"conteste",
signal:"es raro que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Es seguro que mañana ",
after:".",
verb:"llover",
answer:"lloverá",
signal:"es seguro que",
tense:"Indicativo (futuro)",
formation:"hablará"
},

{
before:"Creo que ella ",
after:" razón.",
verb:"tener",
answer:"tiene",
signal:"creo que",
tense:"Indicativo (presente)",
formation:"habla"
},

{
before:"Sugiero que ",
after:" con el director.",
verb:"hablar",
answer:"hablemos",
signal:"sugiero que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Sé que ella ",
after:" mucho.",
verb:"trabajar",
answer:"trabaja",
signal:"sé que",
tense:"Indicativo (presente)",
formation:"habla"
},

{
before:"Me parece que este plan ",
after:" bien.",
verb:"funcionar",
answer:"funcionará",
signal:"me parece que",
tense:"Indicativo (futuro)",
formation:"hablará"
},

{
before:"Es probable que ",
after:" el tren.",
verb:"perder",
answer:"perdamos",
signal:"es probable que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Para que ",
after:" bien el idioma, practica todos los días.",
verb:"aprender",
answer:"aprendas",
signal:"para que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Es cierto que él ",
mid:" mucho y que ",
after:" el examen.",
verb:"estudiar / aprobar",
answer:"estudió",
answer2:"aprobó",
signal:"es cierto que ... y que",
tense:"Indicativo + Indicativo",
formation:"habló / habló"
},

{
before:"Dudo que ella ",
after:" terminarlo hoy.",
verb:"poder",
answer:"pueda",
signal:"dudo que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Pienso que él ",
after:" un buen médico.",
verb:"ser",
answer:"era",
signal:"pienso que",
tense:"Indicativo (imperfecto)",
formation:"hablaba"
},

{
before:"Recomiendo que ",
after:" este libro.",
verb:"leer",
answer:"leas",
signal:"recomiendo que",
tense:"Subjuntivo (presente)",
formation:"hable"
},

{
before:"Está claro que él no ",
after:" la respuesta.",
verb:"saber",
answer:"sabía",
signal:"está claro que",
tense:"Indicativo (imperfecto)",
formation:"hablaba"
}

]

};
