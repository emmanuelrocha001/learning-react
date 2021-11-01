const { PersonDTO, BananaDTO } = require("./PersonModels");

// let vs var (difference is in scope)
// const (value doesn't change)
var myname = "Max";
let b = "m";
const h = 222;

function myFunct() {}

const arrow = (nameParam) => {};
const n = (number) => number * 2;
const arrowFunct = () => {};
// this context is kept during runtime( usually is based on what runs the piece of code)
console.log(n(5));

let firstPerson = new PersonDTO("Bob");
console.log(firstPerson.getName());
// rest operation
let oldArray = [2, 3];
let newArray = [...oldArray, 5];
const oldObject = {
  firstProperty: 5,
};
const newObject = {
  ...oldObject,
  newProperty: 5,
};

// rest operator
function sortArgs(...args) {
  return args.sort();
}
//destructuring
[a, b] = [2, 3];
// not supported by nodeJS
// {name} = {
//   name: 'Max',
//   age: 5
// }
