import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';

import { IUser } from '../../interfaces';

import DotsIcon from '../Icons/Dots';
import style from './styles/ContentSectionStyles';
import { colors } from '../../styles/theme';
import { HoverableButton } from '../Buttons/HoverableButton';

interface IProps {
  user: IUser
  createdAt: Date
  isComment: boolean
  handleHeaderActionsMenu?: (value: boolean) => void
}

export const ContentHeader = ({
  user,
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
          <p>@{user.username}</p>
          <p>· <ReactTimeAgo date={new Date(createdAt)} locale="en-US" timeStyle="twitter" /></p>
        </section>
        {
          !isComment
          &&
          <section>
            <HoverableButton
              icon={DotsIcon}
              height="20px"
              width="20px"
              color={colors.primary}
              defaultColor={colors.text}
              backgroundColor={colors.rgbaPrimary}
              onClick={handleHeaderActionsMenu && (() => handleHeaderActionsMenu(true))}
            />
          </section>
        }
      </header>
      <style jsx>{style}</style>
    </>
  );
};
