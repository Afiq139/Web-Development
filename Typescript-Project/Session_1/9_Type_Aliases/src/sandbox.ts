//tsc --init  = creating tsconfig.json 

//just type tsc -w after done this inside tsconfig.json
//"rootDir": "./src",      
// "outDir": "./public",   

type stringOrNum = string | number;
type objWithName = {name: string, uid: stringOrNum };

// const logDetails = (uid: string | number, item: string) =>{
//     console.log('${item} has uid of ${uid}');
// }

const logDetails = (uid: stringOrNum, item: string) =>{
    console.log('${item} has uid of ${uid}');
}


// const greet = (user: {name: string, uid: string | number}) =>{
//     console.log('${user.name} says hello');
// }


const greet = (user: objWithName) =>{
    console.log('${user.name} says hello');
}

// const greetAgain = (user: {name: string, uid: string | number}) =>{
//     console.log('${user.name} says hello');
// }


const greetAgain = (user: objWithName) =>{
    console.log('${user.name} says hello');
}