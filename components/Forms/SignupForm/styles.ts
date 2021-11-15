import css from 'styled-jsx/css';
import { colors, fonts } from '../../../styles/theme';
import { breakpoints } from '../../../styles/breakpoints';

export default css`

  form {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 2.5em;
    margin-top: 1em;
  }

  h3 {
    color: ${colors.title};
    font-size: 1.4rem;
    margin-top: 0.75em;
  }

  h5 {
    color: ${colors.title};
    font-size: 1rem;
    margin-top: 4.65em;
  }

  p {
    color: ${colors.text};
    font-size: 0.85rem;
    margin-top: .5em;
  }

  button {
    align-items: center;
    background: ${colors.text};
    border-radius: 99px;
    border: none;
    color: white;
    cursor: pointer;
    display: flex;
    font-family: ${fonts.base};
    font-size: 1rem;
    font-weight: 700;
    height: 48px;
    justify-content: center;
    margin-top: 3em;
    width: 100%;
  }

  .create-account-btn {
    background: ${colors.primary};
    color: ${colors.background};
  }

  @media (min-width: ${breakpoints.desktop}) {
    h5 {
      margin-top: 3.55em;
    }
  }

`;
