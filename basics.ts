// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters, and return types

// Primitives
let age: number = 25;
let userName: string = 'John Doe';
let isLoggedIn: boolean = true;

// More complex types
let hobbies: string[] = ['Reading', 'Gaming', 'Cooking'];
let user: { name: string; age: number } = {
    name: 'John Doe',
    age: 25
};

let people: { name: string; age: number }[] = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 35 }
];

// type inference
let course = 'TypeScript Basics';
// course = 3; // Error: Type 'number' is not assignable to type 'string'

// union types
let mixed: number | string = 10;
mixed = 'Ten'; // valid
// mixed = true; // Error: Type 'boolean' is not assignable to type 'number | string'

// type aliases
type Game = { title: string; genre: string; year: number };
let game: Game = {
    title: 'The Witcher 3',
    genre: 'RPG',
    year: 2015
};

// function and types

function addNumbers(x: number, y: number) {
    return x + y;
}

function print(value: any): void {
    console.log('Printed');
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a','b','c'],'d');
