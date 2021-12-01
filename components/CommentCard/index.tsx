import { useContext, useState } from 'react';

import { useGetUser } from '../../hooks/useGetUser';
import { AppContext } from '../../context/AppContext';
import { useDevitFaved } from '../../hooks/useDevitFaved';
import { fetchWithToken } from '../../helpers/fetchWithToken';

import { IComment } from '../../interfaces';

import { ProfileImage } from '../Devit/ProfileImage';
import { ContentHeader } from '../Devit/ContentHeader';
import { ContentMain } from '../Devit/ContentMain';

import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { colors } from '../../styles/theme';
import styles from './styles';

interface IProps {
  comment: IComment
  isLastComment: boolean
  devitId: String
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

  const { userState } = useContext(AppContext);
  const [isDevitFaved, setDevitFaved]: any = useDevitFaved(userState.id, favs);
  const [currentFavs, setCurrentFavs] = useState(favs.length);
  const [isFavOnMouseOver, setFavMouseOver] = useState<boolean>(false);
  const { user } = useGetUser(uid);

  const handleFavComment = async() => {
    try {
      setDevitFaved((prev: boolean) => !prev);
      await fetchWithToken(
        `/devit/${devitId}/comments/fav`,
        {uid: userState.id, commentId: id},
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
                        <MdFavoriteBorder size="16px" color={isFavOnMouseOver ? colors.fav : colors.text}/>
                      </button>
                    )
                    : ( 
                      <button className="button-fav">
                        <MdFavorite size="16px" color={colors.fav} />
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
