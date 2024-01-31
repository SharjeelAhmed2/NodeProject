const express = require("express");

const app = express();

app.listen(3000);


// using view engine
app.set('view engine', 'ejs');



// Making a get request and passing that data onto the view file 
app.get('/', (req, res) => {
    const blogs = [
      {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', { title: 'Home', blogs });
  });


  // renders about page
  app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
  });
  
  // Create a new blog page
  app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
  });
  
  // 404 error page
  app.use((req, res) => {
    res.status(404).render('error', { title: '404' });
  });