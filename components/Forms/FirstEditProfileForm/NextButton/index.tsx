import { colors, fonts } from '../../../../styles/theme';

interface IProps {
  handleStep: (value: number | ((prev: number) => number)) => void
}

export const NextButton = ({handleStep}: IProps) => {
  return (
    <>
      <button onClick={() => handleStep((prev: number) => prev + 1)}>
        Skip for now
      </button>
      <style jsx>{`
          button {
          text-decoration: underline;
          background-color: transparent;
          color: ${colors.title};
          font-size: 1rem;
          font-family: ${fonts.base};
          width: 100%;
          height: 100%;
          border-radius: 9999px;
          font-weight: 700;
          text-underline-offset: 4px;
        }

        button:hover {
          transition: .2s ease;
          background-color: ${colors.rgbaTitle};
        }
      `}</style>
    </>
  );
};
