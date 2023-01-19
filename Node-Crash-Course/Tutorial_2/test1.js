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
}, 3000);



