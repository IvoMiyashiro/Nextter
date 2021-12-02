import { Searchbar } from '../../../Searchbar';
import { RightAsideTrendings } from '../RightAsideTrendings';
import styles from './styles';

export const RightAsideSection = () => {
  return (
    <>
      <aside>
        <Searchbar />
        <RightAsideTrendings />
      </aside>

      <style jsx>{styles}</style>
    </>
  );
};
