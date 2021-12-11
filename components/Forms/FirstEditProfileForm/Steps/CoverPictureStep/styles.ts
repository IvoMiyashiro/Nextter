import css from 'styled-jsx/css';
import { colors } from '../../../../../styles/theme';

export default css`

  .coverPictureStep {
    display: flex;
    flex-direction: column;
    padding: 0 2em;
  }

  div {
    position: relative;
  }

  input {
    display: none;
  }

  .cover-picture-container {
    height: 130px;
    width: 100%;
    background-color: ${colors.backgroundAlt};
    margin-top: 4em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cover-picture {
    width: 100%;
    height: 100%;
    position: relative;
    opacity: 0.6;
  }

  .button {
    position: absolute;
  }

  .profile-picture-section {
    position: absolute;
    top: 8em;
    padding: 0 0.75em;
  }

  .container {
    padding: 0.1em;
    border: 2px solid ${colors.title};
    width: 130px;
    height: 130px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .profile-picture-container {
    position: relative;
    width: 126px;
    height: 124px;
    border-radius: 50%;
    overflow: hidden;
  }

  h1 {
    color: ${colors.title};
    font-size: 1.3rem;
  }

  p {
    color: ${colors.text};
    font-weight: 200;
    font-size: 0.8rem;
  }
`;
