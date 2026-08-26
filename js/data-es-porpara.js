/* ==========================================================
   js/data-es-porpara.js
   Ejercicio adicional de español:
   Por vs. para (elección de preposición según la regla),
   mezclado, más frases con dos huecos (las cuatro
   combinaciones: por+para, para+por, por+por, para+para).
========================================================== */

const spanishPorPara = {

    language: "es-porpara",

    title: "Por vs. Para",

    description:
        "Completa el texto con la preposición correcta: por o para.",

    ui: {

        check: "✓ Comprobar",

        solution: "📖 Soluciones",

        reset: "🔄 Reiniciar"

    },

    labels: {

        signal: "💡 Indicador",

        tense: "💡 Regla",

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
before:"Voy a la tienda ",
after:" pan.",
verb:"por/para",
answer:"por",
signal:"ir en busca de algo",
tense:"POR – en busca de",
formation:"ir por algo"
},

{
before:"Nos vamos ",
after:" la playa este fin de semana.",
verb:"por/para",
answer:"para",
signal:"destino/dirección",
tense:"PARA – destino",
formation:"ir para + lugar"
},

{
before:"Ella se preocupa mucho ",
after:" su familia.",
verb:"por/para",
answer:"por",
signal:"preocuparse por algo/alguien",
tense:"POR – expresión fija (preocuparse por)",
formation:"preocuparse por"
},

{
before:"Este armario es ",
after:" guardar la ropa de invierno.",
verb:"por/para",
answer:"para",
signal:"uso o propósito",
tense:"PARA – uso/propósito",
formation:"para + infinitivo"
},

{
before:"Te llamo ",
after:" teléfono esta noche.",
verb:"por/para",
answer:"por",
signal:"medio de comunicación",
tense:"POR – medio",
formation:"por teléfono/correo"
},

{
before:"",
after:" ser tan joven, tiene mucha experiencia.",
verb:"por/para",
answer:"Para",
signal:"comparación/contraste",
tense:"PARA – comparación",
formation:"para + sustantivo/infinitivo"
},

{
before:"Compré este libro ",
after:" diez euros.",
verb:"por/para",
answer:"por",
signal:"precio o intercambio",
tense:"POR – intercambio/precio",
formation:"por + precio"
},

{
before:"El coche iba a cien kilómetros ",
after:" hora.",
verb:"por/para",
answer:"por",
signal:"proporción/velocidad",
tense:"POR – proporción",
formation:"kilómetros por hora"
},

{
before:"Compré flores ",
after:" mi madre.",
verb:"por/para",
answer:"para",
signal:"destinatario",
tense:"PARA – destinatario",
formation:"para + persona"
},

{
before:"Cancelaron el vuelo ",
after:" el mal tiempo.",
verb:"por/para",
answer:"por",
signal:"causa o motivo",
tense:"POR – causa o motivo",
formation:"por + causa"
},

{
before:"Necesito el informe ",
after:" el lunes.",
verb:"por/para",
answer:"para",
signal:"plazo o fecha límite",
tense:"PARA – plazo",
formation:"para + fecha"
},

{
before:"Cambié mi coche viejo ",
after:" uno nuevo.",
verb:"por/para",
answer:"por",
signal:"intercambio",
tense:"POR – intercambio/precio",
formation:"cambiar algo por algo"
},

{
before:"Llamé al médico ",
after:" pedir una cita.",
verb:"por/para",
answer:"para",
signal:"finalidad/objetivo",
tense:"PARA – finalidad",
formation:"para + infinitivo"
},

{
before:"Voté ",
after:" el candidato progresista.",
verb:"por/para",
answer:"por",
signal:"a favor de",
tense:"POR – a favor de",
formation:"votar por"
},

{
before:"Vivimos en México ",
after:" tres años.",
verb:"por/para",
answer:"por",
signal:"duración de tiempo",
tense:"POR – duración",
formation:"por + periodo de tiempo"
},

{
before:"Salimos ",
mid:" Madrid ",
after:" la autopista.",
verb:"por/para",
answer:"para",
answer2:"por",
signal:"para (destino) + por (tránsito)",
tense:"PARA + POR",
formation:"para + por"
},

{
before:"Estudio mucho ",
after:" aprobar el examen.",
verb:"por/para",
answer:"para",
signal:"finalidad/objetivo",
tense:"PARA – finalidad",
formation:"para + infinitivo"
},

{
before:"Este regalo es ",
mid:" ti, ",
after:" que sepas cuánto te quiero.",
verb:"por/para",
answer:"para",
answer2:"para",
signal:"para (destinatario) + para que (finalidad)",
tense:"PARA + PARA",
formation:"para + para"
},

{
before:"Gracias ",
after:" tu ayuda.",
verb:"por/para",
answer:"por",
signal:"agradecimiento",
tense:"POR – causa/motivo (agradecimiento)",
formation:"gracias por"
},

{
before:"Necesito una taza ",
after:" el café.",
verb:"por/para",
answer:"para",
signal:"uso o propósito de un objeto",
tense:"PARA – uso/propósito",
formation:"una taza para café"
},

{
before:"Tres ",
after:" cuatro son doce.",
verb:"por/para",
answer:"por",
signal:"multiplicación",
tense:"POR – multiplicación",
formation:"tres por cuatro"
},

{
before:"El libro fue escrito ",
after:" Cervantes.",
verb:"por/para",
answer:"por",
signal:"voz pasiva (agente)",
tense:"POR – agente de la pasiva",
formation:"ser + participio + por"
},

{
before:"Viajamos ",
mid:" toda Europa ",
after:" tres meses.",
verb:"por/para",
answer:"por",
answer2:"por",
signal:"por (tránsito) + por (duración)",
tense:"POR + POR",
formation:"por + por"
},

{
before:"Salimos ",
after:" Madrid mañana.",
verb:"por/para",
answer:"para",
signal:"destino/dirección",
tense:"PARA – destino",
formation:"salir para + lugar"
},

{
before:"",
after:" mí, este problema es muy difícil.",
verb:"por/para",
answer:"Para",
signal:"opinión personal",
tense:"PARA – opinión",
formation:"para mí/ti/él..."
},

{
before:"No pudimos salir ",
after:" la lluvia.",
verb:"por/para",
answer:"por",
signal:"causa o motivo",
tense:"POR – causa o motivo",
formation:"por + causa"
},

{
before:"Mi hermano trabaja ",
after:" el gobierno.",
verb:"por/para",
answer:"para",
signal:"trabajar para alguien/algo",
tense:"PARA – empleo",
formation:"trabajar para"
},

{
before:"Firmé el contrato ",
after:" mi jefe porque estaba de viaje.",
verb:"por/para",
answer:"por",
signal:"en lugar de alguien",
tense:"POR – sustitución",
formation:"por + persona"
},

{
before:"Ahorro dinero ",
after:" comprar un coche nuevo.",
verb:"por/para",
answer:"para",
signal:"finalidad/objetivo",
tense:"PARA – finalidad",
formation:"para + infinitivo"
},

{
before:"",
after:" ser un principiante, juega muy bien al tenis.",
verb:"por/para",
answer:"Para",
signal:"comparación/contraste",
tense:"PARA – comparación",
formation:"para + sustantivo/infinitivo"
},

{
before:"Nos escribimos ",
after:" correo electrónico.",
verb:"por/para",
answer:"por",
signal:"medio de comunicación",
tense:"POR – medio",
formation:"por correo"
},

{
before:"",
after:" nosotros, la calidad es más importante que el precio.",
verb:"por/para",
answer:"Para",
signal:"opinión personal",
tense:"PARA – opinión",
formation:"para mí/ti/él..."
},

{
before:"Estudié español ",
after:" dos años.",
verb:"por/para",
answer:"por",
signal:"duración de tiempo",
tense:"POR – duración",
formation:"por + periodo de tiempo"
},

{
before:"El trabajo debe estar listo ",
after:" finales de mes.",
verb:"por/para",
answer:"para",
signal:"plazo o fecha límite",
tense:"PARA – plazo",
formation:"para + fecha"
},

{
before:"Compré este regalo ",
mid:" ti ",
after:" diez euros.",
verb:"por/para",
answer:"para",
answer2:"por",
signal:"para (destinatario) + por (precio)",
tense:"PARA + POR",
formation:"para + por"
},

{
before:"Pagué treinta euros ",
mid:" el regalo que compré ",
after:" mi hermana.",
verb:"por/para",
answer:"por",
answer2:"para",
signal:"por (precio) + para (destinatario)",
tense:"POR + PARA",
formation:"por + para"
},

{
before:"Dejé una nota ",
after:" el profesor.",
verb:"por/para",
answer:"para",
signal:"destinatario",
tense:"PARA – destinatario",
formation:"para + persona"
},

{
before:"Ella trabaja ",
after:" una empresa multinacional.",
verb:"por/para",
answer:"para",
signal:"trabajar para alguien/algo",
tense:"PARA – empleo",
formation:"trabajar para"
},

{
before:"Nos vemos ",
after:" la tarde.",
verb:"por/para",
answer:"por",
signal:"tiempo aproximado",
tense:"POR – tiempo aproximado",
formation:"por la mañana/tarde/noche"
},

{
before:"El vuelo sale ",
after:" Buenos Aires a las ocho.",
verb:"por/para",
answer:"para",
signal:"destino/dirección",
tense:"PARA – destino",
formation:"salir para + lugar"
},

{
before:"Tenemos que terminar el proyecto ",
after:" el viernes.",
verb:"por/para",
answer:"para",
signal:"plazo o fecha límite",
tense:"PARA – plazo",
formation:"para + fecha"
},

{
before:"Te llamé ",
mid:" teléfono ",
after:" la mañana, pero no contestaste.",
verb:"por/para",
answer:"por",
answer2:"por",
signal:"por (medio) + por (tiempo aproximado)",
tense:"POR + POR",
formation:"por + por"
},

{
before:"El tren pasa ",
after:" varios túneles.",
verb:"por/para",
answer:"por",
signal:"movimiento a través de un lugar",
tense:"POR – lugar de tránsito",
formation:"por + lugar"
},

{
before:"Caminamos ",
mid:" el parque ",
after:" llegar más rápido a casa.",
verb:"por/para",
answer:"por",
answer2:"para",
signal:"por (tránsito) + para (finalidad)",
tense:"POR + PARA",
formation:"por + para"
},

{
before:"Caminamos ",
after:" el parque.",
verb:"por/para",
answer:"por",
signal:"movimiento a través de un lugar",
tense:"POR – lugar de tránsito",
formation:"por + lugar"
},

{
before:"Este regalo es ",
after:" ti.",
verb:"por/para",
answer:"para",
signal:"destinatario",
tense:"PARA – destinatario",
formation:"para + persona"
},

{
before:"La ciudad fue fundada ",
after:" los romanos.",
verb:"por/para",
answer:"por",
signal:"voz pasiva (agente)",
tense:"POR – agente de la pasiva",
formation:"fue fundada por"
},

{
before:"Trabajo ",
mid:" una empresa alemana ",
after:" pagar mis estudios.",
verb:"por/para",
answer:"para",
answer2:"para",
signal:"para (empleo) + para (finalidad)",
tense:"PARA + PARA",
formation:"para + para"
}

]

};
