var images = {
    "forest": {
        "image": "./images/initial.png",
        "frame_count": 1,
        "text": `
            You wake up in a forest, you're unsure of where you are, or what you were doing previous to
            waking up, its dark and there is no entrance or exit in sight, only an overgrown, beaten path that
            veers off in two directions, eager to go home, which direction should you take?`,
        "left": "death",
        "leftText": "LEFT",
        "right": "forest_right1",
        "rightText": "RIGHT"
    },
    "menu": {
        "image": "./images/starting_path.png",
        "frame_count":1,
        "text": "",
        "left": null,
        "leftText": "Left",
        "right": null,
        "rightText": "Right"
    },
    "forest_right1":
    {
        "image": "./images/initial.png",
        "frame_count": 1,
        "text": `You start walking along the right path, the trees become a dense wall blocking your vision on
            either side and above you.
            `,
        "left": "forest_right2",
        "leftText": "NEXT",
        "right": null,
        "rightText": null
    },
    "forest_right2":
    {
        "image": "./images/initial.png",
        "frame_count": 1,
        "text": ``,
        "left": "forest_right3",
        "leftText": "NEXT",
        "right": null,
        "rightText": null
    },
    "forest_right3":
    {
        "image": "./images/initial.png",
        "frame_count": 1,
        "text": `As you delve deeper into the heart of the forest, you spot a suspicious pile of bones on the
            side of the pathway. perhaps they could be useful on your jouney, or maybe its a morbid trap, do
            you pick them up?
            `,
        "left": "bones_death",
        "leftText": "DONT",
        "right": "PICKUP",
        "rightText": "PICKUP"
    },
    "bones_death":
    {
        "image": "./images/_Death_Scene.png",
        "frame_count": 9,
        "text": `you think to yourself that the bones give out bad energy, and you continue
walking without messing with them. with each step you think more and more
about them, they eventually consume your thoughts. while your mind is so
wrapped up around these bones, your attention lacks on the path ahead, you
absentmindedly trip on a tree stump that appeared seemingly out of thin air.`,
        "left": null,
        "leftText": null,
        "right": null,
        "rightText": null
    },
    "PICKUP":
    {
        "image": "./images/The_Creature_right.png",
        "frame_count":1,
        "text":`you pick up the bones and shove them into your pockets, satisfied with your
decision. you soon realise the atmosphere has grown cold and you’re shrouded
in silence. you pick up the pace a little then squint into the foliage before you. a
humanlike figure is seen in the distance, maybe they could give you some
directions, do you approach?`,
        "left": "dont_approach_creature",
        "leftText": "NO",
        "right": "approach",
        "rightText": "YES"
    },
    "dont_approach_creature":
    {
        "image": "./images/The_Creature_right.png",
        "frame_count":1,
        "text": `The figure doesn’t look comforting. it looks creepy. and probably wants
those bones you grabbed earlier. you turn and walk in another
direction, there’s a rustle in the brush ahead, and before you can avoid
interaction again two figures tumble out from within. instantly the lamb
figure demands " my brother is hungry! he lost the worlds shiniest
apple earlier in that tree over there, can you go get it for him? we are
twins you see so unfortunately we cannot be apart !"`,
        "left": "twins_death",
        "leftText": "SASS",
        "right": "fetch",
        "rightText": "FETCH"
},
    "twins_death":
    {
        "image": "./images/_Death_Scene.png",
        "frame_count": 9,
        "text": `the joy from their faces leave, and all colour leaves the forest,
they respond together "wheres the fun in not outsourcing?"
you die`,
        "left": null,
        "leftText": null,
        "right": null,
        "rightText": null
    },
    "death": {
        "image": "./images/_Death_Scene.png",
        "frame_count": 9,
        "text": "You have died! UNLUCKY",
        "left": null,
        "leftText": null,
        "right": null,
        "rightText": null
    },
    "eyes":
    {
        "image": "./images/_The_Creature_Norm.png",
        "frame_count": 7,
        "text": "You see a pair of glowing eyes staring at you",
        "left": "death",
        "leftText": "RUN",
        "right": "eyes_death",
        "rightText": "FIGHT"
    },
    "eyes_death":
    {
        "image": "./images/_The_Creature_Death.png",
        "frame_count": 11,
        "text": "The eyes were a trap! You have died!",
        "left": null,
        "leftText": null,
        "right": null,
        "rightText": null
    },
};