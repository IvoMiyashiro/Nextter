import { Spinner } from '../../Spinner';
import { PrimaryButton } from '../../Buttons/PrimaryButton';

import { colors } from '../../../styles/theme';
import styles from './styles';
import TimesIcon from '../../Icons/Times';
import { HoverableButton } from '../../Buttons/HoverableButton';

interface IProps {
  handleOpenModal: (value: boolean) => void,
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
          onClick={() => handleOpenModal(false)}
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
