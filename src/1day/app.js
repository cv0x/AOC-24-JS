const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8");

const lines = input.split("\n").filter((line) => line.trim() !== "");

const left = [];
const right = [];

lines.forEach((line) => {
  const [l, r] = line.split(/\s+/).map(Number); // Rozdělení podle mezer a převod na čísla
  left.push(l);
  right.push(r);
});

left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

let totalDistance = 0;
for (let i = 0; i < left.length; i++) {
  totalDistance += Math.abs(left[i] - right[i]);
}

// console.log("Left List:", left);
// console.log("Right List:", right);

console.log("Total Distance:", totalDistance);
