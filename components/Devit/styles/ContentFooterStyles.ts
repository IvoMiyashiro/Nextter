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

  span {
    font-size: .8rem;
  } 

  .list-item-fav:hover {
    color: ${colors.fav};
  }
  
  .list-item-comments:hover {
    color: ${colors.comments};
  }

  .list-item-revits:hover {
    color: ${colors.revits};
  }
`;
