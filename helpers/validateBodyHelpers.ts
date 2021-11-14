const bcrypt = require('bcryptjs');

interface ISalt {
  name: string,
  email: string,
  password: string,
  birthDate: Date,
}

export const saltPassword = (user: ISalt, password: string) => {
  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(password, salt);
};

export const isValidPassword = ()