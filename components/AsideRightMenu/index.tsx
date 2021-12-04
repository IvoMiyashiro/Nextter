import { Searchbar } from '../Searchbar';
import { AsideRightToFollow } from './AsideRightToFollow';
import { AsideRightTrendings } from './AsideRightTrendings';

import styles from './styles';

export const AsideRightMenu = () => {
  return (
    <>
      <aside>
        <Searchbar />
        <AsideRightTrendings />
        <AsideRightToFollow />
      </aside>

      <style jsx>{styles}</style>
    </>
  );
};
