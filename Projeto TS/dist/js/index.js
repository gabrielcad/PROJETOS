"use strict";
//string, number, boolean, ...
let x = 70;
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
const lastName = "Godoi";
console.log('my last name is: ', lastName);
// object
const myNumbers = [1, 2, 3, 4];
console.log('array de numbers', myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(1);
console.log(myNumbers);
// tuplas -> tuple
let myTumple;
//Tem que ser nessa ordem
myTumple = [5, "teste", ["a", "b"]];
console.log(myTumple);
// myTumple = [true, false, true]
// object literals -> {prop: value}
const user = {
    name: "Pedro",
    age: 87,
};
// tem que seguir conforme declarado name + age
console.log(user);
console.log(user.name);
// any
let a = 0;
a = "teste";
a = true;
a = [];
// union type
let id = '10';
id = 200;
const userId = 10;
