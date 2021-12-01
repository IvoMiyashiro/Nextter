import css from 'styled-jsx/css';
import { breakpoints } from '../../../styles/breakpoints';
import { colors, fonts } from '../../../styles/theme';

export default css`

  div {
    width: 100%;
    background-color: ${colors.background};
    border-radius: 32px 32px 0px 0;
    padding: 1.25em;
  }

  ul {
    gap: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    color: ${colors.title};
    gap: .75em;
  }

  button {
    width: 100%;
    border: 1px solid ${colors.text};
    height: 44px;
    font-size: 1rem;
    padding: 0;
    border-radius: 9999px;
    background-color: transparent;
    color: ${colors.title};
    font-weight: bold;
    font-family: ${fonts.base};
    margin-top: -.5em;
  }
`;
