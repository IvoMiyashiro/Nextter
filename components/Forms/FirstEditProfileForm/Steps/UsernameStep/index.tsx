import { useContext, useState } from 'react';
import { AppContext } from '../../../../../context/AppContext';
import { colors } from '../../../../../styles/theme';
import { PrimaryButton } from '../../../../Buttons/PrimaryButton';
import { InputControl } from '../../../../InputControl';

import { Footer } from '../../Footer';
import { Header } from '../../Header';

import styles from './styles';
import { UsernameInput } from './UsernameInput';

export const UsernameStep = ({
  handleStep,
  handleFormValues,
  username,
}: any) => {

  const [stepCompleated, setStepCompleated] = useState(false);
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
          >
            <b>Next</b>
          </PrimaryButton>
        </footer>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
