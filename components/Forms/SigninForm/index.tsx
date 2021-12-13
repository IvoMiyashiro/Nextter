import { FormEvent, useContext, useState } from 'react';
import { useRouter } from 'next/router';

import { signin } from '../../../actions/auth';

import { AppContext } from '../../../context/AppContext';
import { InputControl } from '../../InputControl';
import { Spinner } from '../../Spinner';

import { colors } from '../../../styles/theme';
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

  const { userDispatch } = useContext(AppContext);

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
    signin(
      emailInputState.value,
      passwordInputState.value,
      userDispatch,
      router,
      setValue,
      setLoading,
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
            disabled={!emailInputState.ok || isLoading}
          >
            {
              isLoading
                ? <Spinner color={colors.background} size={'18px'} />
                : 'Sign in'
            }
          </button>
        </div>
      </form>
      <style jsx>{styles}</style>
    </>
  );
};
