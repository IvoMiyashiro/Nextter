import { FaFeatherAlt } from 'react-icons/fa';
import { colors } from '../../styles/theme';

interface IProps {
  handleOpenModal: (value: boolean) => void
}

export const DevitButton = ({handleOpenModal}: IProps) => {
  return (
    <>      
      <button onClick={() => handleOpenModal(true)}>
        <FaFeatherAlt size={24}/>
      </button>
      <style jsx>{`
        button {
          position: fixed;
          bottom: 74px;
          right: 22px;
          height: 56px;
          width: 56px;
          border-radius: 50%;
          background: ${colors.primary};
          border: none;
          color: ${colors.background};
        }
      `}</style>
    </>
  );
};
