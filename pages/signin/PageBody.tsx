import { useState } from 'react';
import Link from 'next/link';

import { SigninForm } from '../../components/Forms/SigninForm';
import { Toast } from '../../components/Toast';

import Logo from '../../components/Icons/Logo';
import TimesIcon from '../../components/Icons/Times';
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
                <TimesIcon
                  heith="24px"
                  width="24px"
                  fill="currentColor"
                  color={colors.text}
                />
              </a>
            </Link>
            <Link href="/" passHref>
              <Logo
                heith="52px"
                width="52px"
                fill="currentColor"
                color={colors.primary}
              />
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
