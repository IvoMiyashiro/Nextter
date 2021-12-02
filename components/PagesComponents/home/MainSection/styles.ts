import css from 'styled-jsx/css';
import { breakpoints } from '../../../../styles/breakpoints';
import { colors } from '../../../../styles/theme';

export default css`

  .home-layout {
    display: grid;
    width: 1240px;
    grid-template-columns: 260px 600px 375px;
    margin: 0 auto;
  }

  main {
    border-right: 1px solid ${colors.gray};
  }

  @media (min-width: ${breakpoints.desktop}) {

  }
`;
