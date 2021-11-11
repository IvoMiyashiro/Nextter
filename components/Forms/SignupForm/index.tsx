import { useState } from "react";
import { InputControl } from "../../InputControl";
import styles from "./styles";


export const SignupForm = () => {

  const regEx = {
    name: /^[a-zA-Z0-9\_\-]{1,50}$/,
    email: /^\S+@\S+\.\S+$/
  };

  const NAME_INPUT_INIT_STATE = {
    value: '',
    error: '',
  };

  const EMAIL_INPUT_INIT_STATE = {
    value: '',
    error: '',
  };

  const [nameInputState, setNameInputState] = useState(NAME_INPUT_INIT_STATE);
  const [emailInputState, setEmailInputState] = useState(EMAIL_INPUT_INIT_STATE);
  console.log(nameInputState.value);
  return (
    <>
      <form>
        <h3>Create your account</h3>
        <InputControl
          label="Name"
          error={nameInputState.error}
          regEx={regEx.name}
          value={nameInputState.value}
          setValue={setNameInputState}
        />
        <InputControl
          label="Email"
          error={emailInputState.error}
          regEx={regEx.email}
          value={emailInputState.value}
          setValue={setEmailInputState}
        />
      </form>
      <style jsx>{styles}</style>
    </>
  );
};
