/* ==========================================================
   js/data-en-directions.js
   Giving directions exercise (English), based on the
   miStudia City map. Route: arrive by boat, walk to the
   Parking area to pick up your yellow car, then drive to
   the Viewpoint Tower. Focus on direction-giving verbs
   (get, find, drive, turn, follow, cross, park), landmark
   nouns (corner, crossroad, bridge), direction words
   (left, right, straight), and the preposition "between".
========================================================== */

const englishDirectionsExercise = {

    language: "en-directions",

    title: "Giving Directions",

    description:
        "Look at the map of miStudia City. You arrive by boat, pick up your yellow car, and drive to the Viewpoint Tower. Complete the directions.",

    image: "images/mistudia-town-map.png",

    imageAlt: "A map of miStudia City showing streets, a river with a boat and a bridge, a parking area, a football field, a park, and the Viewpoint Tower",

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
after:" off the boat and walk to the Parking area.",
verb:"verb",
answer:"Get",
signal:"leaving the boat",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep / drive / park / find / get"
},

{
before:"The Parking area is ",
after:" the Football Field and the Picnic Area.",
verb:"preposition",
answer:"between",
signal:"in the middle of two things",
tense:"Giving directions — preposition",
formation:"between / next to / across from"
},

{
before:"",
after:" your yellow car and get in.",
verb:"verb",
answer:"Find",
signal:"locating something",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep / drive / park / find / get"
},

{
before:"",
after:" out of the Parking area and onto River Road.",
verb:"verb",
answer:"Drive",
signal:"moving by car",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep / drive / park / find / get"
},

{
before:"",
after:" left onto River Road.",
verb:"verb",
answer:"Turn",
signal:"changing direction",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep / drive / park / find / get"
},

{
before:"Keep the river on your ",
after:" as you drive north.",
verb:"direction word",
answer:"right",
signal:"side of the road",
tense:"Giving directions — direction word",
formation:"left / right / straight"
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
after:" straight past the Football Field.",
verb:"verb",
answer:"Drive",
signal:"moving by car",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep / drive / park / find / get"
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
before:"At the ",
after:" near the Football Field, continue straight.",
verb:"noun",
answer:"crossroad",
signal:"where streets cross",
tense:"Giving directions — landmark word",
formation:"corner / crossroad / bridge"
},

{
before:"",
after:" Maple Street and keep driving north.",
verb:"verb",
answer:"Cross",
signal:"going from one side to the other",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep / drive / park / find / get"
},

{
before:"Continue ",
after:" until you reach the bridge.",
verb:"direction word",
answer:"straight",
signal:"moving forward, no turn",
tense:"Giving directions — direction word",
formation:"left / right / straight"
},

{
before:"",
after:" River Road until you reach the bridge.",
verb:"verb",
answer:"Follow",
signal:"staying on the same road",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep / drive / park / find / get"
},

{
before:"",
after:" the Riverside Bridge with the car.",
verb:"verb",
answer:"Cross",
signal:"going from one side to the other",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep / drive / park / find / get"
},

{
before:"Turn ",
after:" after the bridge to reach the Viewpoint Tower.",
verb:"direction word",
answer:"right",
signal:"side of the road",
tense:"Giving directions — direction word",
formation:"left / right / straight"
},

{
before:"",
after:" the car near the Viewpoint Tower.",
verb:"verb",
answer:"Park",
signal:"leaving the car",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep / drive / park / find / get"
},

{
before:"",
after:" out of the car and walk up to the tower.",
verb:"verb",
answer:"Get",
signal:"leaving the car",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / walk / keep / drive / park / find / get"
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
