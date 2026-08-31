/* ==========================================================
   js/data-es-presente.js
   Ejercicio para principiantes absolutos:
   Presente de indicativo, verbos regulares (-ar / -er / -ir).
   Texto conectado: presentación, familia y rutinas diarias.
   El orden de las personas gramaticales está mezclado de
   forma natural, siguiendo el hilo de la historia.
========================================================== */

const spanishPresenteRegular = {

    language: "es-presente",

    title: "Presente – Verbos Regulares",

    description:
        "Completa el texto con la forma correcta del verbo en presente (verbos en -ar, -er, -ir).",

    ui: {

        check: "✓ Comprobar",

        solution: "📖 Soluciones",

        reset: "🔄 Reiniciar"

    },

    labels: {

        signal: "💡 Pronombre",

        tense: "💡 Grupo verbal",

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
before:"¡Hola! Me llamo Ana y quiero contarte sobre mi vida. Yo ",
after:" en Madrid con mi familia. Cada mañana ",
verb:"vivir",
answer:"vivo",
signal:"yo",
tense:"Presente — verbos en -ir",
formation:"vivo / vives / vive / vivimos / vivís / viven"
},

{
before:"",
after:" en una oficina, y por la tarde ",
verb:"trabajar",
answer:"trabajo",
signal:"yo",
tense:"Presente — verbos en -ar",
formation:"hablo / hablas / habla / hablamos / habláis / hablan"
},

{
before:"",
after:" inglés en una academia. Mi hermano se llama Pablo. Él ",
verb:"estudiar",
answer:"estudio",
signal:"yo",
tense:"Presente — verbos en -ar",
formation:"hablo / hablas / habla / hablamos / habláis / hablan"
},

{
before:"",
after:" en la universidad y ",
verb:"estudiar",
answer:"estudia",
signal:"él",
tense:"Presente — verbos en -ar",
formation:"hablo / hablas / habla / hablamos / habláis / hablan"
},

{
before:"",
after:" francés. Por las noches, ",
verb:"aprender",
answer:"aprende",
signal:"él",
tense:"Presente — verbos en -er",
formation:"como / comes / come / comemos / coméis / comen"
},

{
before:"",
after:" muchos libros. Mi madre, Carmen, ",
verb:"leer",
answer:"lee",
signal:"él",
tense:"Presente — verbos en -er",
formation:"como / comes / come / comemos / coméis / comen"
},

{
before:"",
after:" la cena para toda la familia y siempre ",
verb:"cocinar",
answer:"cocina",
signal:"ella",
tense:"Presente — verbos en -ar",
formation:"hablo / hablas / habla / hablamos / habláis / hablan"
},

{
before:"",
after:" mientras cocina. Mi padre, Miguel, ",
verb:"cantar",
answer:"canta",
signal:"ella",
tense:"Presente — verbos en -ar",
formation:"hablo / hablas / habla / hablamos / habláis / hablan"
},

{
before:"",
after:" mucho, pero los fines de semana ",
verb:"trabajar",
answer:"trabaja",
signal:"él",
tense:"Presente — verbos en -ar",
formation:"hablo / hablas / habla / hablamos / habláis / hablan"
},

{
before:"",
after:" la televisión con nosotros. Los domingos, nosotros ",
verb:"mirar",
answer:"mira",
signal:"él",
tense:"Presente — verbos en -ar",
formation:"hablo / hablas / habla / hablamos / habláis / hablan"
},

{
before:"",
after:" juntos y ",
verb:"comer",
answer:"comemos",
signal:"nosotros",
tense:"Presente — verbos en -er",
formation:"como / comes / come / comemos / coméis / comen"
},

{
before:"",
after:" de la semana. También ",
verb:"hablar",
answer:"hablamos",
signal:"nosotros",
tense:"Presente — verbos en -ar",
formation:"hablo / hablas / habla / hablamos / habláis / hablan"
},

{
before:"",
after:" buenas noticias y a veces ",
verb:"compartir",
answer:"compartimos",
signal:"nosotros",
tense:"Presente — verbos en -ir",
formation:"vivo / vives / vive / vivimos / vivís / viven"
},

{
before:"",
after:" en la sala. Mis abuelos viven cerca. Ellos ",
verb:"bailar",
answer:"bailamos",
signal:"nosotros",
tense:"Presente — verbos en -ar",
formation:"hablo / hablas / habla / hablamos / habláis / hablan"
},

{
before:"",
after:" al parque todos los días y ",
verb:"caminar",
answer:"caminan",
signal:"ellos",
tense:"Presente — verbos en -ar",
formation:"hablo / hablas / habla / hablamos / habláis / hablan"
},

{
before:"",
after:" la radio por la mañana. Mis primas también nos visitan. Ellas ",
verb:"escuchar",
answer:"escuchan",
signal:"ellos",
tense:"Presente — verbos en -ar",
formation:"hablo / hablas / habla / hablamos / habláis / hablan"
},

{
before:"",
after:" café con nosotros y ",
verb:"beber",
answer:"beben",
signal:"ellas",
tense:"Presente — verbos en -er",
formation:"como / comes / come / comemos / coméis / comen"
},

{
before:"",
after:" muchas cosas sobre mi trabajo. Y tú, ¿dónde ",
verb:"preguntar",
answer:"preguntan",
signal:"ellas",
tense:"Presente — verbos en -ar",
formation:"hablo / hablas / habla / hablamos / habláis / hablan"
},

{
before:"",
after:"? ¿",
verb:"vivir",
answer:"vives",
signal:"tú",
tense:"Presente — verbos en -ir",
formation:"vivo / vives / vive / vivimos / vivís / viven"
},

{
before:"",
after:" o ",
verb:"trabajar",
answer:"Trabajas",
signal:"tú",
tense:"Presente — verbos en -ar",
formation:"hablo / hablas / habla / hablamos / habláis / hablan"
},

{
before:"",
after:"? Vosotros, mis amigos, siempre ",
verb:"estudiar",
answer:"estudias",
signal:"tú",
tense:"Presente — verbos en -ar",
formation:"hablo / hablas / habla / hablamos / habláis / hablan"
},

{
before:"",
after:" fotos conmigo, y yo las ",
verb:"compartir",
answer:"compartís",
signal:"vosotros",
tense:"Presente — verbos en -ir",
formation:"vivo / vives / vive / vivimos / vivís / viven"
},

{
before:"",
after:" con mucha alegría. Y usted, quien lee esto, ¿dónde ",
verb:"mirar",
answer:"miro",
signal:"yo",
tense:"Presente — verbos en -ar",
formation:"hablo / hablas / habla / hablamos / habláis / hablan"
},

{
before:"",
after:" y qué ",
verb:"vivir",
answer:"vive",
signal:"usted",
tense:"Presente — verbos en -ir",
formation:"vivo / vives / vive / vivimos / vivís / viven"
},

{
before:"",
after:"?",
verb:"estudiar",
answer:"estudia",
signal:"usted",
tense:"Presente — verbos en -ar",
formation:"hablo / hablas / habla / hablamos / habláis / hablan"
}

]

};
