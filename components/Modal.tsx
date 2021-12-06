import { ReactChild, useRef, MouseEvent, useContext } from 'react';
import { handleCloseCreateDevitForm } from '../actions/ui';
import { AppContext } from '../context/AppContext';
import { breakpoints } from '../styles/breakpoints';

interface IProps {
  children: ReactChild
  isModalOpen: boolean
  align?: string
  justify?: string
  isMobile?: boolean
  handleOpenModal?: (value: boolean) => void | string
}

export const Modal = ({
  children,
  isModalOpen,
  align,
  justify='center',
  isMobile=false,
  handleOpenModal,
}: IProps) => {

  const modalRef = useRef(null);
  const { uiDispatch } = useContext(AppContext);

  const handleModalOpen = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target && handleOpenModal) {
      handleOpenModal(false);
    }
  };

  return (
    <>
      <div 
        ref={modalRef} 
        onClick={
          handleOpenModal !== undefined 
            ? (e) => handleModalOpen(e)
            : (e) => handleCloseCreateDevitForm(uiDispatch)
        }
      >
        {children}
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: ${justify};
          align-items: ${align};
          position: fixed;
          height: 100vh;
          width: ${isModalOpen ? '100%' : '0px'};
          overflow: hidden;
          z-index: 9;
          top: 0;
          left: 0;
          background: rgba(91, 112, 131, 0.2);
        }
        
        @media (min-width: ${breakpoints.desktop}) {
          div {
            display: ${isMobile ? 'none' : 'flex'}
          }
        }
      `}</style>
    </>
  );
};
