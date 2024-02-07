



class Square {

    render() {
        let rtn_v = `<svg version="1.1" `
        rtn_v += `width="300" height="200" `
        rtn_v += `xmlns="http://www.w3.org/2000/svg">` 
        rtn_v += `<rect width="100%" height="100%" fill="`
        rtn_v += `red`
        rtn_v += `"/> <circle cx="150" cy="100" r="80" fill="`
        rtn_v += `green`  
        rtn_v += `" /><text x="150" y="125" font-size="60" text-anchor="middle" `
        rtn_v += `fill="`
        rtn_v += `white`
        rtn_v += `">SVG</text> `
        rtn_v += `</svg>`
        return rtn_v
    }

}

module.exports = { Square }