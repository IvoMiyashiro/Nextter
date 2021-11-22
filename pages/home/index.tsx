import { useContext, useEffect, useState } from 'react';
import router from 'next/router';
import { NextPage } from 'next';

import { fetchWithToken } from '../../helpers/fetchWithToken';
import { Spinner } from '../../components/Spinner';
import { MainSection } from '../../components/PagesComponents/home/MainSection';
import { AppContext } from '../../context/userContext';

const Home: NextPage = () => {

  const [isCheckingAuth, setCheckingAuth] = useState(true);
  const { state, dispatch } = useContext(AppContext); 

  useEffect(() => {
    const handleIsLoggedin = async() => {
      const token = localStorage.getItem('token') || '';

      if (!token) return router.push('/');

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

      if (!resp.ok) return router.push('/');

      setCheckingAuth(false);
    };

    handleIsLoggedin();
  }, []);

  return(
    <>
      {
        isCheckingAuth
          ? <div><Spinner color="white" size="32px"/></div>
          : <MainSection />
      }
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Home;
