import css from 'styled-jsx/css';
import { breakpoints } from '../../../styles/breakpoints';
import { colors } from '../../../styles/theme';

export default css`
  footer {
    margin-right: 1.5em;
    margin-top: auto;
    margin-bottom: 1.5em;
    display: flex;
    align-items: center;
    border-radius: 9999px;
    height: 64px;
    padding: 1em;
    cursor: pointer;
  }

  footer:hover {
    background-color: ${colors.rgbaTitle};
  }

  .image-container {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
  }

  .user-container {
    margin-left: 0.75em;
  }

  h3 {
    color: ${colors.title};
    font-size: 0.9rem;
  }
  
  p {
    font-size: 0.9rem;
    color: ${colors.text};
  }

  .dots-container {
    margin-left: auto;
  }
`;
