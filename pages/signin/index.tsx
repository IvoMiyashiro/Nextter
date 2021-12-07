import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Head from 'next/head';

import { PageBody } from './PageBody';
import { LoadingPage } from '../../components/LoadingPage';
import { useIsLoggedin } from '../../hooks/useIsLoggedin';

const Sigin: NextPage = () => {

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
        <title>Nextter. It&lsquo;s what&lsquo;s happening / Nextter</title>
      </Head>
      {
        isCheckingAuth
          ? <LoadingPage />
          : <PageBody />
      }
    </>
  );
};

export default Sigin;
