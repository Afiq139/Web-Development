//Typescript - Generic constraints

//Typescript Generic Types allow us to work with any data type. We can, however, use constraints to limit it to specific types.

//A type parameter can be declared that is limited by another type parameter. 
//For instance, in this case, we'd like to retrieve a property from an object based on its name. 
//We'll put a constraint between the two types to ensure we're not obtaining a property that doesn't exist on the obj.

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key){return obj[key];}


// Generic Types
// function identity(arg:string):string{
//     return arg;
// }

// function identity(arg: any): any{
//     return arg;
// }

// function identity(arg:Type): Type{
//     return arg;
// }


function getArray<T>(items : T[]) :T[] {
    return new Array<T>().concat(items);
}

let NumArr = getArray<number>([16, 2.0, 55]);
let StrArr = getArray<string>(["hello", "World"]);

NumArr.push(400);
StrArr.push("Hello Typescript");

console.log(NumArr, StrArr)

//run with: tsc.cmd 5_Typescript_Generic_Constraints.ts
//run with: node 5_Typescript_Generic_Constraints.js