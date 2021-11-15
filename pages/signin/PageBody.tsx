import { useState } from 'react';
import Link from 'next/link';

import { SigninForm } from '../../components/Forms/SigninForm';
import { Toast } from '../../components/Toast';

import { FaTimes } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';
import { colors } from '../../styles/theme';
import styles from '../signup/styles';

export const PageBody = () => {

  const FORM_ERROR_INIT_STATE = {
    isOpen: false,
    error: false,
    msg: ''
  };
  const [formError, setFormError] = useState(FORM_ERROR_INIT_STATE);

  return(
    <>
      <div>
        {
          formError.isOpen
      &&
      <Toast
        setValue={setFormError}
        msg={formError.msg} 
        isOpen={formError.isOpen}
        error={true} 
      />
        }
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
          <SigninForm
            setValue={setFormError}
          />
        </section>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
