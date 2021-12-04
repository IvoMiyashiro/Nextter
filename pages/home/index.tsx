import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

import { Spinner } from '../../components/Spinner';
import { HomePage } from '../../components/HomePage';
import { useIsLoggedin } from '../../hooks/useIsLoggedin';

const Home: NextPage = () => {

  const [isCheckingAuth, setCheckingAuth] = useState(true);
  const {isLoggedin} = useIsLoggedin();
  const router = useRouter();
  
  useEffect(() => {
    if (isLoggedin === false) router.push('/');
    setCheckingAuth(false);
  }, [isLoggedin, router]);
  return(
    <>
      {
        isCheckingAuth
          ? <div><Spinner color="white" size="32px"/></div>
          : <HomePage />
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
