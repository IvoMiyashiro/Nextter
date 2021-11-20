import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';

import { fetchWithoutToken } from '../../../services/fetchWithoutToken';

import { Spinner } from '../../Spinner';
import { InputControl } from '../../InputControl';
import { SelectDate } from '../../SelectDate';

import styles from './styles';
import { colors } from '../../../styles/theme';

interface IState {
  isOpen: boolean,
  error: boolean,
  msg: string,
}

interface IProps {
  setValue: (value: IState | ((prev: IState) => IState)) => void
}

export const SignupForm = ({ setValue }: IProps) => {

  const regEx = {
    name: /^[a-zA-Z0-9\_\-]{1,50}$/,
    email: /^\S+@\S+\.\S+$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
  };

  const NAME_INPUT_INIT_STATE = {
    value: '',
    error: '',
    ok: false,
  };

  const EMAIL_INPUT_INIT_STATE = {
    value: '',
    error: '',
    ok: false,
  };

  const PASSWORD_INPUT_INIT_STATE = {
    value: '',
    error: '',
    ok: false,
  };

  const BIRTH_INPUT_INIT_STATE = {
    value: '',
    error: '',
    ok: false,
  };

  const [nameInputState, setNameInputState] = useState(NAME_INPUT_INIT_STATE);
  const [emailInputState, setEmailInputState] = useState(EMAIL_INPUT_INIT_STATE);
  const [passwordInputState, setPasswordInputState] = useState(PASSWORD_INPUT_INIT_STATE);
  const [birthInputState, setBirthInputState] = useState(BIRTH_INPUT_INIT_STATE);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const resp = await fetchWithoutToken('auth/signup', {
      name: nameInputState.value,
      email: emailInputState.value,
      password: passwordInputState.value,
      birthDate: new Date(birthInputState.value),
    }, 'POST');
    const body = await resp.json();

    setLoading(false);

    if (body.success) {
      localStorage.setItem('token', body.token);
      router.push('./home');
    }
    
    setValue((prev: IState) => ({
      ...prev,
      isOpen: true,
      msg: body.msg
    }));

    setTimeout(() => {
      setValue((prev: IState) => ({
        ...prev,
        isOpen: false,
        msg: body.msg
      }));
    }, 4000);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <h3>Create your account</h3>
          <section>
            <InputControl
              type="text"
              placeholder="Name"
              error={nameInputState.error}
              regEx={regEx.name}
              value={nameInputState.value}
              setValue={setNameInputState}
            />
            <InputControl
              type="email"
              placeholder="Email"
              error={emailInputState.error}
              regEx={regEx.email}
              value={emailInputState.value}
              setValue={setEmailInputState}
            />
            <InputControl
              type="password"
              placeholder="Password"
              error={passwordInputState.error}
              regEx={regEx.password}
              value={passwordInputState.value}
              setValue={setPasswordInputState}
            />
          </section>
          <h5>Date of Birth</h5>
          <SelectDate 
            error={birthInputState.error}
            value={birthInputState.value}
            setValue={setBirthInputState}
          />
        </div>
        <div>
          <button
            className={`${
              nameInputState.ok && emailInputState.ok && passwordInputState.ok && birthInputState.ok
                ? 'create-account-btn'
                : ''
            }`}
            disabled={!nameInputState.ok && !emailInputState.ok && !passwordInputState.ok && !birthInputState.ok}
          >
            {
              isLoading
                ? <Spinner color={colors.background} size={'24px'} />
                : 'Create account'
            }
          </button>
        </div>
      </form>

      <style jsx>{styles}</style>
    </>
  );
};
