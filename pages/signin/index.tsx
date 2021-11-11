import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { SigninForm } from '../../components/Forms/SigninForm';

import { HiCode } from 'react-icons/hi';
import { colors } from '../../styles/theme';
import { FaTimes } from 'react-icons/fa';
import styles from '../signup/styles';

const Sigin: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nextter. It&lsquo;s what&lsquo;s happening / Nextter</title>
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
          <SigninForm />
        </section>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};

export default Sigin;
