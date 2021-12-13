import { IUser } from '../interfaces';
import { colors } from '../styles/theme';
import { NavSection } from './PagesComponents/user/ProfileHeader/NavSection';
import { PicturesSection } from './PagesComponents/user/ProfileHeader/PicturesSection';
import { UserInfoSection } from './PagesComponents/user/ProfileHeader/UserInfoSection';

interface IProps {
  children: React.ReactNode
  user: IUser
}

export const UserLayout = ({children, user}: IProps) => {
  return (
    <>
      <div>
        <section className="container">
          <PicturesSection user={user} />
          <UserInfoSection user={user} />
          <NavSection user={user} />
        </section>
        <section className="main-section">
          {children}
        </section>
      </div>

      <style jsx>{`
        .container {
          border-bottom: 1px solid ${colors.gray};
        }

        .main-section {
          margin-bottom: 7em;
        }
      `}</style>
    </>
  );
};
