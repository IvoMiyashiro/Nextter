import Link from 'next/link';
import { breakpoints } from '../../styles/breakpoints';

import { colors } from '../../styles/theme';

export const AsideRightFooter = () => {
  return (
    <>
      <footer>
        <Link href="/explore" passHref>
          <p>Show More</p> 
        </Link>
      </footer>

      <style jsx>{`
        p {
          color: ${colors.primary};
          padding: 1em;
          cursor: pointer;
          transition: 0.2s ease;
        }

        p:hover {
          background-color: ${colors.rgbaTitle};
          transition: 0.2s ease;
        }
      `}</style>
    </>
  );
};
