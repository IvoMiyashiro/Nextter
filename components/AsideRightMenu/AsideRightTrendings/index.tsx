import Link from 'next/link';

import { TrendingCard } from '../../TendringCard';
import { AsideRightFooter } from '../AsideRightFooter';
import styles from './styles';

export const AsideRightTrendings = () => {

  // const data = {
  //   topic
  // }

  return (
    <>
      <div>
        <header>
          <h1>What&apos;s happening</h1>
        </header>
        <main>
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
        </main>
        <AsideRightFooter />
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
