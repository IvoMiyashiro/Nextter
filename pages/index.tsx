import type { NextPage } from 'next';
import Head from 'next/head';

import { MainSection } from '../components/PagesComponents/Index/MainSection';

import styles from './styles';
import { VideoSection } from '../components/PagesComponents/Index/VideoSection';

const Home: NextPage = () => {
  console.log(process.env.DB_CNN);
  return (
    <>
      <Head>
        <title>Nextter. It&lsquo;s what&lsquo;s happening / Nextter</title>
      </Head>

      <div>
        <VideoSection />
        <MainSection />
      </div>

      <style jsx>{styles}</style>
    </>
  );
};

export default Home;
