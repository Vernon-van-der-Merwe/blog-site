//jshint using ES6
let blogs = [{
    'title': 'Whats going on with humanity',
    'summary': 'My take on why humanity is gong downhill',
    'body': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusantium temporibus saepe dolore incidunt laboriosam repudiandae excepturi ipsa repellendus ipsam vitae odit sapiente in, ducimus hic necessitatibus distinctio quos quod itaque perspiciatis ipsum? Commodi, error blanditiis maiores, cumque doloremque officiis quas voluptate voluptas iste harum labore ipsum odit nemo libero nisi, id perspiciatis adipisci. Accusamus ipsa molestias eligendi eum reprehenderit veniam corporis cum voluptas illum quos? Necessitatibus iure voluptatibus vitae reiciendis aperiam at consectetur deserunt facere, ad ipsa, repudiandae tempore? Minus provident assumenda voluptates officia vero! Sapiente autem magnam natus impedit tempora repellat recusandae explicabo, ut, voluptatem alias maiores aliquid.',
    'category': 'Philosophy',
    'created': '2019-02-12',
    'popular': false,
    'modified': {},
    'views': ''

}, {
    'title': 'Yesterdays dinner',
    'summary': 'My take on why humanity is gong downhill',
    'body': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusantium temporibus saepe dolore incidunt laboriosam repudiandae excepturi ipsa repellendus ipsam vitae odit sapiente in, ducimus hic necessitatibus distinctio quos quod itaque perspiciatis ipsum? Commodi, error blanditiis maiores, cumque doloremque officiis quas voluptate voluptas iste harum labore ipsum odit nemo libero nisi, id perspiciatis adipisci. Accusamus ipsa molestias eligendi eum reprehenderit veniam corporis cum voluptas illum quos? Necessitatibus iure voluptatibus vitae reiciendis aperiam at consectetur deserunt facere, ad ipsa, repudiandae tempore? Minus provident assumenda voluptates officia vero! Sapiente autem magnam natus impedit tempora repellat recusandae explicabo, ut, voluptatem alias maiores aliquid.',
    'category': 'Philosophy',
    'popular': true,
    'created': '2019-02-12',
    'modified': {}

}, {
    'title': 'Mars is our only hope',
    'summary': 'My take on why humanity is gong downhill',
    'body': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusantium temporibus saepe dolore incidunt laboriosam repudiandae excepturi ipsa repellendus ipsam vitae odit sapiente in, ducimus hic necessitatibus distinctio quos quod itaque perspiciatis ipsum? Commodi, error blanditiis maiores, cumque doloremque officiis quas voluptate voluptas iste harum labore ipsum odit nemo libero nisi, id perspiciatis adipisci. Accusamus ipsa molestias eligendi eum reprehenderit veniam corporis cum voluptas illum quos? Necessitatibus iure voluptatibus vitae reiciendis aperiam at consectetur deserunt facere, ad ipsa, repudiandae tempore? Minus provident assumenda voluptates officia vero! Sapiente autem magnam natus impedit tempora repellat recusandae explicabo, ut, voluptatem alias maiores aliquid.',
    'category': 'Philosophy',
    'created': '2019-02-12',
    'popular': false,
    'modified': {},
    'views': ''

}, {
    'title': 'Elon musk will save humanity',
    'summary': 'My take on why humanity is gong downhill',
    'body': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusantium temporibus saepe dolore incidunt laboriosam repudiandae excepturi ipsa repellendus ipsam vitae odit sapiente in, ducimus hic necessitatibus distinctio quos quod itaque perspiciatis ipsum? Commodi, error blanditiis maiores, cumque doloremque officiis quas voluptate voluptas iste harum labore ipsum odit nemo libero nisi, id perspiciatis adipisci. Accusamus ipsa molestias eligendi eum reprehenderit veniam corporis cum voluptas illum quos? Necessitatibus iure voluptatibus vitae reiciendis aperiam at consectetur deserunt facere, ad ipsa, repudiandae tempore? Minus provident assumenda voluptates officia vero! Sapiente autem magnam natus impedit tempora repellat recusandae explicabo, ut, voluptatem alias maiores aliquid.',
    'category': 'Philosophy',
    'created': '2019-02-12', 
    'popular': true,
    'modified': {},
    'views': ''

}, {
    'title': 'Is anyone else really lis for some KFC',
    'summary': 'My take on why humanity is gong downhill',
    'body': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusantium temporibus saepe dolore incidunt laboriosam repudiandae excepturi ipsa repellendus ipsam vitae odit sapiente in, ducimus hic necessitatibus distinctio quos quod itaque perspiciatis ipsum? Commodi, error blanditiis maiores, cumque doloremque officiis quas voluptate voluptas iste harum labore ipsum odit nemo libero nisi, id perspiciatis adipisci. Accusamus ipsa molestias eligendi eum reprehenderit veniam corporis cum voluptas illum quos? Necessitatibus iure voluptatibus vitae reiciendis aperiam at consectetur deserunt facere, ad ipsa, repudiandae tempore? Minus provident assumenda voluptates officia vero! Sapiente autem magnam natus impedit tempora repellat recusandae explicabo, ut, voluptatem alias maiores aliquid.',
    'category': 'Philosophy',
    'created': '2019-02-12', 
    'popular': false,
    'modified': {},
    'views': ''

}, {
    'title': 'Writing blog titles become demanding after a while',
    'summary': 'My take on why humanity is gong downhill',
    'body': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusantium temporibus saepe dolore incidunt laboriosam repudiandae excepturi ipsa repellendus ipsam vitae odit sapiente in, ducimus hic necessitatibus distinctio quos quod itaque perspiciatis ipsum? Commodi, error blanditiis maiores, cumque doloremque officiis quas voluptate voluptas iste harum labore ipsum odit nemo libero nisi, id perspiciatis adipisci. Accusamus ipsa molestias eligendi eum reprehenderit veniam corporis cum voluptas illum quos? Necessitatibus iure voluptatibus vitae reiciendis aperiam at consectetur deserunt facere, ad ipsa, repudiandae tempore? Minus provident assumenda voluptates officia vero! Sapiente autem magnam natus impedit tempora repellat recusandae explicabo, ut, voluptatem alias maiores aliquid.',
    'category': 'Philosophy',
    'popular': true,
    'created': '2019-02-12', 
    'modified': {},
    'views': ''

}]




const _ = require('lodash');
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", (req, res) => {
    console.log("get recieved");
    res.render('landing', { blogs: blogs });
});

app.get('/read-blog', (req, res) => {
    res.render('read-blog');
});

app.get('/compose', (req, res) => {
    res.render('compose');
});

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
});



app.get('/:blog_id',(req,res) => {

    var blog = '';
    let value1 = _.toLower(req.params.blog_id);
    

    blogs.forEach(arrayItem => {
    let value2 = _.toLower(arrayItem.title);

        if (value1 ==  value2) {    
            blog = arrayItem;
        }

    });
    res.render('read-blog',{blog:blog});
});

app.listen(3000, () => console.log("listening on port 3000"));

