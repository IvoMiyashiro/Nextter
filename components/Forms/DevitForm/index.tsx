import { useState, ChangeEvent, useEffect, FormEvent, useContext } from 'react';
import Image from 'next/image';

import { fetchWithToken } from '../../../services/fetchWithToken';

import { Spinner } from '../../Spinner';
import { PrimaryButton } from '../../Buttons/PrimaryButton';
import { MediaButtons } from './MediaButtons';
import { AppContext } from '../../../context/userContext';

import { FaTimes } from 'react-icons/fa';
import styles from './styles';
import { colors } from '../../../styles/theme';
import { ImageSection } from './ImageSection';

interface IProp {
  handleOpenModal: (value: boolean) => void
}

export const DevitForm = ({handleOpenModal}: IProp) => {

  const { state } = useContext(AppContext);
  const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (textAreaValue.length > 0) {
      return setSubmitButtonDisabled(false);
    }

    setSubmitButtonDisabled(true);
  },[textAreaValue]);

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    await fetchWithToken('devit/create', {
      uid: state.uid,
      content: textAreaValue,
      img: imageUrl,
    }, 'POST');

    setLoading(false);
    handleOpenModal(false);
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
              value={textAreaValue}
            />
            {
              !!imageUrl && <ImageSection src={imageUrl} alt={'develotter'}/>
            }
            <ImageSection src={imageUrl} alt={'develotter'}/>
            <MediaButtons isDisabled={isSubmitButtonDisabled}/>
          </div>
        </main>
      </form>
      <style jsx>{styles}</style>
    </>
  );
};
