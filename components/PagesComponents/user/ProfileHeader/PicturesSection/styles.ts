import css from 'styled-jsx/css';
import { colors } from '../../../../../styles/theme';

export default css`

  section {
    position: relative;
  }

  .cover-picture-container {
    position: relative;
    width: 100%;
    height: 200px;
  }

  .profile-picture-container {
    position: absolute;
    bottom: -2.75em;
    border: 4px solid ${colors.background};
    border-radius: 50%;
    margin: 0 1em;
  }

  .profile-picture {
    width: 133px;
    height: 133px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
  }
`;
