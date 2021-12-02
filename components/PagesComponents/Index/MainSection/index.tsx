import { useState } from 'react';
import Link from 'next/link';

import { ButtonsSection } from '../ButtonsSection';
import { FooterSection } from '../FooterSection';

import { colors } from '../../../../styles/theme';
import styles from './styles';
import Logo from '../../../Icons/Logo';

export const MainSection = () => {

  const [layoutState, setLayoutState] = useState<boolean>(true);

  return (
    <>
      <div>
        <section>
          <header>
            <Link href="/">
              <a>
                <Logo
                  height="52px"
                  width="52px"
                  color={colors.primary}
                />
              </a>
            </Link>
            <h1>Happening now</h1>
          </header>
          <ButtonsSection 
            layout={layoutState}
          />
        </section>
        <section>
          <FooterSection 
            layout={layoutState}
            setValue={setLayoutState}
          />
        </section>
      </div>
      
      <style jsx>{styles}</style>
    </>
  );
};
