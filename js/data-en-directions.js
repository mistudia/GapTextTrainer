/* ==========================================================
   js/data-en-directions.js
   Giving directions exercise (English), based on the
   miStudia Town map. Focus on the core direction-giving
   verbs (go, turn, take, follow, cross, walk, keep),
   landmark nouns (corner, crossroad, bridge, roundabout),
   and direction words (left, right, straight, along).
========================================================== */

const englishDirectionsExercise = {

    language: "en-directions",

    title: "Giving Directions",

    description:
        "Look at the map of miStudia Town and complete the directions.",

    image: "images/mistudia-town-map.png",

    imageAlt: "A map of miStudia Town showing streets, shops, a park, a football field, a river, and other landmarks",

    ui: {

        check: "✓ Check",

        solution: "📖 Solutions",

        reset: "🔄 Reset"

    },

    labels: {

        signal: "💡 Hint",

        tense: "💡 Type",

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
before:"",
after:" straight down Main Avenue until you reach Pine Street.",
verb:"verb",
answer:"Go",
signal:"basic movement instruction",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep"
},

{
before:"",
after:" right onto Pine Street to see the shops.",
verb:"verb",
answer:"Turn",
signal:"changing direction",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep"
},

{
before:"The Clothes Shop is on the ",
after:" of Pine Street and Main Avenue.",
verb:"noun",
answer:"corner",
signal:"where two streets meet",
tense:"Giving directions — landmark word",
formation:"corner / crossroad / bridge / roundabout"
},

{
before:"",
after:" Pine Street until you reach Main Avenue again.",
verb:"verb",
answer:"Follow",
signal:"staying on the same street",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep"
},

{
before:"Walk ",
after:" Pine Street to see all the shops.",
verb:"direction word",
answer:"along",
signal:"moving the length of a street",
tense:"Giving directions — direction word",
formation:"left / right / straight / along"
},

{
before:"",
after:" left onto Main Avenue and go south.",
verb:"verb",
answer:"Turn",
signal:"changing direction",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep"
},

{
before:"",
after:" the second street on the right to reach the Police Station.",
verb:"verb",
answer:"Take",
signal:"choosing a turning",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep"
},

{
before:"The Park is across from the Police Station, on your ",
after:".",
verb:"direction word",
answer:"left",
signal:"side of the street",
tense:"Giving directions — direction word",
formation:"left / right / straight / along"
},

{
before:"",
after:" along Market Street towards the river.",
verb:"verb",
answer:"Walk",
signal:"basic movement instruction",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep"
},

{
before:"At the ",
after:", turn right to reach the Football Field.",
verb:"noun",
answer:"crossroad",
signal:"where streets cross",
tense:"Giving directions — landmark word",
formation:"corner / crossroad / bridge / roundabout"
},

{
before:"",
after:" the Riverside Bridge to reach the Viewpoint Tower.",
verb:"verb",
answer:"Cross",
signal:"going from one side to the other",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep"
},

{
before:"The Viewpoint Tower is just across the ",
after:".",
verb:"noun",
answer:"bridge",
signal:"a structure over the river",
tense:"Giving directions — landmark word",
formation:"corner / crossroad / bridge / roundabout"
},

{
before:"",
after:" right onto River Road and head south.",
verb:"verb",
answer:"Turn",
signal:"changing direction",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep"
},

{
before:"Continue ",
after:" until you reach Elm Street.",
verb:"direction word",
answer:"straight",
signal:"moving forward, no turn",
tense:"Giving directions — direction word",
formation:"left / right / straight / along"
},

{
before:"At the ",
after:" near Elm Street, turn left.",
verb:"noun",
answer:"roundabout",
signal:"a circular junction",
tense:"Giving directions — landmark word",
formation:"corner / crossroad / bridge / roundabout"
},

{
before:"",
after:" straight ahead to reach the Hospital.",
verb:"verb",
answer:"Go",
signal:"basic movement instruction",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep"
},

{
before:"The Hospital is on the ",
after:" of Cedar Street and Elm Street.",
verb:"noun",
answer:"corner",
signal:"where two streets meet",
tense:"Giving directions — landmark word",
formation:"corner / crossroad / bridge / roundabout"
},

{
before:"",
after:" Cedar Street to get back to Main Avenue.",
verb:"verb",
answer:"Follow",
signal:"staying on the same street",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep"
},

{
before:"",
after:" left to head towards the School.",
verb:"verb",
answer:"Turn",
signal:"changing direction",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep"
},

{
before:"Take the first street on the ",
after:" to reach the School.",
verb:"direction word",
answer:"left",
signal:"side of the street",
tense:"Giving directions — direction word",
formation:"left / right / straight / along"
},

{
before:"",
after:" walking until you reach the end of Main Avenue.",
verb:"verb",
answer:"Keep",
signal:"continuing an action",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep"
},

{
before:"The School is at the end of the street, on your ",
after:".",
verb:"direction word",
answer:"right",
signal:"side of the street",
tense:"Giving directions — direction word",
formation:"left / right / straight / along"
}

]

};
