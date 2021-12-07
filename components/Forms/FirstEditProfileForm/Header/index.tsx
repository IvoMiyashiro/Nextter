import { colors } from '../../../../styles/theme';

export const Header = (
  {title, content}: {title: string, content: string}
) => {
  return (
    <>
      <header>
        <h1>{title}</h1>
        <p>{content}</p>
      </header>
      <style jsx>{`

        header {
          margin-top: 1.25em;
        }

        h1 {
          color: ${colors.title};
          font-size: 1.35rem;
        }

        p {
          color: ${colors.text};
          font-size: 0.85rem;
          margin-top: 1em;
        }
      `}</style>
    </>
  );
};
