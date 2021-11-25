import { useState, DragEvent, ChangeEvent, Dispatch, SetStateAction } from 'react';

import { ImageSection } from './ImageSection';
import { MediaButtons } from './MediaButtons';

import { colors } from '../../../styles/theme';
import styles from './styles';
import { ProfileImage } from '../../Devit/ProfileImage';

interface IProps {
  handleTextAreaValue: Dispatch<SetStateAction<string>>,
  handleImageUrl: any,
  isSubmitButtonDisabled: boolean,
  textAreaValue: string,
  imageUrl: string
  textAreaPlaceholder: string
  user: string
}

export const MainSection = ({
  handleTextAreaValue,
  handleImageUrl,
  isSubmitButtonDisabled,
  textAreaValue,
  imageUrl,
  textAreaPlaceholder,
  user
}: IProps) => {

  const [dragState, setDragState] = useState(false);

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handleTextAreaValue(e.target.value);
  };

  const handleDrop = (e: DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUrl({
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
      <main>
        <ProfileImage
          profileImage="/yo.jpg"
          alt={user}
        />
        <div>
          <textarea
            placeholder={textAreaPlaceholder}
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
            !!imageUrl
              &&
              <ImageSection
                src={imageUrl}
                alt={'develotter'}
                handleImageUrl={handleImageUrl}
              />
          }
          <MediaButtons 
            isDisabled={isSubmitButtonDisabled}
            handleImageUrl={handleImageUrl}
          />
        </div>
      </main>
      <style jsx>{styles}</style>
    </>
  );
};
