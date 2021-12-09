import { useEffect, useState } from 'react';

import { PrimaryButton } from '../../../../Buttons/PrimaryButton';
import { Header } from '../../Header';
import { BioInputControl } from './BioInputControl';

import { colors } from '../../../../../styles/theme';
import styles from '../UsernameStep/styles';
import { Footer } from '../../Footer';

interface IProps {
  handleStep: (value: number | ((value: number) => number)) => void
  handleFormValues: any
  bioValue: string
}

export const BioStep = ({
  handleStep,
  handleFormValues,
  bioValue
}: IProps) => {

  const [inputError, setInputError] = useState('');
  const [stepComplete, setStepComplete] = useState(false);

  useEffect(() => {
    if (bioValue.length === 0) {
      setStepComplete(false);
    } else if (bioValue.length < 160) {
      setStepComplete(true);
    }
  }, [bioValue]);

  return (
    <>
      <div className="bioStep">
        <Header 
          title="Describe yourself"
          content="What makes you special? Don't think too hard, just have fun with it."
        />
        <section>
          <BioInputControl 
            value={bioValue}
            handleInputValue={handleFormValues}
            inputError={inputError}
            handleInputErrorValue={setInputError}
          />
        </section>
        <Footer
          stepCompleted={stepComplete}
          handleStep={() => handleStep((prev: number) => (prev + 1))}
        />
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
