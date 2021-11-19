import css from 'styled-jsx/css';
import { colors } from '../../../../styles/theme';

export default css`
  footer {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 2em;
    max-width: 500px;
  }

  section {
    display: flex;
  }

  section:last-child {
    align-items: center;
    display: flex;
    margin-top: 1rem;
  }

  p {
    color: ${colors.text};
    font-size: 0.85rem;
  }

  span {
    color: ${colors.primary};
    font-size: 0.85rem;
    opacity: .7;
  }

  button {
    background: transparent;
    border: none;
    color: ${colors.primary};
    font-size: .85rem;
    margin-left: .5em;
    padding: 0;
  }
`;
