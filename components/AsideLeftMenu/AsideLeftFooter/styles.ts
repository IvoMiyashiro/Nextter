import css from 'styled-jsx/css';
import { breakpoints } from '../../../styles/breakpoints';
import { colors } from '../../../styles/theme';

export default css`
  footer {
    align-items: center;
    border-radius: 9999px;
    cursor: pointer;
    display: flex;
    height: 64px;
    margin-bottom: 1.5em;
    margin-top: auto;
    padding: 1em;
    position: relative;
  }

  footer:hover {
    background-color: ${colors.rgbaTitle};
  }

  .image-container {
    border-radius: 50%;
    height: 40px;
    overflow: hidden;
    position: relative;
    width: 40px;
  }

  .user-container {
    margin-left: 0.75em;
  }

  h3 {
    color: ${colors.title};
    font-size: 0.9rem;
  }
  
  p {
    color: ${colors.text};
    font-size: 0.9rem;
  }

  .dots-container {
    margin-left: auto;
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {

    footer {
      padding: 0.75em;
    }

    .user-container,
    .dots-container {
      display: none;
    }
  }
`;
