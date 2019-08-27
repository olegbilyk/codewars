const words = Array.from(Array(100000), (_, i) => i);
const newWords1 = [];
const newWords2 = [];

console.time("for of");
for (let word of words) {
  newWords1.push(word);
}
console.timeEnd("for of");

console.time("for end");
for (let word = 0, end = words.length; word < end; word++) {
  newWords2.push(words[word]);
}
console.timeEnd("for end");

console.time("for");
for (let word = 0; word < words.length; word++) {
  newWords2.push(words[word]);
}
console.timeEnd("for");
