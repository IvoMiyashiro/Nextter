import Link from 'next/link';

import { BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

import styles from './styles';

export const ButtonsSection = () => {

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
          <Link href="/login" passHref>
            <button>
              <picture>
                <HiOutlineMail size={26} />
              </picture>
              Sign up with Email
            </button>
          </Link>
        </section>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};
