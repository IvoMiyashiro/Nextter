import type { NextPage } from 'next';
import Head from 'next/head';
import { HiCode } from 'react-icons/hi';

import { ButtonsSection } from '../components/PagesComponents/Index/ButtonsSection';
import { FooterSection } from '../components/PagesComponents/Index/FooterSection';

import { colors } from '../styles/theme';
import styles from './styles';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Nextter | The Twitter Clone</title>
      </Head>
        
      <div>
        <header>
          <HiCode size={56} color={colors.primary} />
          <h1>Happening now</h1>
        </header>
        <ButtonsSection />
        <FooterSection />
      </div>

      <style jsx>{styles}</style>
    </>
  );
};

export default Home;
