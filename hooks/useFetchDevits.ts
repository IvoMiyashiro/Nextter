import { useState, useEffect } from 'react';
import { fetchWithToken } from '../helpers/fetchWithToken';

export const useFetchDevits = () => {
  const [devits, setDevits] = useState([]);

  useEffect(() => {
    const handleFetchDevits = async() => {
      try {
        const resp = await fetchWithToken('/devit');
        const body = await resp.json();
        const { devits } = body;
        setDevits(devits.reverse());

      } catch (error) {
        console.log(error);
      }
    };

    handleFetchDevits();
  }, []);

  return {
    devits
  };
};
