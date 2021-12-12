import css from 'styled-jsx/css';
import { colors } from '../../../../styles/theme';

export default css`

  .container {
    border-bottom: 1px solid ${colors.gray};
  }

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
  }

  li:hover {
    transition: .2s ease;
    background-color: ${colors.rgbaTitle};
  }

  a {
    display: flex;
    align-items: center;
    border-bottom: 4px solid ${colors.primary};
    height: 100%;
    color: ${colors.text};
  }

  .active-path {
    color: ${colors.title};
  }

`;
