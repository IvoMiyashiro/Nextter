import { useContext, useState } from 'react';

import { favDevit, unFavDevit } from '../../actions/devits';

import { useDevitFaved } from '../../hooks/useDevitFaved';
import { AppContext } from '../../context/AppContext';

import RedevitIcon from '../Icons/Redevit';
import FavIcon from '../Icons/Fav';
import FavFill from '../Icons/FavFill';
import CommentIcon from '../Icons/Comment';
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

  const {userState, devitDispatch} = useContext(AppContext);
  const [isDevitFaved, setDevitFaved]: any = useDevitFaved(userState.id, favs);
  const [currentFavs, setCurrentFavs] = useState(favs.length);
  const [isFavOnMouseOver, setFavMouseOver] = useState<boolean>(false);
  const [isCommentsOnMouseOver, setCommentsOnMouseOver] = useState<boolean>(false);
  const [isRevitOnMouseOver, setRevitOnMouse] = useState<boolean>(false);

  const handleFavDevit = async() => {

    setDevitFaved((prev: boolean) => !prev);
    
    if (isDevitFaved) {
      unFavDevit(id, userState.id, devitDispatch);
      return setCurrentFavs(prev => (prev - 1));
    }

    favDevit(id, userState.id, devitDispatch);
    setCurrentFavs(prev => (prev + 1)); 
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
            <button className="button-comment">
              <CommentIcon
                width="16px"
                heigth="16px"
                stroke="currentColor"
                stroke-width="0"
                fill={isCommentsOnMouseOver ? colors.comments : colors.text} 
                color={isCommentsOnMouseOver ? colors.comments : colors.text}
              />
            </button>
            <span>{comments.length}</span>
          </li>
          <li
            onClick={() => handleRevitMenuOpen(true)}
            onMouseOver={() => setRevitOnMouse(true)}
            onMouseLeave={() => setRevitOnMouse(false)}
            className="list-item-revits"
          >
            <button className="button-revit">
              <RedevitIcon 
                width="16px"
                heigth="16px"
                stroke="currentColor"
                stroke-width="0"
                fill={isRevitOnMouseOver ? colors.revits : colors.text} 
                color={isRevitOnMouseOver ? colors.revits : colors.title} 
              />
            </button>
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
                ? (
                  <button className="button-fav">
                    <FavIcon 
                      width="16px"
                      heigth="16px"
                      stroke="currentColor"
                      stroke-width="0"
                      fill={isFavOnMouseOver ? colors.fav : colors.text} 
                      color={isFavOnMouseOver ? colors.fav : colors.text} 
                    />
                  </button>
                )
                : (
                  <button className="button-fav">
                    <FavFill 
                      width="16px"
                      heigth="16px"
                      stroke="currentColor"
                      stroke-width="0"
                      fill={isFavOnMouseOver ? colors.fav : colors.fav} 
                      color={isFavOnMouseOver ? colors.fav : colors.fav} 
                    />
                  </button>
                )
            } 
            <span>{currentFavs}</span>
          </li>
        </ul>
      </footer>

      <style jsx>{style}</style>
    </>
  );
};
