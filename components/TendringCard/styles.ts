import css from 'styled-jsx/css';
import { colors } from '../../styles/theme';

export default css`
  article {
    width: 100%;
    padding: 12px 1em;
    display: flex;
    gap: 0.5em;
    transition: 0.2s ease;
    cursor: pointer;
  }

  article:hover {
    background-color: ${colors.rgbaTitle};
    transition: 0.2s ease;
  }

  p {
    font-size: 0.7rem;
    color: ${colors.text};
  }

  h3 {
    font-size: .9rem; 
    color: ${colors.title};
    margin: 0.25em 0;
  }

  .image-container {
    position: relative;
    width: 68px;
    height: 68px;
    border-radius: 12px;
    overflow: hidden;
    flex-shrink: 0;
  }
`;
