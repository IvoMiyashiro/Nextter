import { useRouter } from 'next/router';

import { ListIconItem } from './ListIconItem';

import { HiOutlineBell, HiOutlineHome } from 'react-icons/hi';
import { FiMessageCircle, FiSearch } from 'react-icons/fi';

import styles from './styles';

export const Navbar = () => {

  // const router = useRouter();
  // const route = router.pathname;

  return (
    <>
      <footer>
        <ul>
          <ListIconItem 
            icon={HiOutlineHome}
            route="/home"
          />
          <ListIconItem
            icon={FiSearch}
            route="/explore"
          />
          <ListIconItem
            icon={HiOutlineBell}
            route="/notifications"
          />
          <ListIconItem
            icon={FiMessageCircle}
            route="/message"
          />
        </ul>
      </footer>
      <style jsx>{styles}</style>
    </>
  );
};
