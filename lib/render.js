
const shapes = require("./shapes.js");
const fs = require("fs");
const { Circle,Square } = shapes;


let circle = new Circle;
let fileStr = circle.render("orange","white");
console.log(fileStr);
fs.writeFile("logo.svg",fileStr,(err) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("\n\tlogo.svg created");
  }
});