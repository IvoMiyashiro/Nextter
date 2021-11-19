import { ReactChild, useRef, MouseEvent } from 'react';

interface IProps {
  children?: ReactChild
  handleOpenModal: (value: boolean) => void,
}

export const ResponsiveModal = ({children, handleOpenModal}: IProps) => {

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
          justify-content: center;
          position: fixed;
          height: 100vh;
          width: 100%;
          z-index: 9;
          top: 0;
          background: rgba(0, 0, 0, 0.2)
        }
      `}</style>
    </>
  );
};
