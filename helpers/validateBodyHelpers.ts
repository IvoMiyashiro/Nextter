const bcrypt = require('bcryptjs');

interface IUser {
  name: string,
  email: string,
  password: string,
  birthDate: Date,
}

export const saltPassword = (user: IUser, password: string) => {
  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(password, salt);
};

export const isValidPassword = (user: IUser, password: string) => {
  return bcrypt.compareSync(password, user.password);
};
