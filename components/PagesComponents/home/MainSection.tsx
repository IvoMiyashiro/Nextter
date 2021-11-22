import { useState } from 'react';
import { DevitForm } from '../../../components/Forms/DevitForm';
import { Navbar } from '../../../components/Navbar';
import { ResponsiveModal } from '../../../components/Modal';
import { TopBar } from '../../../components/TopBar';
import { TweetButton } from '../../../components/Buttons/TweetButton';

export const MainSection = () => {

  const [isDevitFormOpen, setDevitFormOpen] = useState(false);

  return (
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
  );
};
