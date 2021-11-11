import css from 'styled-jsx/css';
import { colors, fonts } from '../../styles/theme';

export default css`
  div {
    color: ${colors.text};
    display: flex;
    flex-direction: column;
    position: relative;
  }

  input {
    background: ${colors.backgroundAlt};
    border-radius: 4px;
    border: none;
    color: ${colors.title};
    font-family: ${fonts.base};
    font-size: 1rem;
    height: 56px;
    margin-top: .5em;
    padding-top: 1.5em;
    padding-left: .75em;
    outline: 1px solid ${colors.text};
  }

  input:focus {
    outline: 2px solid ${colors.primary};
  }

  .input-error {
    outline: 1px solid ${colors.red};
  }

  label {
    font-size: 1.15rem;
    position: absolute;
    top: 24px;
    left: 13px;
    transition: top .2s ease;
  }

  .label-error {
    color: ${colors.red};
  }

  .input-error:focus + .label-error {
    color: ${colors.red};
  }

  .input-error:focus {
    outline: 2px solid ${colors.red};
  }

  input:focus + label{
    color: ${colors.primary};
    top: 16px;
    font-size: 0.8rem;
    transition: top .2s ease;
  }

  .active-input {
    top: 16px;
    font-size: 0.8rem;
  }

  small {
    margin-top: .75em;  
    color: #F5323E;
    position: absolute;
    top: 65px;
    padding: 0 12px;
  }

`;
