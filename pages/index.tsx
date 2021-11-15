import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { fetchWithToken } from '../services/fetchWithToken';

import { MainSection } from '../components/PagesComponents/Index/MainSection';
import { VideoSection } from '../components/PagesComponents/Index/VideoSection';

import styles from './styles';
import { LoadingPage } from '../components/LoadingPage';

const Home: NextPage = () => {

  const [isCheckingAuth, setCheckingAuth] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleIsLoggedin = async() => {
      const token = window.localStorage.getItem('token');

      if (token) {
        const resp = await fetchWithToken('/auth/renew');

        if (resp.ok) {
          router.push('/home');
        }
      }

      setCheckingAuth(false);
    };

    handleIsLoggedin();
  }, [router]);

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
