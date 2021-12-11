import css from 'styled-jsx/css';
import { boxShadow, colors, fonts } from '../../styles/theme';

export default css`
  form {
    width: 100%;
    background: ${colors.rgbaTitle};
    border-radius: 9999px;
    display: flex;
    align-items: center;
    height: 44px;
    position: relative;
  }

  button {
    background: transparent;
    margin-left: 1.5em;
    padding: 0;
    margin-top: 0.25em;
  }

  input {
    margin-left: 1em;
    background: transparent;
    border: none;
    width: 100%;
    height: 100%;
    outline: none;
    color: ${colors.title};
    font-size: .9rem;
    font-family: ${fonts.base}
  }

  input::placeholder {
    color: ${colors.text};
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration { 
    margin-right: 1.5em;
    font-size: 1rem;
  }

  div {
    position: absolute;
    top: 4em;
    background: ${colors.background};
    width: 100%;
    box-shadow: ${boxShadow};
    border-radius: 8px;
    padding: 0.5em 0;
    max-height: 300px;
    overflow-y: auto;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  p {
    color: ${colors.primary};
  }
`;
