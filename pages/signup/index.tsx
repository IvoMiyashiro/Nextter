import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { Spinner } from '../../components/Spinner';
import { PageBody } from './PageBody';
import { useIsLoggedin } from '../../hooks/useIsLoggedin';

const Signup: NextPage = () => {

  const [isCheckingAuth, setCheckingAuth] = useState(true);
  const { isLoggedin } = useIsLoggedin();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedin) router.push('/home');
    setCheckingAuth(false);
  }, [isLoggedin, router]);

  return (
    <>
      <Head>
        <title>Sign up for Nextter / Nextter</title>
      </Head>

      {
        isCheckingAuth
          ? <Spinner color="white" size={'24px'} />
          : <PageBody />
      }
    </>
  );
};

export default Signup;
