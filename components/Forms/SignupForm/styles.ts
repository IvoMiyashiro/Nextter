import css from 'styled-jsx/css';
import { colors } from '../../../styles/theme';

export default css`
  div {
    display: flex;
    flex-direction: column;
    color: ${colors.text};
    margin-top: 2em;
  }

  h3 {
    color: ${colors.title};
    font-size: 1.5rem;
    margin-top: 0.75em;
  }

`;
