import css from 'styled-jsx/css';
import { breakpoints } from '../../styles/breakpoints';

export default css`
  aside {
    display: none;
    flex-direction: column;
    margin-left: 1.75em;
    position: sticky;
    top: 0;
    min-height: 100vh;
  }

  @media (min-width: ${breakpoints.tablet}) {
    aside {
      display: flex;
    }
  }
`;
