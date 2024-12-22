const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8");

// Nalezni platnych mul(X,Y)
const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;

// Najde shody
let match;
let total = 0;

while ((match = regex.exec(input)) !== null) {
  const x = parseInt(match[1], 10);
  const y = parseInt(match[2], 10);
  total += x * y;
}

console.log(total);
