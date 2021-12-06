import { useContext, useState } from 'react';
import Image from 'next/image';

import { AppContext } from '../../../context/AppContext';
import { LogoutMenu } from './LogoutMenu';

import DotsIcon from '../../Icons/Dots';
import { colors } from '../../../styles/theme';
import styles from './styles';

export const AsideLeftFooter = () => {

  const {userState} = useContext(AppContext);
  const [ isMenuOpen, setMenuOpen ] = useState(false);

  return (
    <>
      <footer onClick={() => setMenuOpen((prev: boolean) => !prev)}>
        <div className="image-container">
          <Image 
            src="/yo.jpg"
            alt="yo"
            layout="fill"
          />
        </div>
        <div className="user-container">
          <h3>{userState.name}</h3>
          <p>@ivomiyashiro</p>
          {/* <p>{userState.username}</p> */}
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
          <LogoutMenu username={userState.username} />
        }
      </footer>

      <style jsx>{styles}</style>
    </>
  );
};
