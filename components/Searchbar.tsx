import { colors, fonts } from '../styles/theme';
import SearchIcon from './Icons/Search';

export const Searchbar = () => {
  return (
    <>
      <form>
        <button>
          <SearchIcon
            height="20px"
            fill="currentColor"
            color={colors.text}
          />
        </button>
        <input 
          type="text"
          placeholder="Search Develotter"
        />
      </form>

      <style jsx>{`
        form {
          width: 100%;
          background: ${colors.rgbaTitle};
          border: 1px solid transparent;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          height: 44px;
          margin-top: .4em;
        }

        button {
          background: transparent;
          margin-left: 1.5em;
          padding: 0;
          margin-top: 0.25em;
        }

        input {
          margin-left: 1em;
          background: transparent;
          border: none;
          width: 100%;
          height: 100%;
          outline: none;
          color: ${colors.title};
          font-size: .9rem;
          font-family: ${fonts.base}
        }

        input::placeholder {
          color: ${colors.text};
        }
      `}</style>
    </>
  );
};
