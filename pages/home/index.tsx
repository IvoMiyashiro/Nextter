import { NextPage } from 'next';
import { useState } from 'react';
import { DevitForm } from '../../components/Forms/DevitForm';
import { Navbar } from '../../components/Navbar';
import { ResponsiveModal } from '../../components/ResponsiveModal';
import { TopBar } from '../../components/TopBar';
import { TweetButton } from '../../components/Buttons/TweetButton';

const Home: NextPage = () => {

  const [isDevitFormOpen, setDevitFormOpen] = useState(false);

  return(
    <>
      <div>
        <TopBar />
        
        {
          isDevitFormOpen
          &&
          <ResponsiveModal
            handleOpenModal={setDevitFormOpen}
          >
            <DevitForm handleOpenModal={setDevitFormOpen} />
          </ResponsiveModal>
        }
        <section>
          
        </section>
        <TweetButton handleOpenModal={setDevitFormOpen}/>
        <Navbar />
      </div>
    </>
  );
};

export default Home;
