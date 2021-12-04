import css from 'styled-jsx/css';
import { colors } from '../../../styles/theme';
import { breakpoints } from '../../../styles/breakpoints';

export default css`
    div {
      display: none;
      padding: 1em;
      padding-bottom: 0;
      gap: 0.75em;
      border-bottom: 1px solid ${colors.gray};
    }

    form {
      width: 100%;
    }

    textarea {
    background: transparent;
    border: none;
    color: ${colors.title};
    font-size: 1.35rem;
    min-height: 28px;
    outline: none;
    padding: .5em 0;
    resize: none;
    width: 100%;
    border-radius: 10px;
  }

  textarea::placeholder {
    color: #9897A9;
  }

  @media (min-width: ${breakpoints.tablet}) {
    div {
      display: flex;
    }
  }
`;
