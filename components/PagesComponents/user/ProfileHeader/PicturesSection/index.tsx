import Image from 'next/image';
import { IUser } from '../../../../../interfaces';

import styles from './styles';

interface IProps {
  user: IUser
}

export const PicturesSection = ({user}: IProps) => {
  return (
    <>
      <section>
        <div className="cover-picture-container">
          <Image
            src={user.coverPicture}
            alt="cover-picture"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="profile-picture-container">
          <div className="profile-picture">
            <Image
              src={user.profilePicture}
              alt={user.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      <style jsx>{styles}</style>
    </>
  );
};
