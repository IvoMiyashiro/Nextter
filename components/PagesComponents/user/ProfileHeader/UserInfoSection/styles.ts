import css from 'styled-jsx/css';
import { colors } from '../../../../../styles/theme';

export default css`

  .container {
    border-bottom: 1px solid ${colors.gray};
  }

  section {
    padding: 0.75em 1em;
  }

  .button-container {
    width: 150px;
    height: 36px;
    margin-left: auto;
  }

  span {
    font-size: 0.9rem;
  }

  .user-info-container {
    margin-top: 1em;
  }

  h1 {
    color: ${colors.title};
    font-size: 1.15rem;
    font-weight: 800;
  }

  p {
    color: ${colors.text};
    font-size: 0.9rem;
  }

  .user-bio {
    margin-top: 1em;
  }

  h4 {
    color: ${colors.title};
    font-size: 0.9rem;
    font-weight: 200;
  }

  .user-joined-container {
    color: ${colors.text};
    display: flex;
    gap: 0.5em;
    margin-top: 1em;
  }

  .follow-counter {
    display: flex;
    gap: 1em;
    margin-top: 1em;
  }

  .following-counter,
  .followers-counter {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  h3 {
    color: ${colors.title};
    font-size: 0.9rem;
  }
`;
