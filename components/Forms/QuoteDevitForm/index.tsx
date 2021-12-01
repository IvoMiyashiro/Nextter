import { useState, useEffect, FormEvent, useContext } from 'react';

import { fetchWithToken } from '../../../helpers/fetchWithToken';
import { AppContext } from '../../../context/AppContext';
import { fileUpload } from '../../../helpers/fileUpload';

import { HeaderSection } from '../CreateDevitForm/HeaderSection';
import { MainSection } from './MainSection';

import styles from '../CreateDevitForm/styles';


interface IProp {
  id: string
  content: string
  createdAt: Date
  img: string
  handleOpenModal: (value: boolean) => void
}

export const QuoteDevitForm = ({
  id,
  content,
  createdAt,
  img,
  handleOpenModal,
}: IProp) => {

  const { userState } = useContext(AppContext);
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
    setLoading(true);

    try {
      let newFile = '';

      !!imageUrl.file
        ? newFile = await fileUpload(imageUrl.file)
        : newFile = '';
      
      await fetchWithToken(`devit/${id}/revit`, {
        uid: userState.id,
        content: textAreaValue,
        img: newFile,
      }, 'PUT');
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
    handleOpenModal(false);
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
            textAreaPlaceholder="Add a comment"
            name={userState.name}
            profileImg={userState.profilePicture}
            username={userState.username}
            id={id}
            content={content}
            createdAt={createdAt}
            img={img}
          />
        </div>
      </form>
      <style jsx>{styles}</style>
    </>
  );
};
