import { USER_INIT_STATE } from '../context/AppContext';
import { IUser } from './../interfaces/index';

export type ActionType = 
  | {type: 'UPDATE', payload: IUser}
  | {type: 'LOG OUT'}

export const userReducer = (state = USER_INIT_STATE, action: any) => {
  switch (action.type) {
  case 'UPDATE':
    return {
      ...action.payload
    };

  case 'LOG OUT':
    return USER_INIT_STATE;

  default:
    return state;
  }
};
