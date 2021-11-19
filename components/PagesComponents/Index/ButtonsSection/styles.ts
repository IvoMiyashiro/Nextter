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
    gap: 1em;
    margin-top: 2em;
  }

  button {
    align-items: center;
    background: transparent;
    border-radius: 99px;
    border: 1px solid ${colors.primary};
    color: ${colors.primary};
    display: flex;
    font-family: ${fonts.base};
    font-size: 1rem;
    gap: 1em;
    height: 40px;
    justify-content: center;
    position: relative;
    transition: background .2s ease-in-out;
  }

  button:hover {
    background: rgba(89, 227, 197, 0.2);
    transition: background .2s ease-in-out;
  }

  picture {
    left: 10px;
    position: absolute;
    top: 6px;
  }
`;
