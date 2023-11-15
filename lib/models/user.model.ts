import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: String,
  bio: String,
  tasks: [
    {
      type: Array,
    },
  ],
  courses: [{ type: Array }],
  books: [{ type: Array }],
  questions: [{ type: Array }],
  metas: [{ type: Array }],
  flashcards: [{ type: Array }],
  exerciseSheet: [{ type: Array }],
  diet: [{ type: Array }],
  bodyMeasurements: [{ type: Array }],
  onboarded: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
