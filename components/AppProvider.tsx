import { ReactChild, useReducer } from 'react';
import { AppContext, DEVIT_INIT_STATE, UI_INIT_STATE, USER_INIT_STATE } from '../context/AppContext';
import { devitReducer } from '../reducer/devitReducer';
import { uiReducer } from '../reducer/uiReducer';
import { userReducer } from '../reducer/userReducer';

type IProps = {
  children: ReactChild
}

export const AppProvider = ({ children }: IProps) => {

  const [userState, userDispatch] = useReducer(userReducer, USER_INIT_STATE);
  const [devitState, devitDispatch] = useReducer(devitReducer, DEVIT_INIT_STATE);
  const [uiState, uiDispatch] = useReducer(uiReducer, UI_INIT_STATE);
  
  return (
    <AppContext.Provider value={{
      userState,
      userDispatch,
      devitState,
      devitDispatch,
      uiState,
      uiDispatch
    }}>
      {children}
    </AppContext.Provider>
  );
};
