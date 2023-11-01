import mongoose from 'mongoose';

const metaSchema = new mongoose.Schema({
  meta: { type: String },
  category: { type: String },
  description: { type: String },
  dateFrom: { type: String },
  dateTo: { type: String },
});

const Meta = mongoose.models.Meta || mongoose.model('Meta', metaSchema);

export default Meta;
