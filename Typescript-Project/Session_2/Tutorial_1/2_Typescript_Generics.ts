// Typescript generics
//- is a tool for creating reusable components in typescript
// - rather than working with a single data type, it builds a components that can interact with various data kinds. 
// - generic ensure that the software is both adaptable and scalable over time. 
// - generic functions have the same type as non-generic functions, with type arguments specified first, as in function declarations. 

// why use typesript generics?
// consider the below code without generics. The identity function is a function that returns whatever is sent in as a parameter. We could either provide the identity function with a specific type or the identity function with a specific type

// identity function with a specific type
// function identity(arg: string):{
//     string return arg; 

// }

// identity function with any type
// function identity(arg: any): any{
//     return arg;
// }

// this identity function now has a type variable called Type. This type allow us to capture the type of data the user supplies, for example, a number or a string, so that we can use it later.  We're going to utilize Type as the return type once more.

// function identity<type>(arg: type): Type{
//     return arg;
// }