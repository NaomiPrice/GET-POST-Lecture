// requires
const express = require('express');
const app = express();

//global
const port = 5000;
let things = [];
///- test data - ///
things.push({name: 'bottle'});
// uses
app.use(express.static('server/public'));

// spin up server
app.listen(port, ()=>{
 console.log('server is up: ', port);
}) // end server up

// routs
app.get('/things', (req, res)=>{
    console.log('in /things GET');
    res.send(things);
})// end things