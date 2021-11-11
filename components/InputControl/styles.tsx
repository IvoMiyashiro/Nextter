import css from 'styled-jsx/css';
import { colors, fonts } from '../../styles/theme';

export default css`
  div {
    display: flex;
    flex-direction: column;
    color: ${colors.text};
    margin-top: 2em;
  }

  input {
    height: 50px;
    font-size: 1.15rem;
    border-radius: 4px;
    background: ${colors.backgroundAlt};
    outline: 2px solid ${colors.primary};
    padding-left: .75em;
    border: none;
    margin-top: .5em;
    color: ${colors.title};
    font-family: ${fonts.base};
  }

  small {
    margin-top: .75em;  
    margin-left: .75em;
    color: #F5323E;
  }

`;
