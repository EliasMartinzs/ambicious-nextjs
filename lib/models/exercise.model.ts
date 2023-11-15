import mongoose from 'mongoose';

const ExerciseSchema = new mongoose.Schema({
  exercise: {
    type: String,
  },
  reps: {
    type: Number,
  },
  series: {
    type: Number,
  },
  day: {
    type: String,
  },
  muscle: {
    type: String,
  },
  peso: {
    type: String,
  },
});

const Exercise =
  mongoose.models.Exercise || mongoose.model('Exercise', ExerciseSchema);

export default Exercise;
