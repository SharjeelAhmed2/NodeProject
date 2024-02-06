
const express = require("express");
const Blog = require("../models/blogsdata");

const router = express.Router();
/// Show data on FrontEnd

router.get('/home',(req,res)=>
{
  // the find is an asynchronous task so we wait for this hence then and catch
  Blog.find().then((result)=>
  {
    res.render('index', { title: 'Systems Limited', blogs: result});
  }).catch((err)=>{
    console.log(err);
  }
  )
})

  // Create a new blog page
  router.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
  });
  
/// Making a post request 

router.post('/createBlogs',(req,res)=>
{
    const newBlog = new Blog(req.body);

    newBlog.save()
    .then((result)=>
    {
      res.redirect('/home');
    }).catch((err) => {
      console.log(err);
    });
})

/// Making a get request that will render content of a single blog on a page

router.get('/blogs/:id', (req,res) =>{
  // save id in a variable
  const id = req.params.id;
  console.log(id);
  Blog.findById(id).then((result)=>
{
  res.render('details', {blog:result, title: 'Blog Details'})
}).catch((err)=>{console.log(err);})
})


/// delete request

router.delete('/blogs/:id', (req,res) => {
   const id = req.params.id;

   Blog.findByIdAndDelete(id)
   .then((result) => {res.json({redirect: '/home'})})
   .catch((err)=>{console.log(err)});
})

module.exports = router;