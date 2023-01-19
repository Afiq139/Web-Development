console.log('----------------------------');
console.log('Introduction --- 0.00');
console.log('----------------------------');
const test = 'mario';
console.log(test); //use node test1 to run
console.log('');
const greet = (name) => {
    console.log(`hello, ${name}`);
}

greet('mario');
greet('yoshi');

console.log('----------------------------');
console.log('The Global Object --- 2.09');
console.log('----------------------------');
//type 'clear' to clear the console

//console.log(global);

// global.setTimeout(() => {
//     console.log('In the timeout');
// }, 3000); //3s

setTimeout(() => {
    console.log('In The timeout');
    clearInterval(int);
}, 3000); //3s

const int = setInterval(() => {
    console.log('in the interval');
}, 1000); //1s

console.log('');

console.log(__dirname); // directory file
console.log(__filename); // name file

console.log('----------------------------');
console.log('Modules & Require --- 9.23');
console.log('----------------------------');

//receive from people.js
// const xyz = require('./people'); 
// console.log(xyz.people, xyz.ages);

// or
const { people, ages } = require('./people');
console.log(people, ages);

//const os = require('os');
//console.log(os.platform(), os.homedir());
