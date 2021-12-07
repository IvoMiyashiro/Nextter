import { ChangeEvent, DragEvent, useRef, useState } from 'react';
import Image from 'next/image';

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
  imageUrl: any
}

export const ImageSection = ({}) => {

  
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
      <div>
        <div>
          <Image src={} />
        </div>
      </div>
    </>
  );
};
