import { IDevit } from '../interfaces';
import { ContentSection } from './Devit/ContentSection';
import { ProfileImage } from './Devit/ProfileImage';

import { colors } from '../styles/theme';
import { useGetUser } from '../hooks/useGetUser';

interface IProps {
  devit: IDevit
}

export const DevitCard = ({ devit }: IProps) => {

  const {
    id,
    uid,
    content,
    img,
    comments,
    favs,
    revits,
    createdAt,
    updatedAt
  } = devit;

  const { user } = useGetUser(uid);

  return (
    <>
      <div>
        <section className="profile-img-container">
          <ProfileImage
            profileImage={user.profilePicture} 
            alt={user.name}
          />
          {
            comments.length !== 0
            &&
            <section className="line"></section>
          }
        </section>
        <section className="profile-img-container">
          <ContentSection
            id={id}
            user={user}
            content={content}
            favs={favs}
            revits={revits}
            comments={comments}
            createdAt={createdAt}
            updatedAt={updatedAt}
            img={img}
          />
        </section>
      </div>

      <style jsx>{`
        div {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: .75em;
          width: 100%;
          padding: 1em;
          background: ${colors.background};
          border-bottom: 1px solid ${comments.length === 0 ? colors.gray : 'transparent'};
          transition: background .2s ease-in-out;
          cursor: pointer;
        }

        div:hover {
          transition: background .2s ease-in-out;
          background: rgba(17, 34, 64, 0.4)
        }

        .profile-img-container {
          display: flex;
          flex-direction: column;
          gap: 0.5em;
          height: 100%;
          align-items: center;
        }

        .line {
          width: 2px;
          background-color: rgb(61, 84, 102);
          height: 100%;
          padding: 0;
        }
      `}
      </style>
    </>
  );
};
