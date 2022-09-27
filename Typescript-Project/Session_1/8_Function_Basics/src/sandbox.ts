//tsc --init  = creating tsconfig.json 

//just type tsc -w after done this inside tsconfig.json
//"rootDir": "./src",      
// "outDir": "./public",   

// console.log('test');
let greet: Function;

//greet = 'hello'; ---can't do it as already signed as function

greet = () => {
    console.log('Hello, again');
}

const add = (a: number, b: number, c?: number | string) => {
    console.log(a + b);
    console.log(c);  //undefined
}

add(5,10);

const addone = (d: number, e: number, f: number | string = 10):void => {
    console.log(d + e);
    console.log(f);  //10 as default
}

addone(6,10, 25);

const minus = (g: number, h: number): number => {
    return g - h;
}

let result = minus(30, 8);
console.log(result);