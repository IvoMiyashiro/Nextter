import { Schema, model, models } from 'mongoose';

const DevitSchema = new Schema({
  uid: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    max: 280,
  },
  img: {
    type: String,
  },
  comments: {
    type: Array,
    default: []
  },
  revits: {
    type: Array,
    default: []
  },
  favs: {
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
