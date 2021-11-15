import { useState } from 'react';
import Link from 'next/link';

import { SignupForm } from '../../components/Forms/SignupForm';
import { Toast } from '../../components/Toast';

import { FaTimes } from 'react-icons/fa';
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
