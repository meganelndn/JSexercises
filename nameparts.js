"use strict";

const name = "Mégane Londoño Hermann"
// const firstName = name.substring(0, 6);
// const middleName = name.substring(7, 14);
// const lastName = name.substring(15, 22);

const firstSpace = name.indexOf(" ");
const lastSpace = name.indexOf(" ", (firstSpace + 1));

console.log(firstSpace);
console.log(lastSpace);

const firstName = name.substring(0, firstSpace);
const middleName = name.substring(firstSpace, lastSpace);
const lastName = name.substring(lastSpace, );

console.log(firstName);
console.log(middleName);
console.log(lastName);