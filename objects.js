"use strict";

let person1 = {
    firstName: "Mégane",
    age: 21,
    student: true
};

console.log(person1.firstName)

person1.lastName = "Londoño";

// keep property in object, but change it to "undefined"
person1.lastName = undefined;
console.log(person1.lastName)

// delete a property
delete person1.lastName;
console.log(person1.lastName)

console.log(person1)

// new object
// const person2 = person1;
// person2.firstName = "Céline";
// console.log(person1.firstName)

// new object
let person2 = {
    firstName: "Céline",
    age: 24,
    student: true
};

let person3 = person1;

// comparing objects
const student1 = {
    hisName: "Harry",
    hisLastName: "Potter"
};

const student2 = student1;

student1.hisName = "Potty";

console.log(student1)
console.log(student2)

student1.hisName = student2.hisName;
student1.hisLastName = student2.hisLastName;

// if data in unwanted format, define a template for the data objects: "object prototype" 
const Animal = {
    name: "",
    type: "unknown",
    desc: "",
    age: 0
};

// store new data into properties of prototype
const animal = Object.create(Animal);

Animal.image = "image.jpg";
console.log(animal.image)