import css from 'styled-jsx/css';
import { colors } from '../../styles/theme';
import { breakpoints } from '../../styles/breakpoints';

export default css`
  div {
    align-items: center;
    display: flex;
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
    max-height: 700px;
    max-width: 500px;
    position: relative;
    width: 85%;
  }

  a {
    align-items: center;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    padding: .4em;
    position: absolute;
    right: -5px;
    top: -10px;
  }

  a:hover {
    background-color: rgba(204, 214, 246, .1);
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
