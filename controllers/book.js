const Book = require('../models/book');


exports.getAllBooks = (req, res) => {
  Book.find()
  .then(books=>{
      res.render('books/index', {
        title: 'Books',
        books: books
      });
  }).catch(err => {
    return  res.redirect("/errorpage")
  })
};

exports.getNewBook = (req, res) => {
  res.render('books/addBook', {
    title: 'Book +'
  });
};

exports.postNewBook = (req, res) => {
  const book_name = req.body.book_name;
  const comment = req.body.comment;
  const author = req.body.author;
  const days = +req.body.days;
  
  const book = new Book({book_name,comment,days,author})
    
 
  book.save().then(()=>{
      return res.redirect('/')
  }).catch(err=>{
    console.log(err);
    return res.redirect("/errorpage")
  })
} 

exports.postEditBook = (req, res, next) => {
  const id = req.body.bookId;
  const book_name = req.body.book_name;
  const comment = req.body.comment;
  const author = req.body.author;
  const days = +req.body.days;
  console.log(id);
  Book.findById(id)
    .then(book => {
      if (!book) {
        return res.redirect('/errorpage');
      }
      book.book_name = book_name;
      book.comment = comment;
      book.author = author;
      book.days = days;

      return book.save().then(result => {
        res.redirect('/');
      });
    })
    .catch(err => console.log(err));
};

 
exports.postBookDetail = (req, res, next) => {
  const id = req.body.bookId;
  Book.find({_id:id})
  .then((book)=>{
    res.render('books/detail', {
      title: book[0].book_name,
      book: book
    });
  }).catch(err => {console.log(err)})
};

exports.getEditBook = (req, res, next) => {
  const id = req.params.bookId;
  Book.findById(id)
    .then(book => {
      if (!book) {
        return res.redirect('/');
      }
      res.render('books/editBook', {
        title: 'Edit Book',
        book: book
      });
    })
    .catch(err => {
       console.log(err)
    });
};

exports.deleteBook = (req, res)=>{
  const id = req.body.bookId;
  Book.findByIdAndRemove(id).then(()=>{
    return res.redirect("/");
  }).catch(err=>console.log(err))
}

