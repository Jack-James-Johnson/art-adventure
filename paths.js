var images = {
  forest: {
    image: "./images/initial.png",
    frame_count: 1,
    text: `
            You wake up in a forest, you're unsure of where you are, or what you were doing previous to
            waking up, its dark and there is no entrance or exit in sight, only an overgrown, beaten path that
            veers off in two directions, eager to go home, which direction should you take?`,
    left: "forest_left",
    leftText: "LEFT",
    right: "forest_right1",
    rightText: "RIGHT",
  },
  menu: {
    image: "./images/starting_path.png",
    frame_count: 1,
    text: "",
    left: null,
    leftText: "Left",
    right: null,
    rightText: "Right",
  },
  forest_right1: {
    image: "./images/initial.png",
    frame_count: 1,
    text: `You start walking along the right path, the trees become a dense wall blocking your vision on
            either side and above you.
            `,
    left: "forest_right2",
    leftText: "NEXT",
    right: null,
    rightText: null,
  },
  forest_right2: {
    image: "./images/initial.png",
    frame_count: 1,
    text: ``,
    left: "forest_right3",
    leftText: "NEXT",
    right: null,
    rightText: null,
  },
  forest_right3: {
    image: "./images/initial.png",
    frame_count: 1,
    text: `As you delve deeper into the heart of the forest, you spot a suspicious pile of bones on the
            side of the pathway. perhaps they could be useful on your jouney, or maybe its a morbid trap, do
            you pick them up?
            `,
    left: "bones_death",
    leftText: "DONT",
    right: "PICKUP",
    rightText: "PICKUP",
  },
  bones_death: {
    image: "./images/_Death_Scene.png",
    frame_count: 9,
    text: `You think to yourself that the bones give out bad energy, and you continue
walking without messing with them. with each step you think more and more
about them, they eventually consume your thoughts. While your mind is so
wrapped up around these bones, your attention lacks on the path ahead, you
absentmindedly trip on a tree stump that appeared seemingly out of thin air.`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
  PICKUP: {
    image: "./images/The_Creature_Right.png",
    frame_count: 1,
    text: `You pick up the bones and shove them into your pockets, satisfied with your
decision. you soon realise the atmosphere has grown cold and you're shrouded
in silence. you pick up the pace a little then squint into the foliage before you. A
humanlike figure is seen in the distance, maybe they could give you some
directions, do you approach?`,
    left: "dont_approach_creature",
    leftText: "NO",
    right: "approach",
    rightText: "YES",
  },
  dont_approach_creature: {
    image: "./images/The_Creature_Right.png",
    frame_count: 1,
    text: `The figure doesn't look comforting. It looks creepy. and probably wants
those bones you grabbed earlier. you turn and walk in another
direction, there's a rustle in the brush ahead, and before you can avoid
interaction again two figures tumble out from within. instantly the lamb
figure demands "My brother is hungry! He lost the worlds shiniest
apple earlier in that tree over there, can you go get it for him? We are
twins you see so unfortunately we cannot be apart !"`,
    left: "twins_death",
    leftText: "SASS",
    right: "fetch",
    rightText: "FETCH",
  },
  twins_death: {
    image: "./images/_Death_Scene.png",
    frame_count: 9,
    text: `the joy from their faces leave, and all colour leaves the forest,
they respond together "wheres the fun in not outsourcing?"
you die`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
  fetch: {
    image: "./images/initial.png",
    frame_count: 1,
    text: `You look towards where the lamb is pointing and see a speck of
red on the tallest branch of a tree, as you begin walking
towards it the tree gets larger and larger, the apple seems
higher than possibly climbable for a human, you get an idea,
what if you threw something to get it down?`,
    left: "throw_bones",
    leftText: "THROW",
    right: "climb_tree",
    rightText: "CLIMB",
  },
  throw_bones: {
    image: "./images/_Death_Scene.png",
    frame_count: 9,
    text: `You thew your bone, but unfortunately you miss, the femur you
threw overshoots. You see the impatient faces of the
twins grow closer in the blink of an eye. YOU DIE`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
  climb_tree: {
    image: "./images/initial.png",
    frame_count: 1,
    text: `It looks exhausting, but you can do it, you begin scaling
the tree, as the twins watch from below, hopeful.
when the apple is within your arms reach, you are
enchanted by its shine and perfection, it looks
delicious your mouth waters just by looking at it,`,
    left: "eat_apple",
    leftText: "EAT",
    right: "throw_apple",
    rightText: "GIVE",
  },
  eat_apple: {
    image: "./images/_Death_Scene.png",
    frame_count: 9,
    text: `you look down at the twins as you take in the
divine flavours of the apple, unfortunately it
would be the last thing you would ever eat
you die`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
  throw_apple: {
    image: "./images/The_Creature_Right.png",
    frame_count: 1,
    text: `You throw the apple down, the crow opens its
beak and the shining red disappears down its
gullet ithou taking a beath, the crow flies
towards you and takes you above the canopy. <br>
YOU ESCAPED!`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
  approach: {
    image: "./images/The_Creature_Right.png",
    frame_count: 1,
    text: `you approach to ask for help but as you grow closer you realise that it is not human, but something
    otherworldly, an amalgamation of life and death. you find yourself paralysed where you stand.`,
    left: "approach2",
    leftText: "NEXT",
    right: null,
    rightText: null,
  },
  approach2: {
    image: "./images/initial.png",
    frame_count: 1,
    text: `Two glowing eyes appear before yours, the rest of your vision is blurred. “oh my
    it's been a long time since your kind has stumbled upon this place, just how did you get here? oh never
    mind how….. you're no longer in the world you're familiar with but one of art.. a place that precedes you
    by many millennium… one of creation and destruction….. seems to me you've been stuck in a loop for
    some time…. in this forest and your mind… directionless and lost.. don't you know no one's coming to
    save you?`,
    left: "escape",
    leftText: "RUN",
    right: "respond",
    rightText: "TALK",
  },
  escape: {
    image: "./images/_Death_Scene.png",
    frame_count: 9,
    text: `You attempt to run away however you still cannot move, the
    creature senses tension “another lost child too far gone…. if
    something isn't working you should end it…” the eyes glow red,
    you die.`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
  respond: {
    image: "./images/initial.png",
    frame_count: 1,
    text: `>Yes i know that… <br>
        “you must choose your own path in this life..
    find your reason for living.. too often i see your kind simply
    doing and not being.. keeping busy.. distracting yourselves
    from the rawness of the human experience… that's no way to
    live.. perhaps that's the reason you're here…. this was meant
    to happen you see.. you were meant to pick up those bones..
    our paths were meant to cross…. a young nietzsche once came
    to me.. he theorised that art could be used as a medium to
    reveal deeper truths about reality.. funny coming from such a
    nihilist.. art is simply a mirror to reality… you've been avoiding
    creating for this sole reason.. but deep down i think you know…
    where creation lacks, decay and rot will consume.." you feel
    the bones you collected start moving in your pockets, they
    shoot out and land in two piles on the dirt before you. which
    pile are you drawn to?`,
    left: "bones1",
    leftText: "LEFT",
    right: "bones2",
    rightText: "RIGHT",
  },
  bones1: {
    image: "./images/_Death_Scene.png",
    frame_count: 9,
    text: `You kneel before the mound of bones and find yourself
    uncontrollably crying as your life flashes before your
    eyes, your mistakes, regrets, everything you wish you
    could've done differently. “the decay won't stop.. i
    suppose it was meant to happen this way….” you die.`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
  bones2: {
    image: "./images/initial.png",
    frame_count: 1,
    text: `You kneel before the mound of bones, each one
    suddenly looking so unique and inspiring. you can't
    believe how beautiful this seemingly mundane pile of
    bones are, it even makes you emotional. a fire is
    ignited within you, you feel as though you can do
    anything. be anything. the creature looks down at you
    and holds out its hand, “is this world clearer to you
    now..? let me guide you..”`,
    left: "betray",
    leftText: "BETRAY",
    right: "take_hand",
    rightText: "TRUST",
  },
  betray: {
    image: "./images/_Death_Scene.png",
    frame_count: 9,
    text: `You feel powerful. powerful enough to escape
    the grasp this creature has on you. but before
    you can even move the creature has figured
    out your intentions, “foolish child…. you have
    chosen the wrong path” you die`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
  take_hand: {
    image: "./images/initial.png",
    frame_count: 1,
    text: `You look up to the hand and grasp onto it
    confidently, deciding to see where it will take
    you. you're lead into the glowing abyss,
    you've never seen anything like it. the walk
    feels effortlessly divine and bliss.the creature
    lets go of your hand and opens the gate back
    to your own world, “well done.. you were able
    to break through.. goodbye…”`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
  forest_left:
  {
    image: "./images/initial.png",
    frame_count: 1,
    text: `You head towards the left path, after walking for some time the trees begin to thin, and you have come
across a clearing. The water is eerily clear, devoid of plant life and algae growing from its waters, the
edges seemed to glow and call to you as you became overwhelmed by thirst. do you drink from the
water?.`,
    left: "forest_left2",
    leftText: "NEXT",
    right: "drink",
    rightText: "DRINK",
  },
  "drink":
  {
    image: "./images/initial.png",
    frame_count: 1,
    text: `Everything around you become distorted and the forest feels more alive, breathing with you. you feel the
paranoid urge to run.`,
    left: "run",
    leftText: "RUN",
    right: "stay",
    rightText: "STAY",
  },
  run:
  {
    image: "./images/_Death_Scene.png",
    frame_count: 9,
    text: `you run in circles till you die in a deluded haze`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
    stay:
    {
        image: "./images/initial.png",
        frame_count: 1,
        text: `you sit where you are and close your eyes, your breathing slows, and
you become one with the ground beneath you, you can hear the wind
blowing through the trees and this calms you. you hear movement in
the water, you open your eyes and a school of fish have outgrown their
small home. they beckon you as they follow one another into the depth
of the wood. do you follow?`,
        left: "follow",
        leftText: "FOLLOW",
        right: "ignore",
        rightText: "STAY",
    },
    follow:
    {
        image: "./images/initial.png",
        frame_count: 1,
        text: `you rise and begin to follow the fish, and their trail leads to an
exit you never saw before. you escape!`,
        left: null,
        leftText: null,
        right: null,
        rightText: null,
    },
    ignore:
    {
        image: "./images/_Death_Scene.png",
        frame_count: 9,
        text: `figuring it is just another delusion, you close your eyes once
again. you die from low blood pressure`,
        left: null,
        leftText: null,
        right: null,
        rightText: null,
    },
    forest_left2:
    {
        image: "./images/initial.png",
        frame_count: 1,
        text: `its probably not safe, after taking in the serenity, you continue walking and you
come across a rundown cabin. you come across a rundown cabin. go inside?`,
        left: "cabin",
        leftText: "YES",
        right: "forest_left3",
        rightText: "NO",
    },
    forest_left3:
    {
        image: "./images/_Death_Scene.png",
        frame_count: 9,
        text: `Cabin is too creepy, not a fan of the vibes, you turn around and
        walk back the way you came, but the path is gone. you die`,
        left: null,
        leftText: null,
        right: null,
        rightText: null,
    },
    cabin:
    {
        image: "./images/initial.png",
        frame_count: 1,
        text: `You go inside the cabin, you can either fish or refuse (what)`,
        left: "fish",
        leftText: "FISH",
        right: "refuse",
        rightText: "NO",
    },
    fish:
    {
        image: "./images/initial.png",
        frame_count: 1,
        text: `You fish and catch a fish, it is a very shiny fish, you feel accomplished, you win!`,
        left: null,
        leftText: null,
        right: null,
        rightText: null,
    },
    refuse:
    {
        image: "./images/_Death_Scene.png",
        frame_count: 9,
        text: `You refuse to fish, and the cabin begins to collapse around you, you die`,
        left: null,
        leftText: null,
        right: null,
        rightText: null,
    },
};
