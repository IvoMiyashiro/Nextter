import css from 'styled-jsx/css';
import { breakpoints } from '../../../styles/breakpoints';
import { boxShadow, colors } from '../../../styles/theme';

export default css`
  div {
    background-color: ${colors.background};
    border-radius: 8px;
    box-shadow: ${boxShadow};
    display: none;
    height: 100px;
    position: absolute;
    right: -1.5em;
    top: 3.5em;
    width: 374px;
  }

  p {
    color: ${colors.title};
    font-size: 0.9rem;
    padding: 0.75em;
    text-align: center;
    padding-top: 1.25em;
  }

  @media (min-width: ${breakpoints.tablet}) {
    div {
      display: block;
    }
  }
`;
