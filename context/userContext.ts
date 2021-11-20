import { createContext } from 'react';
import { UserContextInterface } from './../interfaces/index';

export const USER_INIT_STATE: UserContextInterface = {
  uid: '',
  name: '',
  img: ''
};

export const AppContext = createContext
<{ state: UserContextInterface; dispatch: React.Dispatch<any>;}>
({ state: USER_INIT_STATE, dispatch: () => null });
