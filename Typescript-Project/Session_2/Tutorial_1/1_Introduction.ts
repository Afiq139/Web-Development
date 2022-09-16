// cgecking version nodeJs: node -v
// installation: npm install -g typescript
// typescript version: tsc --version

//variable declaration: var, let, const

// var age: number = 45

// let employeename = "john"

// const num:number = 100;

let first:number = 123; //number
let second:number = 0x67CF; //hexadecimal
let third:number = 0o455; //octal
let fourth:number = 0b110101; //binary



// --Number Methods--
// toExponential() -Returns the exponential notation in string format
// toFixed()       - Returns the fixed-point notation in string format
// toLocaleString() - converts the number into a local specific representation of the number
// toPrecision()   - Returns the string representation in exponential or fixed-point to the specfied precision
// toString()    - Returns the string representation of the number in the specified base.
// valueOf() - Returns the primitive value of the number


//--String Methods-- (store text data)
// charAt() -Returns the character at the given index
// concat() -Returns a combination of the two or more specified strings
// indexOf() -Returns an index of first occurence of the specified substring from a string (-1 if not found)
//replace() - Replaces the matched substring with a new substring
//split() - Splits the string into substrings and returns an array
// toUpperCase() - converts all the characers of the string into upper case
//toLowerCase() - converts all the characers of the string into lower case

let employeename:string = "Johnson";

let ispresent: boolean = true;//boolean

let fruits: string[] = ["banana", "mango"];//array 1

let fruit: Array<string>= ["banana", "mango"]; //same output as array 1

//--Array Methods-- 

// pop() - Removes the last element of the array and return that element
// push() - Adds new elements to the array and returns the new array length
//sort() - sorts all the elements of the array
//concat() - joins two arrays and returns the combined result
// indexOf() - returns the index of the first match of a value in the array (-1 if not found)
//copyWithin() - copies a sequence of elements within the array
// fill() - Fills the aray with a static value form the provided start index to the end index
// shift() - Removes and returns the first element of the array
// splice() - Adds or remove elements from the array
// unshift() - Adds one or more elements to the beginning of the array
// includes() - checks whether the array contains a certain element
//  join() - Joins all elements of the array into a string
// lastIndexOf() - Returns the last index of an element in the array
// Slice() - Extracts a section of the array and returns the new array
// toString() - Returns a string representation of the array
// toLocateString() - Returns a localized string representing the array

let x: number = 10, y = 20;

if (x >y)
{
    console.log('x is greater than y. ');
}
else if (x < y)
{
    console.log('x is less than y. ');
}
else if (x == y)
{
    console.log('x is equal to y');
}

// for loop

for (let i = 0; i < 3; i++){
    console.log(i);
}

// function

function sum(a:number, b:number){
    return a + b
}

// class
class employeeOne{
    empid: number;
    empname: string;

    //constructor
    constructor(empid: number, empname: string){
        this.empid = empid;
        this.empname = empname;

    }

}
25.23