import { useContext, useState } from 'react';
import Image from 'next/image';

import { AppContext } from '../../../context/AppContext';
import { LogoutMenu } from './LogoutMenu';
import { Modal } from '../../Modal';

import DotsIcon from '../../Icons/Dots';
import { colors } from '../../../styles/theme';
import styles from './styles';

export const AsideLeftFooter = () => {

  const {userState} = useContext(AppContext);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <footer onClick={() => setMenuOpen((prev: boolean) => !prev)}>
        <div className="image-container">
          <Image 
            src={!!userState.profilePicture ? userState.profilePicture : '/defaultProfileImg.png'}
            alt={userState.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="user-container">
          <h3>{userState.name}</h3>
          <p>@{userState.username}</p>
        </div>
        <div className="dots-container">
          <DotsIcon
            width="18px"
            color={colors.title}
            fill="currentColor"
          />
        </div>
        {
          isMenuOpen
          &&
          <Modal
            isVisible={false}
            isMobile={false}
            isModalOpen={isMenuOpen}
          >
            <p></p>
          </Modal>
        }
        {
          isMenuOpen
          &&
          <LogoutMenu username={userState.username} />
        }
      </footer>

      <style jsx>{styles}</style>
    </>
  );
};
