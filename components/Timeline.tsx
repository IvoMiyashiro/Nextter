import { useState } from 'react';
import { useFetchDevits } from '../hooks/useFetchDevits';

import { Devit } from './Devit';
import { CreateDevitHome } from './Forms/CreateDevitHome';
import { TopBar } from './TopBar';
import { PrimaryButton } from './Buttons/PrimaryButton';

import { colors } from '../styles/theme';
import { Spinner } from './Spinner';
import { breakpoints } from '../styles/breakpoints';

export const Timeline = () => {

  const [isLoading, setLoading] = useState(true);
  const {devitState} = useFetchDevits(setLoading);

  return (
    <>
      <main>
        <TopBar />
        <section>
          <CreateDevitHome />
          { 
            isLoading
              ? (
                <span>
                  <Spinner size="24px" color="white" />
                </span>
              )
              : devitState.length !== 0
                ? (
                  devitState.map(devit => {
                    return <Devit key={devit.id} devit={devit}/>;
                  })
                )
                : (
                  <div>
                    <h1>Welcome to Develotter!</h1>
                    <p>This is the best place to see what’s happening in your world. Find some people and topics to follow now.</p>
                    <footer>
                      <PrimaryButton
                        buttonColor={colors.primary}
                        textColor={colors.background}
                        type="link"
                        href="/home"
                      >
                      Let&apos;s go!
                      </PrimaryButton>
                    </footer>
                  </div>
                )
          }
        </section>
      </main>

      <style jsx>{`
        main {
          border-right: 1px solid ${colors.gray};
          border-left: 1px solid ${colors.gray};
        }

        span {
          width: 250px;
          height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }

        div {
          padding: 0 2em;
          margin: 2em auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        h1 {
          color: ${colors.title};
          font-size: 1.75rem;
          font-weight: 800;
        }

        p {
          margin-top: 0.75em;
          color: ${colors.text};
          font-size: 0.9rem;
          font-weight: 200;
        }

        footer {
          width: 135px;
          height: 52px;
          margin-top: 1.75em;
        }

        @media (min-width: ${breakpoints.tablet}) {
          span {
            width: 350px;
            height: 350px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
          }

          div {
            display: block;
            text-align: left;
            width: 375px;
            margin: 2em auto;
            padding: 0;
          }
        }
      `}</style>
    </>
  );
};
