const goodColours = {
    "red": "#ff0000",
    "green": "#00ff00",
    "blue": "#0000ff",
    "yellow": "#ffff00",
    "orange": "#ffa500",
    "purple": "#800080",
    "pink": "#ffc0cb",
    "brown": "#a52a2a",
    "gray": "#808080",
    "grey": "#808080",
    "black": "#000000",
    "white": "#ffffff",
};

let goodColoursList = [];
for (let key in goodColours) {
    goodColoursList.push(key);
}

isHexadecimal = (colourStr) => {
    const hexRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    return hexRegex.test(colourStr);
  }

colourIsValid = (colourStr) => {
    if (isHexadecimal(colourStr)) {
        return true;
    }
    if (goodColoursList.includes(colourStr.toLowerCase())) {
        return true;
    }
}

module.exports = {goodColours,
                goodColoursList,
                colourIsValid};
