import { USER_INIT_STATE } from '../context/AppContext';
import { IDevit, IUser } from './../interfaces/index';

export type ActionType = 
  | {type: 'UPDATE', payload: IUser}
  | {type: 'LOG OUT'}
  | {type: 'LOAD USER DEVITS', payload: IDevit[]}

export const userReducer = (state = USER_INIT_STATE, action: any) => {
  switch (action.type) {
  case 'UPDATE':
    return {
      ...state,
      ...action.payload
    };

  case 'LOG OUT':
    return USER_INIT_STATE;

  case 'LOAD USER DEVITS':
    return {
      ...state,
      devits: action.payload
    };
  
  case 'ADD USER DEVITS':
    return {
      ...state,
      devits: [
        ...state.devits,
        action.payload
      ]
    };

  case 'DELETE USER DEVITS':
    return {
      ...state,
      devits: state.devits.filter(devit => {
        if(devit.id !== action.payload){
          return devit;
        }
      })
    };
  
  case 'REVIT DEVIT':
    return {
      
    }; 

  default:
    return state;
  }
};
