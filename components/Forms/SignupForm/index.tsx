import { useState, FormEvent } from 'react';

import { InputControl } from '../../InputControl';
import { SelectDate } from '../../SelectDate';
import styles from './styles';

export const SignupForm = () => {

  const regEx = {
    name: /^[a-zA-Z0-9\_\-]{1,50}$/,
    email: /^\S+@\S+\.\S+$/
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

  const BIRTH_INPUT_INIT_STATE = {
    value: '',
    error: '',
    ok: false,
  };

  const [nameInputState, setNameInputState] = useState(NAME_INPUT_INIT_STATE);
  const [emailInputState, setEmailInputState] = useState(EMAIL_INPUT_INIT_STATE);
  const [birthInputState, setBirthInputState] = useState(BIRTH_INPUT_INIT_STATE);

  const handleSubmit = (e: FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
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
          </section>
          <h5>Date of Birth</h5>
          <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
          <SelectDate 
            error={birthInputState.error}
            value={birthInputState.value}
            setValue={setBirthInputState}
          />
        </div>
        <div>
          <button
            className={`${
              nameInputState.ok && emailInputState.ok && birthInputState.ok
                ? 'create-account-btn'
                : ''
            }`}
            disabled={!nameInputState.ok && !emailInputState.ok && !birthInputState.ok}
          >
            Create account
          </button>
        </div>
      </form>

      <style jsx>{styles}</style>
    </>
  );
};
