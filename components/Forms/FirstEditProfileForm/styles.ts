import css from 'styled-jsx/css';
import { colors } from '../../../styles/theme';
import { breakpoints } from '../../../styles/breakpoints';

export default css`
  form {
    display: grid;
    grid-template-rows: 53px 1fr;
    width: 100%;
    height: 100vh;
    background-color: ${colors.background};
    border-radius: 1rem;
    position: relative;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
  }

  @media (min-width: ${breakpoints.tablet}) {
    form {
      width: 600px;
      height: 650px;
    }
  }
`;
