import { IDevit } from '../interfaces';

export type ActionType = {
  type: 'LOAD DEVITS' | 'CREATE DEVIT',
  payload: IDevit[]
}

export const devitReducer = (state: IDevit[] = [], action: ActionType) => {
  switch (action.type) {
  case 'LOAD DEVITS':
    return [
      ...action.payload
    ];
      
  case 'CREATE DEVIT':
    console.log(state);
    return [
      action.payload,
      ...state
    ];
    
  default:
    return state;
  }
};
