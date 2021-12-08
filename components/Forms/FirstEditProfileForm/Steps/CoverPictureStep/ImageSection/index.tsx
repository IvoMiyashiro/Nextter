import { ChangeEvent, DragEvent, useContext, useRef, useState } from 'react';
import Image from 'next/image';
import { AppContext } from '../../../../../../context/AppContext';
import styles from '../styles';
import { HoverableButton } from '../../../../../Buttons/HoverableButton';
import Photo from '../../../../../Icons/Photo';
import { colors } from '../../../../../../styles/theme';
import TimesIcon from '../../../../../Icons/Times';

interface FormValues {
  profilePicture: {
    file: string | File,
    fileUrl: string
  }
  coverPicture: {
    file: string | File,
    fileUrl: string
  }
  username: string
  bio: string
}

interface IProps {
  handleStep: any
  stepComplete: boolean
  handleFormValues: any
  profilePicture: string
  coverPicture: string
}

export const ImageSection = ({
  handleStep,
  handleFormValues,
  profilePicture,
  stepComplete,
  coverPicture
}: IProps) => {

  
  const inputRef = useRef<HTMLInputElement>(null);
  const {userState} = useContext(AppContext);
  const [dragState, setDragState] = useState(false);

  const handleOpenInputFile = () => {
    if (inputRef.current !== null) {
      inputRef.current.click();
    }
  };

  const handleDragEnter = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragState(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragState(false);
  };

  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFormValues((prev: FormValues) => ({
        ...prev,
        coverPicture: {
          file: e.dataTransfer.files[0],
          fileUrl: URL.createObjectURL(e.dataTransfer.files[0])
        }
      }));
    }
    handleStep(true);
    setDragState(false);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFormValues((prev: FormValues) => {
        if (e.target.files) {
          return {
            ...prev,
            coverPicture: {
              file: e.target.files[0],
              fileUrl: URL.createObjectURL(e.target.files[0])
            }
          };
        }
      });
    }
    handleStep(true);
    setDragState(false);
  };

  const handleDeleteImage = () => {
    handleFormValues((prev: FormValues) => ({
      ...prev,
      coverPicture: {
        file: '',
        fileUrl: ''
      }
    }));
    handleStep(false);
  };

  return (
    <>
      <div>
        <section 
          className="cover-picture-container"
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={
            dragState
              ? { border: `2px dashed ${colors.primary}` }
              : { border: '2px solid transparent' }
          }
        >
          {
            !!coverPicture
            &&
            <div className="cover-picture">
              <Image 
                src={coverPicture} 
                alt="cover-picture" 
                layout="fill" 
                objectFit="cover"
              />
            </div>
          }
          {
            stepComplete
              ? (
                <div className="button">
                  <HoverableButton
                    icon={TimesIcon}
                    color={colors.title}
                    backgroundColor={colors.rgbaTitle}
                    defaultColor={colors.title}
                    width="20px"
                    height="20px"
                    onClick={handleDeleteImage}
                  />
                </div>
              )
              : (
                <div className="button">
                  <HoverableButton
                    icon={Photo}
                    color={colors.title}
                    backgroundColor={colors.rgbaTitle}
                    defaultColor={colors.title}
                    width="20px"
                    height="20px"
                    onClick={handleOpenInputFile}
                  />
                </div>
              )
          }
          <input type="file" ref={inputRef} onChange={handleImageChange} />
        </section>
        <section className="profile-picture-section">
          <div className="container">
            <div className="profile-picture-container">
              <Image
                src={profilePicture ? profilePicture : '/defaultProfileImg.png'}
                alt="profile-picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <h1>{userState.name}</h1>
          <p>{userState.username}</p>
        </section>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
