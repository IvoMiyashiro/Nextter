import { Dispatch } from 'react';
import { fetchWithToken } from '../helpers/fetchWithToken';
import { fileUpload } from '../helpers/fileUpload';
import { IDevit } from '../interfaces';
import { handleCloseCreateDevitForm } from './ui';

export const getDevits = (devits: IDevit[]) => {
  return {
    type: 'LOAD DEVITS',
    payload: devits
  };
};

export const createDevit = async(
  file: File,
  uid: string,
  content: string,
  dispatch: Dispatch<any>,
  uiDispatch: Dispatch<any>,
  setLoading: (value: boolean) => void,
) => {

  setLoading(true);

  try {
    let newFile = '';

    !!file
      ? newFile = await fileUpload(file)
      : newFile = '';
    
    const resp = await fetchWithToken('devit/create', {
      uid,
      content,
      img: newFile,
    }, 'POST');
    const body = await resp.json();

    
    dispatch({
      type: 'CREATE DEVIT',
      payload: body.devit
    });
    
    setLoading(false);
    
    handleCloseCreateDevitForm(uiDispatch);
  } catch (error) {
    console.log(error);
  }
};

export const deleteDevit = async(
  devitId: string,
  uid: string,
  dispatch: Dispatch<any>,
  setLoading: (value: boolean) => void
) => {

  setLoading(true);

  try {
    const resp = await fetchWithToken(`devit/${devitId}/delete`, {
      uid
    }, 'DELETE');
    const body = await resp.json();

    if (!body.success) return;

    dispatch({
      type: 'DELETE DEVIT',
      payload: devitId
    });

    setLoading(false);
  } catch (error) {
    console.log(error);
  }
};

export const favDevit = async(
  devitId: string,
  uid: string,
  dispatch: Dispatch<any>
) => {
  try {
    await fetchWithToken(
      `/devit/${devitId}/fav`,
      {uid},
      'PUT'
    );

    dispatch({
      type: 'FAV DEVIT',
      payload: {
        devitId,
        uid
      }
    });
  } catch (error) {
    console.log(error);
  }

};

export const unFavDevit = async(
  devitId: string,
  uid: string,
  dispatch: Dispatch<any>
) => {
  try {
    await fetchWithToken(
      `/devit/${devitId}/fav`,
      {uid},
      'PUT'
    );

    dispatch({
      type: 'UNFAV DEVIT',
      payload: {
        devitId,
        uid
      }
    });
  } catch (error) {
    console.log(error);
  }

};
