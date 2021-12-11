import { ChangeEvent } from 'react';

import styles from './styles';

interface IProps {
  value: string
  handleInputValue: any
  inputError: string
  handleInputErrorValue: (value: string | ((value: string) => string)) => void
}

export const BioInputControl = ({
  value,
  handleInputValue,
  inputError,
  handleInputErrorValue,
}: IProps) => {

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputValue((prev: any) => ({
      ...prev,
      bio: e.target.value
    }));
    handleInputError();
  };

  const handleInputError = async() => {
    if (value.length > 160) {
      return handleInputErrorValue('Bio length must be lower than 160 characters.');
    }

    return handleInputErrorValue('');
  };

  return (
    <>
      <div>
        <input 
          name="username"
          type="text"
          onChange={handleInputChange}
          value={value}
          className={`${!!inputError ? 'input-error' : ''}`}
        />
        <label 
          htmlFor="name"
          className={`
          ${!!value ? 'active-input ' : ''} 
          ${!!inputError ? 'label-error' : ''}`
          }
        >
          Bio
        </label>
        {
          !!inputError
          &&
          <small>{inputError}</small>
        }
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
