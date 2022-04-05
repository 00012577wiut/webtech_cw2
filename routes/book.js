const express = require('express');
const bookController = require('../controllers/book');
const router = express.Router();

router.post('/book-detail',  bookController.postBookDetail);
router.get('/',  bookController.getAllBooks);
router.get('/book-edit/:bookId',  bookController.getEditBook);
router.post('/book-edit',  bookController.postEditBook);
router.get('/add-new-book',  bookController.getNewBook);
router.post('/add-new-book',  bookController.postNewBook);
router.post('/book-delete',  bookController.deleteBook);


module.exports = router;
