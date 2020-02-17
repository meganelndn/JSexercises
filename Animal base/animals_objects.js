"use strict";
window.addEventListener("DOMContentLoaded", init);

const allAnimals = [];
// 1. Create an object prototype 
const Animal = {
    name: "",
    type: "unknown",
    desc: "",
    age: 0
}

function init() {
    console.log("ready");

    loadJSON();
}

function loadJSON() {
    fetch("animals.json")
        .then(response => response.json())
        .then(jsonData => {
            // when loaded, prepare objects
            prepareObjects(jsonData);
        });
}

function prepareObjects(jsonData) {
    jsonData.forEach(jsonObject => {
        // 2. Create a new object from the prototype
        const animal = Object.create(Animal);

        // 3. Separate the values to assign them to their properties 
        const firstSpace = jsonObject.fullname.indexOf(" ");
        const secondSpace = jsonObject.fullname.indexOf(" ", firstSpace + 1);
        const thirdSpace = jsonObject.fullname.indexOf(" ", secondSpace + 1);

        // 4. Find the values for name, desc, and type from the jsonObject
        animal.name = jsonObject.fullname.substring(0, firstSpace);
        //console.log(animal.name)
        animal.age = jsonObject.age;
        //console.log(animal.age)
        animal.desc = jsonObject.fullname.substring(secondSpace + 1, thirdSpace);
        //console.log(animal.desc)
        animal.type = jsonObject.fullname.substring(thirdSpace + 1);
        //console.log(animal.type)

        console.log(animal)

        // 5. Add the new object to the array of animals
        allAnimals.push(animal);
        console.log(allAnimals)
    });

    displayList();
}

function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild(clone);
}