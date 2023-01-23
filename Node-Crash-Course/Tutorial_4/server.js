//get http module
const http = require('http'); 

//create server using createServer method and store it in server const
//can store like in websocket
// request object(req) and response object(res)
const server = http.createServer(() => {
    console.log('request made'); //running in server (backend), not in browser
}); 

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});


//----------------------------
//Localhost & Port Numbers --- 8.52
//----------------------------

//localhost is like a domain name on the web
// localhost ---> 127.0.0.1 ---> Own Computer
//port number are like 'doors' into a computer

//run server with 'node server'  
//go to 'localhost:3000'
//ctrl + c to cancel the server running process