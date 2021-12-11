import { useMemo, useRef, useState } from 'react';
import { createAutocomplete } from '@algolia/autocomplete-core';

import { AutocompleteItem } from './AutocompleteItem';

import SearchIcon from '../Icons/Search';
import styles from './styles';
import { colors } from '../../styles/theme';

export const Searchbar = (props) => {

  const formRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false
  });

  const autocomplete = useMemo(() => createAutocomplete({
    placeholder: 'Search Develotter',
    onStateChange: ({ state }) => setAutocompleteState(state),
    getSources: () => [{
      sourceId: 'users-develotter-api',
      getItems: async({ query }) => {
        if (!!query) {
          const resp = await fetch(`/api/user/search/${query}`);
          const body = await resp.json();

          return body.search;
        }
      }
    }],
    ...props
  }), [props]);

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current
  });
  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current
  });
  
  return (
    <>
      <form ref={formRef} {...formProps}>
        <button>
          <SearchIcon
            height="20px"
            fill="currentColor"
            color={colors.title}
          />
        </button>
        <input
          ref={inputRef}
          {...inputProps}
        />
        {
          autocompleteState.isOpen && (
            <div ref={panelRef} {...autocomplete.getPanelProps()}>
              {
                autocompleteState.collections.map((collection, index) => {
                  const { items } = collection;
                  return (
                    <section key={`section-${index}`}>
                      {items.length > 0 && (
                        <ul {...autocomplete.getListProps()}>
                          {
                            items.map(item => <AutocompleteItem key={item.id} {...item} />)
                          }
                        </ul>
                      )}
                    </section>
                  );
                })
              }
            </div>
          )
        }
      </form>

      <style jsx>{styles}</style>
    </>
  );
};
