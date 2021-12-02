import css from 'styled-jsx/css';
import { colors } from '../../styles/theme';

export default css`
  footer {
    align-items: center;
    box-shadow:
    0px 0px 1.7px rgba(0, 0, 0, 0.098),
    0px 0px 4.1px rgba(0, 0, 0, 0.141),
    0px 0px 7.8px rgba(0, 0, 0, 0.175),
    0px 0px 13.8px rgba(0, 0, 0, 0.209),
    0px 0px 25.9px rgba(0, 0, 0, 0.252),
    0px 0px 62px rgba(0, 0, 0, 0.35);
    bottom: 0;
    display: flex;
    height: 52px;
    position: fixed;
    width: 100%;
    background: ${colors.background};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;
