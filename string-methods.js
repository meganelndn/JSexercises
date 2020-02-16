"use strict";

// 1
console.log(`Find the unicode code for santa = "🎅"`);

const santa = "🎅"
const unicode = santa.codePointAt(0);

console.log(unicode)


// 2
console.log(`Check if a filename ends in ".jpg" or not`);

const fileName = "photo.jpg"
const fileExtension = fileName.endsWith(".jpg");

console.log(fileExtension)


// 3
console.log(`Check if a name has a hyphen in it`);

const name = "Mégane"
const nameHyphen = name.indexOf("-");

console.log(nameHyphen)


// 4
console.log(`Find the end of the first name in a full name`);

const fullName = "Mégane Londoño Hermann"
const firstSpace = fullName.indexOf(" ");

console.log(fullName.substring(0, firstSpace))


// 5
console.log(`Find the beginning of the last name in a full name`)

const lastSpace = fullName.lastIndexOf(" ");
const lastName = fullName.substring(lastSpace, );

console.log(lastName.substring(1, 2))


// 6
console.log(`Figure out if "Aalborg" is sorted before or after "Alerup" in danish`);

console.log('Aalborg'.localeCompare('Alerup', 'da-DK'));
//result = 1 --> Aalborg comes before Alerup


// 7
console.log(`Add dots to a string, so it becomes at least 20 characters long`);

const str = "fill the gap with dots ";
const dash = ". ";
const newStr = str + dash.repeat(20);

console.log(newStr)


// 8
console.log(`Add spaces before a text, so it is at least 10 characters`);

const str2 = " fill the gap with spaces";
const space = " ";
const newStr2 = space.repeat(10) + str;

console.log(newStr2)


// 9
console.log(`Replace a string of any number of characters, with the same number of * s`);

const str3 = "iiiiiiiiiiii";

console.log(str3.replace(/i/g, "* s"))


// 10
console.log(`Change all "å" in a text to "aa"`);

const str4 = "thås ås å tåst såntånce";

console.log(str4.replace(/å/g, "aa"))


// 11
console.log(`Remove any double - or triple - spaces in a text`);

const str5 = "Single space .Double  space  .Triple   space   ."

console.log(str5.replace(/\s{3}|\s{2}/g, ""))


// 12
console.log(`Get the last 10 characters of a name`);

const len = fullName.length;

console.log(fullName.substring(len - 10))


// 13
console.log(`Separate a comma-separated list into an array of individual items`);

const arr = "one, two, three, four, five, six, seven";
const regex = /, /g;
const newArr = arr.split(regex)

console.log(newArr)

// 14
console.log(`Check if an url begins with "http://" or "https://"`);

const url1 = "http://www.google.com"
const url2 = "https://google.com"

console.log(url1.startsWith("http"))
console.log(url1.startsWith("https"))
console.log(url2.startsWith("https"))