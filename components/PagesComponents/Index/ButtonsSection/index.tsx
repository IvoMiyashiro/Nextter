import Link from 'next/link';

import GithubIcon from '../../../Icons/Github';
import MessagesIcon from '../../../Icons/Messages';
import { colors } from '../../../../styles/theme';
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
              <GithubIcon 
                width="26px"
                height="26px"
                color={colors.primary}
              />
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
                <MessagesIcon 
                  width="26px"
                  height="26px"
                  fill="currentColor"
                  color={colors.primary}
                />
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
