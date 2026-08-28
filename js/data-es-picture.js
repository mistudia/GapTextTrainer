/* ==========================================================
   js/data-es-picture.js
   Ejercicio de descripción de imagen (español):
   hay (existencia), estar + gerundio (progresivo),
   preposiciones de lugar, adjetivos.
   Usa la misma imagen que la versión en inglés:
   images/park-scene.png

   Orden: de lo general (cielo, ciudad, lago) a lo concreto
   (personas, animales, objetos). Los puntos gramaticales
   están mezclados en vez de agrupados por tipo.
========================================================== */

const spanishPictureExercise = {

    language: "es-picture",

    title: "Describe la imagen",

    description:
        "Mira la imagen y completa las frases sobre ella.",

    image: "images/park-scene.png",

    imageAlt: "Un parque con un cartel de indicaciones, un parque infantil, un lago con una fuente, y personas paseando, corriendo y de picnic",

    ui: {

        check: "✓ Comprobar",

        solution: "📖 Soluciones",

        reset: "🔄 Reiniciar"

    },

    labels: {

        signal: "💡 Indicador",

        tense: "💡 Punto gramatical",

        formation: "💡 Patrón"

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
before:"El cielo está ",
after:" con algunas nubes blancas.",
verb:"adjetivo",
answer:"azul",
signal:"color",
tense:"Adjetivo (descripción)",
formation:"estar + adjetivo"
},

{
before:"",
after:" un pájaro muy alto en el cielo.",
verb:"hay",
answer:"Hay",
signal:"existencia (sustantivo indefinido)",
tense:"Hay (existencia)",
formation:"hay + sustantivo"
},

{
before:"El pájaro ",
after:" sobre el parque.",
verb:"volar",
answer:"está volando",
signal:"acción en progreso",
tense:"Estar + gerundio (progresivo)",
formation:"está/están + gerundio"
},

{
before:"La ciudad está ",
after:" los árboles, a lo lejos.",
verb:"preposición",
answer:"detrás de",
signal:"posición: en la parte de atrás",
tense:"Preposición de lugar",
formation:"detrás de"
},

{
before:"",
after:" un lago al fondo del parque.",
verb:"hay",
answer:"Hay",
signal:"existencia (sustantivo indefinido)",
tense:"Hay (existencia)",
formation:"hay + sustantivo"
},

{
before:"",
after:" una fuente en medio del lago.",
verb:"hay",
answer:"Hay",
signal:"existencia (sustantivo indefinido)",
tense:"Hay (existencia)",
formation:"hay + sustantivo"
},

{
before:"El lago ",
after:" grande y azul.",
verb:"adjetivo",
answer:"es",
signal:"característica permanente",
tense:"Ser + adjetivo (característica)",
formation:"ser + adjetivo"
},

{
before:"Unos patos ",
after:" en el lago.",
verb:"nadar",
answer:"están nadando",
signal:"acción en progreso (sujeto plural)",
tense:"Estar + gerundio (progresivo)",
formation:"está/están + gerundio"
},

{
before:"El parque infantil ",
after:" cerca del lago.",
verb:"verbo",
answer:"está",
signal:"ubicación",
tense:"Estar (ubicación)",
formation:"está/están"
},

{
before:"",
after:" un parque infantil con un tobogán y columpios.",
verb:"hay",
answer:"Hay",
signal:"existencia (sustantivo indefinido)",
tense:"Hay (existencia)",
formation:"hay + sustantivo"
},

{
before:"Algunos niños ",
after:" en el parque infantil.",
verb:"jugar",
answer:"están jugando",
signal:"acción en progreso (sujeto plural)",
tense:"Estar + gerundio (progresivo)",
formation:"está/están + gerundio"
},

{
before:"Una familia ",
after:" un picnic en el césped.",
verb:"hacer",
answer:"está haciendo",
signal:"acción en progreso",
tense:"Estar + gerundio (progresivo)",
formation:"está/están + gerundio"
},

{
before:"La manta de picnic está ",
after:" del parque infantil.",
verb:"preposición",
answer:"al lado",
signal:"posición: junto a",
tense:"Preposición de lugar",
formation:"al lado de"
},

{
before:"",
after:" un cartel con indicaciones hacia el parque infantil y el lago.",
verb:"hay",
answer:"Hay",
signal:"existencia (sustantivo indefinido)",
tense:"Hay (existencia)",
formation:"hay + sustantivo"
},

{
before:"El cartel ",
after:" debajo de un árbol grande.",
verb:"verbo",
answer:"está",
signal:"ubicación",
tense:"Estar (ubicación)",
formation:"está/están"
},

{
before:"Un perro pequeño ",
after:" el suelo cerca del cartel.",
verb:"oler",
answer:"está oliendo",
signal:"acción en progreso",
tense:"Estar + gerundio (progresivo)",
formation:"está/están + gerundio"
},

{
before:"Las flores del camino ",
after:" pequeñas y coloridas.",
verb:"adjetivo",
answer:"son",
signal:"tamaño/color",
tense:"Adjetivo (descripción)",
formation:"ser + adjetivo"
},

{
before:"Una mujer y su hija ",
after:" por el camino.",
verb:"caminar",
answer:"están caminando",
signal:"acción en progreso",
tense:"Estar + gerundio (progresivo)",
formation:"está/están + gerundio"
},

{
before:"Su perro ",
after:" a su lado, atado con una correa.",
verb:"caminar",
answer:"está caminando",
signal:"acción en progreso",
tense:"Estar + gerundio (progresivo)",
formation:"está/están + gerundio"
},

{
before:"La papelera está ",
after:" la farola.",
verb:"preposición",
answer:"al lado de",
signal:"posición: junto a",
tense:"Preposición de lugar",
formation:"al lado de"
},

{
before:"El banco ",
after:" de madera.",
verb:"material",
answer:"es",
signal:"material",
tense:"Ser + sustantivo (material)",
formation:"ser de + material"
},

{
before:"Un hombre ",
after:" en un banco.",
verb:"sentarse",
answer:"está sentado",
signal:"estado resultante",
tense:"Estar + participio (estado)",
formation:"está/están + participio"
},

{
before:"Él ",
after:" un libro.",
verb:"leer",
answer:"está leyendo",
signal:"acción en progreso",
tense:"Estar + gerundio (progresivo)",
formation:"está/están + gerundio"
},

{
before:"Su mochila ",
after:" al lado del banco.",
verb:"verbo",
answer:"está",
signal:"ubicación",
tense:"Estar (ubicación)",
formation:"está/están"
},

{
before:"Dos corredores ",
after:" por el camino cerca del lago.",
verb:"correr",
answer:"están corriendo",
signal:"acción en progreso (sujeto plural)",
tense:"Estar + gerundio (progresivo)",
formation:"está/están + gerundio"
}

]

};
