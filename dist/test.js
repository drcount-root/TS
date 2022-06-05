"use strict";
var _a;
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
let employees = {
    id: 1,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    },
};
// employee.id = 0;        // can't assign value to id as it is readonly property
employees.name = "binaryBOSS";
console.log(employees["name"]);
let employee = {
    id: 1,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    },
};
// employee.id = 0;        // can't assign value to id as it is readonly property
employee.name = "binaryBOSS";
console.log(employee["name"]);
// Union types
// the vertical bar represents that
function kgToLbs(weight) {
    // Narrowing
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
let howLong = "cm";
// Nullable Types
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
greet("Kylz");
greet(null);
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
// if (customer !== null && customer !== undefined) console.log(customer.birthday);
// Optional chaining : optional property access operator
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
// optional element access operator : useful when dealing with array
// if(customers !== null && customers !== undefined)
//        customers[0]
// So first we have to check the customers array is null and undefined, before we access its elements
// OR
// customers?.[0]  // optional element access operator => ?.
// Optional call operator
// let log: any = (message: string) => {
//   console.log(message);
// }
let log = null;
console.log(log === null || log === void 0 ? void 0 : log("a"));
//# sourceMappingURL=test.js.map