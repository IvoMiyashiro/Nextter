import css from 'styled-jsx/css';
import { colors } from '../../../styles/theme';
import { breakpoints } from '../../../styles/breakpoints';

export default css`

  form {
    background: ${colors.background};
    height: 100vh;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 100;
  }

  header {
    align-items: center;
    border-bottom: 1px solid ${colors.gray};
    display: flex;
    height: 53px;
    justify-content: space-between;
    padding: 0 1em;
  }

  button {
    background-color: transparent;
    border: none;
    color: ${colors.title};
    padding: 0;
    cursor: pointer;
  }

  main {
    display: flex;
    width: 100%;
    padding: 0 1em;
    gap: 1em;
  }

  div {
    width: 100%;
  }

  textarea {
    background: transparent;
    border: none;
    color: ${colors.title};
    font-size: 1.35rem;
    min-height: 168px;
    outline: none;
    padding: .5em 0;
    resize: none;
    width: 100%;
    border-radius: 10px;
  }

  textarea::placeholder {
    color: #9897A9;
  }

  section {
    border-radius: 50%;
    height: 48px;
    overflow: hidden;
    position: relative;
    width: 48px;
  }

  .submit-button-container {
    width: auto;
    height: 32px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    form {
      min-width: 600px;
      height: auto;
      max-height: 90vh;
      max-width: 600px;
      position: absolute;
      top: 5%;
      border-radius: 16px;
      overflow-y: auto;
    }

    .submit-button-container {
      display: none;
    }
  }
`;
