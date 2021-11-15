import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';

import { fetchWithoutToken } from '../../../services/fetchWithoutToken';

import { InputControl } from '../../InputControl';
import { Spinner } from '../../Spinner';

import styles from './styles';

interface IState {
  isOpen: boolean,
  error: boolean,
  msg: string,
}

interface IProps {
  setValue: (value: IState | ((prev: IState) => IState)) => void
}

export const SigninForm = ({ setValue }: IProps) => {

  const regEx = {
    email: /^\S+@\S+\.\S+$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
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

  const [emailInputState, setEmailInputState] = useState(EMAIL_INPUT_INIT_STATE);
  const [passwordInputState, setPasswordInputState] = useState(PASSWORD_INPUT_INIT_STATE);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const resp = await fetchWithoutToken('auth/signin', {
      email: emailInputState.value,
      password: passwordInputState.value,
    }, 'POST');
    const body = await resp.json();

    setLoading(false);

    if (body.success) {
      localStorage.setItem('token', body.token);
      router.push('./home');
    } else {
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
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <h3>To get started enter your email or @username and password</h3>
          <section>
            <InputControl
              type="text"
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
              value={passwordInputState.value}
              setValue={setPasswordInputState}
            />
          </section>
        </div>
        <div>
          <button
            className={`${
              emailInputState.ok
                ? 'create-account-btn'
                : ''
            }`}
            disabled={!emailInputState.ok}
          >
            {
              isLoading
                ? <Spinner />
                : 'Sign in'
            }
          </button>
        </div>
      </form>
      <style jsx>{styles}</style>
    </>
  );
};
