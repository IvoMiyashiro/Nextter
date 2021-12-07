import { ChangeEvent, useRef } from 'react';

import { PrimaryButton } from '../../Buttons/PrimaryButton';
import GifIcon from '../../Icons/Gif';
import PictureIcon from '../../Icons/Picture';

import { breakpoints } from '../../../styles/breakpoints';
import { colors } from '../../../styles/theme';
import { Spinner } from '../../Spinner';

type fileState = {
  file: File
  fileUrl: string
}

interface IProps {
  isDisabled: boolean,
  handleImageUrl: (value: fileState | ((prev: fileState) => fileState)) => void
  isLoading: boolean
}

export const MediaButtons = ({ isDisabled, handleImageUrl, isLoading }: IProps) => {

  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleSelectPicture = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleImageUrl({
        file: e.target.files[0],
        fileUrl: URL.createObjectURL(e.target.files[0])
      });
    }
  };

  return (
    <>
      <div>
        <section>
          <input type="file" ref={inputFileRef} onChange={(e) => handleImageChange(e)}/>
          <button type="button" onClick={handleSelectPicture}>
            <PictureIcon width="22px" height="22px" fill="currentColor" color={colors.primary}/>
          </button>
          <button type="button">
            <GifIcon width="22px" height="22px" fill="currentColor" color={colors.primary}/>
          </button>
        </section>
        <section className="submit-button-container">
          <PrimaryButton 
            isDisabled={isDisabled}
            textColor={colors.background}
            buttonColor={colors.primary}
          >
            {
              isLoading
                ? <Spinner size="18px" color={colors.title} />
                : 'Devit'
            }
          </PrimaryButton>
        </section>
      </div>

      <style jsx>{`
        div {
          border-top: 1px solid ${colors.gray};
          padding: 1em 0;
          padding-bottom: 0.5em;
          display: flex;
          justify-content: space-between;
        }

        section {
          display: flex;
          gap: 0.5em;
        }

        .submit-button-container {
          display: none;
          height: 32px;
        }

        button {
          background: transparent;
          border: none;
          padding: .5em;
        }

        input {
           display: none;
        }
        
        @media (min-width: ${breakpoints.tablet}) {
          .submit-button-container {
            display: block;
          }
        }
      `}
      </style>
    </>
  );
}; 
