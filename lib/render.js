
const shapes = require("./shapes.js");
const fs = require("fs");
const { Circle,Square,Triangle } = shapes;

function render_shape(shape,backgroundColour,textColour,text) {

    function writeLogo(fileStr){

        function getFileName(shape){
            return `${shape}.svg`;
        }

        console.log(fileStr);
        fs.writeFile(getFileName(shape),fileStr,(err) => {
          if (err) {
            console.error("Error:", err);
          } else {
            console.log(`\n\t${getFileName(shape)} created`);
          }
        });
    }
    
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


render_shape("triangle","orange","black","xS");