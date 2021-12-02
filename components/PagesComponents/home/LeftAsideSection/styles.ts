import css from 'styled-jsx/css';
import { breakpoints } from '../../../../styles/breakpoints';
import { colors } from '../../../../styles/theme';

export default css`
  
  aside {
    display: none;
    align-items: flex-end;
    flex-direction: column;
    height: 100vh;
    position: sticky;
    left: 0;
    top: 0;
    border-right: 1px solid ${colors.gray};
  }

  div {
    width: 275px;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  header {
    display: flex;
    align-items: center;
    height: 62px;
  }

  a {
    display: flex;
    align-items: center;
    border-radius: 50%;
    padding: 0.5em;
    transition: .2s ease;
  }

  a:hover {
    background-color: ${colors.rgbaPrimary};
    transition: .2s ease;
  }

  @media (min-width: ${breakpoints.desktop}) {
    aside {
      display: flex;
    }
  }
`;
