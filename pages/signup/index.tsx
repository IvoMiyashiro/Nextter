import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from './styles';

import { SignupForm } from '../../components/Forms/SignupForm';

import { FaTimes } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';
import { colors } from '../../styles/theme';

const Signup: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign up for Nextter / Nextter</title>
      </Head>

      <div>
        <section>
          <header>
            <Link href="/">
              <a>
                <FaTimes size="24px" color={colors.title} />
              </a>
            </Link>
            <Link href="/" passHref>
              <picture>
                <HiCode size={48} color={colors.primary} />
              </picture>
            </Link>
          </header>
          <SignupForm />
        </section>
      </div>
      
      <style jsx>{styles}</style>
    </>
  );
};

export default Signup;
