Lets understand how backend server is created
1. mkdir EXPRESS
2. npm init -y // it install by default package.json
   {
  "name": "express",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
3. npm intall express 
   "dependencies": {
    "express": "^5.1.0"
  }
4. create a file name index.js // i.e server
   -> define variable
      const express = require("express");
      const app = express();
      const port = 3001;
   ->
      app.listen(port, () => {
      console.log(`Our Current Server is running on port ${port}`);
      });
   -> create routes
   app.get("/", (req, res) => {
    // console.log("The request are sent");
    res.send("This is Root path of directory");
    });
    app.get("/search",(req, res) => {
    res.send("This is search path of directory");
    });
    app.get("/help",(req, res) => {
    res.send("This is help path of directory");
    });
    app.get("/tool",(req, res) => {
    res.send("This is tool path of directory");
    });
   -> error handlings
   // 404 Handler
    app.use((req, res) => {
    res.status(404).send("404: Page not found i.e This page is not exist");
    });
   
5. Extra -> Pathparameter : send a variable to server and server make a response with name
    app.get("/:username",(req, res) => {
    console.log(req.params);
    });

    app.get("/username/id",(req, res) => {
    let {username,id} = req.params;
    let htmlstr = `<h1>Welcome Mister @${username}.</h1><h3>Your current id is ${id}</h3> `;
    res.send(htmlstr);
    });
6. Run nodemon index.js/node index.js
   -> Our Current Server is running on port 3001


   
