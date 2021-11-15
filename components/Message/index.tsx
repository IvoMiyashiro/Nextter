import { FaTimes } from 'react-icons/fa';
import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/theme';

interface IProps {
  msg: string,
  error: boolean
}

export const Message = ({ msg, error }: IProps) => {
  return (
    <>
      <div>
        <section>
          <button>
            <FaTimes />
          </button>
          <p>{ msg }</p>
        </section>
      </div>

      <style jsx>{`
        div {
          background: ${error ? '#e1a7a7' : colors.lightGreen};
          border-radius: 4px;
          border: 2px solid ${error ? colors.red : colors.green};
          color: ${error ? 'red' : colors.green};
          font-size: 0.9rem;
          left: 0;
          margin-left: auto;
          margin-right: auto;
          padding: .5em;
          position: absolute;
          right: 0;
          text-align: center;
          top: 12px;
          width: 80%;
          max-width: 400px;
          z-index: 10;
        }
        /* #e1a7a7 */
        section {
          position: relative;

        }

        button {
          border: none;
          background: none;
          position: absolute;
          left: -10px;
          top: -6px;
          color: ${error ? colors.red : colors.green};
        }

        @media (min-width: ${breakpoints.desktop}) {
          div {
            width: 400px;
          }
        }
      `}</style>
    </>
  );
};
