/* ==========================================================
   js/data-es-serestar.js
   Ejercicio adicional de español: Ser vs. Estar,
   mezclado, más frases con dos huecos (las cuatro
   combinaciones: ser+estar, estar+ser, ser+ser, estar+estar).
========================================================== */

const spanishSerEstar = {

    language: "es-serestar",

    title: "Ser vs. Estar",

    description:
        "Completa el texto con la forma correcta de ser o estar.",

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
before:"Ellos ",
after:" estudiando para el examen.",
verb:"ser/estar",
answer:"están",
signal:"acción en progreso",
tense:"ESTAR – progresivo (gerundio)",
formation:"está/están"
},

{
before:"Las ventanas ",
after:" abiertas.",
verb:"ser/estar",
answer:"están",
signal:"resultado de una acción",
tense:"ESTAR – resultado (participio)",
formation:"está/están"
},

{
before:"El niño ",
mid:" enfermo hoy porque ",
after:" muy pequeño todavía y se resfría fácilmente.",
verb:"ser/estar",
answer:"está",
answer2:"es",
signal:"estar (estado) + ser (característica)",
tense:"ESTAR + SER",
formation:"está + es"
},

{
before:"Ellos ",
after:" de Argentina.",
verb:"ser/estar",
answer:"son",
signal:"nacionalidad/origen",
tense:"SER – nacionalidad y origen",
formation:"es/son"
},

{
before:"Ellas ",
mid:" hermanas y ",
after:" de Colombia.",
verb:"ser/estar",
answer:"son",
answer2:"son",
signal:"ser (relación) + ser (origen)",
tense:"SER + SER",
formation:"son + son"
},

{
before:"Nosotros ",
after:" cinco en la familia.",
verb:"ser/estar",
answer:"somos",
signal:"cantidad/número",
tense:"SER – cantidad",
formation:"es/son"
},

{
before:"Mi hermano ",
mid:" médico, pero hoy ",
after:" enfermo y no puede trabajar.",
verb:"ser/estar",
answer:"es",
answer2:"está",
signal:"ser (profesión) + estar (estado temporal)",
tense:"SER + ESTAR",
formation:"es + está"
},

{
before:"Ella ",
after:" muy contenta hoy.",
verb:"ser/estar",
answer:"está",
signal:"estado emocional temporal",
tense:"ESTAR – estado emocional",
formation:"está/están"
},

{
before:"Yo ",
after:" alemán.",
verb:"ser/estar",
answer:"soy",
signal:"nacionalidad/origen",
tense:"SER – nacionalidad y origen",
formation:"es/son"
},

{
before:"Después del viaje, ellos ",
after:" muy cansados.",
verb:"ser/estar",
answer:"están",
signal:"estado temporal",
tense:"ESTAR – estado temporal",
formation:"está/están"
},

{
before:"La boda ",
after:" en el jardín.",
verb:"ser/estar",
answer:"es",
signal:"evento (tener lugar)",
tense:"SER – eventos",
formation:"es/son"
},

{
before:"Los niños ",
after:" en el jardín.",
verb:"ser/estar",
answer:"están",
signal:"ubicación",
tense:"ESTAR – ubicación",
formation:"está/están"
},

{
before:"Ana ",
after:" profesora de inglés.",
verb:"ser/estar",
answer:"es",
signal:"identidad/profesión",
tense:"SER – identidad y profesión",
formation:"es/son"
},

{
before:"Los estudiantes ",
mid:" nerviosos porque ",
after:" esperando los resultados del examen.",
verb:"ser/estar",
answer:"están",
answer2:"están",
signal:"estar (emoción) + estar (progresivo)",
tense:"ESTAR + ESTAR",
formation:"están + están"
},

{
before:"Mi tío ",
after:" católico.",
verb:"ser/estar",
answer:"es",
signal:"religión",
tense:"SER – religión",
formation:"es/son"
},

{
before:"El museo ",
after:" en el centro de la ciudad.",
verb:"ser/estar",
answer:"está",
signal:"ubicación",
tense:"ESTAR – ubicación",
formation:"está/están"
},

{
before:"Él ",
after:" enfadado porque llegó tarde.",
verb:"ser/estar",
answer:"está",
signal:"estado emocional temporal",
tense:"ESTAR – estado emocional",
formation:"está/están"
},

{
before:"Este libro ",
after:" de mi hermano.",
verb:"ser/estar",
answer:"es",
signal:"posesión",
tense:"SER – posesión",
formation:"es/son"
},

{
before:"Los niños ",
after:" muy curiosos por naturaleza.",
verb:"ser/estar",
answer:"son",
signal:"característica permanente",
tense:"SER – característica permanente",
formation:"es/son"
},

{
before:"Nosotros ",
after:" aprendiendo español.",
verb:"ser/estar",
answer:"estamos",
signal:"acción en progreso",
tense:"ESTAR – progresivo (gerundio)",
formation:"está/están"
},

{
before:"Ella ",
after:" alta y delgada.",
verb:"ser/estar",
answer:"es",
signal:"descripción física permanente",
tense:"SER – descripción física",
formation:"es/son"
},

{
before:"Mis padres ",
after:" de vacaciones en Italia.",
verb:"ser/estar",
answer:"están",
signal:"ubicación temporal",
tense:"ESTAR – ubicación temporal",
formation:"está/están"
},

{
before:"Ella ",
after:" nerviosa antes del examen.",
verb:"ser/estar",
answer:"está",
signal:"estado emocional temporal",
tense:"ESTAR – estado emocional",
formation:"está/están"
},

{
before:"El cielo ",
after:" azul.",
verb:"ser/estar",
answer:"es",
signal:"característica inherente",
tense:"SER – característica inherente",
formation:"es/son"
},

{
before:"Mi padre ",
mid:" ingeniero y ",
after:" una persona muy trabajadora.",
verb:"ser/estar",
answer:"es",
answer2:"es",
signal:"ser (profesión) + ser (carácter)",
tense:"SER + SER",
formation:"es + es"
},

{
before:"El supermercado ",
after:" cerca de mi casa.",
verb:"ser/estar",
answer:"está",
signal:"ubicación",
tense:"ESTAR – ubicación",
formation:"está/están"
},

{
before:"Ana ",
after:" casada desde hace dos años.",
verb:"ser/estar",
answer:"está",
signal:"estado civil",
tense:"ESTAR – estado civil",
formation:"está/están"
},

{
before:"Mis padres ",
after:" médicos.",
verb:"ser/estar",
answer:"son",
signal:"identidad/profesión",
tense:"SER – identidad y profesión",
formation:"es/son"
},

{
before:"Este vino ",
after:" de Rioja.",
verb:"ser/estar",
answer:"es",
signal:"origen/procedencia",
tense:"SER – origen",
formation:"es/son"
},

{
before:"Yo ",
after:" trabajando en un proyecto nuevo.",
verb:"ser/estar",
answer:"estoy",
signal:"acción en progreso",
tense:"ESTAR – progresivo (gerundio)",
formation:"está/están"
},

{
before:"Mi abuelo ",
after:" muy generoso.",
verb:"ser/estar",
answer:"es",
signal:"característica permanente",
tense:"SER – característica permanente",
formation:"es/son"
},

{
before:"Hoy ",
after:" el quince de mayo.",
verb:"ser/estar",
answer:"es",
signal:"fecha",
tense:"SER – fecha",
formation:"es/son"
},

{
before:"La farmacia ",
after:" al lado del banco.",
verb:"ser/estar",
answer:"está",
signal:"ubicación",
tense:"ESTAR – ubicación",
formation:"está/están"
},

{
before:"Ella ",
after:" mi mejor amiga.",
verb:"ser/estar",
answer:"es",
signal:"relación",
tense:"SER – relación",
formation:"es/son"
},

{
before:"La puerta ",
after:" cerrada.",
verb:"ser/estar",
answer:"está",
signal:"resultado de una acción",
tense:"ESTAR – resultado (participio)",
formation:"está/están"
},

{
before:"Estas llaves ",
after:" mías.",
verb:"ser/estar",
answer:"son",
signal:"posesión",
tense:"SER – posesión",
formation:"es/son"
},

{
before:"La mesa ",
after:" de madera.",
verb:"ser/estar",
answer:"es",
signal:"material",
tense:"SER – material",
formation:"es/son"
},

{
before:"La casa ",
mid:" muy limpia porque mi madre ",
after:" ordenando todo el día.",
verb:"ser/estar",
answer:"está",
answer2:"está",
signal:"estar (resultado) + estar (progresivo)",
tense:"ESTAR + ESTAR",
formation:"está + está"
},

{
before:"Hoy ",
after:" nublado.",
verb:"ser/estar",
answer:"está",
signal:"estado del tiempo",
tense:"ESTAR – estado del tiempo",
formation:"está/están"
},

{
before:"Madrid ",
after:" en el centro de España.",
verb:"ser/estar",
answer:"está",
signal:"ubicación",
tense:"ESTAR – ubicación",
formation:"está/están"
},

{
before:"",
after:" la una de la madrugada.",
verb:"ser/estar",
answer:"Es",
signal:"hora",
tense:"SER – hora",
formation:"es/son"
},

{
before:"Ana ",
mid:" de España, pero ahora ",
after:" viviendo en Alemania.",
verb:"ser/estar",
answer:"es",
answer2:"está",
signal:"ser (origen) + estar (progresivo)",
tense:"SER + ESTAR",
formation:"es + está"
},

{
before:"",
after:" las tres de la tarde.",
verb:"ser/estar",
answer:"Son",
signal:"hora",
tense:"SER – hora",
formation:"es/son"
},

{
before:"Mi teléfono ",
after:" roto.",
verb:"ser/estar",
answer:"está",
signal:"estado temporal de un objeto",
tense:"ESTAR – estado temporal",
formation:"está/están"
},

{
before:"Ellos ",
mid:" cansados porque la conferencia ",
after:" muy larga.",
verb:"ser/estar",
answer:"están",
answer2:"es",
signal:"estar (estado) + ser (característica)",
tense:"ESTAR + SER",
formation:"está + es"
},

{
before:"El trabajo ya ",
after:" terminado.",
verb:"ser/estar",
answer:"está",
signal:"resultado de una acción",
tense:"ESTAR – resultado (participio)",
formation:"está/están"
},

{
before:"Aquel hombre ",
after:" el director de la empresa.",
verb:"ser/estar",
answer:"es",
signal:"identidad",
tense:"SER – identidad",
formation:"es/son"
},

{
before:"Mi abuela ",
after:" enferma esta semana.",
verb:"ser/estar",
answer:"está",
signal:"estado de salud",
tense:"ESTAR – estado de salud",
formation:"está/están"
}

]

};
