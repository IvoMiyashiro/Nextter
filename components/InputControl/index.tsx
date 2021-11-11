import { ChangeEvent } from 'react';
import styles from './styles';

interface IState {
  value: string; 
  error: string;
  ok: boolean;
}

interface IInput {
  type: string,
  placeholder: string,
  regEx: RegExp,
  error: string,
  value: string,
  setValue: (value: IState | ((prev: IState) => IState)) => void
}

export const InputControl = ({
  type,
  placeholder,
  regEx,
  error,
  value,
  setValue
}: IInput) => {

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>):void => {
    setValue((prev: IState) => (
      {...prev, value: e.target.value}
    ));
  };

  const handleInputError = ():void => {

    if (!regEx.test(value)) {
      if (type === 'password') {
        return setValue((prev: IState) => (
          {...prev, error: 'Password length must be greater than 8 and have at least one capital letter.', ok: false}
        ));
      }

      return setValue((prev: IState) => (
        {...prev, error: `${placeholder} not valid.`, ok: false}
      ));
    } else {
      return setValue((prev: IState) => (
        {...prev, error: '', ok: true}
      ));
    }
  };

  return (
    <>
      <div>
        <input 
          type={type}
          name="name" 
          onChange={handleInputChange}
          onBlur={handleInputError}
          onKeyUp={handleInputError}
          value={value}
          autoComplete="off"
          className={`${error.length > 0 ? 'input-error' : ''}`}
        />
        <label 
          htmlFor="name" 
          className={`
            ${value.length > 0 ? 'active-input ' : ''} 
            ${error.length > 0 ? 'label-error' : ''}`
          }
        >
          {placeholder}
        </label>
        <small>{error}</small>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};
