"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level; // level variable is type of "any"
// console.log(typeof level);
let numbers = [5, 8, 11];
numbers.forEach((item, index, arr) => {
    console.log(`numbers[${index}] = ${arr[index]}`);
});
// tuples are the key value pairs
let user = [1, "Subham"];
console.log(user[1].length);
console.log(user);
user.push(1);
console.log(user.length);
console.log(user);
let record = ["Aditya", 24, true];
console.log(record);
console.log(record.length);
//# sourceMappingURL=test.js.map