import { IProps } from '../../../../pages/[user]';
import { UserTopbar } from '../../../TopBar/UserTopbar';
import { ProfileHeader } from '../ProfileHeader';

import styles from './styles';

export const MainSection = ({ devits, user }: IProps) => {
  return (
    <>
      <div>
        <UserTopbar />
        <ProfileHeader user={user} devits={devits} />
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
