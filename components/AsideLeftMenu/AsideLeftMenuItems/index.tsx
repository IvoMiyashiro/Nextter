import { useContext } from 'react';

import { PrimaryButton } from '../../Buttons/PrimaryButton';
import { MenuItem } from './MenuItem';
import { DevitButton } from '../../Buttons/DevitButton';
import { handleOpenCreateDevitForm } from '../../../actions/ui';
import { AppContext } from '../../../context/AppContext';


import HomeIcon from '../../Icons/Home';
import HashtagIcon from '../../Icons/HashTag';
import NotificationIcon from '../../Icons/Notifications';
import MessagesIcon from '../../Icons/Messages';
import UserIcon from '../../Icons/User';
import SettingsIcon from '../../Icons/Settings';
import HelpIcon from '../../Icons/Help';

import { colors } from '../../../styles/theme';
import styles from './styles';

export const AsideLeftMenuItems = () => {

  const { userState, uiDispatch } = useContext(AppContext);

  return (
    <>
      <menu>
        <ul>
          <MenuItem
            icon={HomeIcon}
            label="Home"
            href="/home"
          />
          <MenuItem
            icon={HashtagIcon}
            label="Explore"
            href="/explore"
          />
          <MenuItem
            icon={NotificationIcon}
            label="Notifications"
            href="/notifications"
          />
          <MenuItem
            icon={MessagesIcon}
            label="Messages"
            href="/messages"
          />
          <MenuItem
            icon={UserIcon}
            label="Profile"
            href={`/${userState.username}`}
          />
          <MenuItem
            icon={SettingsIcon}
            label="Settings"
            href="/settings"
          />
          <MenuItem
            icon={HelpIcon}
            label="Help center"
            href="/help-center"
          />
        </ul>
        <section>
          <PrimaryButton
            textColor={colors.background}
            buttonColor={colors.primary}
            onClick={() => handleOpenCreateDevitForm(uiDispatch)}
          >
            Devit
          </PrimaryButton>
        </section>
        <div>
          <DevitButton />
        </div>
      </menu>

      <style jsx>{styles}</style>
    </>
  );
};
