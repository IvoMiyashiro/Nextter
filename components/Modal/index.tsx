import { FC, useRef } from "react";

export const Modal: FC = ({ children, setModalOpen }) => {

  const modalRef = useRef(null);

  const handleModalOpen = () => {
    setModalOpen(false);
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
