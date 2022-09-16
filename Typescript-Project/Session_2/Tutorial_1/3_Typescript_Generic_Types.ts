//Typescript Generic Types - Generic Types
// Generic functions have same type parameters as non-generic functions, with the type parameters listed first, as in function declarations:

// function identity<Type>(arg: Type): Type{
//     return arg;
// } let myIdentity: <Type>(arg: Type) => Type = identity;


// we can call the generic type parameter in the type by whatever name we like as long as the number of type variables and how they're utilize match.

// let myIdentity: <input>(arg: Input) => Input = identity;


//The generic type can also be written as call signature of an object literal type:

// let myIdentity: { <Type> (arg: Type): Type } = identity;