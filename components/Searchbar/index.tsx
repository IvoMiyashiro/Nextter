import { useState } from 'react';
import { createAutocomplete } from '@algolia/autocomplete-core';

import { SearchbarAutocomplete } from './SearchbarAutocomplete';

import SearchIcon from '../Icons/Search';
import { colors, fonts } from '../../styles/theme';

export const Searchbar = () => {

  const [isFocus, setFocus] = useState(false);
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false
  });

  const autocomplete = createAutocomplete({
    onStateChange: ({ state }) => setAutocompleteState(state),
    getSources: () => [{
      sourceId: 'users-search',
      getItems: ({ query }) => {
        if (!!query) {
          return fetch('/api/');
        }
      }
    }]
  });

  return (
    <>
      <form>
        <button>
          <SearchIcon
            height="20px"
            fill="currentColor"
            color={isFocus ? colors.primary : colors.text}
          />
        </button>
        <input
          type="text"
          placeholder="Search Develotter"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {
          isFocus && <SearchbarAutocomplete />
        }
      </form>

      <style jsx>{`
        form {
          width: 100%;
          background: ${colors.rgbaTitle};
          border: 1px solid ${isFocus ? colors.primary : 'transparent'} ;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          height: 44px;
          position: relative;
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
