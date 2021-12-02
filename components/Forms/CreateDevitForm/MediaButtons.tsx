import { ChangeEvent, useRef } from 'react';

import { PrimaryButton } from '../../Buttons/PrimaryButton';
import GifIcon from '../../Icons/Gif';
import PictureIcon from '../../Icons/Picture';

import { breakpoints } from '../../../styles/breakpoints';
import { colors } from '../../../styles/theme';

type fileState = {
  file: File,
  fileUrl: string
}

interface IProps {
  isDisabled: boolean,
  handleImageUrl: (value: fileState | ((prev: fileState) => fileState)) => void
}

export const MediaButtons = ({ isDisabled, handleImageUrl }: IProps) => {

  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleSelectPicture = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const handleImageChange = async(e: ChangeEvent<HTMLInputElement>) => {
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
            Devit
          </PrimaryButton>
        </section>
      </div>

      <style jsx>{`
        div {
          border-top: 1px solid ${colors.gray};
          padding: 1em 0;
          display: flex;
          justify-content: space-between;
        }

        section {
          display: flex;
          gap: 1em;
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
        
        @media (min-width: ${breakpoints.desktop}) {
          .submit-button-container {
            display: block;
          }
        }
      `}
      </style>
    </>
  );
}; 
