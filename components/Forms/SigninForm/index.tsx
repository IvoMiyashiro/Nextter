import { FormEvent, useState } from 'react';
import { InputControl } from '../../InputControl';
import styles from './styles';


export const SigninForm = () => {

  const regEx = {
    email: /^\S+@\S+\.\S+$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
  };

  const NAME_INPUT_INIT_STATE = {
    value: '',
    error: '',
    ok: false,
  };

  const PASSWORD_INPUT_INIT_STATE = {
    value: '',
    error: '',
    ok: false,
  };

  const [nameInputState, setNameInputState] = useState(NAME_INPUT_INIT_STATE);
  const [passwordInputState, setPasswordInputState] = useState(PASSWORD_INPUT_INIT_STATE);

  const handleSubmit = (e: FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
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
              error={nameInputState.error}
              regEx={regEx.email}
              value={nameInputState.value}
              setValue={setNameInputState}
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
        </div>
        <div>
          <button
            className={`${
              nameInputState.ok && passwordInputState.ok
                ? 'create-account-btn'
                : ''
            }`}
            disabled={!nameInputState.ok}
          >
            Sign in
          </button>
        </div>
      </form>
      <style jsx>{styles}</style>
    </>
  );
};
