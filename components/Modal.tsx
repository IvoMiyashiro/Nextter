import { ReactChild, useRef, MouseEvent } from 'react';
import { breakpoints } from '../styles/breakpoints';

interface IProps {
  children: ReactChild
  isModalOpen: boolean
  align?: string
  justify?: string
  isResponsive?: boolean
  handleOpenModal: (value: boolean) => void,
}

export const Modal = ({
  children,
  isModalOpen,
  align,
  justify='center',
  isResponsive=false,
  handleOpenModal,
}: IProps) => {

  const modalRef = useRef(null);

  const handleModalOpen = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      handleOpenModal(false);
    }
  };

  return (
    <>
      <div ref={modalRef} onClick={(e) => handleModalOpen(e)}>
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
          background: rgba(91, 112, 131, 0.4);
        }
        
        @media (min-width: ${breakpoints.desktop}) {
          div {
            display: ${isResponsive ? 'none' : 'flex'}
          }
        }
      `}</style>
    </>
  );
};
