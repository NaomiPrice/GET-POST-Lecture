Node/Express setup
===
Step 1: Setup
---
 - create project root folder 
 - open in VS code
 - git init
 - npm init
 - in terminal: 'npm install express'
 - create 'server' folder
 - create 'server.js' in 'server' folder
 - create 'server/public' folder 
 - in 'public': create index.html, 'scripts' folder and 'vendors' folder

 Step 2: spin up server
 ---
 - in server.js:
 ```
// requires
const express = require('express');
const app = express();
//global
const port = 5000;

// spin up server
app.listen(port, ()=>{
 console.log('server is up: ', port);
}) // end server up
 ```

 - run node 'node server/server.js' in terminal
 - add "start" script to package.json
 - add to 'server.js' above 'app.listen': ```//uses app.use(express.static('server/public'));```

should be able to run 'npm start' in terminal now and load 'localhost:5000' in browser to see the html page

note: make sure no other projects are running on this port of you will get an "INUSE" error

 - add '.gitignore' in root folder and add 'node_modules'
 - set up client.js & jquery files as usual in folders

Routes basics:
---
add to server.js at bottom:
```
// routes
app.get( '/things', ( req, res )=>{
    console.log( 'in /things GET' );
    res.send( 'meow' );
}) //end things
```
test in browser at "localhost:5000/things"
add a global variable and some test data:
```
let things = [];
/// - test data - ///
things.push( { name: 'bottle' } );
```

and update the get route to respond with the new data:

```
// routes
app.get( '/things', ( req, res )=>{
    console.log( 'in /things GET' );
    res.send( things );
}) //end things
```

 AJAX basics 
 ===
  in client.js:
  -add function "getThings"