const express = require("express");
const { default: mongoose } = require("mongoose");
const morgan = require("morgan");
const router = require("./routes/router");

const app = express();

// username = the user you created 
// password = same

const mongoURI = "mongodb+srv://sharjeel614:getlost01@bench-period.updwel8.mongodb.net/bench-period?retryWrites=true&w=majority";


// Thid is how you connect to Database 
mongoose.connect(mongoURI).then((result) => {app.listen(3000);console.log("Connected to 3000")}).catch((err)=> {console.log(err)});


// using view engine
app.set('view engine', 'ejs');



app.use(morgan('dev'));
// this is the middleware we use
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));



// Making a get request and passing that data onto the view file 
app.get('/', (req, res) => {
  res.redirect('/home');

});


  // renders about page
  app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
  });
  


  // use a middleware 
 app.use(router);

  // 404 error page
  app.use((req, res) => {
    res.status(404).render('error', { title: '404' });
  });