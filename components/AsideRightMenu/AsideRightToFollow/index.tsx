import { UserCard } from './UserCard';
import styles from './styles';
import { AsideRightFooter } from '../AsideRightFooter';

export const AsideRightToFollow = () => {
  return (
    <>
      <div>
        <header>
          <h1>Who to follow</h1>
        </header>
        <section>
          <UserCard />
          <UserCard />
        </section>
        <AsideRightFooter />
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
