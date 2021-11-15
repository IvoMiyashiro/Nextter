import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from './styles';

import { SignupForm } from '../../components/Forms/SignupForm';

import { FaTimes } from 'react-icons/fa';
import { colors } from '../../styles/theme';
import { useState } from 'react';
import { Message } from '../../components/Message';

const Signup: NextPage = () => {

  const FORM_ERROR_INIT_STATE = {
    error: false,
    msg: 'Email is already taken.'
  };

  const [formError, setFormError] = useState(FORM_ERROR_INIT_STATE);

  return (
    <>
      <Head>
        <title>Sign up for Nextter / Nextter</title>
      </Head>

      <div>
        <Message 
          msg={formError.msg} 
          error={false} 
        />
        {/* {
          formError.error && <FormError msg={formError.msg} />
        } */}
        <section>
          <header>
            <Link href="/">
              <a>
                <FaTimes size="24px" color={colors.title} />
              </a>
            </Link>
          </header>
          <SignupForm 
            setValue={setFormError}
          />
        </section>
      </div>
      
      <style jsx>{styles}</style>
    </>
  );
};

export default Signup;
