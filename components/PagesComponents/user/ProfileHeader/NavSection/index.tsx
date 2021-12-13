import Link from 'next/link';
import {useRouter} from 'next/router';
import { IUser } from '../../../../../interfaces';

import styles from './styles';

interface IProps {
  user: IUser
}

export const NavSection = ({user}: IProps) => {

  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <nav>
        <ul>
          <li onClick={() => router.push(`/${user.username}`)}>
            <Link href={`/${user.username}`}>
              <a className={
                path === '/[user]'
                  ? 'active-path'
                  : ''
              }>
                  Devits
              </a>
            </Link>
          </li>
          <li onClick={() => router.push(`/${user.username}/revits`)}>
            <Link href={`/${user.username}/revits`}>
              <a className={
                path === '/[user]/revits'
                  ? 'active-path'
                  : ''
              }>
                  Revits
              </a>
            </Link>
          </li>
          <li onClick={() => router.push(`/${user.username}/likes`)}>
            <Link href={`/${user.username}/likes`}>
              <a className={
                path === '/[user]/likes'
                  ? 'active-path'
                  : ''
              }>
                  Likes
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>{styles}</style>
    </>
  );
};
