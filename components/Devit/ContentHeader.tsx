import useTimeAgo from '../../hooks/useTimeAgo';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';

import { IUser } from '../../interfaces';

import { BsThreeDots } from 'react-icons/bs';
import style from './styles/ContentSectionStyles';

interface IProps {
  user: IUser
  username: string
  createdAt: Date
  isComment: boolean
  handleHeaderActionsMenu: (value: boolean) => void
}

export const ContentHeader = ({
  user,
  username,
  createdAt,
  isComment,
  handleHeaderActionsMenu
}: IProps ) => {

  TimeAgo.addLocale(en);

  return (
    <>
      <header>
        <section>
          <h2>{user.name}</h2>
          <p>@{username}</p>
          <p>· <ReactTimeAgo date={new Date(createdAt)} locale="en-US" timeStyle="twitter" /></p>
        </section>
        {
          !isComment
          &&
          <section> 
            <button onClick={() => handleHeaderActionsMenu(true)}>
              <BsThreeDots size="22px" />
            </button>
          </section>
        }
      </header>
      <style jsx>{style}</style>
    </>
  );
};
