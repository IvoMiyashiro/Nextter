import { fetchWithToken } from './../helpers/fetchWithToken';
import { fileUpload } from './../helpers/fileUpload';
import { Dispatch } from 'react';
import { IUser } from './../interfaces/index';

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

export const signin = (user: IUser) => {
  return {
    type: 'UPDATE',
    payload: user
  };
};

export const logOut = (dispatch: Dispatch<any>) => {
  localStorage.removeItem('token');

  return dispatch({
    type: 'LOG OUT',
  });
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
    
    const resp = await fetchWithToken(`user/getById/${uid}/update`,{
      profilePicture: newProfilePicture,
      coverPicture: newCoverPicture,
      username,
      bio,
      firstEditProfile: true,
    }, 'POST');
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

