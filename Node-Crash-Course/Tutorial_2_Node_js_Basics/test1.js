console.log('----------------------------');
console.log('Introduction --- 0.00');
console.log('----------------------------');
const test = 'mario';
console.log(test); //use node test1 to run
console.log('');
const greet = (name) => {
    console.log(`hello, ${name}`);
}

greet('mario');
greet('yoshi');

console.log('----------------------------');
console.log('The Global Object --- 2.09');
console.log('----------------------------');
//type 'clear' to clear the console

//console.log(global);

// global.setTimeout(() => {
//     console.log('In the timeout');
// }, 3000); //3s

setTimeout(() => {
    console.log('In The timeout');
    clearInterval(int);
}, 3000); //3s

const int = setInterval(() => {
    console.log('in the interval');
}, 1000); //1s

console.log('');

console.log(__dirname); // directory file
console.log(__filename); // name file

console.log('----------------------------');
console.log('Modules & Require --- 9.23');
console.log('----------------------------');

//receive from people.js
// const xyz = require('./people'); 
// console.log(xyz.people, xyz.ages);

// or
const { people, ages } = require('./people');
console.log(people, ages);

const os = require('os');
console.log(os.platform(), os.homedir());  //finding out info of os and dir

console.log('----------------------------');
console.log('The File System --- 18.50');
console.log('----------------------------');

//stopped at 20.24

const fs = require('fs'); //fs = file system

//----------------reading files----------------

//asynchronous - take sometimes to do
fs.readFile('./docs/blog1.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    //console.log(data); output will be buffer(package of data the were sent)
    console.log(data.toString()); // turn buffer into string to read the file
});

console.log('last line'); //wiil read this first, then buffer

//----------------writing files------------------
fs.writeFile('./docs/blog1.txt', 'Hello, Shafiq', () => {
    console.log('file was written');
});

fs.writeFile('./docs/blog2.txt', 'Hello, Shafiq', () => {
    console.log('file was written'); //will create new file
});

//----------------directories (asynchronous)----------------
if(!fs.existsSync('./assets')){  //if file not exist, create new one
fs.mkdir('./assets', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Folder created'); //making new folder

});
} else {
    fs.rmdir('./assets', (err) => { //remove file or directory
        if(err){
            console.log(err);
        }
        console.log('Folder deleted');
    })
}

//----------------deleting files----------------
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
    }
    console.log('File deleted');
    })
}

console.log('----------------------------');
console.log('Streams & Buffers --- 31.51');
console.log('----------------------------');
//start using data, before it has finished loading


//const fs = require('fs'); //fs = file system

// const readStream = fs.createReadStream('./docs/blog3.txt');

// readStream.on('data', (chunk) => {
//     console.log('-------NEW CHUNK -------');
//     console.log(chunk);
// });

//or

//const fs = require('fs'); //fs = file system

// const readStream = fs.createReadStream('./docs/blog3.txt');

// readStream.on('data', (chunk) => {
//     console.log('-------NEW CHUNK -------');
//     console.log(chunk.toString());
// });

//or

//const fs = require('fs'); //fs = file system

// const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});  //readable format

// readStream.on('data', (chunk) => {
//     console.log('-------NEW CHUNK -------');
//     console.log(chunk);
// });

//or

//const fs = require('fs'); //fs = file system

// const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'}); 
//const writeStream = fs.createWriteStream('./docs/blog4.txt'); 

// readStream.on('data', (chunk) => {
//     console.log('-------NEW CHUNK -------');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');  //passing the new chunk
//     writeStream.write(chunk);
// });

//or

//const fs = require('fs'); //fs = file system

//const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'}); 
//const writeStream = fs.createWriteStream('./docs/blog4.txt'); 

//for piping -- much shorter

//readStream.pipe(writeStream);

//others duplexStream