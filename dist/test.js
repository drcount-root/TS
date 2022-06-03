"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level; // level variable is type of "any"
// console.log(typeof level);
let numbers = [5, 8, 11];
numbers.forEach(function (_item, index, arr) {
    console.log(`numbers[${index}] = ${arr[index]}`);
});
// "tuple" data types are the key value pairs
let user = [1, "Subham"];
console.log(user[1].length);
console.log(user);
user.push(1);
console.log(user.length);
console.log(user);
let record = ["Aditya", 24, true];
console.log(record);
console.log(record.length);
// Now it automatically assigned Medium = 2 & Large = 3 as we explicitly set value of Small member to 1.
let mySize = 2 /* Size.Medium */;
console.log(mySize);
// If we do assign string value to any member, then we must explicitly assign some kind of values to another members
let largeSize = 2.783e+77 /* Another.Large */;
console.log(largeSize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(10000, 2023));
console.log(calculateTax(10000, 2021));
console.log(calculateTax(10000));
// objects
let employee = { id: 1, name: "Mosh" };
// employee.id = 0;        // can't assign value to id as it is readonly property
employee.name = "binaryBOSS";
console.log(employee["name"]);
//# sourceMappingURL=test.js.map