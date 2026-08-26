/* ==========================================================
   js/data-en-directions.js
   Giving directions exercise (English), based on the
   miStudia City map. Route: from the boat by the river
   dock to the Viewpoint Tower. Focus on the core
   direction-giving verbs (go, turn, take, follow, cross,
   walk, keep), landmark nouns (corner, crossroad, bridge),
   direction words (left, right, straight, along), and the
   preposition "between".
========================================================== */

const englishDirectionsExercise = {

    language: "en-directions",

    title: "Giving Directions",

    description:
        "Look at the map of miStudia City and complete the directions from the boat to the Viewpoint Tower.",

    image: "images/mistudia-town-map.png",

    imageAlt: "A map of miStudia City showing streets, a river with a boat and a bridge, a football field, a park, and the Viewpoint Tower",

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
after:" away from the boat and onto River Road.",
verb:"verb",
answer:"Walk",
signal:"basic movement instruction",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep"
},

{
before:"",
after:" left onto River Road.",
verb:"verb",
answer:"Turn",
signal:"changing direction",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep"
},

{
before:"Keep the river on your ",
after:" as you walk north.",
verb:"direction word",
answer:"right",
signal:"side of the street",
tense:"Giving directions — direction word",
formation:"left / right / straight / along"
},

{
before:"The Picnic Area is ",
after:" River Road and the Parking area.",
verb:"preposition",
answer:"between",
signal:"in the middle of two things",
tense:"Giving directions — preposition",
formation:"between / next to / across from"
},

{
before:"",
after:" straight past the Parking area.",
verb:"verb",
answer:"Go",
signal:"basic movement instruction",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep"
},

{
before:"The Football Field is ",
after:" the Park and River Road.",
verb:"preposition",
answer:"between",
signal:"in the middle of two things",
tense:"Giving directions — preposition",
formation:"between / next to / across from"
},

{
before:"",
after:" River Road until you reach Maple Street.",
verb:"verb",
answer:"Follow",
signal:"staying on the same street",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep"
},

{
before:"",
after:" Maple Street and keep going north.",
verb:"verb",
answer:"Cross",
signal:"going from one side to the other",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep"
},

{
before:"",
after:" walking along River Road towards the bridge.",
verb:"verb",
answer:"Keep",
signal:"continuing an action",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep"
},

{
before:"At the ",
after:" near the Football Field, continue straight.",
verb:"noun",
answer:"crossroad",
signal:"where streets cross",
tense:"Giving directions — landmark word",
formation:"corner / crossroad / bridge"
},

{
before:"Follow the path ",
after:" the river towards the bridge.",
verb:"direction word",
answer:"along",
signal:"moving the length of the river",
tense:"Giving directions — direction word",
formation:"left / right / straight / along"
},

{
before:"",
after:" the Riverside Bridge to reach the other side of the river.",
verb:"verb",
answer:"Cross",
signal:"going from one side to the other",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep"
},

{
before:"The Viewpoint Tower is just past the ",
after:".",
verb:"noun",
answer:"bridge",
signal:"a structure over the river",
tense:"Giving directions — landmark word",
formation:"corner / crossroad / bridge"
},

{
before:"Turn ",
after:" after the bridge to reach the tower.",
verb:"direction word",
answer:"right",
signal:"side of the road",
tense:"Giving directions — direction word",
formation:"left / right / straight / along"
},

{
before:"",
after:" straight ahead until you reach the Viewpoint Tower.",
verb:"verb",
answer:"Go",
signal:"basic movement instruction",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep"
},

{
before:"",
after:" up the stairs to the top of the tower.",
verb:"verb",
answer:"Walk",
signal:"basic movement instruction",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep"
},

{
before:"The Viewpoint Tower stands on the ",
after:" where the road meets the river.",
verb:"noun",
answer:"corner",
signal:"where two paths meet",
tense:"Giving directions — landmark word",
formation:"corner / crossroad / bridge"
}

]

};
