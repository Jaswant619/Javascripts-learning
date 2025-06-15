//Variables:
let x = 10;      // ES6 block-scoped variable
const y = 20;    // constant
var z = 30;      // function-scoped variable

//Datatypes: Nunber, string, Boolean, Object, Array, Null, Undefined
let name = "Aatib";      // String
let age = 25;            // Number
let isActive = true;     // Boolean
let person = {name: "Aatib", age: 25};  // Object

//if-else:
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

//Loops:
for (let i = 0; i < 5; i++) {
  console.log(i);
}

while (x > 0) {
  x--;
}

//Function:
function greet(name) {
  return "Hello, " + name;
}

//Arrow:
const greet = (name) => `Hello, ${name}`;

//Arrays
let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");

//Objects
let user = {
  name: "Aatib",
  age: 25,
  greet: function() {
    console.log("Hello!");
  }
};

//Modules
//Export
export const name = "Aatib";
export function sayHi() {
  console.log("Hi");
}
//import
import { name, sayHi } from './module.js';

//DOM Manupulation
document.getElementById("myDiv").innerText = "Hello, DOM!";

//Debugging
console.log("Debug message");

//
