import css from 'styled-jsx/css';
import { colors } from '../../styles/theme';

export default css`
  div {
    display: flex;
    gap: .5em;
    justify-content: space-between;
    margin-top: 1em;
    position: relative;
  }

  input {
    background: ${colors.backgroundAlt};
    border-radius: 4px;
    border: none;
    color: ${colors.title};
    font-size: 1rem;
    height: 56px;
    outline: 1px solid ${colors.text};
    padding: 0 .5em;
    width: 100%;
  }

  input:focus {
    outline: 2px solid ${colors.primary};
  }

  .input-error {
    outline: 1px solid ${colors.red};
    color: ${colors.red};
  }

  small {
    color: ${colors.red};
    margin-top: .75em;  
    position: absolute;
    top: 53px;
    padding: 0 12px;
  }
`;
