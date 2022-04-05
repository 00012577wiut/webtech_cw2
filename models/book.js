const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  book_name: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  author:{
      type:String,
      required: true
  },
  days:{
      type: Number,
      required: true
  }

});



module.exports = mongoose.model('Book', bookSchema);
