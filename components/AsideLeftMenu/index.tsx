import Link from 'next/link';

import { AsideLeftFooter } from './AsideLeftFooter';
import { AsideLeftMenuItems } from './AsideLeftMenuItems';

import Logo from '../Icons/Logo';
import { colors } from '../../styles/theme';
import styles from './styles';

export const AsideLeftMenu = () => {
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
          <AsideLeftMenuItems />
          <AsideLeftFooter />
        </div>
      </aside>

      <style jsx>{styles}</style>
    </>
  );
};
