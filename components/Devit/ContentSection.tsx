import { useState } from 'react';

import { IUser } from '../../interfaces';
import { ImageSection } from './ImageSection';

import { AiOutlineRetweet } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { FiMessageCircle } from 'react-icons/fi';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import styles from './styles/imageSectionStyles';
import { colors } from '../../styles/theme';

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

  const [isFav, setFav] = useState<boolean>(false);
  const [isFavHover, setFavHover] = useState<boolean>(false);
  const [isCommentsHover, setCommentsHover] = useState<boolean>(false);
  const [isRevitHover, setRevitHover] = useState<boolean>(false);
  const [favLenght, setFavLenght] = useState<number>(favs.length);

  const handleOnMouseOverFavIcon = () => {
    setFavHover(true);
  };

  const handleOnMouseLeaveFavIcon = () => {
    setFavHover(false);
  };

  const handleOnMouseOverCommentsIcon = () => {
    setCommentsHover(true);
  };
  const handleOnMouseLeaveCommentsIcon = () => {
    setCommentsHover(false);
  };
  const handleOnMouseOverRevitIcon = () => {
    setRevitHover(true);
  };
  const handleOnMouseLeaveRevitIcon = () => {
    setRevitHover(false);
  };

  const handleFavDevit = () => {
    setFav(prev => !prev);
    if (favs.length === favLenght) {
      return setFavLenght(prev => (prev + 1));
    }
    
    setFavLenght(prev => (prev - 1));
  };
  
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
            <li 
              onMouseOver={handleOnMouseOverCommentsIcon}
              onMouseLeave={handleOnMouseLeaveCommentsIcon}
              className="list-item-comments"
            >
              <button className="button-comment"><FiMessageCircle size="16px" color={isCommentsHover ? colors.comments : ''} /></button>
              <span>{comments.length}</span>
            </li>
            <li
              onMouseOver={handleOnMouseOverRevitIcon}
              onMouseLeave={handleOnMouseLeaveRevitIcon}
              className="list-item-revits"
            >
              <button className="button-revit"><AiOutlineRetweet size="16px" color={isRevitHover ? colors.revits : ''} /></button>
              <span>{revits.length}</span>
            </li>
            <li 
              onClick={handleFavDevit}
              onMouseOver={handleOnMouseOverFavIcon}
              onMouseLeave={handleOnMouseLeaveFavIcon}
              className="list-item-fav"
            >
              {
                !isFav
                  ? <button className="button-fav"><MdFavoriteBorder size="16px" color={isFavHover ? colors.fav : ''}/></button>
                  : <button className="button-fav"><MdFavorite size="16px" color={colors.fav} /></button>
              } 
              <span>{favLenght}</span>
            </li>
          </ul>
        </footer>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};
