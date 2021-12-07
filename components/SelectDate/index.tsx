import { ChangeEvent } from 'react';
import styles from './styles';

interface IState {
  value: string; 
  error: string;
  ok: boolean;
}

interface IInput {
  error: string,
  value: string,
  setValue: (value: IState| ((prev: IState) => IState)) => void
}

export const SelectDate = ({error, value, setValue}: IInput) => {

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>):void => {
    setValue((prev: IState) => ({...prev, value: e.target.value}));
  };

  const handleInputError = ():void => {
    const dateValue = new Date(value).getFullYear(); 

    if (isNaN(dateValue)) {
      return setValue((prev: IState) => ({...prev, error: 'This is not a valid date.', ok: false}));
    }
    
    const currentYearsOld = new Date().getFullYear() - dateValue;


    if (currentYearsOld < 15) {
      return setValue((prev: IState) => ({...prev, error: 'Your age must be greater than 16 years old.', ok: false}));
    }

    setValue((prev: IState) => ({...prev, error: '', ok: true}));
  };

  return (
    <>
      <div>
        <input 
          type="date"
          onChange={handleInputChange}
          onBlur={handleInputError}
          className={`${error.length > 0 ? 'input-error' : ''}`}
        />
        <small>{error}</small>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};
