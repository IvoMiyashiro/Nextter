import Image from 'next/image';

import StarsIcon from '../Icons/Stars';
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
          <StarsIcon 
            height="24px"
            width="24px"
            stroke="currentColor"
            stroke-width="0"
            color={colors.title}
            fill={colors.title} 
          />
        </section>
      </header>
      <style jsx>{style}</style>
    </>
  );
};
