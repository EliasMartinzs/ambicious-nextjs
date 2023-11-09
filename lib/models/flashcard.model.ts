import mongoose from 'mongoose';

const FlashcardSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  color: {
    type: String,
  },
  category: {
    type: String,
  },
});

const Flashcard =
  mongoose.models.Flashcard || mongoose.model('Flashcard', FlashcardSchema);

export default Flashcard;
