Node/Express setup
===
Step 1: Set up
---
 - create folder 
 - open in VS code
 - npm init
 - 'npm install express'
 - create 'server' folder
 - create 'server.js' in 'server' folder
 - create 'server/public' folder 
 - in 'public' create index.html, 'scripts' folder and 'vendors' foler

 Step 2: spin up server
 ---
 - in server.js:
 ```
// requires
const express = require('express');
const app = express();
//global
const port = 5000;
// uses

// spin up server
app.listen(port, ()=>{
 console.log('server is up: ', port);
}) // end server up

// routs
 ```

 - run node 'node server/server.js' in terminal
 - add "start" script
 - add to 'server.js' above 'app.listen': 
 // get the rest of the notes from dEv's repo - see slack


note: make sure no other projects are running on this port of you will get an "INUSE" error

 - add '.gitignore' in root folder and add 'node_modules'
 - set up client.js & jquery files as usual in folders

 GET basics:
 ---
 ```
app.get('/things', (req, res)=>{
    console.log('in /things GET');
    res.send('meow');
})// end things

 ```