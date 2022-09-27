"use strict";
//tsc --init  = creating tsconfig.json 
//just type tsc -w after done this inside tsconfig.json
//"rootDir": "./src",      
// "outDir": "./public",   
// console.log('test');
let greet;
//greet = 'hello'; ---can't do it as already signed as function
greet = () => {
    console.log('Hello, again');
};
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c); //undefined
};
add(5, 10);
const addone = (d, e, f = 10) => {
    console.log(d + e);
    console.log(f); //10 as default
};
addone(6, 10, 25);
const minus = (g, h) => {
    return g - h;
};
let result = minus(30, 8);
console.log(result);
