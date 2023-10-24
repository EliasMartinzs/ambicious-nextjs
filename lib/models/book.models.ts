import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  avaliation: {
    type: Number,
  },
  thumbs: {
    type: String,
  },
});

const Book = mongoose.models.Book || mongoose.model('Book', bookSchema);

export default Book;
