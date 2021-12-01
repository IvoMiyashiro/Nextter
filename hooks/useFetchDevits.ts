import { useState, useEffect, useContext } from 'react';

import { getDevits } from '../actions/devits';
import { fetchWithToken } from '../helpers/fetchWithToken';

import { AppContext } from '../context/AppContext';

export const useFetchDevits = () => {

  const {devitState, devitDispatch} = useContext(AppContext);

  useEffect(() => {
    const handleFetchDevits = async() => {
      try {
        const resp = await fetchWithToken('/devit');
        const body = await resp.json();
        const {devits} = body;
        devitDispatch(getDevits(devits.reverse()));

      } catch (error) {
        console.log(error);
      }
    };

    handleFetchDevits();
  }, [devitDispatch]);

  return {
    devitState
  };
};
