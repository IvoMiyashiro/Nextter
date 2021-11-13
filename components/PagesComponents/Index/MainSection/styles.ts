import css from 'styled-jsx/css';
import { colors } from '../../../../styles/theme';
import { breakpoints } from '../../../../styles/breakpoints';

export default css`
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2em 2.25em;
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 2.25em;
    }
    h1 {
      font-size: 4.75rem;
      line-height: 1.05em;
    }
  }
`;
