import css from 'styled-jsx/css';
import { colors } from '../../../styles/theme';

export default css`
  ul {
    display: flex;
    gap: 3em;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    align-items: center;
    color: ${colors.text};
    cursor: pointer;
    display: flex;
    gap: .5em;
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

  span {
    font-size: .8rem;
  } 

  .list-item-fav:hover {
    color: ${colors.fav};
  }

  .list-item-fav:hover .button-fav {
    background: rgba(249, 24, 128, 0.2);
  }

  .list-item-comments:hover {
    color: ${colors.comments};
  }

  .list-item-comments:hover .button-comment {
    background: rgba(29, 155, 240, 0.1);
  }

  .list-item-revits:hover {
    color: ${colors.revits};
  }

  .list-item-revits:hover .button-revit {
    background: rgba(0, 186, 124, 0.1);
  }
`;
