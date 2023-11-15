import mongoose from 'mongoose';

const MeasurementsSchema = new mongoose.Schema({
  chest: {
    type: Number,
  },
  bicepsLeft: {
    type: Number,
  },
  bicepsRight: {
    type: Number,
  },
  legLeft: {
    type: Number,
  },
  legRight: {
    type: Number,
  },
  waist: {
    type: Number,
  },
  calfLeft: {
    type: Number,
  },
  calfRight: {
    type: Number,
  },
  date: {
    type: String,
  },
});

const Measurements =
  mongoose.models.Measurements ||
  mongoose.model('Measurements', MeasurementsSchema);

export default Measurements;
