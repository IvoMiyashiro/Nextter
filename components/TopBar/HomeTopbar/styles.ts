import css from 'styled-jsx/css';
import { colors } from '../../../styles/theme';
import { breakpoints } from '../../../styles/breakpoints';

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
    color: ${colors.title}
  }

  button {
    position: relative;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    padding: 0;
    overflow: hidden;
    display: block;
  }

  @media (min-width: ${breakpoints.tablet}) {
    button {
      display: none;
    }
  }
`;
