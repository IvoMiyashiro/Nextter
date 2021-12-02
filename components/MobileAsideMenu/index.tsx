import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { logOut } from '../../actions/auth';

import { AppContext } from '../../context/AppContext';
import { HoverableButton } from '../Buttons/HoverableButton';
import { MenuItem } from './MenuItem';

import UserIcon from '../Icons/User';
import SettingsIcon from '../Icons/Settings';
import HelpIcon from '../Icons/Help';
import TimesIcon from '../Icons/Times';
import { colors } from '../../styles/theme';
import styles from './styles';
import { useRouter } from 'next/router';

interface IProps {
  isVisible: boolean
  handleSidebarOpen: (value: boolean) => void
}

export const MobileAsideMenu = ({
  isVisible,
  handleSidebarOpen
}: IProps) => {

  const { userState, userDispatch } = useContext(AppContext);

  return (
    <>
      <aside
        style={{
          width: `${isVisible ? '75%' : '0px'} `
        }}
      >
        <header>
          <h2>Account info</h2>
          <HoverableButton
            icon={TimesIcon}
            width="20px"
            height="20px"
            color={colors.text}
            defaultColor={colors.title}
            backgroundColor={colors.rgbaTitle}
            onClick={() => handleSidebarOpen(false)}
          />
        </header>
        <main>
          <div>
            <section className="image-container">
              <Image src="/yo.jpg" alt="yo" layout="fill" objectFit="contain" />
            </section>
            <section>
              <h3>{userState.name}</h3>
              <p>@ivomiyashiro</p>
              {/* <p>{userState.username}</p> */}
            </section>
            <section className="follows-container">
              <div className="follows-counter">
                <h3>{userState.followins.length}</h3>
                <span>Following</span>
              </div>
              <div className="follows-counter">
                <h3>{userState.followers.length}</h3>
                <span>Followers</span>
              </div>
            </section>
          </div>
          <div className="icon-list-container">
            <ul>
              <MenuItem
                icon={UserIcon}
                label="Profile"
              />
              <MenuItem
                icon={SettingsIcon}
                label="Settings and privacy"
              />
              <MenuItem
                icon={HelpIcon}
                label="Help center"
              />
            </ul>
          </div>
        </main>
        <footer>
          <Link href="/logout">
            <a>
            Log out
            </a>
          </Link>
        </footer>
      </aside>

      <style jsx>{styles}</style>
    </>
  );
};
