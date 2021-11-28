import useTimeAgo from '../../hooks/useTimeAgo';

import { IUser } from '../../interfaces';

import { BsThreeDots } from 'react-icons/bs';
import style from './styles/ContentSectionStyles';

interface IProps {
  user: IUser
  username: string
  createdAt: Date
  isComment: boolean
}

export const ContentHeader = ({ user, username, createdAt, isComment }: IProps ) => {
  
  // const timeAgo = useTimeAgo( +new Date(createdAt));

  return (
    <>
      <header>
        <section>
          <h2>{user.name}</h2>
          <p>@{username}</p>
          {/* <p>· {timeAgo}</p> */}
        </section>
        {
          !isComment
          &&
          <section> 
            <button>
              <BsThreeDots size="22px" />
            </button>
          </section>
        }
      </header>
      <style jsx>{style}</style>
    </>
  );
};
