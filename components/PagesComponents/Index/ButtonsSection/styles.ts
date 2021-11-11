import css from 'styled-jsx/css';
import { colors, fonts } from '../../../../styles/theme';

export default css`
  div {
    max-width: 500px;
  }

  h3 {
    color: ${colors.title};
    font-size: 1.5rem;
  }

  section {
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    gap: 1em;
  }

  button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    border-radius: 99px;
    height: 40px;
    font-size: 1rem;
    background: transparent;
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
    font-family: ${fonts.base};
    cursor: pointer;
    transition: background .2s ease-in-out;
  }

  button:hover {
    background: rgba(89, 227, 197, 0.2);
    transition: background .2s ease-in-out;
  }

  picture {
    position: absolute;
    left: 10px;
    top: 6px;
  }
`;
