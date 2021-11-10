import { FC } from "react";
import Link from 'next/link';

import styles from './styles';

export const FooterSection: FC = () => {
  return (
    <>
      <footer>
        <section>
          <p>
            By signing up, you agree to the 
            <span> Terms of Service </span>
            and 
            <span> Privacy Policy</span>
            , including
            <span> Cookie Use.</span>
          </p>
        </section>
        <section>
          <p>
            Already have an account?
          </p>
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </section>
      </footer>
      <style jsx>{styles}</style>
    </>
  );
};
