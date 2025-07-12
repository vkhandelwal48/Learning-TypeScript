// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters, and return types
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Primitives
var age = 25;
var userName = 'John Doe';
var isLoggedIn = true;
// More complex types
var hobbies = ['Reading', 'Gaming', 'Cooking'];
var user = {
    name: 'John Doe',
    age: 25
};
var people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 35 }
];
// type inference
var course = 'TypeScript Basics';
// course = 3; // Error: Type 'number' is not assignable to type 'string'
// union types
var mixed = 10;
mixed = 'Ten'; // valid
var game = {
    title: 'The Witcher 3',
    genre: 'RPG',
    year: 2015
};
// function and types
function addNumbers(x, y) {
    return x + y;
}
function print(value) {
    console.log('Printed');
}
// Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
var stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
