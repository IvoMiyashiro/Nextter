import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';

import { handleCloseCreateDevitForm } from '../../../actions/ui';

import { Spinner } from '../../Spinner';
import { PrimaryButton } from '../../Buttons/PrimaryButton';
import { HoverableButton } from '../../Buttons/HoverableButton';

import TimesIcon from '../../Icons/Times';
import { colors } from '../../../styles/theme';
import styles from './styles';


interface IProps {
  handleOpenModal?: (value: boolean) => void,
  isSubmitButtonDisabled: boolean,
  isLoading: boolean
  buttonChild: string
}

export const HeaderSection = ({
  handleOpenModal,
  isSubmitButtonDisabled,
  isLoading,
  buttonChild
}: IProps) => {

  const { uiDispatch } = useContext(AppContext);

  return (
    <>
      <header>
        <HoverableButton
          icon={TimesIcon}
          width="22px"
          height="22px"
          color={colors.text}
          defaultColor={colors.text}
          backgroundColor={colors.rgbaTitle}
          onClick={
            handleOpenModal !== undefined 
              ? () => handleOpenModal(false)
              : () => handleCloseCreateDevitForm(uiDispatch)
          }
        />
        <div className="submit-button-container">
          <PrimaryButton 
            isDisabled={isSubmitButtonDisabled}
            textColor={colors.background}
            buttonColor={colors.primary}
          >
            {
              isLoading
                ? <Spinner color={colors.background} size={'16px'} />
                : buttonChild
            }
          </PrimaryButton>
        </div>
      </header>

      <style jsx>{styles}</style>
    </>
  );
};
