// explicit types
var character;
var age;
var isloggedIn;
//age = 'luigi';  --- can't do this
age = 30;
//isloggedIn = 25; --- can't do this
isloggedIn = true;
//arrays
var ninjas = [];
ninjas.push('afiq');
//union types
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid;
uid = '123';
uid = 123;
//objects
var ninjaOne;
ninjaOne = { name: 'afiq', age: 30 };
var ninjaTwo;
ninjaTwo = { name: 'me', age: 20, beltColour: 'black' };
