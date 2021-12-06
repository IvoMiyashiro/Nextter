import css from 'styled-jsx/css';
import { colors } from '../../styles/theme';

export default css`
  div {
    align-items: center;
    background: rgba(91, 112, 131, 0.4);
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100%;
  }

  main {
    background-color: ${colors.background};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    max-width: 320px;
    padding-top: 1.6em;
    padding: 2em;
    width: 80%;
  }

  section {
    width: 100%;
  }

  .button-container {
    height: 42px;
  }

  h2 {
    color: ${colors.title};
    font-size: 1.1rem;
    margin-top: 0.25em;
  }

  p {
    color: ${colors.text};
    font-size: .8rem;
    margin-bottom: 1.5em;
    margin-top: .5em;
  }

  .logo-container {
    text-align: center;
  }

  .buttons-container {
    display: flex;
    flex-direction: column;
    gap: .75em;
  }
`;
