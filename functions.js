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