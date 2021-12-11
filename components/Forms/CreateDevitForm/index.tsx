import { useState, useEffect, FormEvent, useContext } from 'react';

import { AppContext } from '../../../context/AppContext';
import { createDevit } from '../../../actions/devits';

import { HeaderSection } from './HeaderSection';
import { MainSection } from './MainSection';

import styles from './styles';

export const CreateDevitForm = () => {

  const {userState, devitDispatch, uiDispatch} = useContext(AppContext);
  const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [imageUrl, setImageUrl] = useState<any>({
    file: '',
    fileUrl: ''
  });

  useEffect(() => {
    if (textAreaValue.length === 0 && imageUrl.fileUrl !== '') {
      return setSubmitButtonDisabled(false);
    }

    if (textAreaValue.length > 0 && textAreaValue.length < 280) {
      return setSubmitButtonDisabled(false);
    }

    setSubmitButtonDisabled(true);
  },[textAreaValue, imageUrl]);



  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createDevit(
      imageUrl.file,
      userState.id,
      textAreaValue,
      devitDispatch,
      uiDispatch,
      setLoading,
    );
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <HeaderSection 
          isSubmitButtonDisabled={isSubmitButtonDisabled}
          isLoading={isLoading}
          buttonChild="Devit"
        />
        <div style={{marginTop: '1em'}}>
          <MainSection
            handleTextAreaValue={setTextAreaValue}
            handleImageUrl={setImageUrl}
            isSubmitButtonDisabled={isSubmitButtonDisabled}
            textAreaValue={textAreaValue}
            imageUrl={imageUrl.fileUrl}
            textAreaPlaceholder="What's happening?"
            isLoading={isLoading}
          />
        </div>
      </form>
      <style jsx>{styles}</style>
    </>
  );
};
