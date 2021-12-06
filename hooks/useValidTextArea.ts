import { useEffect, useState } from 'react';


export const useValidTextArea = (
  textAreaValue: string,
  fileUrl: string,
) => {

  const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  useEffect(() => {
    if (textAreaValue.length === 0 && fileUrl !== '') {
      return setSubmitButtonDisabled(false);
    }

    if (textAreaValue.length > 0 && textAreaValue.length < 280) {
      return setSubmitButtonDisabled(false);
    }

    setSubmitButtonDisabled(true);
  },[textAreaValue, fileUrl]);


  return {
    isSubmitButtonDisabled
  };
};
