
import { useGetUser } from '../../hooks/useGetUser';
import { IDevit, IUser } from '../../interfaces';
import { colors } from '../../styles/theme';
import { ContentSection } from './ContentSection';
import { ProfileImage } from './PofileImage';

interface IProps {
  devit: IDevit
}

interface User {
  user: IUser
}

export const Devit = ({ devit }: IProps) => {

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

  const { user }: User = useGetUser(uid);
  
  return (
    <>
      <div>
        <ProfileImage
          profileImage={user.profilePicture} 
          alt={user.name}
        />
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
      </div>
      <style jsx>{`
        div {
          display: flex;
          gap: .75em;
          width: 100%;
          padding: 1em;
          border-bottom: 1px solid ${colors.gray};
          background: ${colors.background};
          transition: background .2s ease-in-out;
          cursor: pointer;
        }

        div:hover {
          transition: background .2s ease-in-out;
          background: rgba(17, 34, 64, 0.4)
        }
      `}</style>
    </>
  );
};
