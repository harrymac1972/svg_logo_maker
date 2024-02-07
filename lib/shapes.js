
class SquareCircle {

    render(rectangleColour,circleColour,textColour,text) {
        let rtnStr = `<svg version="1.1" `;
        rtnStr += `width="300" height="200" `;
        rtnStr += `xmlns="http://www.w3.org/2000/svg">`;
        rtnStr += `<rect width="100%" height="100%" fill="`;
        rtnStr += rectangleColour;
        rtnStr += `"/><circle cx="150" cy="100" r="80" fill="`;
        rtnStr += circleColour;
        rtnStr += `" /><text x="150" y="125" font-size="60" `;
        rtnStr += `text-anchor="middle" fill="`;
        rtnStr += textColour;
        rtnStr += `">`;
        rtnStr += text;
        rtnStr += `</text></svg>`;
        return rtnStr
    }

}

class Circle {

    render(backgroundColour,textColour,text) {
        let rtnStr = `<svg version="1.1" `;
        rtnStr += `width="300" height="200" `;
        rtnStr += `xmlns="http://www.w3.org/2000/svg">`;
        rtnStr += `<circle cx="150" cy="100" r="80" fill="`;
        rtnStr += backgroundColour;
        rtnStr += `" /><text x="150" y="125" font-size="60" `;
        rtnStr += `text-anchor="middle" fill="`;
        rtnStr += textColour;
        rtnStr += `">`;
        rtnStr += text;
        rtnStr += `</text></svg>`;
        return rtnStr
    }

}

class Square {

    render(backgroundColour,textColour,text) {
        let rtnStr = `<svg version="1.1" `;
        rtnStr += `width="300" height="200" `;
        rtnStr += `xmlns="http://www.w3.org/2000/svg">`;
        rtnStr += `<rect width="100%" height="100%" fill="`;
        rtnStr += backgroundColour;
        rtnStr += `"/><text x="150" y="125" font-size="60" `;
        rtnStr += `text-anchor="middle" fill="`;
        rtnStr += textColour;
        rtnStr += `">`;
        rtnStr += text;
        rtnStr += `</text></svg>`;
        return rtnStr
    }

}

class Triangle {

    render(backgroundColour,textColour,text) {
        let rtnStr = `<svg version="1.1" `;
        rtnStr += `width="300" height="200" `;
        rtnStr += `xmlns="http://www.w3.org/2000/svg">`;
        rtnStr += `<polygon points="150,0 0,200 300,200" style="fill:`;
        rtnStr += backgroundColour;
        rtnStr += `;stroke:purple;stroke-width:1" />`;
        rtnStr += `<text x="150" y="125" font-size="60" `;
        rtnStr += `text-anchor="middle" fill="`;
        rtnStr += textColour;
        rtnStr += `">`;
        rtnStr += text;
        rtnStr += `</text></svg>`;
        return rtnStr
    }

}

module.exports = { Circle,Square,Triangle }