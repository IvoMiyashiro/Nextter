import css from 'styled-jsx/css';
import { breakpoints } from '../../../styles/breakpoints';
import { colors } from '../../../styles/theme';

export default css`
  div {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 4px;
    background-color: ${colors.background};
    box-shadow:
      0px 0px 3.6px ${colors.rgbaTitle},
      0px 0px 10px ${colors.rgbaTitle},
      0px 0px 24.1px ${colors.rgbaTitle},
      0px 0px 30px ${colors.rgbaTitle}
    ;
    z-index: 9;
    display: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  li {
    display: flex;
    align-items: center;
    gap: 1em;
    padding: 1em 0.75em;
  }

  li:hover {
    background-color: ${colors.rgbaTitle};
  }

  span {
    color: ${colors.title};
    font-size: 0.95rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    div {
      display: block;
    }
  }
`;
