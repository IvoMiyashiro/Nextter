import { Dispatch } from 'react';
import { IUser } from './../interfaces/index';

export const signin = (user: IUser) => {
  return {
    type: 'UPDATE',
    payload: user
  };
};

export const logOut = (dispatch: Dispatch<any>) => {
  localStorage.removeItem('token');

  return dispatch({
    type: 'LOG OUT',
  });
};
