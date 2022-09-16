// explicit types

let character:string;
let age: number;
let isloggedIn: boolean;

//age = 'luigi';  --- can't do this
age = 30;

//isloggedIn = 25; --- can't do this
isloggedIn = true;

//arrays
let ninjas: string[] = [];

ninjas.push('afiq');

//union types
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string|number;
uid = '123';
uid = 123;

//objects
let ninjaOne:object;
ninjaOne = {name: 'afiq', age:30};

let ninjaTwo:{
    name:string,
    age: number,
    beltColour:string
}

ninjaTwo = {name: 'me', age:20, beltColour:'black'}