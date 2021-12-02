import { useState } from 'react';
import Link from 'next/link';

import { SignupForm } from '../../components/Forms/SignupForm';
import { Toast } from '../../components/Toast';

import { colors } from '../../styles/theme';
import styles from '../signup/styles';
import TimesIcon from '../../components/Icons/Times';

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
