import type { NextPage } from 'next';
import Link from 'next/link';
import styles from './styles';

import { SignupForm } from '../../components/Forms/SignupForm';

import { FaTimes } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';
import { colors } from '../../styles/theme';

const Login: NextPage = () => {
  return (
    <>
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

export default Login;
