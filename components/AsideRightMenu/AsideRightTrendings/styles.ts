import css from 'styled-jsx/css';
import { colors } from '../../../styles/theme';

export default css`
  div {
    background-color: ${colors.backgroundAlt};
    border-radius: 16px;
    margin-top: 1em;
    overflow: hidden;
  }

  header {
    padding: 12px 16px;
  }

  h1 {
    font-size: 1.25rem;
    color: ${colors.title};
  }
`;
