import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';

import { IUser } from '../../interfaces';

import DotsIcon from '../Icons/Dots';
import style from './styles/ContentSectionStyles';
import { colors } from '../../styles/theme';

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
              <DotsIcon 
                height="20px"
                width="20px"
                stroke="currentColor"
                color={colors.text}
                fill={colors.text} 
              />
            </button>
          </section>
        }
      </header>
      <style jsx>{style}</style>
    </>
  );
};
