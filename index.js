import rls from "readline-sync";

const brands = ["Ford", "VW", "Porsche"];
const parts = ["Keilriemen", "Bremsklötze"];

const idParts = [
  "Ford-Keilriemen",
  "VW-Keilriemen",
  "Porsche-Keilriemen",
  "Ford-Bremsklötze",
  "VW-Bremsklötze",
  "Porsche-Bremsklötze",
];

const amounts = [3, 5, 1, 4, 8, 0];
console.clear();
let search1 = rls.question("what brand of car do you own?\n> ");

if (brands.every((word) => word.toLowerCase() !== search1.toLowerCase())) {
  console.log(`sorry, we don't serve ${search1} here`);
  process.exit();
} else {
  console.log("we have:");
  let count = 1;
  for (let i = 0; i < idParts.length; i++) {
    if (idParts[i].toLowerCase().startsWith(search1.toLowerCase())) {
      if (amounts[i] === 0) {
        console.log(`Nicht auf Lager: ${count}. ${idParts[i]}: ${amounts[i]}`);
        count++;
      } else {
        console.log(`${count}. ${idParts[i]}: ${amounts[i]}`);
        count++;
      }
    }
  }
}
