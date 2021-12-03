import Image from 'next/image';
import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import { colors } from '../../../styles/theme';
import DotsIcon from '../../Icons/Dots';

import styles from './styles';

export const AsideLeftFooter = () => {

  const {userState} = useContext(AppContext);

  return (
    <>
      <footer>
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
      </footer>

      <style jsx>{styles}</style>
    </>
  );
};
