const express = require("express");
const { default: mongoose } = require("mongoose");
const morgan = require("morgan");
const Blog = require("./models/blogsdata");

const app = express();

// username = the user you created 
// password = same

const mongoURI = "mongodb+srv://sharjeel614:getlost01@bench-period.updwel8.mongodb.net/bench-period?retryWrites=true&w=majority";


// Thid is how you connect to Database 
mongoose.connect(mongoURI).then((result) => {app.listen(3000);console.log("Connected to 3000")}).catch((err)=> {console.log(err)});

 /// Manually Save Data in your DB 

 app.get('/create-blog', (req,res)=>
 {
  const saveToDB = new Blog(
    {
      title:"Title",
      snippets : "Empty", 
      body: "This is some random dummy Text"
    }
  );
  saveToDB.save().then((result)=>{
    res.send(result);
  }).catch((err) => {
     console.log(err);
  });

 })

// using view engine
app.set('view engine', 'ejs');


/// Using Middleware

// use next to move forward but do not send res back
// app.use((req,res,next) =>
// {
//      console.log("Entered Middleware");
//      console.log("Method: ", req.method);
//      next();
// })

app.use(morgan('dev'));
app.use(express.static("public"));

// Making a get request and passing that data onto the view file 
app.get('/', (req, res) => {
    const blogs = [
      {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', { title: 'Systems Limited', blogs });
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