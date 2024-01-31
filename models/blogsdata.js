const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create an instance of your Schema (you will need this in your model)

// This creates a Table in your Database with the fields and whether they're required
const mySchema = new Schema(
    {
        title:{
            type: String,
            required: true
        },
        body:{
            type: String,
            require: true
        },
        snippets:{
            type: String,
            require: true
        }
    }, {timestamps:true}
)

// The timestamp thing is basically mongo taking care of time when it was modified

// You will need to call the scehema in your model

//this blog instance will be used later to make get / post to DB
const Blog = mongoose.model('BlogData', mySchema);

module.exports = Blog;