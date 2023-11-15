import mongoose from 'mongoose';

const DietSchema = new mongoose.Schema({
  food: {
    type: String,
  },
  quantity: {
    type: String,
  },
  athlet: {
    type: String,
  },
  obs: {
    type: String,
  },
  time: {
    type: String,
  },
  day: {
    type: String,
  },
});

const Diet = mongoose.models.Diet || mongoose.model('Diet', DietSchema);

export default Diet;
