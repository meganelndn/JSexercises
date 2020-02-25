"use strict";

// let firstName = "Mégane";

// function sayHello(firstName) {
//     console.log(`Hello ${firstName}`)
// }

// sayHello();


//this is connected with the presentPet() which calls the function
let anotherFirstName = "Mégane";
let anotherAnimalType = "cat";
let anotherAnimalName = "Luna";

//parameters inside the function only work inside the function 
function presentPet(firstName, animalType, animalName) {
    console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}`)
}

//calling the variables, so we can call them differently than the parameters in the function
presentPet(anotherFirstName, anotherAnimalType, anotherAnimalName);


// Function expressions
function sayHello(person) {
    console.log(`Hello ${person}`);
}

const greet = sayHello;

greet("Harry Potter");

// giving a function as parameter to a function
function redAlert() {
    console.log("%cRed alert!", "color:red; font-size:x-large");
}

function blueMessage() {
    console.log("%cBlue message", "color:blue; font-size:large");
}

function log(type) {
    type();
} // type is a parameter to the log function
// that we then call as a function

log(redAlert);
log(blueMessage);
// here, we also give our functions as parameters


// Callback functions


// Callback functions with more parameters
const people = ["Harry", "Ron", "Hermione", "Neville"];

function testParms(a, b, c, d) {
    console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
}

people.forEach(testParms);
// output in console: a takes the array items, b takes the index, c takes the whole array
// when we call .forEach with a function in (), it always takes these 3 params from above
// we can give .forEach a function and a this.Arg 
// .forEach accepts between one & three arguments

// to "fit certain criteria" => callback function must return true/false

// The kind of function typically used in if-statements


// Filter
const animals = [{
        name: "Luna",
        type: "cat"
    },
    {
        name: "Bla",
        type: "rabbit"
    },
    {
        name: "Blu",
        type: "dog"
    },
    {
        name: "Bli",
        type: "mouse"
    }
];

function isCat(animal) {
    if (animal.type === "cat") {
        return true;
    } else {
        return false;
    }
}

//how to console log if an animal is a "cat"

//isCat(animals[0])
//true


// Test .filter on animals
function all(animal) {
    return true;
}

function none(animal) {
    return false;
}

//how to console log this

// animals.filter(all);
// animals.filter(none);

// (all) & (none) => reference to the callback function // .filter is like forEach, receives same params


// .filter with cats
const onlyCats = animals.filter(isCat);

function isDog(animal) {
    if (animal.type === "dog") {
        return true;
    } else {
        return false;
    }
}

const onlyDogs = animals.filter(isDog);

//important for filter!!!
console.table(onlyCats);