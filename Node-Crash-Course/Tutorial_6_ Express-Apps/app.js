//---------------------------------------------------------------
//Creating an Express App--- 2.27
//---------------------------------------------------------------

const express = require('express');

//express app
const app = express();

//listen for request
app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<p> Home Page </p>');  //susbstitute the res.write and res.end()
    res.sendFile('./views/index.html', {root:__dirname});
  })


//---------------------------------------------------------------
//Routing & HTML --- 7.21
//---------------------------------------------------------------

app.get('/about', (req, res) => {
    //res.send('<p>About Page </p>');  //susbstitute the res.write and res.end()
    res.sendFile('./views/about.html', {root:__dirname});
  })


//---------------------------------------------------------------
//Redirect & 404's --- 11.26
//---------------------------------------------------------------

//redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about'); 
})

//404 page (.use() ---> create middleware and fire it to all)
//also must most bellow of script
//if put the script in middle code, it'll not running others below it
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root:__dirname});
});