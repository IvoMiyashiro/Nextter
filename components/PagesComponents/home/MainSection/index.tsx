import {  useState } from 'react';

import { useFetchDevits } from '../../../../hooks/useFetchDevits';

import { CreateDevitForm } from '../../../Forms/CreateDevitForm';
import { Navbar } from '../../../Navbar';
import { Modal } from '../../../Modal';
import { TopBar } from '../../../TopBar';
import { DevitButton } from '../../../Buttons/DevitButton';
import { Devit } from '../../../Devit';
import { LeftAsideSection } from '../LeftAsideSection';
import styles from './styles';
import { RightAsideSection } from '../RightAsideSection';

export const MainSection = () => {

  const [isDevitFormOpen, setDevitFormOpen] = useState(false);
  const {devitState} = useFetchDevits();

  return (
    <>
      <div>
        {
          isDevitFormOpen
          &&
          <Modal
            handleOpenModal={setDevitFormOpen}
            isModalOpen={isDevitFormOpen}
            align="center"
          >
            <CreateDevitForm handleOpenModal={setDevitFormOpen} />
          </Modal>
        }
        <div className="home-layout">
          <LeftAsideSection />
          <main>
            <section>
              <TopBar />
              { 
                devitState.length !== 0
                &&
                devitState.map(devit => {
                  return <Devit key={devit.id} devit={devit}/>;
                })
              }
            </section>
          </main>
          <RightAsideSection />
        </div>
        <DevitButton handleOpenModal={setDevitFormOpen}/>
        <Navbar />
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
