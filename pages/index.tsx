import type { NextPage } from 'next';
import { SetStateAction, useState } from 'react';
import Head from 'next/head';

import { BiCodeAlt } from 'react-icons/bi';
import { LoginSection } from '../components/PagesComponents/Index/LoginSection';
import { FooterSection } from '../components/PagesComponents/Index/FooterSection';
import { Modal } from '../components/Modal';
import { LoginForm } from '../components/Forms/LoginForm';

import { colors } from '../styles/theme';
import styles from './styles';

const Home: NextPage = () => {

  const [isSigninModalOpen, setSigninModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Nextter | The Twitter Clone</title>
      </Head>
        
      <div>
        <header>
          <BiCodeAlt size={56} color={colors.primary} />
          <h1>Happening now</h1>
        </header>
        <LoginSection 
          setSigninModalOpen={setSigninModalOpen}
        />
        <FooterSection />
      </div>

      <Modal>
        <LoginForm />
      </Modal>

      <style jsx>{styles}</style>
    </>
  );
};

export default Home;
