import css from 'styled-jsx/css';
import { breakpoints } from '../../../styles/breakpoints';
import { colors } from '../../../styles/theme';

export default css`
  ul {
    display: flex;
    gap: 3em;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    align-items: center;
    color: ${colors.text};
    cursor: pointer;
    display: flex;
    gap: .5em;
  }

  button {
    background: transparent;
    color: ${colors.text};
    padding: 0;
  }

  span {
    font-size: .8rem;
    margin-top: -0.2em;
  } 
`;
