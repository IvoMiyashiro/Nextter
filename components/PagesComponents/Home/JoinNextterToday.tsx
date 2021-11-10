import { FC } from 'react';

import { colors, fonts } from '../../../styles/theme';

import { BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

export const JoinNextterToday: FC = () => {
  return (
    <>
      <h3>Join Nextter today.</h3>
      <section>
        <button>
          <picture>
            <BsGithub size={26} />
          </picture>
              Sign up with Github
        </button>
        <button>
          <picture>
            <HiOutlineMail size={26} />
          </picture>
              Sign up with Email
        </button>
      </section>

      <style jsx>{`
        h3 {
          color: ${colors.title};
          font-size: 1.5rem;
        }

        section {
          display: flex;
          flex-direction: column;
          margin-top: 2em;
          gap: 1em;
        }

        button {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1em;
          border-radius: 99px;
          height: 45px;
          font-size: 1.05rem;
          background: transparent;
          color: ${colors.primary};
          border: 2px solid ${colors.primary};
          font-family: ${fonts.base}
        }

        picture {
          position: absolute;
          left: 10px;
          top: 8px;
        }

      `}
      </style>
    </>
  );
};
