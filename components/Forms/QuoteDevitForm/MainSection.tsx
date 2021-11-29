import { useState, DragEvent, ChangeEvent, Dispatch, SetStateAction } from 'react';

import { ImageSection } from '../DevitForm/ImageSection';
import { MediaButtons } from '../DevitForm/MediaButtons';
import { ProfileImage } from '../../Devit/ProfileImage';
import { RevitCard } from '../../RevitCard';

import { colors } from '../../../styles/theme';
import styles from './styles';

interface IProps {
  handleTextAreaValue: Dispatch<SetStateAction<string>>
  handleImageUrl: any
  isSubmitButtonDisabled: boolean
  textAreaValue: string
  imageUrl: string
  textAreaPlaceholder: string
  name: string
  profileImg: string
  id: string
  content: string
  createdAt: Date
  img: string
}

export const MainSection = ({
  handleTextAreaValue,
  handleImageUrl,
  isSubmitButtonDisabled,
  textAreaValue,
  imageUrl,
  textAreaPlaceholder,
  name,
  profileImg,
  id,
  content,
  createdAt,
  img,
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
          alt={name}
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

          <RevitCard
            id={id}
            name={name}
            profileImg={profileImg}
            // username={username}
            content={content}
            createdAt={createdAt}
            img={img}
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
