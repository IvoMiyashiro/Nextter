import { colors } from '../../../../../styles/theme';
import { PrimaryButton } from '../../../../Buttons/PrimaryButton';
import Logo from '../../../../Icons/Logo';
import styles from './styles';

export const FinalStep = () => {
  return (
    <>
      <div>
        <Logo 
          width="68px"
          color={colors.title}
        />
        <h1>Your profile is updated</h1>
        <section>
          <PrimaryButton
            textColor={colors.background}
            buttonColor={colors.title}
          >
            Confirm
          </PrimaryButton>
        </section>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
