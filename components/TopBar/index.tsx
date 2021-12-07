import Image from 'next/image';

import StarsIcon from '../Icons/Stars';
import { colors } from '../../styles/theme';
import style from './styles';
import { useState } from 'react';
import { MobileAsideMenu } from '../MobileAsideMenu';
import { Modal } from '../Modal';

export const TopBar = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header>
        <section>
          <button onClick={() => setSidebarOpen(true)}>
            <Image
              src="/yo.jpg"
              alt="profile"
              layout="fill"
            />
          </button>
          <h2>Home</h2>
        </section>
        <section>
          <StarsIcon 
            height="24px"
            width="24px"
            stroke="currentColor"
            stroke-width="0"
            color={colors.title}
            fill={colors.title}
          />
        </section>
        <Modal
          handleOpenModal={setSidebarOpen}
          isModalOpen={isSidebarOpen}
          isMobile={true}
        >
          <MobileAsideMenu
            handleSidebarOpen={setSidebarOpen}
            isVisible={isSidebarOpen}
          />  
        </Modal>
        
      </header>
      <style jsx>{style}</style>
    </>
  );
};
