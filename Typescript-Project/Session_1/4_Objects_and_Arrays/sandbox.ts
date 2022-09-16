//array
let names = ['me', 'I', 'You', 'Them'];

names.push('toad');
//names.push(3);  ---> can't
//names.[0] = 3; ---> can't

let numbers = [10,20, 30, 40];

numbers.push(25);
//number.push('shaun'); ---> can't
//number[1] = 'shaun' ---> can't

let mixed = ['me', 4, 'You', 8, 9]

mixed.push('mine');
mixed.push(11);
mixed[0] = 3;

//objects

let afiq ={
    name: 'afiq',  //properties
    belt: 'Black', //properties
    age: 24,        //properties
};

afiq.age = 27;
afiq.name = 'shafiq';
// afiq.age = '30' ---> Can't since it's string
// afiq.skills =['3D modelling' , 'programming']

afiq ={
    name: 'mystery',
    belt: 'Black', //properties
    age: 30,        //properties
    //skills : []  ---> Can't since not matching with original object's properties
};



// set-executionpolicy remotesigned -Scope CurrentUser
// set-executionpolicy restricted -Scope CurrentUser
//run : tsc sandbox.ts sandbox.js (similar name files)
//or
//run : tsc sandbox.ts (when sandbox.js is not there)
// tsc = typescript compiler

//auto-compile -> tsc sandbox.ts -w
//-w - watch