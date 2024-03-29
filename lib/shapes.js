
class Shape {

    getCodeCommonBeginning() {
        let rtnStr = `<svg version="1.1" `;
        rtnStr += `width="300" `;
        rtnStr += `height="200" `;
        rtnStr += `xmlns="http://www.w3.org/2000/svg">`;
        return rtnStr;
    }

    getCodeCommonEnding(textColour,text) {
        let rtnStr = `font-size="60" `;
        rtnStr += `text-anchor="middle" `;
        rtnStr += `fill="${textColour}">`;
        rtnStr += `${text}</text>`;
        rtnStr += `</svg>`;
        return rtnStr;
    }
}

class Circle extends Shape {

    constructor(){
        super();
        this.text_x = 150;
        this.text_y = 115;
    }

    render(backgroundColour,textColour,text) {
        let rtnStr = this.getCodeCommonBeginning();
        rtnStr += `<circle cx="150" cy="100" r="80" fill="`;
        rtnStr += backgroundColour;
        rtnStr += `" /><text x="${this.text_x}" y="${this.text_y}" `;
        rtnStr += this.getCodeCommonEnding(textColour,text);
        return rtnStr
    }

}

class Square extends Shape {

    constructor(){
        super();
        this.text_x = 150;
        this.text_y = 120;
    }

    render(backgroundColour,textColour,text) {
        let rtnStr = this.getCodeCommonBeginning();
        rtnStr += `<rect width="100%" height="100%" fill="`;
        rtnStr += backgroundColour;
        rtnStr += `" /><text x="${this.text_x}" y="${this.text_y}" `;
        rtnStr += this.getCodeCommonEnding(textColour,text);
        return rtnStr
    }

}

class Triangle extends Shape {

    constructor(){
        super();
        this.text_x = 150;
        this.text_y = 135;
    }

    render(backgroundColour,textColour,text) {
        let rtnStr = this.getCodeCommonBeginning();
        rtnStr += `<polygon points="150,0 0,200 300,200" style="fill:`;
        rtnStr += backgroundColour;
        rtnStr += `" /><text x="${this.text_x}" y="${this.text_y}" `;
        rtnStr += this.getCodeCommonEnding(textColour,text);
        return rtnStr
    }

}

module.exports = { Circle,Square,Triangle }