const bcrypt = require('bcryptjs');


export const saltPassword = (userPassword: string, bodyPassword: string) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(bodyPassword, salt);
};

export const isValidPassword = (userPassword: string, bodyPassword: string) => {
  return bcrypt.compareSync(bodyPassword, userPassword);
};
