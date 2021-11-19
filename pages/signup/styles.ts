import css from 'styled-jsx/css';
import { colors } from '../../styles/theme';
import { breakpoints } from '../../styles/breakpoints';

export default css`
  div {
    display: flex;
    align-items: center;
    height: 100vh;
    padding: 2em 0;
  }

  section {
    background: ${colors.background};
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 500px;
    position: relative;
    width: 85%;
    max-height: 700px;
  }

  a {
    position: absolute;
    right: -5px;
    top: -10px;
  }

  picture {
    text-align: center;
  }

  header {
    align-self: center;
  }

  @media (min-width: ${breakpoints.desktop}) {

    div {
      background: rgba(0, 0, 0, 0.2)
    }

    section {
      border-radius: 18px;
      padding: 2em;
    }

    a {
      position: absolute;
      right: 20px;
      top: 20px;
    }
  }
`;
