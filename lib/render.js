
const shapes = require("./shapes.js");
const fs = require("fs");
const { Circle,Square } = shapes;


function writeLogo(fileStr){
    console.log(fileStr);
    fs.writeFile("logo.svg",fileStr,(err) => {
      if (err) {
        console.error("Error:", err);
      } else {
        console.log("\n\tlogo.svg created");
      }
    });
}


let circle = new Circle;
let fileStr = circle.render("Purple","white");
writeLogo(fileStr)

