
const shapes = require("./shapes.js");
const fs = require("fs");
const { Circle,Square,Triangle } = shapes;

// create an SVG file of various shapes, colours, and text
function render_shape(shape,backgroundColour,textColour,text) {

    // write the passed File String literal to a SVG file
    function writeLogo(fileStr){

        // choose fileName based on passed shape
        function getFileName(shape){
            return `${shape}.svg`;
        }

        // write file
        console.log(fileStr);
        fs.writeFile(getFileName(shape),fileStr,(err) => {
          if (err) {
            console.error("Error:", err);
          } else {
            console.log(`\n\t${getFileName(shape)} created`);
          }
        });
    }

    // choose Class to render based on 'shape' passed
    switch (shape.toLowerCase()) {
        case "circle":
            let circle = new Circle;
            fileStr = circle.render(backgroundColour,textColour,text);
            break;
        case "square":
            let square = new Square;
            fileStr = square.render(backgroundColour,textColour,text);
            break;
        case "triangle":
            let triangle = new Triangle;
            fileStr = triangle.render(backgroundColour,textColour,text);
            break;
        default:
            break;
    }
    writeLogo(fileStr)
}


render_shape("square","orange","black","xS");