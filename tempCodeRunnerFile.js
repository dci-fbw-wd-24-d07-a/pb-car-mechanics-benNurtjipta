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

let search1 = rls.question("what brand of car do you own?\n> ");

if (brands.every((word) => word.toLowerCase() !== search1.toLowerCase())) {
  console.log(`sorry, we don't serve ${search1} here`);
  process.exit();
} else {
  console.log("we have:");

  for (let i = 0; i < idParts.length; i++) {
    if (idParts[i].toLowerCase().startsWith(search1)) {
      console.log(`${idParts[i]}: ${amounts[i]}`);
    }
  }
}