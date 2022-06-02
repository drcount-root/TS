let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;

let level; // level variable is type of "any"

// console.log(typeof level);

let numbers: number[] = [5, 8, 11];
numbers.forEach((item, index, arr) => {
  console.log(`numbers[${index}] = ${arr[index]}`);
});

// tuples are the key value pairs

let user: [number, string] = [1, "Subham"];
console.log(user[1].length);
console.log(user);

user.push(1);
console.log(user.length);
console.log(user);

let record: [string, number, boolean] = ["Aditya", 24, true];

console.log(record);
console.log(record.length);
