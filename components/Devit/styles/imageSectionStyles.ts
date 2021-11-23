import css from 'styled-jsx/css';
import { colors } from '../../../styles/theme';

export default css`
div {
  width: 100%;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}

section {
  display: flex;
  align-items: center;
  gap: .5em;
}

h2 {
  font-size: 1rem;
  color: ${colors.title};
  font-weight: 600;
}

p {
  color: ${colors.text};
  font-size: .85rem;
}

span {
  font-size: .8rem;
  margin-top: -0.2em;
}

button {
  padding: 0;
  background: transparent;
  color: ${colors.text};
}

main {
  margin: .25em 0;
  margin-bottom: .75em;
  color: ${colors.title};
  font-size: .9rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 3em;
}

li {
  display: flex;
  align-items: center;
  gap: .5em;
  color: ${colors.text};
  cursor: pointer;
}

button {
  padding: 0.5em;
  border-radius: 50%;
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

`;
