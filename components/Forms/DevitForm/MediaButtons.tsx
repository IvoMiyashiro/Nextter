import { ChangeEvent, useRef } from 'react';
import { AiOutlinePicture, AiOutlineFileGif } from 'react-icons/ai';
import { breakpoints } from '../../../styles/breakpoints';
import { colors } from '../../../styles/theme';
import { PrimaryButton } from '../../Buttons/PrimaryButton';

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
            <AiOutlinePicture size={24} color={colors.primary} />
          </button>
          <button type="button">
            <AiOutlineFileGif size={24} color={colors.primary} />
          </button>
        </section>
        <section className="submit-button-container">
          <PrimaryButton isDisabled={isDisabled}>
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
        }

        button {
          background: transparent;
          border: none;
          padding: 0;
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
