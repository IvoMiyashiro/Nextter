import Image from 'next/image';

import { BsMoonStars } from 'react-icons/bs';
import { colors } from '../../styles/theme';
import style from './styles';

export const TopBar = () => {
  return (
    <>
      <header>
        <section>
          <button>
            <Image
              src="/yo.jpg"
              alt="profile"
              layout="fill"
            />
          </button>
          <h2>Home</h2>
        </section>
        <section>
          <BsMoonStars color={colors.title} size="20px" />
        </section>
      </header>
      <style jsx>{style}</style>
    </>
  );
};
