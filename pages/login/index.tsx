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
        <header>
          <Link href="/">
            <a>
              <FaTimes size="24px" color={colors.title} />
            </a>
          </Link>
          <picture>
            <Link href="/" passHref>
              <HiCode size={48} color={colors.primary} />
            </Link>
          </picture>
        </header>
        <SignupForm />
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default Login;
