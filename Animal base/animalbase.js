"use strict";
window.addEventListener("DOMContentLoaded", init);

let allAnimals = [];
let currentAnimals = [];

const settings = {
    filter: null,
    sortBy: null,
    sortDir: "asc"
}

// The prototype for all animals: 
const Animal = {
    name: "",
    desc: "-unknown animal-",
    type: "",
    age: 0,
    star: false,
    winner: false
};

/* const myHeading = document.querySelector("#sorting > th");
const myButtons = document.querySelector(".filter"); */

function init() {
    console.log("ready");

    // TODO: Add event-listeners to filter and sort buttons
    document.querySelector("[data-filter='cat']").addEventListener("click", filterCats);
    document.querySelector("[data-filter='dog']").addEventListener("click", filterDogs);
    document.querySelector("[data-filter='*']").addEventListener("click", filterAll);

    document.querySelector("[data-sort='name']").addEventListener("click", sortName);
    document.querySelector("[data-sort='age']").addEventListener("click", sortAge);

    document
        .querySelector("[data-action='sort'][data-sort='winner']")
        .addEventListener("click", selected => {
            sortAnimals(selected.originalTarget.dataset);
        });

    loadJSON();
}

/*-------------------FILTERING-----------------*/

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

/*---------------------SORTING-------------------*/
function sortName() {
    if (event.target.dataset.sortDirection === "asc") {
        event.target.dataset.sortDirection = "desc";

        nameAsc();
    } else {
        nameDesc();

        event.target.dataset.sortDirection = "asc";
    }
}

// ascending order
function nameDesc() {
    function compareName(a, b) {
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1;
        }
    }
    allAnimals.sort(compareName);
    displayList(allAnimals);
}

// descending order
function nameAsc() {
    function compareName(a, b) {
        if (a.name < b.name) {
            return 1;
        } else if (a.name > b.name) {
            return -1;
        }
    }
    allAnimals.sort(compareName);
    displayList(allAnimals);
}

function sortAge() {
    if (event.target.dataset.sortDirection === "asc") {
        event.target.dataset.sortDirection = "desc"
        ageAsc();
    } else {
        ageDesc();
        event.target.dataset.sortDirection = "asc"
    }
}

// ascending order
function ageAsc() {
    function compareAge(a, b) {
        if (a.age < b.age) {
            return 1;
        } else if (a.age > b.age) {
            return -1;
        }
    }
    allAnimals.sort(compareAge);
    displayList(allAnimals);
}

// descending order
function ageDesc() {
    function compareAge(a, b) {
        if (a.age < b.age) {
            return -1;
        } else if (a.age > b.age) {
            return 1;
        }
    }
    allAnimals.sort(compareAge);
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

    currentAnimals = allAnimals.filter(allAnimals => true);

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

function buildList() {
    const currentList = allAnimals; // FUTURE: Filter and sort currentList before displaying

    displayList(currentList);
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

    // TODO: Show star ⭐ or ☆
    if (animal.star === true) {
        clone.querySelector("[data-field=star]").textContent = "⭐";
    } else {
        clone.querySelector("[data-field=star]").textContent = "☆";
    }
    clone.querySelector("[data-field=star]").addEventListener("click", function () {
        showStar(animal);
    })

    // TODO: Show winner trophy
    clone.querySelector("[data-field=winner").dataset.winner = animal.winner;
    clone
        .querySelector("[data-field=winner]")
        .addEventListener("click", function () {
            toggleWinner(animal);
        });

    // append clone to list
    document.querySelector("#list tbody").appendChild(clone);
}

function showStar(animal) {
    if (animal.star) {
        animal.star = false;
    } else {
        animal.star = true;
    }

    buildList();
}

function toggleWinner(thisAnimal) {
    const totalWinners = allAnimals.filter(animal =>
        animal.winner === "true" ? true : false
    );
    const sameTypeWinners = totalWinners.filter(animal =>
        animal.type === thisAnimal.type ? true : false
    );
    console.log(sameTypeWinners.length);

    if (thisAnimal.winner === "true") {
        thisAnimal.winner = "false";
        displayList(allAnimals);
    } else if (totalWinners.some(winner => winner.type === thisAnimal.type)) {
        console.log("two of same kind");
        callAlertSameType(sameTypeWinners[0], thisAnimal);
    } else if (totalWinners.length === 2) {
        console.log("more than two");
        callAlertMoreThan2(totalWinners, thisAnimal);
    } else {
        thisAnimal.winner = "true";
        displayList(allAnimals);
    }
}

function callAlertMoreThan2(winners, newWinner) {
    document.querySelector("#onlytwowinners").classList.add("show");

    for (let i = 0; i < 2; i++) {
        document.querySelector(
            `.animal${1 + i}`
        ).textContent = `${winners[i].name}, the ${winners[i].type}`;
    }
    initRemoveBtns(winners, newWinner);
}

function callAlertSameType(sameType, newWinner) {
    document.querySelector("#onlyonekind").classList.add("show");
    document.querySelector(
        "#onlyonekind .animal1"
    ).textContent = `${sameType.name}, the ${sameType.type}`;
    document
        .querySelector("#onlyonekind [data-action=remove1]")
        .addEventListener("click", removeCurrentWinner);
    document
        .querySelector("#onlyonekind .closebutton")
        .addEventListener("click", keepCurrentWinner);

    function removeCurrentWinner() {
        sameType.winner = "false";
        newWinner.winner = "true";
        displayList(allAnimals);
        document.querySelector("#onlyonekind").classList.remove("show");
        document
            .querySelector("#onlyonekind [data-action=remove1]")
            .removeEventListener("click", removeCurrentWinner);
        document
            .querySelector("#onlyonekind .closebutton")
            .removeEventListener("click", keepCurrentWinner);
    }

    function keepCurrentWinner() {
        console.log("do nothing");
        document.querySelector("#onlyonekind").classList.remove("show");
        document
            .querySelector("#onlyonekind [data-action=remove1]")
            .removeEventListener("click", removeCurrentWinner);
        document
            .querySelector("#onlyonekind .closebutton")
            .removeEventListener("click", keepCurrentWinner);
    }
}

function initRemoveBtns(winners, newWinner) {
    const removeBtnArray = [
        document.querySelector(`[data-action=remove1`),
        document.querySelector(`[data-action=remove2`)
    ];
    removeBtnArray[0].addEventListener("click", removeFirst);
    removeBtnArray[1].addEventListener("click", removeSecond);

    function removeFirst() {
        winners[0].winner = "false";
        document.querySelector("#onlytwowinners").classList.remove("show");
        console.log(`remove ${winners[0].name}`);
        newWinner.winner = "true";
        displayList(allAnimals);
        removeBtnArray[0].removeEventListener("click", removeFirst);
        removeBtnArray[1].removeEventListener("click", removeSecond);
    }

    function removeSecond() {
        winners[1].winner = "false";
        document.querySelector("#onlytwowinners").classList.remove("show");
        console.log(`remove ${winners[1].name}`);
        newWinner.winner = "true";
        displayList(allAnimals);
        removeBtnArray[0].removeEventListener("click", removeFirst);
        removeBtnArray[1].removeEventListener("click", removeSecond);
    }
    document.querySelector(".closebutton").addEventListener("click", () => {
        document.querySelector("#onlytwowinners").classList.remove("show");
        removeBtnArray[0].removeEventListener("click", removeFirst);
        removeBtnArray[1].removeEventListener("click", removeSecond);
    });
}