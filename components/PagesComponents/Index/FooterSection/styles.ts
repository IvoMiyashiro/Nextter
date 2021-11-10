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
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }

  p {
    color: ${colors.text};
    font-size: 0.85rem;
  }

  span {
    color: ${colors.primary};
    opacity: .7;
    font-size: 0.85rem;
  }

  a {
    font-size: .85rem;
    color: ${colors.primary};
    margin-left: .5em;
  }
`;
