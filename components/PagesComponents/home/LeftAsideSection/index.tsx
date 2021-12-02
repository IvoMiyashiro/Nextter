import Link from 'next/link';

import { LeftAsideFooter } from '../LeftAsideFooter';
import { LeftAsideMenu } from '../LeftAsideMenu';

import Logo from '../../../Icons/Logo';
import { colors } from '../../../../styles/theme';
import styles from './styles';

export const LeftAsideSection = () => {
  return (
    <>
      <aside>
        <div>
          <header>
            <Link href="/home">
              <a>
                <Logo 
                  width="44px"
                  height="44px"
                  color={colors.title}
                />
              </a>
            </Link>
          </header>
          <LeftAsideMenu />
          <LeftAsideFooter />
        </div>
      </aside>

      <style jsx>{styles}</style>
    </>
  );
};
