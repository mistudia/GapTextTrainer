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
verb:"adjective",
answer:"is",
signal:"color/state",
tense:"Adjective (description)",
formation:"be + adjective"
},

{
before:"There ",
after:" two birds high in the sky.",
verb:"there is/are",
answer:"are",
signal:"plural noun (two birds)",
tense:"There is / there are — plural",
formation:"there are + plural noun"
},

{
before:"They ",
after:" above the park.",
verb:"fly",
answer:"are flying",
signal:"happening right now (plural subject)",
tense:"Present continuous",
formation:"is/are + verb-ing"
},

{
before:"The city ",
after:" behind the trees, in the distance.",
verb:"preposition",
answer:"is behind",
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
verb:"swim",
answer:"are swimming",
signal:"happening right now (plural subject)",
tense:"Present continuous",
formation:"is/are + verb-ing"
},

{
before:"The playground ",
after:" the lake.",
verb:"preposition",
answer:"is near",
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
verb:"play",
answer:"are playing",
signal:"happening right now (plural subject)",
tense:"Present continuous",
formation:"is/are + verb-ing"
},

{
before:"A family ",
after:" a picnic on the grass.",
verb:"have",
answer:"is having",
signal:"happening right now",
tense:"Present continuous",
formation:"is/are + verb-ing"
},

{
before:"The picnic blanket ",
after:" the playground.",
verb:"preposition",
answer:"is next to",
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
before:"The sign ",
after:" a big tree.",
verb:"preposition",
answer:"is under",
signal:"position: below",
tense:"Preposition of place",
formation:"under"
},

{
before:"A small dog ",
after:" the ground near the sign.",
verb:"smell",
answer:"is smelling",
signal:"happening right now",
tense:"Present continuous",
formation:"is/are + verb-ing"
},

{
before:"The flowers along the path ",
after:" small and colorful.",
verb:"adjective",
answer:"are",
signal:"size/color",
tense:"Adjective (description)",
formation:"be + adjective"
},

{
before:"A woman and her daughter ",
after:" along the path.",
verb:"walk",
answer:"are walking",
signal:"happening right now",
tense:"Present continuous",
formation:"is/are + verb-ing"
},

{
before:"Their dog ",
after:" next to them on a leash.",
verb:"walk",
answer:"is walking",
signal:"happening right now",
tense:"Present continuous",
formation:"is/are + verb-ing"
},

{
before:"The trash can ",
after:" the lamppost.",
verb:"preposition",
answer:"is next to",
signal:"position: beside",
tense:"Preposition of place",
formation:"next to"
},

{
before:"A man ",
after:" on a bench.",
verb:"sit",
answer:"is sitting",
signal:"happening right now",
tense:"Present continuous",
formation:"is/are + verb-ing"
},

{
before:"He ",
after:" a book.",
verb:"read",
answer:"is reading",
signal:"happening right now",
tense:"Present continuous",
formation:"is/are + verb-ing"
},

{
before:"His bag ",
after:" the bench.",
verb:"preposition",
answer:"is next to",
signal:"position: beside",
tense:"Preposition of place",
formation:"next to"
},

{
before:"Two joggers ",
after:" along the path near the lake.",
verb:"run",
answer:"are running",
signal:"happening right now (plural subject)",
tense:"Present continuous",
formation:"is/are + verb-ing"
}

]

};
