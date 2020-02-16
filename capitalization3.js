"use strict";

const name = "Mégane";
const nameOne = "méGane";

//3rd letter toUpperCase
const letter3 = name.substring(2, 3);
const newLetter = letter3.toUpperCase();

//random combo
console.log(name.substring(0, 2) + newLetter + name.substring(3, ))

//OR
console.log(name.substring(0, 2) + name.substring(2, 3).toUpperCase() + name.substring(3, ))


//toLowerCase
console.log(name.substring(0, 2).toUpperCase() + name.substring(2, 4).toLowerCase() + name.substring(4, ).toUpperCase())


//modify 1st letter only
console.log(name.substring(0, 1).toUpperCase() + name.substring(1, ).toLowerCase())