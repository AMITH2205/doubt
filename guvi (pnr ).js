// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  var x = parseFloat(userInput[0] * userInput[1] * userInput[2]);
  var y = x / 100;
  console.log(y.toFixed(2));

  //end-here
});
