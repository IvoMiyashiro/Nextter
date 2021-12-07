import css from 'styled-jsx/css';
import { colors, fonts } from '../../../../styles/theme';

export default css`

  .profilePictureStep {
    display: flex;
    flex-direction: column;
    padding: 0 2em;
  }

  .select-img-container {
    display: flex;
    justify-content: center;
    margin-top: 4em;
    position: relative;
    padding: 1em;
  }

  .container {
    padding: 0.1em;
    border: 2px solid ${colors.title};
    border-radius: 50%;
    width: 184px;
    height: 184px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-container {
    position: relative;
    width: 178px;
    height: 178px;
    border-radius: 50%;
    overflow: hidden;
    opacity: 0.6;
  }

  .select-img-button {
    position: absolute;
  }

  input {
    display: none;
  }
`;
