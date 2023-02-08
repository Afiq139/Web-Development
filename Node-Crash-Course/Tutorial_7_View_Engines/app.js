//---------------------------------------------------------------
//Creating an Express App--- 2.27
//---------------------------------------------------------------

const express = require('express');

//express app
const app = express();

//register view engine --- ejs
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

//listen for request
app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<p> Home Page </p>');  //susbstitute the res.write and res.end()
    //res.sendFile('./views/index.html', {root:__dirname});
    const blogs = [ //array
          {title: 'Yoshi finds eggs', snippet: ' Lorem ipsum dolor sit amet consectetur'},
          {title: 'Yoshi finds eggs', snippet: ' Lorem ipsum dolor sit amet consectetur'},
          {title: 'Yoshi finds eggs', snippet: ' Lorem ipsum dolor sit amet consectetur'},
        ];
  
    
    res.render('index', { title: 'Home' , blogs }); 
    //will look on index.ejs & access the title & blogs of arrays (blogs: blogs or blogs)
  })


//---------------------------------------------------------------
//Routing & HTML --- 7.21
//---------------------------------------------------------------

app.get('/about', (req, res) => {
    //res.send('<p>About Page </p>');  //susbstitute the res.write and res.end()
    //res.sendFile('./views/about.html', {root:__dirname});
    res.render('about',  { title: 'About' });

  })


//---------------------------------------------------------------
//Redirect & 404's --- 11.26
//---------------------------------------------------------------

//redirect
// app.get('/about-us', (req, res) => {
//     res.redirect('/about'); 
// })

app.get('/blogs/create', (req, res) => {
  res.render('create',  { title: 'Create a New Blog' }); 
})

//404 page (.use() ---> create middleware and fire it to all)
//also must most bellow of script
//if put the script in middle code, it'll not running others below it
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', {root:__dirname});
    res.status(404).render('404',  { title: '404' });
});

//---------------------------------------------------------------
//EJS--- 1.29
//---------------------------------------------------------------
//npm install -g nodemon
//set-executionpolicy remotesigned -Scope CurrentUser
//set-executionpolicy restricted -Scope CurrentUser

//---------------------------------------------------------------
//Passing Data into Views--- 11.00
//---------------------------------------------------------------

//stopped at 23.13

//EJS templates:
//are processed through the EJS view engine on the server