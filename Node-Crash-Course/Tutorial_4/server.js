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
const http = require('http'); 
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method); //running in server (backend), not in browser

    //set header content type
    //res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');

    //send an html file
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }else{
            //res.write(data); //for multiple things
            res.end(data);
        }
    })
    

    // res.write('<head><link rel="stylesheet" href="#"></head>');
    // res.write('<p> Hello shafiq</p>');
    // res.write('<p> How are you </p>');
    // res.end();
}); 

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});