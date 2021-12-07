import { ReactNode } from 'react';
import { breakpoints } from '../styles/breakpoints';

interface IProps {
  children: ReactNode
}

export const DevelotterLayout = ({children}: IProps) => {
  return (
    <>
      <div className="home-layout">
        {children}
      </div>

      <style jsx>{`
        .home-layout {
          display: block;
          justify-content: center;
          margin: 0 auto;
        }

        @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.wideTablet}) {
          .home-layout {
            display: grid;
            grid-template-columns: 88px minmax(auto, 600px);
          }
        }

        @media (min-width: ${breakpoints.wideTablet}) and (max-width: ${breakpoints.desktop}) {
          .home-layout {
            display: grid;
            max-width: 1240px;
            grid-template-columns: 88px 600px minmax(290px, 375px);
          }
        }

        @media (min-width: ${breakpoints.desktop}) {
          .home-layout {
            display: grid;
            max-width: 1240px;
            grid-template-columns: 260px 600px minmax(290px, 375px);
          }
        }
      `}</style>
    </>
  );
};
