/*
============================== let & const =======================
* let and const are different ways of creating varibles in js.
* These two keywords are introduced in ES6.
* We should use const when we want to assign a value only once and never change it.
* let is used to assign varible values.
*/



/*
=============================== Arrow functions ====================
* This is a different syntax for creating javascript functions.
* A normal js function with functions keyword looks like below.
*/

function myfunction() {
    console.log("Hello world");
}

// An arrow function looks like this.
const myFunc = () => {
    console.log('Hello world');
}
// It helps in resolving issues with "this" keyword.
// When we use "this" keyword inside an arrow function, it will always keep its context.
// If we have only one argument in our function, then we can omit the paranthesis in arrow function.
const myFunc = (name) => {
    console.log(name);
}

// OR

const myFunc = name => {
    console.log('Hello world');
}

/* Suppose if our arrow function just has only return statement then we can omit the the curly braces
and the return keyword
*/
const multiplyWith2 = number => number * 2;
multiplyWith2(4); // returns 8


/*
=============================== Exports & Imports ===============================
* To write the moduar code, we split the js code into multiple files and import them in the required files.
* we can export the rquired modules from our js file using export keyword and import it in the other js file.
* We can do multiple exports from a js file.
EX:
person.js
const person = {
    name : 'MAX'
}
export default person;

utility.js
export const clean = () => {...}
export const baseData = 10;

app.js
import person from './person.js'
import prs from './person.js'
import {baseData} from './utility.js'
import {clean as cleanModule} from './utility.js'    // using aliasing while import

* We can immport multiple exports from a file as a single import import object.
import * as bundle from './utility.js'

*/


/*
=============================== Classes ====================================
* Classes are blue prints for objects. A class can have both properties and methods.
* We can create javascript objects with classes as blue prints.
* Classes also supports inheritance, i.e, we inherit properties and methods from another class.
Ex:
*/
class Human {
    constructor() {
        this.gender = 'male';
    }
    printGender() {
        console.log(this.gender);
    }
}
class Person extends Human {
    constructor() {
        super();
        this.name = 'MAX';
    }
    printName = () => {
        console.log(this.name);
    }
}

const myPerson = new Person();
myPerson.printName();
myPerson.printGender();
console.log(myPerson.name);

// We can skip the constructor function call and directly assign values in ES7.

/*
============================= Spread & Rest Opearators ======================
* This operator is denoted by simply three dots ...
* We call it spread or rest depends on where we use it.
* The spread operator is used to split up array elements or object properties.
* 
*/
// For example, if we want to add all the elements of an old array to a new array along with some new elements.
// and similary if we want to copy an existing object props to a new object and add new props, we use it like below.
const oldArray = [1,2,3]
const newArray = [...oldArray, 4, 5];

const obj1 = {
    name: 'max',
    age: 10
}
const obj2 = {...obj1, city: 'Texas'};
// If obj1 already has city property, then it will be overridden with the new city property value.

// Rest operator is used to merge a list of function arguments into an array.
// Ex:
// The sortArgs function returns an unlimited number of argument and they will all be merged together into an array.
function sortArgs(...args) {
    return args.sort();
}

// Returns the list of arguments whose value is greater than 10.
const filter = (...args) => {
    args.filter(el => el > 10);
}

/*
==================================== Destructuring ============================
// It allows us to easily extract array elements or object properties individually and store them in variables.

*/
// Array destructuring example
[a, b] = ['Hello', 'Max'];
console.log(a);// Hello
console.log(b);// Max
const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2) // 1   2
// [num1, , num3] = numbers;
console.log(num1, num3); // 1   3

// Object destructuring example
// Here we use the property name to get the value
// {name} = {name: 'Max', age: 25};
console.log(name);// Max
