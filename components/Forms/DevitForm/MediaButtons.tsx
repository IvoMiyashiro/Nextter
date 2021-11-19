import { useRef } from 'react';
import { AiOutlinePicture, AiOutlineFileGif } from 'react-icons/ai';
import { breakpoints } from '../../../styles/breakpoints';
import { colors } from '../../../styles/theme';
import { PrimaryButton } from '../../Buttons/PrimaryButton';

interface IProps {
  isDisabled: boolean
}

export const MediaButtons = ({ isDisabled }: IProps) => {

  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleSelectPicture = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  return (
    <>
      <div>
        <section>
          <input type="file" ref={inputFileRef} />
          <button onClick={handleSelectPicture}>
            <AiOutlinePicture size={24} color={colors.primary} />
          </button>
          <button>
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
