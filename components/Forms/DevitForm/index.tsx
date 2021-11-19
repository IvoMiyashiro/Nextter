import { useState, ChangeEvent, useEffect, FormEvent } from 'react';
import Image from 'next/image';

import { PrimaryButton } from '../../Buttons/PrimaryButton';
import { MediaButtons } from './MediaButtons';

import { FaTimes } from 'react-icons/fa';
import styles from './styles';

interface IProp {
  handleOpenModal: (value: boolean) => void
}

export const DevitForm = ({handleOpenModal}: IProp) => {

  const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [textAreaValue, setTextAreaValue] = useState('');

  useEffect(() => {
    if (textAreaValue.length > 0) {
      return setSubmitButtonDisabled(false);
    }

    setSubmitButtonDisabled(true);
  },[textAreaValue]);

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            Devit
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
            <MediaButtons isDisabled={isSubmitButtonDisabled}/>
          </div>
        </main>
      </form>
      <style jsx>{styles}</style>
    </>
  );
};
