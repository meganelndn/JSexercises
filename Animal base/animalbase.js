"use strict";
window.addEventListener("DOMContentLoaded", init);

let allAnimals = [];

// The prototype for all animals: 
const Animal = {
    name: "",
    desc: "-unknown animal-",
    type: "",
    age: 0
};

function init() {
    console.log("ready");

    // TODO: Add event-listeners to filter and sort buttons
    document.querySelector("[data-filter='cat']").addEventListener("click", filterCats);
    document.querySelector("[data-filter='dog']").addEventListener("click", filterDogs);
    document.querySelector("[data-filter='*']").addEventListener("click", filterAll);

    loadJSON();
}

/*-------------------.FILTER FUNCTIONS-----------------*/

// When "Only Cats" btn clicked, show only cats
function filterCats() {
    const onlyCats = allAnimals.filter(isCat);
    displayList(onlyCats);
}

function isCat(animal) {
    return animal.type === "cat";
}

// When "Only Dogs" btn clicked, show only cats
function filterDogs() {
    const onlyDogs = allAnimals.filter(isDog);
    displayList(onlyDogs);
}

function isDog(animal) {
    return animal.type === "dog";
}

// When "all" btn clicked, show List
function filterAll() {
    displayList(allAnimals);
}

/*-----------------------LOAD JSON DATA--------------------*/

function loadJSON() {
    fetch("animals.json")
        .then(response => response.json())
        .then(jsonData => {
            // when loaded, prepare objects
            prepareObjects(jsonData);
        });
}

function prepareObjects(jsonData) {
    allAnimals = jsonData.map(preapareObject);

    // TODO: This might not be the function we want to call first
    displayList(allAnimals);
}

function preapareObject(jsonObject) {
    const animal = Object.create(Animal);

    const texts = jsonObject.fullname.split(" ");
    animal.name = texts[0];
    animal.desc = texts[2];
    animal.type = texts[3];
    animal.age = jsonObject.age;

    return animal;
}

/*----------DISPLAY ANIMALS && WHEN BTN CLICKED, CLEAR DEFAULT LIST----------*/

function displayList(animals) {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    animals.forEach(displayAnimal);
}

/*----------------CLONE TEMPLATE AND POPULATE ITS PROPERTIES---------------*/

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