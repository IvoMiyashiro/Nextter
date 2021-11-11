import { Dispatch, ReactChild, SetStateAction, useRef } from 'react';

interface IModal {
  children: ReactChild,
  setSigninModalOpen: Dispatch<SetStateAction<boolean>>
}

export const Modal = ({ children, setSigninModalOpen }: IModal) => {

  const modalRef = useRef(null);

  const handleModalOpen = () => {
    setSigninModalOpen(false);
  };

  return (
    <>
      <div ref={modalRef} onClick={handleModalOpen}>
        {children}
      </div>

      <style jsx>{`
        div {
          background: rgba(0, 0, 0, 0.3);
          height: 100vh;
          left: 0;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 10;
        }
      `}
      </style>
    </>
  );
};
