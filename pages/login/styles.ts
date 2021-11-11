import css from 'styled-jsx/css';
import { colors } from '../../styles/theme';
import { breakpoints } from '../../styles/breakpoints';

export default css`
  div {
    margin: 0 auto;
    max-width: 500px;
    width: 85%;
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: .5em;
  }

  h3 {
    color: ${colors.title};
    font-size: 1.5rem;
    margin-top: 0.75em;
  }

  a {
    position: absolute;
    top: 20px;
    left: -18px;
  }

  header {
    align-self: center;
  }
`;
