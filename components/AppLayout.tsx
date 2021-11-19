import type { NextPage } from 'next';
import {fonts, colors} from '../styles/theme';

export const AppLayout: NextPage = ({ children }) => {
  return(
    <>
      <main>
        {children}
      </main>
      <style jsx global>{`
         html,
         body {
            background: ${colors.background};
            font-family: ${fonts.base};
            margin: 0;
            padding: 0;
         }

         * {
            box-sizing: border-box;
         }

         h1,
         h2,
         h3,
         h5,
         p {
            margin: 0;
         }

         a {
          text-decoration: none;
          color: white;
        }

        button {
          cursor: pointer;
          border: none;
        }
         `}
      </style>
    </>
  );
};
