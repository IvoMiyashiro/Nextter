import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/userContext';
import { fetchWithToken } from '../helpers/fetchWithToken';

export const useIsLoggedin = () => {
  const [isLoggedin, setLoggedin] = useState<boolean | null>(null);
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {

    const handleIsLoggedin = async() => {

      try {
        const token = localStorage.getItem('token') || '';
        
        if (!token) return setLoggedin(false);
  
        const resp = await fetchWithToken('/auth/renew');
        const body = await resp.json();
  
        const { uid, name, img, token: newToken } = body;
  
        localStorage.setItem('token', newToken);
  
        dispatch({
          type: 'UPDATE',
          payload: {
            ...state,
            uid,
            name,
            img
          }
        });
  
        if (!resp.ok) return setLoggedin(false);
      } catch (error) {
        console.log(error);
        return setLoggedin(false);
      }

      return setLoggedin(true);
    };
    
    handleIsLoggedin();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoggedin,
  };
};
