import { USER_INIT_STATE } from './../context/userContext';
import { UserContextInterface } from './../interfaces/index';

export type ActionType = {
  type: 'UPDATE',
  payload: UserContextInterface
}

export const userReducer = (state = USER_INIT_STATE, action: ActionType) => {
  switch (action.type) {
  case 'UPDATE':
    return action.payload;

  default:
    return state;
  }
};
