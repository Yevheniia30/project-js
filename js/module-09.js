const node = "node is wonderful";
console.log(node);

const random = Math.random().toString(32);
console.log(random);

// генератор случайных букв
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜẞ",
  word = "";
for (let i = 0; i < 15; i++) {
  word += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
}
console.log(word);
