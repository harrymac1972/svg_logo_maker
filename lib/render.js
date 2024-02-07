
const shapes = require("./shapes.js");
const fs = require("fs");
const { Circle,Square } = shapes;

function render_shape(shape,backgroundColour,textColour) {
    if (shape.toLowerCase() == "circle") {
        let circle = new Circle;
        var fileStr = circle.render(backgroundColour,textColour);
    }    
    writeLogo(fileStr)
}


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


render_shape("circle","orange","purple");