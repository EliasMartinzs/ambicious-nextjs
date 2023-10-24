import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  review: {
    type: String,
  },
  avaliation: {
    type: Number,
    required: true,
  },
  thumbs: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);

export default Course;
