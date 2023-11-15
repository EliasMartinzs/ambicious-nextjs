import mongoose from 'mongoose';

const bodyMeasurements = new mongoose.Schema({
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

const BodyMeasurements =
  mongoose.models.BodyMeasurements ||
  mongoose.model('BodyMeasurements', bodyMeasurements);

export default BodyMeasurements;
