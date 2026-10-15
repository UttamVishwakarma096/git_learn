const heroes = ["a sleepy wizard", "a brave raccoon", "a tiny robot"];
const places = ["the Moon", "a haunted library", "the world's largest sandwich"];
const missions = ["find a missing sock", "deliver a mysterious postcard", "teach a dragon to dance"];

const pick = (items) => items[Math.floor(Math.random() * items.length)];

console.log(`Today's quest: ${pick(heroes)} must ${pick(missions)} in ${pick(places)}.`);

const secret = Math.floor(Math.random() * 20) + 1;
let guesses = 0;

console.log("I'm thinking of a number from 1 to 20.");

process.stdin.setEncoding("utf8");
process.stdin.on("data", (input) => {
  const guess = Number(input.trim());
  guesses++;

  if (!Number.isInteger(guess) || guess < 1 || guess > 20) {
    console.log("Enter a whole number from 1 to 20.");
  } else if (guess < secret) {
    console.log("Too low! Try again.");
  } else if (guess > secret) {
    console.log("Too high! Try again.");
  } else {
    console.log(`You got it in ${guesses} guess${guesses === 1 ? "" : "es"}!`);
    process.exit();
  }
});
