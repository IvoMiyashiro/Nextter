import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { fetchWithToken } from '../../services/fetchWithToken';

import { Spinner } from '../../components/Spinner';
import { PageBody } from './PageBody';

const Signup: NextPage = () => {

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
        <title>Sign up for Nextter / Nextter</title>
      </Head>

      {
        isCheckingAuth
          ? <Spinner color="white" />
          : <PageBody />
      }
    </>
  );
};

export default Signup;
