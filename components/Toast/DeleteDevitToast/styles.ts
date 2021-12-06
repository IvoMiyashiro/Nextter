import css from 'styled-jsx/css';
import { colors } from '../../../styles/theme';

export default css`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background: rgba(91, 112, 131, 0.4);
  }

  main {
    padding: 2em;
    padding-top: 1.6em;
    background-color: ${colors.background};
    width: 80%;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    max-width: 300px;
  }

  section {
    width: 100%;
  }

  .button-container {
    height: 38px;
  }

  h2 {
    color: ${colors.title};
    font-size: 1.25rem;
    margin-top: 0.25em;
  }

  p {
    color: ${colors.text};
    font-size: .8rem;
    margin-top: .5em;
    margin-bottom: 1.5em;
  }

  .buttons-container {
    display: flex;
    flex-direction: column;
    gap: .75em;
  }
`;
