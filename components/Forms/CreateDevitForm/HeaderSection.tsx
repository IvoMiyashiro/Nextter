import { Spinner } from '../../Spinner';
import { PrimaryButton } from '../../Buttons/PrimaryButton';

import { colors } from '../../../styles/theme';
import styles from './styles';
import TimesIcon from '../../Icons/Times';

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
        <button onClick={() => handleOpenModal(false)}>
          <TimesIcon width="24px" height="24px" fill="currentColor" color={colors.title} />
        </button>
        <div className="submit-button-container">
          <PrimaryButton isDisabled={isSubmitButtonDisabled}>
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
