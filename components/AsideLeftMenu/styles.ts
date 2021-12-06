import css from 'styled-jsx/css';
import { breakpoints } from '../../styles/breakpoints';
import { colors } from '../../styles/theme';

export default css`
  
  aside {
    display: none;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    position: sticky;
    left: 0;
    top: 0;
    z-index: 9;
  }

  div {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  header {
    display: flex;
    align-items: center;
    height: 62px;
    margin-left: -0.25em
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

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    div {
      align-items: center;
      margin-left: 0.4em;
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    aside {
      display: flex;
    }
  }
`;
