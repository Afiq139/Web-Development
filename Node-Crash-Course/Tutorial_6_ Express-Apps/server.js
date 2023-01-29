//lodash


//nodemon
//nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
//nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.

//---------------------------------------------------------------
//Installing Packages Globally--- 1.53
//---------------------------------------------------------------

//npm install -g nodemon
//set-executionpolicy remotesigned -Scope CurrentUser
//set-executionpolicy restricted -Scope CurrentUser

const http = require('http'); 
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const server = http.createServer((req, res) => {

    //lodash
    const num = _.random(0,20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    })

    greet();
    //greet(); --> not allowing run twice



    //console.log(req.url, req.method); //running in server (backend), not in browser

    //set header content type
    //res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200; //can check on inspect -> Network -> Status
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301; //moved
            res.setHeader('Location', '/about'); //redirect to /about
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
        }

    //send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }else{
            //res.write(data); //for multiple things
            res.end(data);
        }
    })
    
}); 

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});

//---------------------------------------------------------------
//package.json file--- 5.01
//---------------------------------------------------------------
//npm init 
//(creating package.json)

//---------------------------------------------------------------
//Installing Packages Locally--- 7.03
//---------------------------------------------------------------
//npm i -g npm  ---installing lodash
//npm install lodash
//npm i --save lodash ---no need to do it as already done by node js
//lodash libary --> can use _.methodname(attributes)

//---------------------------------------------------------------
//Dependencies--- 13.26
//---------------------------------------------------------------
//exclude node_modules folder for sending projects
//look on package.json for dependencies
//just use npm install, it'll look on package.json for dependencies installation

