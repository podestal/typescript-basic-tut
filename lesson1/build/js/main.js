"use strict";
// LESSON 1
let username = 'John';
console.log(username);
let a = 12;
let b = 6;
let c = 2;
// console.log(a / b);
// console.log(c * b);
// LESSON 2
let myName = 'Dave';
let meaningOfLife;
let isLoading;
let album;
myName = 'John';
meaningOfLife = 42;
isLoading = true;
album = 5150;
const sum = (a, b) => {
    return a + b;
};
// console.log(sum(14, 20))
let postId;
let isActive;
let re = /\w+/g;
// LESSON 3
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
let bands = [];
bands.push('Van Halen');
console.log(bands);
// Tuple
let myTuple = ['Dave', 42, true];
let mixed = ['John', 1, false];
// Object
let myObj;
myObj = [];
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true
};
let evh = {
    name: 'Eric',
    active: true,
    albuns: [1984, 5150, 'OU812']
};
let JP = {
    name: 'Jimmy',
    albuns: ['I', 'II', 'IV']
};
// evh = JP
// console.log('evh', evh);
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
console.log(greetGuitarist(evh));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
// Literal Types
let userName;
userName = 'Dave';
// Fnxs
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(2, 3));
// interface mathFunction {(a: number, b: number) : number}
let multiply = (c, d) => {
    return c * d;
};
logMsg(multiply(2, 2));
const addAll = (a, b, c) => {
    if (c) {
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(5, 7, 1));
// REST Parameters
const total = (...numbs) => {
    return numbs.reduce((prev, curr) => prev + curr);
};
console.log(total(1, 2, 3, 4));
//  never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
