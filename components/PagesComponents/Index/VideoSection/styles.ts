import css from 'styled-jsx/css';
import { colors } from '../../../../styles/theme';
import { breakpoints } from '../../../../styles/breakpoints';

export default css`
   div {
    display: none;
  }

  video {
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
  }

  section {
    padding: 1em;
    background: ${colors.background};
    border-radius: 50% 0 50% 0;
    position: absolute;
  }

  @media (min-width: ${breakpoints.desktop}) {
    div {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
