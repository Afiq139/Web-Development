var character = 'Afiq';
var age = 30;
var isGreenBelt = false;
// character = 30; -- can't do it
character = 'myAfiq';
//age = 'super'; -- can't do it
age = 20;
// isGreenBelt = 'yes'; -- can't do it
isGreenBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(32));
// set-executionpolicy remotesigned -Scope CurrentUser
// set-executionpolicy restricted -Scope CurrentUser
//run : tsc sandbox.ts sandbox.js (similar name files)
//or
//run : tsc sandbox.ts (when sandbox.js is not there)
// tsc = typescript compiler
//auto-compile -> tsc sandbox.ts -w
//-w - watch
