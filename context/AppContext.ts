import { createContext, Dispatch } from 'react';
import { IDevit, IUser } from './../interfaces/index';

interface IContext {
  userState: IUser
  userDispatch: Dispatch<any>
  devitState: IDevit[]
  devitDispatch: Dispatch<any>
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
};

export const DEVIT_INIT_STATE: IDevit[] = [];

export const AppContext = createContext<IContext>({ 
  userState: USER_INIT_STATE,
  userDispatch: () => null,
  devitState: DEVIT_INIT_STATE,
  devitDispatch: () => null
});
