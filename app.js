const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let port = process.env.PORT || 3000;
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

const bookRoutes = require('./routes/book');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(bookRoutes);

app.use((req,res)=>{
  res.render('books/error',{
    title: 'Error page'
  })
})

mongoose
  .connect('mongodb+srv://00012577:webtechnology@cluster0.p55wf.mongodb.net/note-taking')
  .then(result => {
    app.listen(port);
  })
  .catch(err => {
    console.log(err);
});

