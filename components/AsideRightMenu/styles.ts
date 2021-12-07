import css from 'styled-jsx/css';
import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/theme';

export default css`
  aside {
    display: none;
    flex-direction: column;
    margin-left: 1.75em;
    position: sticky;
    top: 0;
    min-height: 100vh;
    margin-right: 1em;
  }

  section {
    position: sticky;
    top: 0;
    background-color: ${colors.background};
    border-bottom: 1px solid ${colors.background};
    height: 54px;
    display: flex;
    align-items: center;
    z-index: 10;
  }
  
  @media (min-width: ${breakpoints.wideTablet}) {
    aside {
      display: flex;
    }
  }
`;
