/* ==========================================================
   js/data-es-ii.js
   Ejercicio adicional de español:
   Pretérito indefinido vs. pretérito imperfecto,
   con unos 50 verbos distintos de alta frecuencia,
   mezclados, más frases con dos huecos (las cuatro
   combinaciones: indefinido+imperfecto, imperfecto+indefinido,
   indefinido+indefinido, imperfecto+imperfecto).
========================================================== */

const spanishIndefinidoImperfecto = {

    language: "es-ii",

    title: "Indefinido vs. Imperfecto",

    description:
        "Completa el texto con la forma correcta: pretérito indefinido o pretérito imperfecto.",

    ui: {

        check: "✓ Comprobar",

        solution: "📖 Soluciones",

        reset: "🔄 Reiniciar"

    },

    labels: {

        signal: "💡 Indicador",

        tense: "💡 Tiempo verbal",

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
before:"La empresa ",
after:" un nuevo edificio el año pasado.",
verb:"construir",
answer:"construyó",
signal:"el año pasado",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Ella ",
after:" toda la noche para llegar a tiempo.",
verb:"conducir",
answer:"condujo",
signal:"acción puntual",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Todos los días él ",
after:" por el parque antes del desayuno.",
verb:"correr",
answer:"corría",
signal:"todos los días",
tense:"Pretérito imperfecto",
formation:"hablaba"
},

{
before:"Ayer ella ",
after:" con su jefe.",
verb:"hablar",
answer:"habló",
signal:"ayer",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Mis padres ",
after:" a visitarme el mes pasado.",
verb:"venir",
answer:"vinieron",
signal:"el mes pasado",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Mientras ella ",
mid:" el periódico, alguien ",
after:" a la puerta.",
verb:"leer / llamar",
answer:"leía",
answer2:"llamó",
signal:"mientras + imperfecto, ... + indefinido",
tense:"Imperfecto + Indefinido (una acción de fondo es interrumpida)",
formation:"hablaba / habló"
},

{
before:"Antiguamente la gente ",
after:" que la Tierra era plana.",
verb:"creer",
answer:"creía",
signal:"antiguamente",
tense:"Pretérito imperfecto",
formation:"hablaba"
},

{
before:"De pequeño, él ",
after:" en el coro todos los domingos.",
verb:"cantar",
answer:"cantaba",
signal:"de pequeño",
tense:"Pretérito imperfecto",
formation:"hablaba"
},

{
before:"Cuando yo ",
mid:" de casa, todavía ",
after:".",
verb:"salir / nevar",
answer:"salí",
answer2:"nevaba",
signal:"cuando + indefinido, ... + imperfecto",
tense:"Indefinido + Imperfecto (acción puntual interrumpe el fondo)",
formation:"habló / hablaba"
},

{
before:"Ella siempre ",
after:" en su familia.",
verb:"pensar",
answer:"pensaba",
signal:"siempre",
tense:"Pretérito imperfecto",
formation:"hablaba"
},

{
before:"El escritor ",
after:" en 1990.",
verb:"morir",
answer:"murió",
signal:"fecha concreta",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Ella ",
after:" el periódico esta mañana.",
verb:"leer",
answer:"leyó",
signal:"esta mañana",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Cada noche los niños ",
after:" la radio.",
verb:"escuchar",
answer:"escuchaban",
signal:"cada noche",
tense:"Pretérito imperfecto",
formation:"hablaba"
},

{
before:"El niño ",
after:" en el parque ayer.",
verb:"jugar",
answer:"jugó",
signal:"ayer",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Anoche ellos ",
after:" paella.",
verb:"comer",
answer:"comieron",
signal:"anoche",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Antes ella ",
after:" más tímida.",
verb:"parecer",
answer:"parecía",
signal:"antes",
tense:"Pretérito imperfecto",
formation:"hablaba"
},

{
before:"De repente él ",
after:" la verdad.",
verb:"decir",
answer:"dijo",
signal:"de repente",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Mi abuela siempre ",
after:" un sombrero.",
verb:"llevar",
answer:"llevaba",
signal:"siempre",
tense:"Pretérito imperfecto",
formation:"hablaba"
},

{
before:"Ayer ella ",
after:" las llaves y las encontró.",
verb:"buscar",
answer:"buscó",
signal:"ayer",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Finalmente ella ",
after:" terminar el proyecto.",
verb:"poder",
answer:"pudo",
signal:"finalmente",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"El perro nos ",
after:" desde la ventana.",
verb:"mirar",
answer:"miraba",
signal:"acción de fondo",
tense:"Pretérito imperfecto",
formation:"hablaba"
},

{
before:"El verano pasado nosotros ",
after:" a Barcelona.",
verb:"ir",
answer:"fuimos",
signal:"el verano pasado",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Ella ",
after:" la mesa antes de la cena.",
verb:"poner",
answer:"puso",
signal:"acción puntual",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"De niña, ella siempre ",
after:" con ser astronauta.",
verb:"soñar",
answer:"soñaba",
signal:"de niña",
tense:"Pretérito imperfecto",
formation:"hablaba"
},

{
before:"Ella ",
after:" mucho miedo durante el terremoto.",
verb:"sentir",
answer:"sintió",
signal:"acción puntual",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"La reunión ",
after:" a las nueve.",
verb:"empezar",
answer:"empezó",
signal:"hora concreta",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Ella se ",
mid:" y ",
after:" el desayuno.",
verb:"levantarse / preparar",
answer:"levantó",
answer2:"preparó",
signal:"y (secuencia de acciones completadas)",
tense:"Indefinido + Indefinido (acciones consecutivas)",
formation:"habló / habló"
},

{
before:"Antes él siempre ",
after:" la puerta abierta.",
verb:"dejar",
answer:"dejaba",
signal:"siempre",
tense:"Pretérito imperfecto",
formation:"hablaba"
},

{
before:"Ella siempre me ",
after:" en la estación.",
verb:"esperar",
answer:"esperaba",
signal:"siempre",
tense:"Pretérito imperfecto",
formation:"hablaba"
},

{
before:"Él ",
after:" flores para su madre ayer.",
verb:"traer",
answer:"trajo",
signal:"ayer",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"El profesor ",
after:" la pregunta dos veces.",
verb:"repetir",
answer:"repitió",
signal:"acción puntual",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Mi padre ",
after:" en una fábrica cuando yo era niño.",
verb:"trabajar",
answer:"trabajaba",
signal:"cuando yo era niño",
tense:"Pretérito imperfecto",
formation:"hablaba"
},

{
before:"Ella ",
after:" la tarea ayer.",
verb:"hacer",
answer:"hizo",
signal:"ayer",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Mientras los niños ",
mid:", la profesora ",
after:" exámenes.",
verb:"dibujar / corregir",
answer:"dibujaban",
answer2:"corregía",
signal:"mientras (acciones simultáneas)",
tense:"Imperfecto + Imperfecto (acciones simultáneas de fondo)",
formation:"hablaba / hablaba"
},

{
before:"Él no ",
after:" a nadie en la ciudad al principio.",
verb:"conocer",
answer:"conocía",
signal:"al principio",
tense:"Pretérito imperfecto",
formation:"hablaba"
},

{
before:"Cuando salimos de casa, ",
after:" mucho.",
verb:"llover",
answer:"llovía",
signal:"acción de fondo interrumpida",
tense:"Pretérito imperfecto",
formation:"hablaba"
},

{
before:"El año pasado ella ",
after:" en Madrid.",
verb:"vivir",
answer:"vivió",
signal:"el año pasado",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Ayer él ",
after:" salir temprano.",
verb:"querer",
answer:"quiso",
signal:"ayer",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Cuando ella ",
mid:" a casa, sus padres ya ",
after:".",
verb:"llegar / dormir",
answer:"llegó",
answer2:"dormían",
signal:"cuando + indefinido, ... + imperfecto",
tense:"Indefinido + Imperfecto (acción puntual interrumpe el fondo)",
formation:"habló / hablaba"
},

{
before:"Ella ",
after:" las instrucciones al pie de la letra.",
verb:"seguir",
answer:"siguió",
signal:"acción puntual",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Ella ",
after:" un café en el bar.",
verb:"pedir",
answer:"pidió",
signal:"acción puntual",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"De joven, ella ",
after:" en la universidad de Salamanca.",
verb:"estudiar",
answer:"estudiaba",
signal:"de joven",
tense:"Pretérito imperfecto",
formation:"hablaba"
},

{
before:"Ayer tú ",
after:" mucho trabajo.",
verb:"tener",
answer:"tuviste",
signal:"ayer",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Él ",
mid:" la puerta y ",
after:" a sus invitados.",
verb:"abrir / saludar",
answer:"abrió",
answer2:"saludó",
signal:"y (secuencia de acciones completadas)",
tense:"Indefinido + Indefinido (acciones consecutivas)",
formation:"habló / habló"
},

{
before:"Anoche él ",
after:" solo cinco horas.",
verb:"dormir",
answer:"durmió",
signal:"anoche",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Antes ella no ",
after:" este idioma.",
verb:"entender",
answer:"entendía",
signal:"antes",
tense:"Pretérito imperfecto",
formation:"hablaba"
},

{
before:"Ella le ",
after:" un regalo ayer.",
verb:"dar",
answer:"dio",
signal:"ayer",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Mientras el niño ",
mid:" en el parque, ",
after:" a llover.",
verb:"jugar / empezar",
answer:"jugaba",
answer2:"empezó",
signal:"mientras + imperfecto, ... + indefinido",
tense:"Imperfecto + Indefinido (una acción de fondo es interrumpida)",
formation:"hablaba / habló"
},

{
before:"Mi abuela siempre ",
after:" pasteles los domingos.",
verb:"cocinar",
answer:"cocinaba",
signal:"siempre",
tense:"Pretérito imperfecto",
formation:"hablaba"
},

{
before:"De niño, él ",
after:" muy travieso.",
verb:"ser",
answer:"era",
signal:"de niño",
tense:"Pretérito imperfecto",
formation:"hablaba"
},

{
before:"De repente ellos ",
after:" la noticia.",
verb:"saber",
answer:"supieron",
signal:"de repente",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"El tren ",
after:" tarde ayer.",
verb:"llegar",
answer:"llegó",
signal:"ayer",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Todos los veranos nosotros ",
after:" a la playa.",
verb:"viajar",
answer:"viajábamos",
signal:"todos los veranos",
tense:"Pretérito imperfecto",
formation:"hablaba"
},

{
before:"De repente ellos ",
after:" un ruido extraño.",
verb:"oír",
answer:"oyeron",
signal:"de repente",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Anoche nosotros ",
after:" en el cine.",
verb:"estar",
answer:"estuvimos",
signal:"anoche",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Mientras él ",
mid:" la pared, ella ",
after:" la cocina.",
verb:"pintar / limpiar",
answer:"pintaba",
answer2:"limpiaba",
signal:"mientras (acciones simultáneas)",
tense:"Imperfecto + Imperfecto (acciones simultáneas de fondo)",
formation:"hablaba / hablaba"
},

{
before:"Anoche yo ",
after:" una película.",
verb:"ver",
answer:"vi",
signal:"anoche",
tense:"Pretérito indefinido",
formation:"habló"
},

{
before:"Nosotros siempre ",
after:" juntos los domingos.",
verb:"cenar",
answer:"cenábamos",
signal:"siempre",
tense:"Pretérito imperfecto",
formation:"hablaba"
}

]

};
