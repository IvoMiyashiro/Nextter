import { AiOutlineRetweet } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { FiMessageCircle } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';
import { IUser } from '../../interfaces';
import { colors } from '../../styles/theme';
import { ImageSection } from './ImageSection';

interface IProps {
  user: IUser,
  img: string
  content: string
  favs: Array<any>
  revits: Array<any>
  comments: Array<any>
  createdAt: Date
  updatedAt: Date
}

export const ContentSection = ({ 
  user,
  content,
  favs,
  revits,
  comments,
  createdAt,
  updatedAt,
  img
}: IProps) => {

  return (
    <>
      <div>
        <header>
          <section>
            <h2>{user.name}</h2>
            <p>@username</p>
            <p> &nbsp;- 12h</p>
          </section>
          <section>
            <button>
              <BsThreeDots size="22px" />
            </button>
          </section>
        </header>
        <main>
          {content}
          {
            img && <ImageSection imgUrl={img}/>
          }
        </main>
        <footer>
          <ul>
            <li>
              <FiMessageCircle size="20px" />
              <p>{comments.length}</p>
            </li>
            <li>
              <AiOutlineRetweet size="20px" />
              <p>{revits.length}</p>
            </li>
            <li>
              <MdFavoriteBorder size="20px" />
              <p>{favs.length}</p>
            </li>
          </ul>
        </footer>
      </div>
      <style jsx>{`

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
          gap: .5em;
          color: ${colors.text};
        }
      `}</style>
    </>
  );
};
