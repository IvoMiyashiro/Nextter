import Link from 'next/link';

import { boxShadow, colors } from '../../../../styles/theme';

interface IProps {
  username: string
}

export const LogoutMenu = ({ username }: IProps) => {

  return (
    <>
      <div>
        <ul>
          <li>
            <Link href="/logout" passHref>
              <a>Log out @{username}</a>
            </Link>
          </li>
        </ul>
      </div>

      <style jsx>{`
        div {
          background-color: ${colors.background};
          border-radius: 16px;
          bottom: 5em;
          left: 0;
          margin-left: auto;
          margin-right: auto;
          padding: 1em 0;
          position: absolute;
          right: 0;
          width: 300px;
          z-index: 9;
          box-shadow: ${boxShadow}

        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        li {
          padding: 0.75em;
        }

        li:hover {
          background-color: ${colors.rgbaTitle};
        }
      `}</style>
    </>
  );
};
