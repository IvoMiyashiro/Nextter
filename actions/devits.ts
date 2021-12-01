import { Dispatch } from 'react';
import { fetchWithToken } from '../helpers/fetchWithToken';
import { fileUpload } from '../helpers/fileUpload';
import { IDevit } from '../interfaces';

export const getDevits = (devits: IDevit) => {
  return {
    type: 'LOAD DEVITS',
    payload: devits
  };
};

export const createDevit = async(
  file: File,
  uid: string,
  content: string,
  devitDispatch: Dispatch<any>,
  setLoading: (value: boolean) => void,
  handleOpenModal: (value: boolean) => void
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

    
    devitDispatch({
      type: 'CREATE DEVIT',
      payload: body.devit
    });
    
    setLoading(false);
    handleOpenModal(false);
  } catch (error) {
    console.log(error);
  }
};
