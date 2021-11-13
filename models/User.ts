const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  passoword: {
    type: String,
    require: true,
  },
  birthDate: {
    type: Date,
    require: true,
  }
});

export default model('User', UserSchema);
