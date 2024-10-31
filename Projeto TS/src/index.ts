//string, number, boolean, ...
let x: number = 70;
console.log(x);

// interferencia x annotation
let y = 12;
// y = "teste";

let z: number = 12;
console.log(z + y);

// tipos básicos
let firstName: string = "Gabriel";
let age: number = 27;
const isAdmin: boolean = true;

// String != string

console.log(typeof firstName);

const lastName = "Godoi";

console.log('my last name is: ', lastName);

// object
const myNumbers: number[] = [1, 2, 3, 4];

console.log('array de numbers', myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(1);

console.log(myNumbers);

// tuplas -> tuple

let myTumple: [number, string, string[]];
//Tem que ser nessa ordem
myTumple = [5, "teste", ["a", "b"]];

console.log(myTumple)
// myTumple = [true, false, true]

// object literals -> {prop: value}
const user: { name: string; age: number } = {
  name: "Pedro",
  age: 87,
};
// tem que seguir conforme declarado name + age
console.log(user);
console.log(user.name);

// any
let a: any = 0;

a = "teste";
a = true;
a = [];

// union type

let id: number | string = '10'

id = 200
//id = true 
//id = []

// type alias
type myIdType = number | string

const userId: myIdType = 10