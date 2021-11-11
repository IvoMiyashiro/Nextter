import Link from 'next/link';

import { BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

import styles from './styles';

interface IProps {
  layout: boolean;
}

export const ButtonsSection = ({ layout }: IProps) => {
  
  return (
    <>
      <div>
        <h3>
          {
            layout
              ? 'Join Nextter today.'
              : 'Sign in to Nextter.'
          }
        </h3>
        <section>
          <button>
            <picture>
              <BsGithub size={26} />
            </picture>
            {
              layout
                ? 'Sign up with Github'
                : 'Sign in with Github'
            }
          </button>
          <Link 
            href={`${layout ? '/signup' : '/signin'}`} 
            passHref
          >
            <button>
              <picture>
                <HiOutlineMail size={26} />
              </picture>
              {
                layout
                  ? 'Sign up with Email'
                  : 'Sign in with Email'
              }
            </button>
          </Link>
        </section>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};
