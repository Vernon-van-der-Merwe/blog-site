//jshint using ES6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get( "/" , (req,res) => {
    console.log("get recieved");
    res.render('landing');
});

app.get('/read-blog', (req, res) => {
    res.render('read-blog');
   });

app.listen(3000,() => console.log("listening on port 3000"));

