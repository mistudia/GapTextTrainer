/* ==========================================================
   js/data-en-picture.js
   Picture description exercise (English):
   there is/are, present continuous, prepositions of place,
   adjectives - based on images/park-scene.png

   Order: from the big picture (sky, city, lake) down to
   small details (people, animals, objects). Grammar points
   are mixed throughout rather than grouped by type.
========================================================== */

const englishPictureExercise = {

    language: "en-picture",

    title: "Describe the Picture",

    description:
        "Look at the picture and complete the sentences about it.",

    image: "images/park-scene.png",

    imageAlt: "A busy city park with a signpost, a playground, a lake with a fountain, and people walking, jogging, and having a picnic",

    ui: {

        check: "✓ Check",

        solution: "📖 Solutions",

        reset: "🔄 Reset"

    },

    labels: {

        signal: "💡 Hint",

        tense: "💡 Grammar point",

        formation: "💡 Pattern"

    },

    messages: {

        perfect: "🏆 Perfect! Excellent work!",

        good: "👏 Very good!",

        ok: "👍 Good job. Keep practising.",

        tryAgain: "📚 Keep practising!",

        solutionsShown:
            "The solutions have been shown."

    },

    story: [

{
before:"The sky ",
after:" blue with a few white clouds.",
verb:"to be",
answer:"is",
signal:"color/state",
tense:"Adjective (description)",
formation:"be + adjective"
},

{
before:"There ",
after:" a bird high in the sky.",
verb:"there is/are",
answer:"is",
signal:"singular noun (a bird)",
tense:"There is / there are — singular",
formation:"there is + singular noun"
},

{
before:"It ",
after:" above the park.",
verb:"to fly",
answer:"is flying",
signal:"happening right now",
tense:"Present continuous",
formation:"is/are + verb-ing"
},

{
before:"The city is ",
after:" the trees, in the distance.",
verb:"preposition",
answer:"behind",
signal:"position: at the back",
tense:"Preposition of place",
formation:"behind"
},

{
before:"There ",
after:" a lake at the back of the park.",
verb:"there is/are",
answer:"is",
signal:"singular noun (a lake)",
tense:"There is / there are — singular",
formation:"there is + singular noun"
},

{
before:"There ",
after:" a fountain in the middle of the lake.",
verb:"there is/are",
answer:"is",
signal:"singular noun (a fountain)",
tense:"There is / there are — singular",
formation:"there is + singular noun"
},

{
before:"A few ducks ",
after:" in the lake.",
verb:"to swim",
answer:"are swimming",
signal:"happening right now (plural subject)",
tense:"Present continuous",
formation:"is/are + verb-ing"
},

{
before:"The playground is ",
after:" the lake.",
verb:"preposition",
answer:"near",
signal:"position: close to",
tense:"Preposition of place",
formation:"near"
},

{
before:"There ",
after:" a playground with a slide and swings.",
verb:"there is/are",
answer:"is",
signal:"singular noun (a playground)",
tense:"There is / there are — singular",
formation:"there is + singular noun"
},

{
before:"Some children ",
after:" on the playground.",
verb:"to play",
answer:"are playing",
signal:"happening right now (plural subject)",
tense:"Present continuous",
formation:"is/are + verb-ing"
},

{
before:"A family ",
after:" a picnic on the grass.",
verb:"to have",
answer:"is having",
signal:"happening right now",
tense:"Present continuous",
formation:"is/are + verb-ing"
},

{
before:"The picnic blanket is ",
after:" the playground.",
verb:"preposition",
answer:"next to",
signal:"position: beside",
tense:"Preposition of place",
formation:"next to"
},

{
before:"There ",
after:" a sign with directions to the playground and the lake.",
verb:"there is/are",
answer:"is",
signal:"singular noun (a sign)",
tense:"There is / there are — singular",
formation:"there is + singular noun"
},

{
before:"The sign is ",
after:" a big tree.",
verb:"preposition",
answer:"under",
signal:"position: below",
tense:"Preposition of place",
formation:"under"
},

{
before:"A small dog ",
after:" the ground near the sign.",
verb:"to smell",
answer:"is smelling",
signal:"happening right now",
tense:"Present continuous",
formation:"is/are + verb-ing"
},

{
before:"The flowers along the path ",
after:" small and colorful.",
verb:"to be",
answer:"are",
signal:"size/color",
tense:"Adjective (description)",
formation:"be + adjective"
},

{
before:"A woman and her daughter ",
after:" along the path.",
verb:"to walk",
answer:"are walking",
signal:"happening right now",
tense:"Present continuous",
formation:"is/are + verb-ing"
},

{
before:"Their dog ",
after:" next to them on a leash.",
verb:"to walk",
answer:"is walking",
signal:"happening right now",
tense:"Present continuous",
formation:"is/are + verb-ing"
},

{
before:"The trash can is ",
after:" the lamppost.",
verb:"preposition",
answer:"next to",
signal:"position: beside",
tense:"Preposition of place",
formation:"next to"
},

{
before:"A man ",
after:" on a bench.",
verb:"to sit",
answer:"is sitting",
signal:"happening right now",
tense:"Present continuous",
formation:"is/are + verb-ing"
},

{
before:"He ",
after:" a book.",
verb:"to read",
answer:"is reading",
signal:"happening right now",
tense:"Present continuous",
formation:"is/are + verb-ing"
},

{
before:"His bag is ",
after:" the bench.",
verb:"preposition",
answer:"next to",
signal:"position: beside",
tense:"Preposition of place",
formation:"next to"
},

{
before:"Two joggers ",
after:" along the path near the lake.",
verb:"to run",
answer:"are running",
signal:"happening right now (plural subject)",
tense:"Present continuous",
formation:"is/are + verb-ing"
},

{
before:"One of the two joggers ",
after:" a jersey of the best football club in the world.",
verb:"to wear",
answer:"is wearing",
signal:"happening right now",
tense:"Present continuous",
formation:"is/are + verb-ing"
}

]

};
