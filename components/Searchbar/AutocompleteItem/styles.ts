import css from 'styled-jsx/css';
import { breakpoints } from '../../../styles/breakpoints';
import { colors } from '../../../styles/theme';

export default css`

  li {
    padding: 0.5em 1em;
  }

  a {
      display: flex;
      gap: .75em;
  }

  section {
    position: relative;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
  }

  h3 {
    font-size: 0.9rem;
  }

  p, span {
    color: ${colors.text};
    font-size: 0.8rem;
    overflow: hidden;
    text-oveflow: ellipsis;
  }

  @media (min-width: ${breakpoints.tablet}) {
    div {
      display: block;
    }
  }
`;
