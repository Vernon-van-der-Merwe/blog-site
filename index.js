const Mongo = require("./data/Datahandler.js");
const _ = require('lodash');
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));


//////////////////
//GET
/////////////////

app.get("/", async (req, res) => {

    let blogs = await Mongo.selectAll();
    res.render('landing', { blogs: blogs });

});

app.get("/blogs", async (req, res) => {

    let blogs = await Mongo.selectAll();
    res.render('blogs', { blogs: blogs });

});

app.get("/create", (req, res) => {

    res.render('create');

});

app.get('/read-blog', (req, res) => {
    res.render('read-blog');
});

app.get('/compose', (req, res) => {
    res.render('compose');
});



app.get('/:blog_id', async (req, res) => {

    let value1 = _.toLower(req.params.blog_id);

    let blogs = await Mongo.selectAll();

    blogs.forEach(arrayItem => {
        let value2 = _.toLower(arrayItem.title);

        if (value1 == value2) {
            blog = arrayItem;
        }

    });
    res.render('read-blog', { blog: blog });
});

//////////////////
//POST
/////////////////

app.post('/compose', (req, res) => {
    let article = {
        'title': req.body.title,
        'summary': req.body.summary,
        'body': req.body.article_body,
        'category': 'Philosophy',
        'created': '2019-02-12',
        'modified': {},
        'views': ''
    };
    //Post article here

    if (req.body.submit == "submit") {
        console.log(req.body.submit);
        Mongo.insert(article);
    } else if (req.body.update == "update") {
        console.log(req.body.update);
    }

});

app.post('/blogs:blog_id',(req,res) => {
    Mongo.delete(req.params.blog_id);
    
});


app.listen(3000, () => console.log("listening on port 3000"));

