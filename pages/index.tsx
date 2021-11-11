import { useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { HiCode } from 'react-icons/hi';

import { ButtonsSection } from '../components/PagesComponents/Index/ButtonsSection';
import { FooterSection } from '../components/PagesComponents/Index/FooterSection';

import { colors } from '../styles/theme';
import styles from './styles';

const Home: NextPage = () => {

  const [layoutState, setLayoutState] = useState<boolean>(true);

  return (
    <>
      <Head>
        <title>Nextter. It&lsquo;s what&lsquo;s happening / Nextter</title>
      </Head>
        
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

export default Home;
