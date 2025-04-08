var images = {
    "forest": {
        "image": "./images/initial.png",
        "frame_count": 1,
        "text": "Choose your path",
        "left": "death",
        "leftText": "Left",
        "right": "eyes",
        "rightText": "Right"
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
    "death": {
        "image": "./images/_Death_Scene.png",
        "frame_count":9,
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