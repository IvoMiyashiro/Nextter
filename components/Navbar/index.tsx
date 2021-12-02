import { useRouter } from 'next/router';

import { ListIconItem } from './ListIconItem';

import HomeIcon from '../Icons/Home';
import SearchIcon from '../Icons/Search';
import NotificationIcon from '../Icons/Notifications';
import MessagesIcon from '../Icons/Messages';

import { colors } from '../../styles/theme';
import styles from './styles';

export const Navbar = () => {

  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <footer>
        <ul>
          <ListIconItem 
            icon={HomeIcon}
            route="/home"
            fill={currentRoute === '/home' ? colors.title : 'transparent'}
            strokeWidth="0"
          />
          <ListIconItem
            icon={SearchIcon}
            route="/explore"
            fill={colors.title}
            strokeWidth={currentRoute === '/explore' ? 1 : 0}
          />
          <ListIconItem
            icon={NotificationIcon}
            route="/notifications"
            fill={colors.title}
            strokeWidth={currentRoute === '/notifications' ? 1 : 0}
          />
          <ListIconItem
            icon={MessagesIcon}
            route="/messages"
            fill={colors.title}
            strokeWidth={currentRoute === '/messages' ? 1 : 0}
          />
        </ul>
      </footer>
      <style jsx>{styles}</style>
    </>
  );
};
