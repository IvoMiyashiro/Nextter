import { colors } from '../../../../styles/theme';
import { PrimaryButton } from '../../../Buttons/PrimaryButton';
import { NextButton } from '../NextButton';

interface IProps {
  stepCompleted: boolean
  handleStep: (value: number | ((prev: number) => number)) => void
}

export const Footer = ({stepCompleted, handleStep}: IProps) => {
  return (
    <>
      <footer>
        {
          stepCompleted
            ? (
              <PrimaryButton
                textColor={colors.background}
                buttonColor={colors.title}
                onClick={() => handleStep}
              >
                <b>Next</b>
              </PrimaryButton>
            )
            : <NextButton handleStep={handleStep} />
        }
      </footer>
      <style jsx>{`
        footer {
          margin-top: auto;
          padding: 0 .5em;
          padding-bottom: 2.25em;
          height: 80px;
        }
      `}</style>
    </>
  );
};
