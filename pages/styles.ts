import css from 'styled-jsx/css';
import { colors } from '../styles/theme';
import { breakpoints } from '../styles/breakpoints';

export default css`
  div {
    margin: 0 auto;
    max-width: 500px;
    width: 85%;
  }

  header {
    padding: 2.25em 0;
  }

  h1 {
    color: ${colors.title};
    font-size: 3.5rem;
    line-height: 1.1em;
    margin-top: .75em;
  }

  @media (min-width: ${breakpoints.desktop}) {
    div {
      margin: 0 auto;
      max-width: 500px;
    }

    h1 {
      font-size: 4.75rem;
      line-height: 1.05em;
      max-width: 500px;
    }
  }
`;
