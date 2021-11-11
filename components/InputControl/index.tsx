import { ChangeEvent } from "react";
import styles from "./styles";

interface IState {
  value: string; 
  error: string;
  ok: boolean;
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
        {...prev, error: `${label} is not valid.`, ok: false}
      ));
    } else {
      setValue((prev: IState) => (
        {...prev, error: '', ok: true}
      ));
    }
  };

  return (
    <>
      <div>
        <input 
          type="text"
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
          {label}
        </label>
        <small>{error}</small>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};
