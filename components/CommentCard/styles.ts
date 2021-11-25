import css from 'styled-jsx/css';
import { colors } from '../../styles/theme';

export default css`
  section {
    display: flex;
    gap: .75em;
    width: 100%;
    padding: 0 1em;
    padding-bottom: 1em;
    border-bottom: 1px solid ${colors.gray};
    background: ${colors.background};
    transition: background .2s ease-in-out;
    cursor: pointer;
  }

  section:hover {
    transition: background .2s ease-in-out;
    background: rgba(17, 34, 64, 0.4)
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    color: ${colors.text}
  }

  li {
    display: flex;
    align-items: center;
    gap: .5em;
    color: ${colors.text};
    cursor: pointer;
  }

  span {
    font-size: .8rem;
    margin-top: -0.2em;
  }

  button {
    padding: 0;
    border: none;
    background-color: transparent;
  }
`;
