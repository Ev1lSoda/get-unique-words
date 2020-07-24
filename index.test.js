const guw = require("./index.js");

console.log("This test will help you to understand how this package works.");
console.log("You will see all common situations.");
console.log("Starting Test!");

const str = "Ain't, A&B, ha-ha-ha, Ain't, A&B, ha-ha-ha, b.c.e. T-34 END.";

console.log("This is test string: ", str);

const resOne = guw(str);
const trueRes = ["Ain't", "A&B", "ha-ha-ha", "bce", "T-34", "END"];

console.log("Result: ", resOne);

for (let i = 0; i < 5; i++) {
  if (resOne[i] !== trueRes[i]) {
    throw new Error("If you see this message something went wrong! Package worked not as expected.");
  }
}

console.log("Everything is fine. Hope you understand how it works!");
