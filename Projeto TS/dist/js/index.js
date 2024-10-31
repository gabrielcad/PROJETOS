"use strict";
//string, number, boolean, ...
const x = 25;
console.log(x);
// interferencia x annotation
let y = 12;
// y = "teste";
let z = 12;
console.log(z + y);
// tipos básicos
let firstName = "Gabriel";
let age = 27;
const isAdmin = true;
// String != string
console.log(typeof firstName);
firstName = "Godoi";
console.log(firstName);
// object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
// tuplas -> tuple
let myTumple;
myTumple = [5, "teste", ["a", "b"]];
// myTumple = [true, false, true]
// object literals -> {prop: value}
const user = {
    name: "Pedro",
    age: 87,
};
console.log(user);
console.log(user.name);
