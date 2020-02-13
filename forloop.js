"use strict";

console.log("loop 0 to 9");
for (let counter = 0; counter < 10; counter++) {
    console.log(counter);
}

console.log("loop 1 to 10");
for (let counter = 1; counter < 11; counter++) {
    console.log(counter);
}

console.log("loop 10 to 0, after 0 the text: liftoff");
let counter;
let log = "liftoff";

for (let counter = 10; counter >= 0; counter--) {
    console.log(counter)
}

console.log(log);

console.log("loop 1 to 10, but only odd numbers");
for (let counter = 1; counter < 20; counter += 2) {
    console.log(counter);
}

console.log("loop 1 to 16777216, but doubling each time (2, 4, 8, 16)");
for (let counter = 1; counter < 16777217; counter *= 2) {
    console.log(counter);
}

console.log("loop 111 to 138, in steps of 3");
for (let counter = 111; counter < 139; counter += 3) {
    console.log(counter);
}

console.log("loop 100 to 0 in steps of 10");
for (let counter = 100; counter >= 0; counter -= 10) {
    console.log(counter);
}