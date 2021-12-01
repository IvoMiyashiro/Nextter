import { useContext, useState } from 'react';

import { useDevitFaved } from '../../hooks/useDevitFaved';
import { fetchWithToken } from '../../helpers/fetchWithToken';
import { AppContext } from '../../context/AppContext';

import { AiOutlineRetweet } from 'react-icons/ai';
import { FiMessageCircle } from 'react-icons/fi';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { colors } from '../../styles/theme';
import style from './styles/ContentFooterStyles';

interface IProps {
  id: string
  favs: string[]
  revits: any
  comments: any
  handleCommentOpen: (value: boolean) => void
  handleRevitMenuOpen: (value: boolean) => void
}

export const ContentFooter = ({ 
  id,
  favs,
  revits,
  comments,
  handleCommentOpen,
  handleRevitMenuOpen
}: IProps) => {

  const { userState } = useContext(AppContext);
  const [isDevitFaved, setDevitFaved]: any = useDevitFaved(userState.id, favs);
  const [currentFavs, setCurrentFavs] = useState(favs.length);
  const [isFavOnMouseOver, setFavMouseOver] = useState<boolean>(false);
  const [isCommentsOnMouseOver, setCommentsOnMouseOver] = useState<boolean>(false);
  const [isRevitOnMouseOver, setRevitOnMouse] = useState<boolean>(false);

  const handleFavDevit = async() => {
    try {
      setDevitFaved((prev: boolean) => !prev);
      await fetchWithToken(
        `/devit/${id}/fav`,
        {uid: userState.id},
        'PUT'
      );
  
      if (isDevitFaved) {
        return setCurrentFavs(prev => (prev - 1));
      }
  
      return setCurrentFavs(prev => (prev + 1)); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <footer>
        <ul>
          <li
            onClick={() => handleCommentOpen(true)}
            onMouseOver={() => setCommentsOnMouseOver(true)}
            onMouseLeave={() => setCommentsOnMouseOver(false)}
            className="list-item-comments"
          >
            <button className="button-comment"><FiMessageCircle size="16px" color={isCommentsOnMouseOver ? colors.comments : ''} /></button>
            <span>{comments.length}</span>
          </li>
          <li
            onClick={() => handleRevitMenuOpen(true)}
            onMouseOver={() => setRevitOnMouse(true)}
            onMouseLeave={() => setRevitOnMouse(false)}
            className="list-item-revits"
          >
            <button className="button-revit"><AiOutlineRetweet size="16px" color={isRevitOnMouseOver ? colors.revits : ''} /></button>
            <span>{revits.length}</span>
          </li>
          <li 
            onClick={handleFavDevit}
            onMouseOver={() => setFavMouseOver(true)}
            onMouseLeave={() => setFavMouseOver(false)}
            className="list-item-fav"
          >
            {
              !isDevitFaved
                ? <button className="button-fav"><MdFavoriteBorder size="16px" color={isFavOnMouseOver ? colors.fav : ''}/></button>
                : <button className="button-fav"><MdFavorite size="16px" color={colors.fav} /></button>
            } 
            <span>{currentFavs}</span>
          </li>
        </ul>
      </footer>

      <style jsx>{style}</style>
    </>
  );
};
