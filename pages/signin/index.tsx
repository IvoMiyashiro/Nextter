import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Head from 'next/head';

import { fetchWithToken } from '../../helpers/fetchWithToken';
import { Spinner } from '../../components/Spinner';
import { PageBody } from './PageBody';

const Sigin: NextPage = () => {

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
          ? <Spinner color="white" size="32px" />
          : <PageBody />
      }
    </>
  );
};

export default Sigin;
