//---------------------------------------------------------------
//Creating an Express App--- 2.27
//---------------------------------------------------------------

const express = require('express');

//express app
const app = express();

//listen for request
app.listen(3000);

app.get('/', (req, res) => {
    res.send('<p> Home Page </p>');  //susbstitute the res.write and res.end()
  })