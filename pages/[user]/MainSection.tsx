import { IProps } from '.';
import { UserTopbar } from '../../components/TopBar/UserTopbar';
import styles from './styles';

export const MainSection = ({ devits, user }: IProps) => {
  return (
    <>
      <div>
        <UserTopbar devitsLength={devits.length} />
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
