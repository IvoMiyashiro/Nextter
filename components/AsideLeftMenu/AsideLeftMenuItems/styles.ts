import css from 'styled-jsx/css';
import { breakpoints } from '../../../styles/breakpoints';
import { colors } from '../../../styles/theme';

export default css`
 menu {
    margin: 0;
    padding: 0;
    margin-top: 1em;
  }

  ul {
    display: inline-flex;
    flex-direction: column;
    gap: 0.5em;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    align-items: center;
    border-radius: 9999px;
    color: ${colors.title};
    cursor: pointer;
    display: flex;
    font-size: 1.4rem;
    padding: 12px;
    transition: .2s ease;
  }

  li:hover {
    background-color: ${colors.rgbaTitle};
    transition: .2s ease;
  }

  h4 {
    font-size: 1.15rem;
    margin-left: 20px;
    margin-right: 16px;
  }

  section {
    height: 52px;
    margin-top: 1em;
    width: 225px;
  }

  div {
    margin-top: 1em;
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    h4 {
      display: none;
    }
  
    section {
      display: none;
    }
  }

  @media (min-width: ${breakpoints.desktop}) {
    div {
      display: none;
    }
  }
`;
