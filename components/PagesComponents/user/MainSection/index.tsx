import { IProps } from '../../../../pages/[user]';
import { UserTopbar } from '../../../TopBar/UserTopbar';
import { ProfileHeader } from '../ProfileHeader';

import styles from './styles';

export const MainSection = ({ devits, user }: IProps) => {
  return (
    <>
      <div>
        <UserTopbar devitsLength={devits.length} />
        <ProfileHeader user={user}/>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
