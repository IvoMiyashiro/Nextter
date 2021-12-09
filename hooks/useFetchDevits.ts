import { useEffect, useContext } from 'react';

import { getDevits } from '../actions/devits';
import { fetchWithToken } from '../helpers/fetchWithToken';

import { AppContext } from '../context/AppContext';

export const useFetchDevits = (
  handleLoader: (value: boolean) => void
) => {

  const {devitState, devitDispatch} = useContext(AppContext);

  useEffect(() => {
    const handleFetchDevits = async() => {
      try {
        const resp = await fetchWithToken('/devit');
        const body = await resp.json();
        const {devits} = body;
        devitDispatch(getDevits(devits.reverse()));
        handleLoader(false);
      } catch (error) {
        console.log(error);
      }
    };

    handleFetchDevits();
  }, [devitDispatch, handleLoader]);

  return {
    devitState
  };
};
