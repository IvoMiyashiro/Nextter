import { createContext, ReactChild, useReducer } from 'react';
import { userReducer } from '../reducer/userReducer';

interface AppContextInterface {
  uid: String,
  name: String,
  img: String,
}

type Props = {
  children: ReactChild
}

export const AppProvider = ({ children }) => {

  const USER_INIT_STATE: AppContextInterface = {
    uid: '',
    name: '',
    img: ''
  };

  const [state, dispatch] = useReducer(userReducer, USER_INIT_STATE);
  const AppContext = createContext
  <{ state: AppContextInterface; dispatch: React.Dispatch<any>;}>
  ({ state: USER_INIT_STATE, dispatch: () => null });

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};
