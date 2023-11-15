import mongoose from 'mongoose';

const BasicsSchema = new mongoose.Schema({
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  age: {
    type: Number,
  },
  imc: {
    imc: Number,
    condition: String,
  },
});

const Basics = mongoose.models.Basics || mongoose.model('Basics', BasicsSchema);

export default Basics;
