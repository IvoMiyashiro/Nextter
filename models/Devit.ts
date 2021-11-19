import { Schema, model, models } from 'mongoose';

const DevitSchema = new Schema({
  uid: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    max: 50,
    min: 1,
  },
  img: {
    type: String,
  },
  revits: {
    type: Array,
    default: []
  }
}, {timestamps: true});

DevitSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export default models.Devit || model('Devit', DevitSchema);
