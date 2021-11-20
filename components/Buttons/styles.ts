import css from 'styled-jsx/css';
import { colors, fonts } from '../../styles/theme';

export default css`
  button {
    align-items: center;
    background: ${colors.primary};
    border-radius: 9999px;
    border: none;
    color: ${colors.background};
    display: flex;
    font-family: ${fonts.base};
    font-size: 1rem;
    font-weight: 600;
    height: 32px;
    justify-content: center;
    padding: 0 1em;
  }

  button:disabled {
    opacity: 0.6;
  }
`;
