import css from 'styled-jsx/css';
import { colors } from '../../../../../styles/theme';

export default css`
  nav {
    margin-top: 0.5em;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 53px;
  }

  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    transition: .2s ease;
    cursor: pointer;
  }

  li:hover {
    transition: .2s ease;
    background-color: ${colors.rgbaTitle};
  }

  a {
    display: flex;
    align-items: center;
    height: 100%;
    font-weight: 800;
    color: ${colors.text};
    border-bottom: 4px solid transparent;
  }

  .active-path {
    color: ${colors.title};
    border-bottom: 4px solid ${colors.primary};
  }
`;
