import Image from 'next/image';
import Link from 'next/link';

import styles from './styles';

export const TrendingCard = () => {
  return (
    <>
      <Link href="/" passHref>
        <article>
          <section>
            <header>
              <p>Trending in Football · Last night</p>
            </header>
            <div>
              <h3>Manchester United vs Arsenal FC</h3>
            </div>
            <footer>
              <p>27.3k Tweets</p>
            </footer>
          </section>
          <section className="image-container">
            <Image 
              src="/trendings.jpg"
              alt="manchester"
              layout="fill"
              objectFit="cover"
            />
          </section>
        </article>
      </Link>

      <style jsx>{styles}</style>
    </>
  );
};
