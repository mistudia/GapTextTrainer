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
after:" una taza de café antes de empezar a trabajar. ",
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
after:" muy temprano a la oficina. ",
verb:"llegar",
answer:"llegó",
signal:"ayer",
tense:"Pretérito indefinido",
formation:"pretérito indefinido"
},

{
before:"Cuando llegó, su jefe la ",
after:". ",
verb:"esperar",
answer:"estaba esperando",
signal:"cuando llegó",
tense:"Pretérito imperfecto",
formation:"imperfecto"
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
before:"También ",
after:" varias veces a España. ",
verb:"viajar",
answer:"ha viajado",
signal:"varias veces",
tense:"Pretérito perfecto",
formation:"haber + participio"
},

{
before:"Antes de llegar a la oficina, su jefe ya ",
after:" un correo importante. ",
verb:"escribir",
answer:"había escrito",
signal:"antes de",
tense:"Pluscuamperfecto",
formation:"haber (imperfecto) + participio"
},

{
before:"Estaba tranquila porque ya ",
after:" todos los documentos. ",
verb:"leer",
answer:"había leído",
signal:"ya",
tense:"Pluscuamperfecto",
formation:"haber + participio"
},

{
before:"La próxima semana ",
after:" a Madrid. ",
verb:"viajar",
answer:"viajará",
signal:"la próxima semana",
tense:"Futuro",
formation:"terminaciones del futuro"
},

{
before:"Allí ",
after:" a varios socios internacionales. ",
verb:"conocer",
answer:"conocerá",
signal:"acción futura",
tense:"Futuro",
formation:"futuro simple"
},

{
before:"Para finales de la próxima semana ya ",
after:" todas las reuniones. ",
verb:"terminar",
answer:"habrá terminado",
signal:"para finales de...",
tense:"Futuro perfecto",
formation:"haber en futuro + participio"
},

{
before:"Para entonces también ",
after:" el nuevo contrato. ",
verb:"firmar",
answer:"habrá firmado",
signal:"para entonces",
tense:"Futuro perfecto",
formation:"haber + participio"
},

{
before:"Su jefe dice que Anna ",
after:" una excelente empleada. ",
verb:"ser",
answer:"sea",
signal:"dice que",
tense:"Subjuntivo presente",
formation:"subjuntivo presente"
},

{
before:"Es posible que ya ",
after:" mucha experiencia internacional. ",
verb:"adquirir",
answer:"haya adquirido",
signal:"es posible que",
tense:"Subjuntivo perfecto",
formation:"haya + participio"
},

{
before:"Si Anna tuviera más tiempo libre, ",
after:" otro idioma. ",
verb:"aprender",
answer:"aprendería",
signal:"si",
tense:"Condicional",
formation:"condicional simple"
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
before:"El nuevo contrato ",
after:" ayer. ",
verb:"firmar",
answer:"fue firmado",
signal:"voz pasiva",
tense:"Pasiva",
formation:"ser + participio"
},

{
before:"El viaje ya ",
after:" por su compañera. ",
verb:"organizar",
answer:"ha sido organizado",
signal:"ya",
tense:"Pretérito perfecto pasivo",
formation:"haber + sido + participio"
},

{
before:"Antes de la llegada de Anna todas las reuniones ",
after:". ",
verb:"organizar",
answer:"habían sido organizadas",
signal:"antes de",
tense:"Pluscuamperfecto pasivo",
formation:"habían sido + participio"
},

{
before:"Para el viernes el informe ",
after:". ",
verb:"terminar",
answer:"habrá sido terminado",
signal:"para el viernes",
tense:"Futuro perfecto pasivo",
formation:"habrá sido + participio"
}

    ]

};