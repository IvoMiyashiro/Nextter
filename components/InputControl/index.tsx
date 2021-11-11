import { ChangeEvent } from "react";
import styles from "./styles";

interface IState {
  value: string; 
  error: string
}

interface IInput {
  label: string,
  regEx: RegExp,
  error: string,
  value: string,
  setValue: (value: IState| ((prev: IState) => IState)) => void
}

export const InputControl = ({
  label,
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
      setValue((prev: IState) => (
        {...prev, error: `${label} is not valid.`}
      ));
    } else {
      setValue((prev: IState) => (
        {...prev, error: ''}
      ));
    }
  };

  return (
    <>
      <div>
        <label htmlFor="name">{label}</label>
        <input 
          type="text"
          name="name" 
          onChange={handleInputChange}
          onBlur={handleInputError}
          onKeyUp={handleInputError}
          value={value}
          autoComplete="off"
        />
        <small>{error}</small>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};
