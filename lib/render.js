const shapes = require("./shapes.js");
const fs = require("fs");
const { Square } = shapes;


let square = new Square;
let fileStr = square.render("red","blue","white");
console.log(fileStr);
fs.writeFile("logo.svg",fileStr,(err) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("\n\tlogo.svg created");
  }
});
