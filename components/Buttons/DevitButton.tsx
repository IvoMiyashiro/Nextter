import DevitIcon from '../Icons/Devit';
import { colors } from '../../styles/theme';
import { handleOpenCreateDevitForm } from '../../actions/ui';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export const DevitButton = () => {

  const { uiDispatch } = useContext(AppContext);

  return (
    <>      
      <button onClick={() => handleOpenCreateDevitForm(uiDispatch)}>
        <DevitIcon 
          height="24px"
          width="24px"
          color={colors.background}
          fill={colors.background}
        />
      </button>
      <style jsx>{`
        button {
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
