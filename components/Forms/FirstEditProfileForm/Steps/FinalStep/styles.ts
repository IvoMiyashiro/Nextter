import css from 'styled-jsx/css';
import { colors } from '../../../../../styles/theme';

export default css`
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -3em;
  }

  h1 {
    font-size: 1.5rem;
    color: ${colors.title};
    margin-top: 2em;
    margin-bottom: 1.5em;
    font-weight: 800;
  }

  section {
    width: 285px;
    height: 52px;
  }
`;
