import { useState } from 'react';

import { PrimaryButton } from '../../../../Buttons/PrimaryButton';
import { Header } from '../../Header';
import { UsernameInput } from './UsernameInput';

import { colors } from '../../../../../styles/theme';
import styles from './styles';

export const UsernameStep = ({
  handleStep,
  handleFormValues,
  username,
}: any) => {

  const [inputError, setInputError] = useState('');

  return (
    <>
      <div className="usernameStep">
        <Header 
          title={'Write your username.'}
          content={'Choose a username for your followers to identify you.'}
        />
        <section>
          <UsernameInput 
            value={username}
            handleInputValue={handleFormValues}
            inputError={inputError}
            handleInputErrorValue={setInputError}
          />
        </section>
        <footer>
          <PrimaryButton
            textColor={colors.background}
            buttonColor={colors.title}
            isDisabled={!!inputError}
            buttonType="button"
            onClick={() => handleStep((prev: number) => (prev + 1))}
          >
            <b>Next</b>
          </PrimaryButton>
        </footer>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
