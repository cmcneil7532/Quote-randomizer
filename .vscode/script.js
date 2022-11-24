//strict
const clickEffect = document.getElementById("new-quote");
const text = document.getElementById("text");
let quotes = [
  "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
  "When you reach the end of your rope, tie a knot in it and hang on.",
  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
  "In the end, it's not the years in your life that count. It's the life in your years.",
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking.",
];
let authors = [
  "- Mother Teresa",
  "- Franklin D. Roosevelt",
  "- Helen Keller",
  "- Abraham Lincoln",
  "- Steve Jobs",
];

const newQuote = function () {
  let randomNum = Math.floor(Math.random() * quotes.length);
  document.getElementById("text").innerHTML = quotes[randomNum]; // A random munber based on the length my array should never be undefined
  document.getElementById("author").innerHTML = authors[randomNum];
};

newQuote();
