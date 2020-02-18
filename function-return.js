"use strict";

// shorter way of console logging, the values you assign to function are returned in console
function getColorString(red, green, blue) {

    const value = `rgb(${red}, ${green}, ${blue})`;
    return value;
}

// using functions & return values in other functions
function randomColor() {

    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return getColorString(red, green, blue);
}

function randomBackground() {

    document.querySelector("body").style.backgroundColor = randomColor();
}

// a function with multiple return values
function hex2rgb(hexcolor) {

    const r = ;
    const g = ;
    const b = ;

    const rgb = {
        "r": r,
        "g": g,
        "b": b
    };

    return rgb
}