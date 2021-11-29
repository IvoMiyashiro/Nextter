import css from 'styled-jsx/css';
import { breakpoints } from '../../../styles/breakpoints';
import { colors } from '../../../styles/theme';

export default css`
  div {
    width: 100%;
  }

  header {
    align-items: center;
    display: flex;
    height: 20px;
    justify-content: space-between;
  }

  section {
    align-items: center;
    display: flex;
    gap: .5em;
    max-width: 225px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h2 {
    color: ${colors.title};
    font-size: 1rem;
    font-weight: 600;
  }

  p {
    color: ${colors.text};
    font-size: .85rem;
  }
  
  button {
    background: transparent;
    border-radius: 50%;
    color: ${colors.text};
    padding: 0;
    padding: 0.5em;
  }

  main {
    color: ${colors.title};
    font-size: .9rem;
    margin-bottom: .75em;
    margin-top: .25em;
  }

  .list-item-fav:hover {
    color: ${colors.fav};
  }

  .list-item-fav:hover .button-fav {
    background: rgba(249, 24, 128, 0.1);
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

  @media (min-width: ${breakpoints.desktop}) {
      section {
      max-width: auto;
    }
  }

`;
