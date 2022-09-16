//array
var names = ['me', 'I', 'You', 'Them'];
names.push('toad');
//names.push(3);  ---> can't
//names.[0] = 3; ---> can't
var numbers = [10, 20, 30, 40];
numbers.push(25);
//number.push('shaun'); ---> can't
//number[1] = 'shaun' ---> can't
var mixed = ['me', 4, 'You', 8, 9];
mixed.push('mine');
mixed.push(11);
mixed[0] = 3;
//objects
var afiq = {
    name: 'afiq',
    belt: 'Black',
    age: 24
};
afiq.age = 27;
afiq.name = 'shafiq';
// afiq.age = '30' ---> Can't since it's string
// afiq.skills =['3D modelling' , 'programming']
afiq = {
    name: 'mystery',
    belt: 'Black',
    age: 30
};
// set-executionpolicy remotesigned -Scope CurrentUser
// set-executionpolicy restricted -Scope CurrentUser
//run : tsc sandbox.ts sandbox.js (similar name files)
//or
//run : tsc sandbox.ts (when sandbox.js is not there)
// tsc = typescript compiler
//auto-compile -> tsc sandbox.ts -w
//-w - watch
