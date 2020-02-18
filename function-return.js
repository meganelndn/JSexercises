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

// a function with multiple return values: in-class exercise (color palette)
function hex2rgb(hexcolor) {

    const r;
    const g;
    const b;

    // const rgb = {
    //     "r": r,
    //     "g": g,
    //     "b": b
    // };

    // instead of making an object like above, return the consts
    return {
        r,
        g,
        b
    };
}

function anotherFunction() {

    const rgb = hex2rgb("#c0ffee");

    const red = rgb.r;
    const green = rgb.g;
}

function convertRBGtoHSL(rgb) {

    const r = rgb.r;
    const g = rgb.g;
    const b = rgb.b;

    // instead of sending it to a new value to get the HSL value, return the converted HSL value!
    return {
        h,
        s,
        l
    };
}