import css from 'styled-jsx/css';
import { colors, fonts } from '../../../../../../styles/theme';

export default css`
  div {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  input {
    background: ${colors.backgroundAlt};
    border-radius: 4px;
    border: none;
    color: ${colors.title};
    font-family: ${fonts.base};
    font-size: 1.15rem;
    height: 56px;
    width: 100%;
    padding-left: 1.4em;
    outline: 1px solid ${colors.text};
  }

  input:focus {
    outline: 2px solid ${colors.primary};
  }

  small {
    color: #F5323E;
    padding: 0.5em 12px;
  }

  span {
    position: absolute;
    top: .67em;
    left: .5em;
    font-size: 1.25rem;
    color: ${colors.title};
  }

  .input-error:focus + .label-error {
    color: ${colors.red};
  }

  .input-error:focus {
    outline: 2px solid ${colors.red};
  }

  .loader-container {
    position: absolute;
    right: 1em;
    top: 1em;
  }
`;
