import { ReactChild, useRef, MouseEvent } from 'react';

interface IProps {
  children?: ReactChild
  handleOpenModal: (value: boolean) => void,
  align: string
}

export const Modal = ({children, handleOpenModal, align}: IProps) => {

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
          align-items: ${align};
          position: fixed;
          height: 100vh;
          width: 100%;
          z-index: 9;
          top: 0;
          left: 0;
          background: rgba(91, 112, 131, 0.4);
        }
      `}</style>
    </>
  );
};
