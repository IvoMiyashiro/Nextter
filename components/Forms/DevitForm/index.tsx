import { useState, ChangeEvent, DragEvent, useEffect, FormEvent, useContext } from 'react';
import Image from 'next/image';

import { fetchWithToken } from '../../../helpers/fetchWithToken';

import { Spinner } from '../../Spinner';
import { PrimaryButton } from '../../Buttons/PrimaryButton';
import { MediaButtons } from './MediaButtons';
import { AppContext } from '../../../context/userContext';

import { FaTimes } from 'react-icons/fa';
import styles from './styles';
import { colors } from '../../../styles/theme';
import { ImageSection } from './ImageSection';
import { fileUpload } from '../../../helpers/fileUpload';

interface IProp {
  handleOpenModal: (value: boolean) => void
}

export const DevitForm = ({handleOpenModal}: IProp) => {

  const { state } = useContext(AppContext);
  const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [dragState, setDragState] = useState(false);
  const [imageUrl, setImageUrl] = useState({
    file: new File(
      ['foo'],
      'foo.txt', {
        type: 'text/plain',
      }),
    fileUrl: ''
  });

  useEffect(() => {
    if (textAreaValue.length === 0 && imageUrl.fileUrl !== '') {
      return setSubmitButtonDisabled(false);
    }

    if (textAreaValue.length > 0 && textAreaValue.length < 50) {
      return setSubmitButtonDisabled(false);
    }

    setSubmitButtonDisabled(true);
  },[textAreaValue, imageUrl]);

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const newFileUrl = await fileUpload(imageUrl.file);
      setImageUrl(prev => ({
        ...prev,
        file: newFileUrl
      }));
  
  
      await fetchWithToken('devit/create', {
        uid: state.uid,
        content: textAreaValue,
        img: imageUrl.fileUrl,
      }, 'POST');
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
    handleOpenModal(false);
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
      <form onSubmit={(e) => handleSubmit(e)}>
        <section>
          <button onClick={() => handleOpenModal(false)}>
            <FaTimes size={24}/>
          </button>
          <div className="submit-button-container">
            <PrimaryButton isDisabled={isSubmitButtonDisabled}>
              {
                isLoading
                  ? <Spinner color={colors.background} size={'16px'} />
                  : 'Devit'
              }
            </PrimaryButton>
          </div>
        </section>
        <main>
          <picture>
            <Image 
              src="/yo.jpg"
              alt="profile"
              layout="fill"
              objectFit="cover"
            />
          </picture>
          <div>
            <textarea
              placeholder="What's happening?"
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
            />
          </div>
        </main>
      </form>
      <style jsx>{styles}</style>
    </>
  );
};
