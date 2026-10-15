const heroes = ["a sleepy wizard", "a brave raccoon", "a tiny robot"];
const places = ["the Moon", "a haunted library", "the world's largest sandwich"];
const missions = ["find a missing sock", "deliver a mysterious postcard", "teach a dragon to dance"];

const pick = (items) => items[Math.floor(Math.random() * items.length)];

console.log(`Today's quest: ${pick(heroes)} must ${pick(missions)} in ${pick(places)}.`);