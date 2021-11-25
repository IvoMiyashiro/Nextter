import { useContext, useState } from 'react';

import { IUser } from '../../interfaces';

import { useDevitFaved } from '../../hooks/useDevitFaved';
import { AppContext } from '../../context/userContext';
import { fetchWithToken } from '../../helpers/fetchWithToken';

import { ContentHeader } from './ContentHeader';
import { ContentMain } from './ContentMain';

import { AiOutlineRetweet } from 'react-icons/ai';
import { FiMessageCircle } from 'react-icons/fi';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { colors } from '../../styles/theme';
import styles from './styles/ContentSectionStyles';
import { Modal } from '../Modal';
import { CommentForm } from '../Forms/CommentForm';

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
  img,
}: IProps) => {
  
  const { state } = useContext(AppContext);
  const [isDevitFaved, setDevitFaved]: any = useDevitFaved(state.uid, favs);
  const [currentFavs, setCurrentFavs] = useState(favs.length);
  const [isFavOnMouseOver, setFavMouseOver] = useState<boolean>(false);
  const [isCommentsOnMouseOver, setCommentsOnMouseOver] = useState<boolean>(false);
  const [isRevitOnMouseOver, setRevitOnMouse] = useState<boolean>(false);
  const [isCommentFormOpen, setCommentFormOpen] = useState(false);

  const handleFavDevit = async() => {
    try {
      setDevitFaved((prev: boolean) => !prev);
      await fetchWithToken(
        `/devit/${id}/fav`,
        {uid: state.uid},
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
      <div>
        <ContentHeader
          user={user}
          username={'ivomiyashiro'}
          createdAt={createdAt}
        />
        <ContentMain 
          content={content}
          img={img}
        />
        <footer>
          <ul>
            <li
              onClick={() => setCommentFormOpen(true)} 
              onMouseOver={() => setCommentsOnMouseOver(true)}
              onMouseLeave={() => setCommentsOnMouseOver(false)}
              className="list-item-comments"
            >
              <button className="button-comment"><FiMessageCircle size="16px" color={isCommentsOnMouseOver ? colors.comments : ''} /></button>
              <span>{comments.length}</span>
            </li>
            <li
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
        {
          isCommentFormOpen
          &&
          <Modal handleOpenModal={setCommentFormOpen}>
            <CommentForm
              id={id}
              user={user}
              content={content}
              createdAt={createdAt}
              img={img}
              handleOpenModal={setCommentFormOpen}
            />
          </Modal>
        }
      </div>
      <style jsx>{styles}</style>
    </>
  );
};
