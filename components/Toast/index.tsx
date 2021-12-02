import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/theme';

interface IState {
  isOpen: boolean,
  msg: string,
  error: boolean
}

interface IProps {
  setValue: (value: IState | ((prev: IState) => IState)) => void,
  isOpen: boolean,
  msg: string,
  error: boolean
}

export const Toast = ({ msg, error, setValue }: IProps) => {

  return (
    <>
      <div>
        <section>
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

        section {
          position: relative;

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
