import Link from 'next/link';
import { useRouter } from 'next/router';

import { IUser } from '../../../../interfaces';
import { PicturesSection } from './PicturesSection';
import { UserInfoSection } from './UserInfoSection';

import styles from './styles';

export interface IProps {
  user: IUser
}

export const ProfileHeader = ({user}: IProps) => {

  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <div className="container">
        <PicturesSection user={user} />
        <UserInfoSection user={user} />
        <nav>
          <ul>
            <li>
              <Link href={`/${user.username}`}>
                <a className={
                  path === '/[user]'
                    ? 'active-path'
                    : ''
                }>
                  Devit
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/${user.username}/revits`}>
                <a className={
                  path === '/[user]'
                    ? 'active-path'
                    : ''
                }>
                  Redevits
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/${user.username}/likes`}>
                <a className={
                  path === '/[user]'
                    ? 'active-path'
                    : ''
                }>
                  Likes
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
