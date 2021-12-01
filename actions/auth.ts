import { IUser } from './../interfaces/index';

export const signin = (user: IUser) => {
  return {
    type: 'UPDATE',
    payload: user
  };
};
