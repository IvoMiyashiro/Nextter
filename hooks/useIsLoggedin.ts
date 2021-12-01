import { useContext, useEffect, useState } from 'react';
import { signin } from '../actions/auth';
import { AppContext } from '../context/AppContext';
import { fetchWithToken } from '../helpers/fetchWithToken';

export const useIsLoggedin = () => {
  const [isLoggedin, setLoggedin] = useState<boolean | null>(null);
  const {userDispatch} = useContext(AppContext);

  useEffect(() => {
    const handleIsLoggedin = async() => {

      try {
        const token = localStorage.getItem('token') || '';
        
        if (!token) return setLoggedin(false);
  
        const resp = await fetchWithToken('/auth/renew');
        const body = await resp.json();
        const { user, token: newToken } = body;
  
        localStorage.setItem('token', newToken);
        userDispatch(signin(user));
  
        if (!body.success) return setLoggedin(false);
      } catch (error) {
        console.log(error);
        return setLoggedin(false);
      }

      return setLoggedin(true);
    };
    
    handleIsLoggedin();

  }, [userDispatch]);

  return {
    isLoggedin,
  };
};
