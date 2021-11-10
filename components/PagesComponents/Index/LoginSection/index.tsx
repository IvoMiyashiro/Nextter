import { FC, SetStateAction } from 'react';

import { BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

import styles from './styles';

export const LoginSection: FC = ({ setSigninModalOpen }) => {

  const openSigninModal = (): void => {
    setSigninModalOpen((prev: boolean) => !prev);
  };

  return (
    <>
      <div>
        <h3>Join Nextter today.</h3>
        <section>
          <button>
            <picture>
              <BsGithub size={26} />
            </picture>
              Sign up with Github
          </button>
          <button onClick={openSigninModal}>
            <picture>
              <HiOutlineMail size={26} />
            </picture>
              Sign up with Email
          </button>
        </section>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};
