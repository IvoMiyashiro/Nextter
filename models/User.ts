import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  bio: {
    type: String,
    default: ''
  },
  profilePicture: {
    type: String,
    default: ''
  },
  coverPicture: {
    type: String,
    default: ''
  },
  birthDate: {
    type: Date,
    require: true,
  },
  followers: {
    type: Array,
    default: []
  },
  followins: {
    type: Array,
    default: []
  }
});

UserSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export default models.User || model('User', UserSchema);
