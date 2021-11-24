import { useContext, useState } from 'react';

import { IUser } from '../../interfaces';
import { ImageSection } from './ImageSection';

import { fetchWithToken } from '../../helpers/fetchWithToken';
import { useDevitFaved } from '../../hooks/useDevitFaved';
import useTimeAgo from '../../hooks/useTimeAgo';
import { AppContext } from '../../context/userContext';

import { AiOutlineRetweet } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { FiMessageCircle } from 'react-icons/fi';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { colors } from '../../styles/theme';
import styles from './styles/imageSectionStyles';

interface IProps {
  id: string,
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
  id,
  user,
  content,
  favs,
  revits,
  comments,
  createdAt,
  img
}: IProps) => {
  
  const { state } = useContext(AppContext);
  const timeAgo = useTimeAgo( +new Date(createdAt));
  const [isDevitFaved, setDevitFaved]: any = useDevitFaved(state.uid, favs);
  const [currentFavs, setCurrentFavs] = useState(favs.length);
  const [isFavHover, setFavHover] = useState<boolean>(false);
  const [isCommentsHover, setCommentsHover] = useState<boolean>(false);
  const [isRevitHover, setRevitHover] = useState<boolean>(false);

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

  const handleFavDevit = async() => {
    await fetchWithToken(`/devit/${id}/fav`, {uid: state.uid}, 'PUT');
    setDevitFaved((prev: boolean) => !prev);

    if (isDevitFaved) {
      return setCurrentFavs(prev => (prev - 1));
    }

    return setCurrentFavs(prev => (prev + 1)); 
  };

  return (
    <>
      <div>
        <header>
          <section>
            <h2>{user.name}</h2>
            <p>@username</p>
            <p>· {timeAgo}</p>
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
            !!img && <ImageSection imgUrl={img}/>
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
                !isDevitFaved
                  ? <button className="button-fav"><MdFavoriteBorder size="16px" color={isFavHover ? colors.fav : ''}/></button>
                  : <button className="button-fav"><MdFavorite size="16px" color={colors.fav} /></button>
              } 
              <span>{currentFavs}</span>
            </li>
          </ul>
        </footer>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};
