import { useContext, useState } from 'react';

import { IComment } from '../../interfaces';

import { useGetUser } from '../../hooks/useGetUser';
import { AppContext } from '../../context/AppContext';
import { useDevitFaved } from '../../hooks/useDevitFaved';
import { favComment, unFavComment } from '../../actions/comments';

import { ProfileImage } from '../Devit/ProfileImage';
import { ContentHeader } from '../Devit/ContentHeader';
import { ContentMain } from '../Devit/ContentMain';

import FavIcon from '../Icons/Fav';
import FavFill from '../Icons/FavFill';
import { colors } from '../../styles/theme';
import styles from './styles';

interface IProps {
  comment: IComment
  isLastComment: boolean
  devitId: string
}

export const CommentCard = ({ comment, isLastComment, devitId }: IProps) => {

  const {
    id,
    uid,
    content,
    url,
    favs,
    createdAt,
  } = comment;

  const {userState, devitDispatch} = useContext(AppContext);
  const [isDevitFaved, setDevitFaved]: any = useDevitFaved(userState.id, favs);
  const [currentFavs, setCurrentFavs] = useState(favs.length);
  const [isFavOnMouseOver, setFavMouseOver] = useState<boolean>(false);
  const {user} = useGetUser(uid);

  const handleFavComment = async() => {

    setDevitFaved((prev: boolean) => !prev);
    
    if (isDevitFaved) {
      unFavComment(devitId, id, uid, devitDispatch);
      return setCurrentFavs(prev => (prev - 1));
    }

    favComment(devitId, id, uid, devitDispatch);
    setCurrentFavs(prev => (prev + 1)); 
  };

  return (
    <>
      <section>
        <div className="profile-img-section">
          <ProfileImage
            profileImage={user.profilePicture} 
            alt={user.name}
          />
          {
            !isLastComment
            &&
            <div className="line"></div>
          }
        </div>
        <div>
          <ContentHeader
            user={user}
            username={'ivomiyashiro'}
            createdAt={createdAt}
            isComment={true}
          />
          <ContentMain
            content={content}
            img={url}
          />
          <footer>
            <ul>
              <li 
                onClick={handleFavComment}
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
        </div>
      </section>

      <style jsx>{styles}</style>
    </>
  );
};
