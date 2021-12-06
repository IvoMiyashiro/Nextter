import { ChangeEvent, DragEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { createDevit } from '../../../actions/devits';

import { AppContext } from '../../../context/AppContext';
import { ProfileImage } from '../../Devit/ProfileImage';
import { ImageSection } from '../CreateDevitForm/ImageSection';
import { MediaButtons } from '../CreateDevitForm/MediaButtons';

import { colors } from '../../../styles/theme';
import styles from './styles';

export const CreateDevitHome = () => {

  const {userState, devitDispatch, uiDispatch} = useContext(AppContext);
  const [dragState, setDragState] = useState(false);
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
      uiDispatch,
      devitDispatch,
      setLoading
    );
    setTextAreaValue('');
    setImageUrl({file: '', fileUrl: ''});
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  const handleDrop = (e: DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setImageUrl({
        file: e.dataTransfer.files[0],
        fileUrl: URL.createObjectURL(e.dataTransfer.files[0])
      });
    }
    setDragState(false);
  };

  const handleDragEnter = (e: DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setDragState(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setDragState(false);
  };

  return (
    <>
      <div>
        <ProfileImage 
          profileImage="/yo.jpg"
          alt={userState.name}
        />
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="What&apos;s happening"
            onChange={(e) => handleTextAreaChange(e)}
            onDrop={(e) => handleDrop(e)}
            onDragEnter={(e) => handleDragEnter(e)}
            onDragLeave={(e) => handleDragLeave(e)}
            value={textAreaValue}
            style={ 
              dragState 
                ? { border: `2px dashed ${colors.primary}`}
                : { border: '2px solid transparent'}
            }
          />
          {
            !!imageUrl.fileUrl
            &&
            <ImageSection
              src={imageUrl.fileUrl}
              alt={'develotter'}
              handleImageUrl={setImageUrl}
            />
          }
          <MediaButtons
            isDisabled={isSubmitButtonDisabled}
            handleImageUrl={setImageUrl}
            isLoading={isLoading}
          />
        </form>
      </div>

      <style jsx>{styles}</style>
    </>


  );
};
