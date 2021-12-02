import {  useState } from 'react';

import { useFetchDevits } from '../../../hooks/useFetchDevits';

import { CreateDevitForm } from '../../Forms/CreateDevitForm';
import { Navbar } from '../../../components/Navbar';
import { Modal } from '../../../components/Modal';
import { TopBar } from '../../../components/TopBar';
import { DevitButton } from '../../Buttons/DevitButton';
import { Devit } from '../../Devit';

export const MainSection = () => {

  const [isDevitFormOpen, setDevitFormOpen] = useState(false);
  const { devitState } = useFetchDevits();

  return (
    <div>
      <TopBar />
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
      <section>
        { 
          devitState.length !== 0
          &&
          devitState.map(devit => {
            return <Devit key={devit.id} devit={devit}/>;
          })
        }
      </section>
      <DevitButton handleOpenModal={setDevitFormOpen}/>
      <Navbar />
    </div>
  );
};
