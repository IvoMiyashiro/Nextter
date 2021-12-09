import { Dispatch } from 'react';
import { fetchWithToken } from '../helpers/fetchWithToken';
import { fileUpload } from '../helpers/fileUpload';

export const createComment = async(
  file: File,
  uid: string,
  id: string,
  content: string,
  dispatch: Dispatch<any>,
  setLoading: (value: boolean) => void,
  handleOpenModal: (value: boolean) => void
) => {

  setLoading(true);

  try {
    let newFile = '';

    !!file
      ? newFile = await fileUpload(file)
      : newFile = '';
    
    const resp = await fetchWithToken(`devit/${id}/comments`, {
      uid,
      content,
      img: newFile,
    }, 'PUT');
    const body = await resp.json();

    dispatch({
      type: 'CREATE COMMENT',
      payload: body.devit
    });
    
    setLoading(false);
    handleOpenModal(false);
  } catch (error) {
    console.log(error);
  }
};

export const favComment = async(
  devitId: string,
  commentId: string,
  uid: string,
  dispatch: Dispatch<any>
) => {
  try {
    await fetchWithToken(
      `/devit/${devitId}/comments/fav`,
      {uid, commentId},
      'PUT'
    );

    dispatch({
      type: 'FAV COMMENT',
      payload: {
        devitId,
        commentId,
        uid
      }
    });
  } catch (error) {
    console.log(error);
  }

};

export const unFavComment = async(
  devitId: string,
  commentId: string,
  uid: string,
  dispatch: Dispatch<any>
) => {
  try {
    await fetchWithToken(
      `/devit/${devitId}/comments/fav`,
      {uid, commentId},
      'PUT'
    );

    dispatch({
      type: 'UNFAV COMMENT',
      payload: {
        devitId,
        commentId,
        uid
      }
    });
  } catch (error) {
    console.log(error);
  }
};
