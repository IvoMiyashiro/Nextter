import { useState } from 'react';
import Link from 'next/link';

import { ButtonsSection } from '../ButtonsSection';
import { FooterSection } from '../FooterSection';

import { HiCode } from 'react-icons/hi';
import { colors } from '../../../../styles/theme';
import styles from './styles';

export const MainSection = () => {

  const [layoutState, setLayoutState] = useState<boolean>(true);

  return (
    <>
      <div>
        <section>
          <header>
            <Link href="/">
              <a>
                <HiCode size={56} color={colors.primary} />
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
