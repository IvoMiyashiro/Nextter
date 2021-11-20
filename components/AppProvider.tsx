import { ReactChild, useReducer } from 'react';
import { AppContext, USER_INIT_STATE } from '../context/userContext';
import { userReducer } from '../reducer/userReducer';

type IProps = {
  children: ReactChild
}

export const AppProvider = ({ children }: IProps) => {

  const [state, dispatch] = useReducer(userReducer, USER_INIT_STATE);
  
  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};
