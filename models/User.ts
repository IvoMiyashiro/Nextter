import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
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
    default: 'https://res.cloudinary.com/dzvweeche/image/upload/v1638828344/profileImage_oilntm.png'
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
  },
  devits: {
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
  },
  firstEditProfile: {
    type: Boolean,
    default: false
  }
  
}, {timestamps: true});

UserSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export default models.User || model('User', UserSchema);
