/* ==========================================================
   js/data-en-directions.js
   Giving directions exercise (English), based on the
   miStudia City map. Route: boat -> Parking Area (pick up
   the yellow car) -> Elm Street -> roundabout -> past
   Coburg Lane -> Main Avenue (past the Police Station and
   the Gym) -> MA House -> Pine Street -> Riverside Bridge
   -> Viewpoint Tower.
========================================================== */

const englishDirectionsExercise = {

    language: "en-directions",

    title: "Giving Directions",

    description:
        "Look at the map of miStudia City. You arrive by boat, pick up your yellow car, and drive to the Viewpoint Tower. Complete the directions.",

    image: "images/mistudia-town-map.png",

    imageAlt: "A map of miStudia City showing streets, a river with a boat dock and a bridge, a parking area, a roundabout, shops on Pine Street, and the Viewpoint Tower",

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
mid:" off the boat and walk ",
after:" the Picnic Area.",
verb:"direction word",
answer:"Get",
answer2:"towards",
signal:"leaving the boat / moving in the direction of something",
tense:"Giving directions — verb + direction word",
formation:"get ... towards"
},

{
before:"",
after:" to the Parking Area to find your yellow car.",
verb:"verb",
answer:"Walk",
signal:"basic movement instruction",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / drive / park / find / get"
},

{
before:"The Parking Area is ",
after:" the Picnic Area and the Hospital.",
verb:"preposition",
answer:"between",
signal:"in the middle of two things",
tense:"Giving directions — preposition",
formation:"between / next to / across from"
},

{
before:"",
after:" in the car and start the engine.",
verb:"verb",
answer:"Get",
signal:"entering the car",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / drive / park / find / get"
},

{
before:"",
after:" out of the Parking Area and onto Elm Street.",
verb:"verb",
answer:"Drive",
signal:"moving by car",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / drive / park / find / get"
},

{
before:"At the ",
mid:", go straight ahead by taking the ",
after:" exit.",
verb:"numeral",
answer:"roundabout",
answer2:"second",
signal:"a circular junction / which exit to take",
tense:"Giving directions — landmark word + numeral",
formation:"roundabout ... first / second / third exit"
},

{
before:"Go straight, past Coburg Lane, and turn right at the ",
after:" street on the right.",
verb:"numeral",
answer:"second",
signal:"which street to take",
tense:"Giving directions — numeral",
formation:"first / second / third street"
},

{
before:"",
after:" straight on Main Avenue.",
verb:"verb",
answer:"Continue",
signal:"moving forward, no turn",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / drive / park / find / get"
},

{
before:"On your ",
after:" you see the Police Station.",
verb:"direction word",
answer:"right",
signal:"side of the road",
tense:"Giving directions — direction word",
formation:"left / right / straight"
},

{
before:"After ",
after:" Maple Street, there is the Gym.",
verb:"verb",
answer:"crossing",
signal:"going from one side to the other (after + verb-ing)",
tense:"Giving directions — verb",
formation:"after crossing / after passing"
},

{
before:"The Gym is ",
after:" the School and the Restaurant.",
verb:"preposition",
answer:"between",
signal:"in the middle of two things",
tense:"Giving directions — preposition",
formation:"between / next to / across from"
},

{
before:"",
after:" Main Avenue until the corner with Pine Street.",
verb:"verb",
answer:"Follow",
signal:"staying on the same road",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / drive / park / find / get"
},

{
before:"Here, make a ",
after:" onto Pine Street.",
verb:"noun",
answer:"turn",
signal:"changing streets",
tense:"Giving directions — landmark word",
formation:"corner / crossroad / bridge / turn"
},

{
before:"Drive ",
after:" Pine Street, past the shops and MA House.",
verb:"direction word",
answer:"along",
signal:"moving by car",
tense:"Giving directions — direction word",
formation:"left / right / straight / along"
},

{
before:"Continue ",
mid:" until the road ",
after:" the river.",
verb:"verb",
answer:"straight",
answer2:"meets",
signal:"moving forward, no turn / where the road ends at the river",
tense:"Giving directions — direction word + verb",
formation:"straight ... meets"
},

{
before:"",
after:" the Riverside Bridge with the car.",
verb:"verb",
answer:"Cross",
signal:"going from one side to the other",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / drive / park / find / get"
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
mid:" after the bridge to ",
after:" the tower.",
verb:"verb",
answer:"right",
answer2:"reach",
signal:"side of the road / arriving at a destination",
tense:"Giving directions — direction word + verb",
formation:"right ... reach"
},

{
before:"",
after:" the car near the Viewpoint Tower.",
verb:"verb",
answer:"Park",
signal:"leaving the car",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / drive / park / find / get"
},

{
before:"",
after:" out of the car, walk up the tower and enjoy the view.",
verb:"verb",
answer:"Get",
signal:"leaving the car",
tense:"Giving directions — verb",
formation:"go / turn / take / follow / cross / drive / park / find / get"
}

]

};
