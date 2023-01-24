//---------------------------------------------------------------
//Request Object --- 0.00
//---------------------------------------------------------------
//get http module
// const http = require('http'); 

//create server using createServer method and store it in server const
//can store like in websocket
// request object(req) and response object(res)
// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method); //running in server (backend), not in browser
// }); 

// server.listen(3000, 'localhost', () => {
//     console.log('listening for request on port 3000');
// });


//---------------------------------------------------------------
//The Response Object --- 3.23
//---------------------------------------------------------------

//localhost is like a domain name on the web
// localhost ---> 127.0.0.1 ---> Own Computer
//port number are like 'doors' into a computer

//run server with 'node server'  
//go to 'localhost:3000'
//ctrl + c to cancel the server running process
// const http = require('http'); 

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method); //running in server (backend), not in browser

//     //set header content type
//     //res.setHeader('Content-Type', 'text/plain');
//     res.setHeader('Content-Type', 'text/html');
    

//     res.write('<head><link rel="stylesheet" href="#"></head>');
//     res.write('<p> Hello shafiq</p>');
//     res.write('<p> How are you </p>');
//     res.end();
// }); 

// server.listen(3000, 'localhost', () => {
//     console.log('listening for request on port 3000');
// });

//---------------------------------------------------------------
//Returning HTML Pages --- 9.07
//---------------------------------------------------------------
// const http = require('http'); 
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method); //running in server (backend), not in browser

//     //set header content type
//     //res.setHeader('Content-Type', 'text/plain');
//     res.setHeader('Content-Type', 'text/html');

//     //send an html file
//     fs.readFile('./views/index.html', (err, data) => {
//         if (err) {
//             console.log(err);
//             res.end();
//         }else{
//             //res.write(data); //for multiple things
//             res.end(data);
//         }
//     })
    

//     // res.write('<head><link rel="stylesheet" href="#"></head>');
//     // res.write('<p> Hello shafiq</p>');
//     // res.write('<p> How are you </p>');
//     // res.end();
// }); 

// server.listen(3000, 'localhost', () => {
//     console.log('listening for request on port 3000');
// });


//---------------------------------------------------------------
//Basic Routing --- 12.59
//---------------------------------------------------------------

// const http = require('http'); 
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method); //running in server (backend), not in browser

//     //set header content type
//     //res.setHeader('Content-Type', 'text/plain');
//     res.setHeader('Content-Type', 'text/html');

//     let path = './views/';
//     switch(req.url) {
//         case '/':
//             path += 'index.html';
//             break;
//         case '/about':
//             path += 'about.html';
//             break;
//         default:
//             path += '404.html';
//             break;
//         }

//     //send an html file
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             console.log(err);
//             res.end();
//         }else{
//             //res.write(data); //for multiple things
//             res.end(data);
//         }
//     })
    

//     // res.write('<head><link rel="stylesheet" href="#"></head>');
//     // res.write('<p> Hello shafiq</p>');
//     // res.write('<p> How are you </p>');
//     // res.end();
// }); 

// server.listen(3000, 'localhost', () => {
//     console.log('listening for request on port 3000');
// });

//---------------------------------------------------------------
//Status Codes --- 18.42
//---------------------------------------------------------------

//status codes - describe the type of response sent to the browser

//200 - OK
//301 - Resource moved
//404 - Not found
//500 - Internal Server Error

//100 Range - Informational response
//200 Range - Success codes
//300 Range - Redirection codes/ codes for redirects
//400 Range - Bad request codes / user or client error codes
//500 Range - Server error codes

const http = require('http'); 
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method); //running in server (backend), not in browser

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
//Redirects --- 22.16
//---------------------------------------------------------------