const IMG = "assets/test9-images/";
const TOTAL_POINTS = 50;

const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1 });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image, points: 1 });
const pictureChoice = (id, prompt, pictures, answer, explanation) => ({ id, type: "pictureChoice", prompt, pictures, answers: [answer], explanation, points: 1 });
const labelledPictures = (prefix, labels) => labels.map((label) => ({ value: label, image: `${IMG}${prefix}-${label}.png` }));

const sections = [
  { key: "A", label: "A", title: "Match the sentences to the pictures.", note: "Choose the picture label a, b, c, or d. The letters are picture labels only.", points: 4, questions: [
    pictureChoice("A1", "1. There are a few clouds in the sky.", labelledPictures("a", ["a", "b", "c", "d"]), "d", "Picture d shows a few clouds in the sky."),
    pictureChoice("A2", "2. We live on a small island.", labelledPictures("a", ["a", "b", "c", "d"]), "a", "Picture a shows a small island surrounded by water."),
    pictureChoice("A3", "3. Look at the lightning!", labelledPictures("a", ["a", "b", "c", "d"]), "b", "Picture b shows lightning during a storm."),
    pictureChoice("A4", "4. The waterfall is so beautiful.", labelledPictures("a", ["a", "b", "c", "d"]), "c", "Picture c shows a waterfall.")
  ]},
  { key: "B", label: "B", title: "Complete the sentences.", note: "Write one suitable word in each gap.", points: 4, questions: [
    input("B1", "1. There are a lot of great beaches along the ___ of my country.", ["coast"], "A coast is the land beside the sea, so beaches can lie along a country's coast."),
    input("B2", "2. I don't like to swim in salt water. I prefer to swim in a lake or a ___.", ["river"], "A river and a lake contain fresh water rather than salt water."),
    input("B3", "3. It's hard to see very far in front of you because of the ___ today.", ["fog"], "Fog is a thick cloud close to the ground, so it makes distant objects difficult to see."),
    input("B4", "4. It's very ___ today. The leaves are all blowing off the trees.", ["windy"], "Windy describes weather with a lot of wind, which can blow leaves off trees.")
  ]},
  { key: "C", label: "C", title: "Unscramble the words and match.", note: "Write the word, then choose its definition label. The letters a-c are definition labels only.", points: 6, wordBank: ["a. a lot of rain, wind, or snow", "b. small balls of ice that fall from the sky", "c. having good health; not sick"], questions: [
    { id: "C1", type: "paired", prompt: "1. h i l a", points: 2, parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["hail"], explanation: "Hail is the correct spelling." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c"], answers: ["b"], explanation: "Hail means small balls of ice that fall from the sky, so the label is b." }
    ]},
    { id: "C2", type: "paired", prompt: "2. s t m o r", points: 2, parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["storm"], explanation: "Storm is the correct spelling." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c"], answers: ["a"], explanation: "A storm brings strong wind, rain, or snow, so the label is a." }
    ]},
    { id: "C3", type: "paired", prompt: "3. h e t h y a l", points: 2, parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["healthy"], explanation: "Healthy is the correct spelling." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c"], answers: ["c"], explanation: "Healthy means having good health and not being sick, so the label is c." }
    ]}
  ]},
  { key: "D", label: "D", title: "Listen. Then circle the correct answer.", note: "Listen carefully and choose the sentence you hear.", points: 4, audio: "assets/audio-d.mp3", questions: [
    choice("D1", "1.", ["Let's go into that building.", "Let's go out of that building."], "Let's go into that building.", "The recording says go into, which means enter the building."),
    choice("D2", "2.", ["We can walk around it.", "We can walk down it."], "We can walk around it.", "The recording says walk around it."),
    choice("D3", "3.", ["He's going to go back to his house.", "He's going to go around his house."], "He's going to go back to his house.", "The recording says go back to his house."),
    choice("D4", "4.", ["I rode through the river.", "I rode along the river."], "I rode along the river.", "The recording says rode along the river, meaning the movement followed the river's direction.")
  ]},
  { key: "E", label: "E", title: "Complete the sentences.", note: "Use the words in the box. One word is not needed.", points: 3, wordBank: ["through", "to", "around", "over"], questions: [
    input("E1", "1. I walked from school ___ the library after school.", ["to"], "Use to for movement toward a destination: from school to the library."),
    input("E2", "2. Oh no! You threw the ball ___ the neighbor's glass window, and it broke!", ["through"], "The ball passed from one side of the glass to the other, so through is correct."),
    input("E3", "3. The bridge goes ___ the river.", ["over"], "A bridge crosses above a river, so it goes over the river.")
  ]},
  { key: "F", label: "F", title: "Look and complete the sentences.", note: "Use the picture and one word from the box. One word is not needed.", points: 4, wordBank: ["around", "out of", "down", "up", "under"], questions: [
    input("F1", "1. The boat sailed ___ the coast.", ["down"], "The arrow follows the coastline downward, so the boat sailed down the coast.", IMG + "f-1.png"),
    input("F2", "2. Look! The cat is climbing ___ the tree.", ["up"], "The arrow points upward as the cat climbs, so up is correct.", IMG + "f-2.png"),
    input("F3", "3. Katie is ___ the table.", ["under"], "Katie is below the tabletop, so she is under the table.", IMG + "f-3.png"),
    input("F4", "4. The grasshopper jumped ___ the box.", ["out of"], "The grasshopper is moving from inside the box to outside it, so out of is correct.", IMG + "f-4.png")
  ]},
  { key: "G", label: "G", title: "Listen and circle the correct answer.", note: "Listen to each statement and choose True or False.", points: 4, audio: "assets/audio-g.mp3", questions: [
    choice("G1", "1.", ["T", "F"], "T", "Statement 1 is true according to the recording."),
    choice("G2", "2.", ["T", "F"], "T", "Statement 2 is true according to the recording."),
    choice("G3", "3.", ["T", "F"], "F", "Statement 3 is false according to the recording."),
    choice("G4", "4.", ["T", "F"], "F", "Statement 4 is false according to the recording.")
  ]},
  { key: "H", label: "H", title: "Complete the sentences.", note: "Write one ocean-life word in each gap.", points: 3, questions: [
    input("H1", "1. ___ is colorful and sometimes looks like rocks under the water.", ["coral"], "Coral grows underwater and can form colorful, rock-like structures."),
    input("H2", "2. An ___ has eight 'arms' and looks like a squid.", ["octopus"], "An octopus has eight arms and is related to the squid."),
    input("H3", "3. You can wear ___ to see better under the water.", ["goggles"], "Goggles protect your eyes and help you see underwater.")
  ]},
  { key: "I", label: "I", title: "Complete the sentences. Then match them to the pictures.", note: "First write the missing word. Then choose the picture label a, b, or c.", points: 6, questions: [
    input("I1", "1. A ___ is a black and white bird that swims in the cold water.", ["penguin"], "A penguin is a black-and-white bird adapted to swimming in cold water."),
    input("I2", "2. A ___ breathes through an oxygen tank when she goes underwater to look at fish.", ["diver"], "A diver uses an oxygen tank to breathe while exploring underwater."),
    input("I3", "3. The ___ is a very smart sea animal that can jump high in the air.", ["dolphin"], "A dolphin is an intelligent sea mammal that can leap above the water."),
    pictureChoice("I4", "1. Choose the picture of a penguin.", labelledPictures("i", ["a", "b", "c"]), "b", "Picture b shows a penguin."),
    pictureChoice("I5", "2. Choose the picture of a diver.", labelledPictures("i", ["a", "b", "c"]), "a", "Picture a shows a diver underwater."),
    pictureChoice("I6", "3. Choose the picture of a dolphin.", labelledPictures("i", ["a", "b", "c"]), "c", "Picture c shows a dolphin jumping out of the water.")
  ]},
  { key: "J", label: "J", title: "Write the words in the correct order to make sentences or questions.", note: "Use every word and write a complete sentence or question.", points: 4, questions: [
    input("J1", "1. bathing suit / I / want / wear / my / to", ["I want to wear my bathing suit", "I want to wear my bathing suit."], "The pattern is subject + want to + verb: I want to wear my bathing suit."),
    input("J2", "2. water / every day / Humans / need / to / drink", ["Humans need to drink water every day", "Humans need to drink water every day."], "Use need to before the verb: Humans need to drink water every day."),
    input("J3", "3. water / Do / have / to / fish / live / in", ["Do fish have to live in water", "Do fish have to live in water?"], "For the question, use Do + subject + have to + verb: Do fish have to live in water?"),
    input("J4", "4. We / to / the / beach / wanted / go / to", ["We wanted to go to the beach", "We wanted to go to the beach."], "Wanted to is followed by the base verb go: We wanted to go to the beach.")
  ]},
  { key: "K", label: "K", title: "Complete the sentences. Use needs to or wants to.", note: "Choose the meaning first: something necessary or something a person would like to do.", points: 4, questions: [
    input("K1", "1. Linda ___ go play at the beach tomorrow.", ["wants to"], "Playing at the beach is Linda's wish, so use wants to."),
    input("K2", "2. A person ___ use an oxygen tank with an air hose when diving deep in the ocean.", ["needs to", "has to"], "An oxygen tank is necessary for breathing during a deep dive, so needs to is the expected answer; has to has the same necessary meaning here."),
    input("K3", "3. Keiko is interested in ocean life. She ___ learn more about kelp and squid.", ["wants to"], "Her interest shows a wish to learn more, so use wants to."),
    input("K4", "4. Maria ___ wear a coat in the winter.", ["needs to", "has to"], "A winter coat is necessary in cold weather, so needs to is the expected answer; has to is also grammatically possible.")
  ]},
  { key: "L", label: "L", title: "Look and complete the sentences.", note: "Use wants to or needs to and a suitable verb.", points: 4, questions: [
    input("L1", "1. He ___ outside.", ["wants to play", "wants to go", "wants to go play"], "He is looking at children playing outside, so he wants to play or go outside.", IMG + "l-1.png"),
    input("L2", "2. She ___ swimming.", ["wants to go"], "She is at the water and wants to go swimming.", IMG + "l-2.png"),
    input("L3", "3. She ___ a rain jacket.", ["needs to wear"], "It is raining, so she needs to wear a rain jacket.", IMG + "l-3.png"),
    input("L4", "4. He ___.", ["needs to wake up", "needs to get up"], "The alarm is ringing, so he needs to wake up or get up.", IMG + "l-4.png")
  ]}
];
