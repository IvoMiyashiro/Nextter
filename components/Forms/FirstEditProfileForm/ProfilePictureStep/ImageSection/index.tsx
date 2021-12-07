import { ChangeEvent, DragEvent, useRef, useState } from 'react';
import Image from 'next/image';

import { HoverableButton } from '../../../../Buttons/HoverableButton';

import { colors } from '../../../../../styles/theme';
import styles from '../styles';
import Photo from '../../../../Icons/Photo';
import TimesIcon from '../../../../Icons/Times';

interface IProps {
  handleStep: any
  stepComplete: boolean
  handleFormValues: any
  imageUrl: any
}

interface FormValues {
  profilePicture: {
    file: string | File,
    fileUrl: string
  }
  coverPicture: string
  username: string
  bio: string
}

export const ImageSection = ({
  handleStep,
  handleFormValues,
  imageUrl,
  stepComplete
}: IProps) => {

  const inputRef = useRef<HTMLInputElement>(null);
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
        profilePicture: {
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
            profilePicture: {
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
      profilePicture: {
        file: '',
        fileUrl: ''
      }
    }));
    handleStep(false);
  };

  return (
    <>
      <div className="select-img-container">
        <div 
          className="container"
          style={
            dragState
              ? { border: `2px dashed ${colors.primary}` }
              : { border: `2px solid ${colors.title}` }
          }
        >
          <section 
            className="image-container"
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Image 
              src={!!imageUrl ? imageUrl : '/defaultProfileImg.png'}
              alt="profile-picture"
              layout="fill"
              objectFit="cover"
              priority
            />
          </section>
          <section className="select-img-button">
            {
              stepComplete
                ? (
                  <HoverableButton
                    icon={TimesIcon}
                    width="22px"
                    height="22px"
                    color={colors.title}
                    defaultColor={colors.title}
                    backgroundColor={colors.rgbaTitle}
                    onClick={() => handleDeleteImage()}
                  />
                )

                : (
                  <HoverableButton 
                    icon={Photo}
                    width="22px"
                    height="22px"
                    color={colors.title}
                    defaultColor={colors.title}
                    backgroundColor={colors.rgbaTitle}
                    onClick={() => handleOpenInputFile()}
                  />
                )
            }
            <input type="file" ref={inputRef} onChange={(e) => handleImageChange(e)} />
          </section>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};
