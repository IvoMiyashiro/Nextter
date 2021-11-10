import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { colors } from '../styles/theme';

import { BiCodeAlt } from 'react-icons/bi';
import { JoinNextterToday } from '../components/PagesComponents/Home/JoinNextterToday';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Nextter | The Twitter Clone</title>
      </Head>
        
      <div>
        <header>
          <BiCodeAlt size={56} color={colors.primary} />
          <h1>Happening now</h1>
        </header>
        <JoinNextterToday />
        <footer>
          <section>
            <p>
            By signing up, you agree to the 
              <span> Terms of Service </span>
            and 
              <span> Privacy Policy</span>
            , including <span>Cookie Use.</span>
            </p>
          </section>
          <section>
            <p className="have-account-container">
              Already have an account?
            </p>
            <Link href="/sign-in">
              <a>Sign in</a>
            </Link>
          </section>
        </footer>
      </div>

      <style jsx>{`
        div {
          margin: 0 auto;
          max-width: 1080px;
          width: 85%;
        }

        header {
          padding: 2.25em 0;
        }

        h1 {
          color: ${colors.title};
          font-size: 2.75rem;
          margin-top: .75em;
        }

        footer {
          display: flex;
          flex-direction: column;
          gap: 1em;
          margin-top: 2em;
        }

        section {
           display: flex;

           & section:last-child {
             margin-top: 1rem;
           }
        }

        p {
          color: ${colors.text};
          font-size: 0.85rem;
        }

        span {
          color: ${colors.primary};
          opacity: .7;
          font-size: 0.85rem;
        }

        .have-account-container {
          font-size: 1rem;
        }

        a {
          color: ${colors.primary};
          margin-left: .5em;
        }
      `}
      </style>
    </>
  );
};

export default Home;
