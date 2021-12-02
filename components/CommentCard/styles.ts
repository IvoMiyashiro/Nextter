import css from 'styled-jsx/css';
import { colors } from '../../styles/theme';

export default css`
  section {
    display: flex;
    gap: .75em;
    width: 100%;
    padding: 0 1em;
    padding-top: .5em;
    background: ${colors.background};
    transition: background .2s ease-in-out;
    cursor: pointer;
  }

  section:last-child {
    border-bottom: 1px solid ${colors.gray};
    padding-bottom: .75em;
  }

  div {
    width: 100%;
  }

  .profile-img-section {
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5em;
  }

  .line {
    width: 2px;
    background-color: rgb(61, 84, 102);
    height: 100%;
    padding: 0;
  }

  section:hover {
    transition: background .2s ease-in-out;
    background: rgba(17, 34, 64, 0.4)
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    color: ${colors.text}
  }

  li {
    display: inline-flex;
    align-items: center;
    gap: .5em;
    color: ${colors.text};
    cursor: pointer;
  }

  span {
    font-size: .8rem;
  }

  button {
    background: transparent;
    color: ${colors.text};
    border-radius: 50%;
    padding: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .list-item-fav:hover {
    color: ${colors.fav};
  }

  .list-item-fav:hover .button-fav {
    background: rgba(249, 24, 128, 0.2);
  }
`;
