import { useContext, useState } from 'react';
import { AppContext } from '../../../../../../context/AppContext';
import { fetchWithoutToken } from '../../../../../../helpers/fetchWithoutToken';
import { Spinner } from '../../../../../Spinner';

import styles from './styles';

interface IProps {
  value: string
  handleInputValue: any
  inputError: string
  handleInputErrorValue: (value: string | ((value: string) => string)) => void
}

export const UsernameInput = ({
  value,
  handleInputValue,
  inputError,
  handleInputErrorValue
}: IProps) => {

  const { userState } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: any) => {
    handleInputValue((prev: any) => ({
      ...prev,
      username: e.target.value
    }));
    handleInputError();
  };

  const handleInputError = async() => {
    if (value.length < 4) {
      return handleInputErrorValue('Your username must be longer than 4 characters.');
    }
    setLoading(true);
    const resp = await fetchWithoutToken(`user/getByUsername/${value}`);
    const body = await resp.json();
    setLoading(false);
    if (body.success === false && value !== userState.username) {
      return handleInputErrorValue('Username is already taken.');
    }

    return handleInputErrorValue('');
  };

  return (
    <>
      <div>
        <span>@</span>
        <input 
          name="username"
          type="text"
          onChange={handleInputChange}
          onKeyUp={handleInputChange}
          value={value}
          className={`${!!inputError ? 'input-error' : ''}`}
        />
        {
          !!inputError
          &&
          <small>{inputError}</small>
        }
        {
          loading
          &&
          <div className="loader-container">
            <Spinner
              size="18px"
              color="white"
            />
          </div>
        }
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
