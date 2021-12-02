import DevitIcon from '../Icons/Devit';
import { colors } from '../../styles/theme';

interface IProps {
  handleOpenModal: (value: boolean) => void
}

export const DevitButton = ({handleOpenModal}: IProps) => {
  return (
    <>      
      <button onClick={() => handleOpenModal(true)}>
        <DevitIcon 
          height="24px"
          width="24px"
          color={colors.background}
          fill={colors.background}
        />
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
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
};
