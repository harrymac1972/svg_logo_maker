
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

    if (shape.toLowerCase() == "circle") {
        let circle = new Circle;
        var fileStr = circle.render(backgroundColour,textColour,text);
    }
    else if (shape.toLowerCase() == "square") {
        let square = new Square;
        var fileStr = square.render(backgroundColour,textColour,text);
    }
    else if (shape.toLowerCase() == "triangle") {
        let triangle = new Triangle;
        var fileStr = triangle.render(backgroundColour,textColour,text);
    }
    writeLogo(fileStr)
}


render_shape("triangle","orange","black","xS");