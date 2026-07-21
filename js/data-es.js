/* ==========================================================
   js/data-es.js
========================================================== */

const spanishExercise = {

    language: "es",

    title: "Todos los tiempos verbales",

    description:
        "Completa el texto con la forma correcta del verbo.",

    ui: {

        check: "✓ Comprobar",

        solution: "📖 Mostrar soluciones",

        reset: "🔄 Reiniciar"

    },

    labels: {

        signal: "💡 Indicador",

        tense: "💡 Tiempo verbal",

        formation: "💡 Formación"

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
before:"Cada mañana Anna ",
after:" un café antes de ir al trabajo. ",
verb:"beber",
answer:"bebe",
signal:"cada mañana",
tense:"Presente",
formation:"verbo conjugado en presente"
},

{
before:"Ahora mismo ",
after:" en un importante proyecto internacional. ",
verb:"trabajar",
answer:"está trabajando",
signal:"ahora mismo",
tense:"Presente continuo",
formation:"estar + gerundio"
},

{
before:"Ayer ",
after:" un correo muy importante. ",
verb:"recibir",
answer:"recibió",
signal:"ayer",
tense:"Pretérito indefinido",
formation:"pretérito indefinido"
},

{
before:"Mientras ",
after:" a la oficina, sonó su teléfono. ",
verb:"conducir",
answer:"conducía",
signal:"mientras",
tense:"Pretérito imperfecto",
formation:"pretérito imperfecto"
},

{
before:"Anna ya ",
after:" en varios proyectos internacionales. ",
verb:"trabajar",
answer:"ha trabajado",
signal:"ya",
tense:"Pretérito perfecto",
formation:"haber + participio"
},

{
before:"Antes de la reunión, su jefe ya ",
after:" a todos los empleados. ",
verb:"informar",
answer:"había informado",
signal:"antes de",
tense:"Pluscuamperfecto",
formation:"haber (imperfecto) + participio"
},

{
before:"La próxima semana Anna ",
after:" a Madrid. ",
verb:"viajar",
answer:"va a viajar",
signal:"la próxima semana",
tense:"Futuro próximo",
formation:"ir a + infinitivo"
},

{
before:"Allí ",
after:" a varios clientes nuevos. ",
verb:"conocer",
answer:"conocerá",
signal:"acción futura",
tense:"Futuro simple",
formation:"futuro simple"
},

{
before:"Para el viernes ya ",
after:" todas las reuniones. ",
verb:"terminar",
answer:"habrá terminado",
signal:"para el viernes",
tense:"Futuro perfecto",
formation:"haber en futuro + participio"
},

{
before:"Si tuviera más tiempo, ",
after:" otro idioma. ",
verb:"aprender",
answer:"aprendería",
signal:"si",
tense:"Condicional simple",
formation:"condicional"
},

{
before:"Si hubiera conocido el proyecto antes, ",
after:" mejor. ",
verb:"prepararse",
answer:"se habría preparado",
signal:"si hubiera...",
tense:"Condicional compuesto",
formation:"habría + participio"
},

{
before:"Es importante que Anna ",
after:" bien español. ",
verb:"hablar",
answer:"hable",
signal:"es importante que",
tense:"Presente de subjuntivo",
formation:"subjuntivo presente"
},

{
before:"Es posible que ya ",
after:" toda la información necesaria. ",
verb:"recibir",
answer:"haya recibido",
signal:"es posible que",
tense:"Pretérito perfecto de subjuntivo",
formation:"haya + participio"
}

]

};
