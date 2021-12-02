import { useContext, useState } from 'react';

import { favDevit, unFavDevit } from '../../actions/devits';

import { useDevitFaved } from '../../hooks/useDevitFaved';
import { AppContext } from '../../context/AppContext';
import { HoverableButton } from '../Buttons/HoverableButton';

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
            className="list-item-comments"
          >
            <HoverableButton
              icon={CommentIcon}
              width="16px"
              height="16px"
              color={colors.comments}
              defaultColor={colors.text}
              backgroundColor={'rgba(29, 155, 240, 0.1)'}
            />
            <span>{comments.length}</span>
          </li>
          <li
            onClick={() => handleRevitMenuOpen(true)}
            className="list-item-revits"
          >
            <HoverableButton
              icon={RedevitIcon}
              width="16px"
              height="16px"
              color={colors.revits}
              defaultColor={colors.text}
              backgroundColor={'rgba(0, 186, 124, 0.1)'}
            />
            <span>{revits.length}</span>
          </li>
          <li 
            onClick={handleFavDevit}
            className="list-item-fav"
          >
            {
              !isDevitFaved
                ? (
                  <HoverableButton
                    icon={FavIcon}
                    width="16px"
                    height="16px"
                    color={colors.fav}
                    defaultColor={colors.text}
                    backgroundColor={'rgba(249, 24, 128, 0.2)'}
                  />
                )
                : (
                  <HoverableButton
                    icon={FavFill}
                    width="16px"
                    height="16px"
                    color={colors.fav}
                    defaultColor={colors.fav}
                    backgroundColor={'rgba(249, 24, 128, 0.2)'}
                  />
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
