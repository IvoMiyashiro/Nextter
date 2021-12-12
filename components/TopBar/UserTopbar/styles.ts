import css from 'styled-jsx/css';
import { colors } from '../../../styles/theme';

export default css`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.gray};
    padding: 0 1em;
    position: sticky;
    top: 0;
    background: ${colors.background};
    width: 100%;
    z-index: 8;
  }

  section {
    display: flex;
    align-items: center;
    gap: 1.5em;
    height: 53px;
  }

  h2 {
    color: ${colors.title};
    font-size: 1.15rem;
  }

  p {
    font-size: 0.8rem;
    color: ${colors.text};
  }

  button {
    display: flex;
    aling-items: center;
    justify-content: center;
    position: relative;
    height: 34px;
    width: 34px;
    border-radius: 50%;
    padding: 0;
    padding-top: .25em;
    overflow: hidden;
    display: block;
    background: transparent;
  }

  button:hover {
    background: ${colors.rgbaTitle};
  }
`;
