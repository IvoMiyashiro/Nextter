import css from 'styled-jsx/css';
import { breakpoints } from '../../../styles/breakpoints';
import { colors } from '../../../styles/theme';

export default css`
  form {
    background: ${colors.background};
    height: 100vh;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 100;
  }

  div {
    display: grid;
    grid-template-columns: 48px 1fr;
    padding: 1em;
    gap: 1em;
    width: 100%;
  }

  section {
    height: 100%;
  }

  p {
    color: ${colors.text}
  }

  span {
    color: ${colors.primary};
  }

  .test {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    height: 100%;
    align-items: center;
  }

  .line {
    width: 2px;
    background-color: rgb(61, 84, 102);
    height: 100%;
    padding: 0;
  }

  .reply {
    display: block;
    padding: 0;
    font-size: 0.85rem;
  }


  @media (min-width: ${breakpoints.desktop}) {
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
