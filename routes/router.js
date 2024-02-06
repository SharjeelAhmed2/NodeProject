
const express = require("express");
const Blog = require("../models/blogsdata");

const blogController = require('../controllers/blogcontroller');


const router = express.Router();
/// Show data on FrontEnd

router.get('/blogs/create', blogController.blog_create_get);
router.get('/home', blogController.blog_index);
router.post('/createBlogs', blogController.blog_create_post);
router.get('/blogs/:id', blogController.blog_details);
router.delete('/blogs/:id', blogController.blog_delete);


module.exports = router;