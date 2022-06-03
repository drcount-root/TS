let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;

let level; // level variable is type of "any"

// console.log(typeof level);

let numbers: number[] = [5, 8, 11];
numbers.forEach(function (_item, index, arr) {
  console.log(`numbers[${index}] = ${arr[index]}`);
});

// "tuple" data types are the key value pairs

let user: [number, string] = [1, "Subham"];
console.log(user[1].length);
console.log(user);

user.push(1);
console.log(user.length);
console.log(user);

let record: [string, number, boolean] = ["Aditya", 24, true];

console.log(record);
console.log(record.length);

// "enum" data type represents list of related constants

// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase - first letter of every word should be uppercase
// By default TS compiler set the value of Small member = 0 and Medium = 1 and Large = 2
// We can change that by explicitly assigning values
const enum Size {
  Small = 1,
  Medium,
  Large,
}
// Now it automatically assigned Medium = 2 & Large = 3 as we explicitly set value of Small member to 1.

let mySize: Size = Size.Medium;
console.log(mySize);

const enum Another {
  Small = "str",
  Medium = 89,
  Large = 27830e73,
}

// If we do assign string value to any member, then we must explicitly assign some kind of values to another members

let largeSize: Another = Another.Large;
console.log(largeSize);

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

console.log(calculateTax(10_000, 2023));
console.log(calculateTax(10_000, 2021));
console.log(calculateTax(10_000));

// objects

let employees: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};
// employee.id = 0;        // can't assign value to id as it is readonly property
employees.name = "binaryBOSS";

console.log(employees["name"]);

// Type Aliases

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};
// employee.id = 0;        // can't assign value to id as it is readonly property
employee.name = "binaryBOSS";

console.log(employee["name"]);

// Union types
// the vertical bar represents that

function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));

// Intersection Types

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal types (exact, specific)

type Quantity = 50 | 100;

let quantity: Quantity = 100;

type Metric = "cm" | "inch";
let howLong: Metric = "cm";
