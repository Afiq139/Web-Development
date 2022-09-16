var character = 'afiq';
console.log(character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
});
// set-executionpolicy remotesigned -Scope CurrentUser
// set-executionpolicy restricted -Scope CurrentUser
//run : tsc sandbox.ts sandbox.js (similar name files)
//or
//run : tsc sandbox.ts (when sandbox.js is not there)
// tsc = typescript compiler
//auto-compile -> tsc sandbox.ts -w
//-w - watch
