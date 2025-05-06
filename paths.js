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
    image: "./images/bones.png",
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
absentmindedly trip on a tree stump that appeared seemingly out of thin air.<br>
YOU DIE`,
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
    image: "./images/_Twins_pointing.png",
    frame_count: 3,
    text: `The figure doesn't look comforting. It looks creepy. and probably wants those bones you grabbed
earlier. you turn and walk in another direction, there's a rustle in the brush ahead, and before you
can avoid interaction again two figures tumble out from within. Instantly, the lamb figure demands "My
brother is hungry! Go to the spine of the world, and pick us the forbidden fruit"`,
    left: "twins_death",
    leftText: "SASS",
    right: "fetch",
    rightText: "FETCH",
  },
  twins_death: {
    image: "./images/_Twins_Death.png",
    frame_count: 3,
    text: `the joy from their faces leave, and all colour leaves the forest,
    <br>YOU DIE`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
  fetch: {
    image: "./images/Apple_in_large_tree.png",
    frame_count: 1,
    text: `you look towards where the lamb is pointing
and see a speck of red on the tallest branch
of a tree, as you begin walking towards it
the tree and it becomes more mighty, dense
branches invading all free space, with thick
winding roots. You smell smoke emitting
through the roots`,
    left: "dig",
    leftText: "DIG",
    right: "climb_tree",
    rightText: "CLIMB",
  },
  dig: {
    image: "./images/roots_Glow.png",
    frame_count: 1,
    text: `You fear the climb and so search for a fallen apple; you smell smoke
    rising from the roots. Curious, you begin to dig through the gnarled
    roots. As you dig deeper, you find that you are surrounded by dark
    twisting bodies, petrichor flesh all knotted together in masses.
    Digging, you can no longer distinguish earth from flesh as they form
    and crumble in your view.
    The smell of smoke grows stronger, stinging your eyes. You hear a
    voice from behind you whisper
    “Bones…”.`,
    left: "return_bones",
    leftText: "RTRN",
    right: "dig_deeper",
    rightText: "GIVE",
  },
  return_bones: {
    image: "./images/tootsie_with_bones.png",
    frame_count: 1,
    text: `You feel the bones stuffed in your pockets. You hear the voice again,
“Bones…”.
You plant the bones in the midst of the bodies. You feel the gap behind you
close as you are embraced by the roots of the tree coiling around you
gently. You fall asleep.`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
  dig_deeper1: {
    image: "./images/roots_Glow.png",
    frame_count: 1,
    text: `You ignore the voice and dig to the source of the smoke now filling your face. You
find within blackened hollow husks of the lowest bodies; a fire. You carry the
searing flame in one hand as your claw back out of the knotty pit.`,
    left: "dig_deeper2",
    leftText: "NEXT",
    right: null,
    rightText: null,
  },
  dig_deeper2: {
    image: "./images/Brandish_fire.png",
    frame_count: 1,
    text: `Once you break the surface you are confronted by the angry twins; before they can
attack you, you brandish the fire at them. They waver and wobble; circling you
unable to approach as you run with the dying fire.`,
    left: "deeper_left",
    leftText: "LEFT",
    right: "deeper_right",
    rightText: "RIGHT",
  },
  deeper_left: {},
  deeper_right: {
    image: "Cabin_Ext.png",
    frame_count: 1,
    text: `Darkness starts to envelop you as the fire dwindles, you see a
cabin the distance,`,
    left: "cabin",
    leftText: "NEXT",
    right: null,
    rightText: null,
  },
  climb_tree: {
    image: "./images/_Apple_hand.png",
    frame_count: 8,
    text: `After climbing for what seems like hours,
  you begin to hear distant music. Finally
  you see the apple, it appears so tempting
  with its fresh crisp exterior and fanfare
  of invisible music.`,
    left: "eat_apple",
    leftText: "EAT",
    right: "throw_apple",
    rightText: "THROW",
  },
  eat_apple: {
    image: "./images/_Twins_Death.png",
    frame_count: 3,
    text: `Upon biting the apple you are struck with all the
knowledge of the universe including the vision of your death dealt by the
angry twins once you climb down.<br>
YOU DIE`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
  throw_apple: {
    image: "./images/The_Creature_Right.png",
    frame_count: 1,
    text: `After throwing the apple and climbing down, you see the twins
devouring the apple. They bow in gratitude<br>
“Follow us”<br>
They take you by the hand and fly you into the canopy of the great
tree; the music grows louder and louder.
Finally you are brought to the black top of the tree, where a warmly
glowing star rests on a branch.
The twins point to the light.<br>
“Take it, it's yours”<br>
After grabbing the star you are dressed in sparking prismatic light
and float into the dark of the night as stars flicker and torch your
way.<br>
You are surrounded by singing stars.`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
  approach: {
    image: "./images/first_look_at_creature.png",
    frame_count: 1,
    text: `You approach to ask for help but as you grow closer you realise that it is not human, but something
    otherworldly, an amalgamation of life and death. you find yourself paralysed where you stand.`,
    left: "approach2",
    leftText: "NEXT",
    right: null,
    rightText: null,
  },
  approach2: {
    image: "./images/_The_Creature_Norm.png",
    frame_count: 7,
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
    image: "./images/_The_Creature_Death.png",
    frame_count: 11,
    text: `You attempt to run away however you still cannot move, the
    creature senses tension “another lost child too far gone…. if
    something isn't working you should end it…” the eyes glow red,<br>
    YOU DIE.`,
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
    image: "./images/_The_Creature_Death.png",
    frame_count: 11,
    text: `You kneel before the mound of bones and find yourself
    uncontrollably crying as your life flashes before your
    eyes, your mistakes, regrets, everything you wish you
    could've done differently. “the decay won't stop.. i
    suppose it was meant to happen this way….”<br>
    YOU DIE.`,
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
    chosen the wrong path”<br>
    YOU DIE`,
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
  forest_left: {
    image: "./images/Clearing_Sketch.png",
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
  drink: {
    image: "./images/Clearing_Amplified.png",
    frame_count: 1,
    text: `Everything around you become distorted and the forest feels more alive, breathing with you. you feel the
paranoid urge to run.`,
    left: "run",
    leftText: "RUN",
    right: "stay",
    rightText: "STAY",
  },
  run: {
    image: "./images/_Death_Scene.png",
    frame_count: 9,
    text: `you run in circles till you die in a deluded haze<br>
    YOU DIE`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
  stay: {
    image: "./images/fish.png",
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
  follow: {
    image: "./images/initial.png",
    frame_count: 1,
    text: `you rise and begin to follow the fish, and their
trail leads to another creature or something
philosophical. Or something ANOTHER CHOICE YAY,
maybe you meet the leader of the fish and he
offers you a gift something to help with your
journey??!`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
  ignore: {
    image: "./images/_Death_Scene.png",
    frame_count: 9,
    text: `figuring it is just another delusion, you close your eyes once
again. you die from low blood pressure<br>YOU DIE`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
  forest_left2: {
    image: "./images/Cabin_Ext.png",
    frame_count: 1,
    text: `its probably not safe, after taking in the serenity, you continue walking and you
come across a rundown cabin. you come across a rundown cabin. go inside?`,
    left: "cabin",
    leftText: "YES",
    right: "forest_left3",
    rightText: "NO",
  },
  forest_left3: {
    image: "./images/_Death_Scene.png",
    frame_count: 9,
    text: `you start feeling nauseous it becomes harder to breath as the air feels
thicker and viscous, you lose consciousness,<br> YOU DIE`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
  cabin: {
    image: "./images/Cabin_Int_Goat.png",
    frame_count: 1,
    text: `You enter the cabin, the horrors of the outside world seem to dull as you
are met face to face with a pregnant creature, a goat for a face, she looks
over you with a paternal love and hums a lullaby, you begin to speak but
her voice washes over you " my child will be here soon, I can let you stay
here until whatever you're running from leaves, but after that I must ask
you a favour; that clearing outside holds fish that my child can eat when
it is born, may you fish me some, and I will allow you to stay"`,
    left: "fish",
    leftText: "FISH",
    right: "refuse",
    rightText: "NO",
  },
  refuse: {
    image: "./images/_Goat_death.png",
    frame_count: 10,
    text: `the lullaby the goat is singing gets louder, and envelops your whole
    being, you are no longer at the will of your own body, the last thing you see is
    the distorting face of the goat before your vision depletes.<br>
    YOU DIE.`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
  fish: {
    image: "./images/fish_in_hand.png",
    frame_count: 1,
    text: `As you pull the fish out of the water, they all rise and speak in unisono ,
    demanding you free them from your grasp, you feel yourself being dragged into the
    water, do you fight them off or begin to see their point of view and join them.`,
    left: "allow_pull",
    leftText: "ALLOW",
    right: "fight_back",
    rightText: "fight",
  },
  allow_pull: {
    image: "./images/Cabin_Ext.png",
    frame_count: 1,
    text: `you pass out as they continue dragging you, you open your eyes again as you’re
passing through shapes and colours at hyper speed, and it no longer feels as if you
are underwater, you surface Infront of the cabin. Go inside ?`,
    left: "go_inside",
    leftText: "YES",
    right: "go_away",
    rightText: "NO",
  },
  go_away: {
    image: "./images/_Death_Scene.png",
    frame_count: 9,
    text: `you start feeling nauseous it becomes harder to breath as the air feels
thicker and viscous, you lose consciousness,<br>
    YOU DIE`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
  go_inside: {
    image: "./images/Cabin_Int_Fish.png",
    frame_count: 1,
    text: `You enter the cabin, the horrors of the outside world seem to dull as you
are met face to face with a pregnant creature, a fish. she hums a lullaby,
you begin to speak but her voice washes over you ‘your life may be filled
with love or regret. That's what has been leading you through this forest.
Two sides. A dark and light. Safe decisions are meaningless. Your primality
is skewed here. Forests are always ever changing. Prehistoric, yet new, new
life and death happens constantly here, with or without humans. A place
filled with contradictions, protection yet a fear of what resides here, a
settlement that you do not belong. Logic does not apply here. The forest
reads you, not you read it. I ask you, why do you think you are you here?`,
    left: "fear",
    leftText: "FEAR",
    right: "fate",
    rightText: "FATE",
  },
  fear: {
    image: "./images/_Death_Scene.png",
    frame_count: 9,
    text: `"You are afraid of the unknown, you are afraid of the forest, you are afraid of
    the creature, you are afraid of the goat, you are afraid of the fish, you are
    afraid of the twins, you are afraid of the bones, you are afraid of the apple,
    you are afraid of the fire, you are afraid of the tree, you are afraid of the
    cabin, you are afraid of the water, you are afraid of the forest, you are afraid of what you are, this is your being. You must learn peace" <br>
    YOU DIE`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
  fate: {
    image: "./images/initial.png",
    frame_count: 1,
    text: `‘I see’ The fish seems to like this answer. Your vision blurs and the form distorts
back into the goat. No longer pregnant. Kitten in arms. You find yourself with a
fish in your own arms. You feed the kitten.<br>
YOU WIN`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
  fight_back: {
    image: "./images/fish_in_hand.png",
    frame_count: 1,
    text: `ou fight back with the fish and wriggle out of their grasp, managing
to grab one in the meantime. Your head fills with louder whispers the longer you
hold it, begging you to spare it. Do you bring it back to the child?`,
    left: "bring_back",
    leftText: "YES",
    right: "eat_fish",
    rightText: "NO",
  },
  bring_back: {
    image: "./images/Cabin_Ext.png",
    frame_count: 1,
    text: `You return to the cabin, fish in hand. The creature looks up at you, holding a
white kitten in its arms. You feed the kitten. <br>
YOU WIN.`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
  eat_fish: {
    image: "./images/_Death_Scene.png",
    frame_count: 9,
    text: `Hearing the creatures cries, you spare it and return it to the water. A voice still
envelops your head getting unbearably loud.<br>
YOU DIE`,
    left: null,
    leftText: null,
    right: null,
    rightText: null,
  },
};
