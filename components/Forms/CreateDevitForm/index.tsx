import { useState, useEffect, FormEvent, useContext } from 'react';

import { AppContext } from '../../../context/AppContext';
import { createDevit } from '../../../actions/devits';

import { HeaderSection } from './HeaderSection';
import { MainSection } from './MainSection';

import styles from './styles';

interface IProp {
  handleOpenModal: (value: boolean) => void
}

export const CreateDevitForm = ({handleOpenModal}: IProp) => {

  const {userState, devitDispatch} = useContext(AppContext);
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
      setLoading,
      handleOpenModal
    );
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <HeaderSection 
          handleOpenModal={handleOpenModal}
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
            user={userState.name}
            isLoading={isLoading}
          />
        </div>
      </form>
      <style jsx>{styles}</style>
    </>
  );
};
