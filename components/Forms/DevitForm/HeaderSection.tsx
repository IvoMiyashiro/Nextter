import { FaTimes } from 'react-icons/fa';
import { colors } from '../../../styles/theme';
import { PrimaryButton } from '../../Buttons/PrimaryButton';
import { Spinner } from '../../Spinner';
import styles from './styles';

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
          <FaTimes size={24}/>
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
