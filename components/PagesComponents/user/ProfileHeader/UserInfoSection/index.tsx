import { PrimaryButton } from '../../../../Buttons/PrimaryButton';
import CalendarIcon from '../../../../Icons/Calendar';

import { colors } from '../../../../../styles/theme';
import styles from './styles';
import { IUser } from '../../../../../interfaces';

interface IProps {
  user: IUser
}

export const UserInfoSection = ({user}: IProps) => {

  const options: any = { year: 'numeric', month: 'long' };
  const createdAt = new Date(user.createdAt).toLocaleDateString('en-US', options);

  return (
    <>
      <section>
        <div className="button-container">
          <PrimaryButton
            style="outline"
            textColor={colors.title}
            buttonColor={colors.text}
          >
            <span>Edit profile</span>
          </PrimaryButton>
        </div>
        <div className="user-info-container">
          <h1>{user.name}</h1>
          <p>@{user.username}</p>
        </div>
        <div className="user-bio">
          <h4>{user.bio}</h4>
        </div>
        <div className="user-joined-container">
          <CalendarIcon
            color={colors.text}
            fill="currentColor"
            width="18px"
            height="18px"
          />
          <p>Joined {createdAt}</p>
        </div>
        <div className="follow-counter">
          <div className="following-counter">
            <h3>{user.followins.length}</h3>
            <p>Following</p>
          </div>
          <div className="followers-counter">
            <h3>{user.followins.length}</h3>
            <p>Followers</p>
          </div>
        </div>
      </section>

      <style jsx>{styles}</style>
    </>
  );
};
