import css from 'styled-jsx/css';
import { colors } from '../../../styles/theme';
import { breakpoints } from '../../../styles/breakpoints';

export default css`
  main {
    display: flex;
    width: 100%;
    padding: 0 1em;
    gap: 1em;
  }

  div {
    width: 100%;
  }

  textarea {
    background: transparent;
    border: none;
    color: ${colors.title};
    font-size: 1.35rem;
    min-height: 52px;
    outline: none;
    padding: .5em 0;
    resize: none;
    width: 100%;
    border-radius: 10px;
  }

  textarea::placeholder {
    color: #9897A9;
  }
`;
