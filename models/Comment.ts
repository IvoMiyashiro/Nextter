import { Schema } from 'mongoose';

export const CommentSchema = new Schema({
  uid: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  img: {
    type: String,
  },
  favs: {
    type: Array,
    default: []
  }
}, {timestamps: true});
