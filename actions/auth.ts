import { fetchWithToken } from './../helpers/fetchWithToken';
import { fileUpload } from './../helpers/fileUpload';
import { Dispatch } from 'react';
import { IUser } from './../interfaces/index';
import { fetchWithoutToken } from '../helpers/fetchWithoutToken';

interface IFormValues {
  profilePicture: {
    file: any
    fileUrl: string
  },
  coverPicture:  {
    file: any
    fileUrl: string
  },
  username: string
  bio: string
}

interface IState {
  isOpen: boolean,
  error: boolean,
  msg: string,
}

export const signin = async(
  email: string,
  password: string,
  dispatch: Dispatch<any>,
  router?: any,
  setValue?: (value: IState | ((prev: IState) => IState )) => void,
  setLoading?: (value: boolean) => void,
) => {
  
  !!setLoading && setLoading(true);

  try {

    const resp = await fetchWithoutToken('auth/signin', {
      email,
      password,
    }, 'POST');
    const body = await resp.json();

    if (!body.success) {
      !!setValue && setValue((prev: IState) => ({
        ...prev,
        isOpen: true,
        msg: body.msg
      }));
  
      !!setValue && setTimeout(() => {
        setValue((prev: IState) => ({
          ...prev,
          isOpen: false,
          msg: body.msg
        }));
      }, 4000);
      
      return;
    }
    
    const user: IUser = body.user;

    dispatch({
      type: 'UPDATE',
      payload: user
    });
    
    getUserDevits(user.id, dispatch);
    
    localStorage.setItem('token', body.token);
    !!router && router.push('./home');
  } catch (error) {
    console.log(error);
  }
  !!setLoading && setLoading(false);
};

export const logOut = (dispatch: Dispatch<any>) => {
  localStorage.removeItem('token');

  return dispatch({
    type: 'LOG OUT',
  });
};

export const getUserDevits = async(
  uid: string,
  dispatch: Dispatch<any>,
) => {
  try {
    const resp = await fetchWithToken(`/devits/${uid}`);
    const body = await resp.json();
    const { devits } = body;
    
    return dispatch({
      type: 'LOAD USER DEVITS',
      payload: devits
    });
  } catch (error) {
    console.log(error);
  }
};

export const firstEditProfile = async(
  uid: string,
  formValues: IFormValues,
  setLoading: (value: boolean) => void,
  dispatch: Dispatch<any>,
) => {

  const {
    profilePicture,
    coverPicture,
    username,
    bio
  } = formValues;

  setLoading(true);

  try {
    let newProfilePicture = '';
    !!profilePicture.file
      ? newProfilePicture = await fileUpload(profilePicture.file)
      : newProfilePicture = 'https://res.cloudinary.com/dzvweeche/image/upload/v1638828344/profileImage_oilntm.png';

    let newCoverPicture = '';
    !!profilePicture.file
      ? newCoverPicture = await fileUpload(coverPicture.file)
      : newCoverPicture = '';
    
    const resp = await fetchWithToken(`user/${uid}`,{
      profilePicture: newProfilePicture,
      coverPicture: newCoverPicture,
      username,
      bio,
      firstEditProfile: true,
    }, 'PUT');
    const body = await resp.json();

    dispatch({
      type: 'UPDATE',
      payload: body.user
    });
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
};

export const userRevit = () => {
  
};

export const userFavs = () => {
  
};
