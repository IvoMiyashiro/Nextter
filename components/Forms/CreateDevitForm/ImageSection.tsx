/* eslint-disable @next/next/no-img-element */
import TimesIcon from '../../Icons/Times';
import { colors } from '../../../styles/theme';

type fileState = {
  file: string,
  fileUrl: string
}

interface props {
  src: string,
  alt: string,
  handleImageUrl: (value: fileState | ((prev: fileState) => fileState)) => void
}

export const ImageSection = ({src, alt, handleImageUrl}: props) => {
  return (
    <>
      <div>
        <img src={src} alt={alt} />
        <button onClick={() => handleImageUrl({file: '', fileUrl: ''})} type="button">
          <TimesIcon width="18px" height="18px" fill="currentColor" color={colors.title} />
        </button>
      </div>

      <style jsx>{`
        div {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: 16px;
          margin-bottom: 1em;
        }

        img {
          max-height: 100%;
          max-width: 100%;
          object-fit: cover;
        }

        button {
          position: absolute;
          top: 4px;
          left: 4px;
          min-width: 32px;
          min-height: 32px;
          background: rgba(0, 0, 0, 0.65);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
      `}</style>
    </>
  );
};
