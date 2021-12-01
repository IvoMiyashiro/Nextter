import { ReactChild, useReducer } from 'react';
import { AppContext, DEVIT_INIT_STATE, USER_INIT_STATE } from '../context/AppContext';
import { devitReducer } from '../reducer/devitReducer';
import { userReducer } from '../reducer/userReducer';

type IProps = {
  children: ReactChild
}

export const AppProvider = ({ children }: IProps) => {

  const [userState, userDispatch] = useReducer(userReducer, USER_INIT_STATE);
  const [devitState, devitDispatch] = useReducer(devitReducer, DEVIT_INIT_STATE);
  
  return (
    <AppContext.Provider value={{userState, userDispatch, devitState, devitDispatch} }>
      {children}
    </AppContext.Provider>
  );
};
