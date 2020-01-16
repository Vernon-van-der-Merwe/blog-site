
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/BlogDB", { useNewUrlParser: true });

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: [true, "No title provided"] },
    summary: { type: String, required: [true, "No summary provided"] },
    body: { type: String, required: [true, "No body provided"] },
    category: { type: String, required: [true, "No category provided"] },
    created: { type: String, required: [true, "No 'created'-time provided"] },
    popular: Boolean,
    modified: Date,
    views: Number

});

const Blog = mongoose.model("Blog", BlogSchema);


function DBinsert(article) {

    const blog_obj = new Blog({
        title: article.title,
        summary: article.summary,
        body: article.body,
        category: article.category,
        created: '2019-02-12',
        popular: true,
        modified: '',
        views: ''
    });

    blog_obj.save(err => {
        if (err) {
            console.log("MONGO DB ERROR:" + err);
        } else {
            console.log("blog has been saved");
        }
    });

}

function DBupdate(title, summary, body, category) {
    const blog_obj = new Blog({
        title: title,
        summary: summary,
        body: body,
        category: category,
        created: '2019-02-12',
        popular: true,
        modified: '',
        views: ''
    });

    blog_obj.save(err => {
        if (err) {
            console.log("MONGO DB ERROR:" + err);
        } else {
            console.log("blog has been saved");
        }
    });
}

function DBdelete(_id) {

    Blog.findByIdAndRemove(_id, (err, Blog) => {
    if (err) {
        console.log(err);
    }else{
        console.log("post successfully deleted");
    }
});
}

async function DBselectall() {

    let Blogs = await Blog.find((err, Blogs) => {
        if (err) {
            console.log(err);
        } else {
            return Blogs;
        }
    });

    return Promise.resolve(Blogs);

}


// export 

module.exports = {
    insert: DBinsert,
    update: DBupdate,
    selectAll: DBselectall,
    delete:DBdelete
};