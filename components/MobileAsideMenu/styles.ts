import css from 'styled-jsx/css';
import { colors, fonts } from '../../styles/theme';
import { breakpoints } from '../../styles/breakpoints';

export default css`
    aside {
      height: 100vh;
      overflow: hidden;
      background-color: ${colors.background};
      display: flex;
      flex-direction: column;
      transition: .2s ease;
      position: fixed;
      left: 0;
      top: 0;
    }

    header {
      align-items: center;
      color: ${colors.title};
      display: flex;
      height: 54px;
      justify-content: space-between;
      padding: 0 1em;
      width: 100%;
      border-bottom: 1px solid ${colors.gray};
    }

    h2 {
      font-size: 1.05rem;
    }

    main {
      padding: 1em;
    }

    .image-container {
      border-radius: 50%;
      height: 40px;
      overflow: hidden;
      position: relative;
      width: 40px;
      margin-top: 0em;
    }
    
    section {
      margin-top: 1.25em;
    }

    h3 {
      color: ${colors.title};
      font-size: 1rem;
    }

    p {
      color: ${colors.text};
      margin-top: 0.25em;
      font-size: 0.85rem;
    }

    .follows-container {
      display: flex;
      gap: 1em;
    }

    .follows-counter {
      display: flex;
      align-items: center;
      gap: 0.5em;
    }

    span {
      color: ${colors.text};
      font-size: 0.85rem;
    }

    .icon-list-container {
      margin-top: 1.5em;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1.75em;
    }

    li {
      color: ${colors.title};
      display: flex;
      align-items: center;
      gap: .5em;
    }

    h4 {
      font-weight: 400;
    }

    footer {
      padding: 1em;
      margin-top: auto;
      border-top: 1px solid ${colors.gray};
    }

    button {
      border: none;
      background-color: transparent;
      color: ${colors.title};
      font-size: 1rem;
      font-family: ${fonts.base};
      height: 100%;
      width: 100%;
      text-align: left;
    }

    @media (min-width: ${breakpoints.desktop}) {
      aside {
        display: none;
      }
    }
`; 
