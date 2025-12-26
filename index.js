const express = require("express");
const app = express();
const port = 3001; 

// Middleware (optional logging)
app.use((req, res) => {
    console.log("The request are sent");
});

app.listen(port, () => {
    console.log(`Our Current Server is running on port ${port}`);
});

//=======================================================Routes==========================================================================

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

// 404 Handler
app.use((req, res) => {
    res.status(404).send("404: Page not found i.e This page is not exist");
});


//===================Pathparameter : send a variable to server and server make a response with name=======================
app.get("/username",(req, res) => {
    console.log(req.params);
});

app.get("/username/id",(req, res) => {
    let {username,id} = req.params;
    let htmlstr = `<h1>Welcome Mister @${username}.</h1><h3>Your current id is ${id}</h3> `;
    res.send(htmlstr);
});







