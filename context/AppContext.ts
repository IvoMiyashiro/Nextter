import { createContext, Dispatch } from 'react';
import { IDevit, IUser } from './../interfaces/index';

interface IContext {
  userState: IUser
  userDispatch: Dispatch<any>
  devitState: IDevit[]
  devitDispatch: Dispatch<any>
  uiState: {
    isCreateDevitFormOpen: boolean,
  }
  uiDispatch: Dispatch<any>
}

export const USER_INIT_STATE: IUser = {
  id: '',
  username: '',
  name: '',
  email: '',
  bio: '',
  profilePicture: '',
  coverPicture: '',
  birthDate: new Date(),
  followers: [],
  followins: [],
  firstEditProfile: false
};

export const DEVIT_INIT_STATE: IDevit[] = [];

export const UI_INIT_STATE = {
  isCreateDevitFormOpen: false,
};

export const AppContext = createContext<IContext>({ 
  userState: USER_INIT_STATE,
  userDispatch: () => null,
  devitState: DEVIT_INIT_STATE,
  devitDispatch: () => null,
  uiState: UI_INIT_STATE,
  uiDispatch: () => null,
});
