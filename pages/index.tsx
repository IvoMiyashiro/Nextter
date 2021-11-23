import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useIsLoggedin } from '../hooks/useIsLoggedin';

import { LoadingPage } from '../components/LoadingPage';
import { MainSection } from '../components/PagesComponents/index/MainSection';
import { VideoSection } from '../components/PagesComponents/index/VideoSection';

import styles from './styles';

const Home: NextPage = () => {

  const [isCheckingAuth, setCheckingAuth] = useState(true);
  const { isLoggedin } = useIsLoggedin();
  const router = useRouter();
  
  useEffect(() => {
    if (isLoggedin === true) router.push('/home');
    setCheckingAuth(false);
  }, [isLoggedin, router]);
  
  return (
    <>
      <Head>
        <title>Nextter. It&lsquo;s what&lsquo;s happening / Nextter</title>
      </Head>
      {
        isCheckingAuth
          ? <LoadingPage />
          : <div>
            <VideoSection />
            <MainSection />
          </div>
      }
      <style jsx>{styles}</style>
    </>
  );
};

export default Home;
