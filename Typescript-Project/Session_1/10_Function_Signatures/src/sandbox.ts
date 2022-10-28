//tsc --init  = creating tsconfig.json 

//just type tsc -w after done this inside tsconfig.json
//"rootDir": "./src",      
// "outDir": "./public",   

//example 1
let greet: (a: string, b:string) => void;

greet = (name: string, greeting: string) => {
    console.log('${name} says ${greeting}');
}