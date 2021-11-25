import {  useState } from 'react';
import { useFetchDevits } from '../../../hooks/useFetchDevits';

import { DevitForm } from '../../../components/Forms/DevitForm';
import { Navbar } from '../../../components/Navbar';
import { Modal } from '../../../components/Modal';
import { TopBar } from '../../../components/TopBar';
import { DevitButton } from '../../Buttons/DevitButton';
import { Devit } from '../../Devit';
import { IDevit } from '../../../interfaces';

interface IDevitsArray {
  devits: IDevit[]
}

export const MainSection = () => {

  const [isDevitFormOpen, setDevitFormOpen] = useState(false);
  const { devits }: IDevitsArray = useFetchDevits();

  return (
    <div>
      <TopBar />
      {
        isDevitFormOpen
        &&
      <Modal
        handleOpenModal={setDevitFormOpen}
      >
        <DevitForm handleOpenModal={setDevitFormOpen} />
      </Modal>
      }
      <section>
        {
          devits.map(devit => {
            return <Devit key={devit.id} devit={devit}/>;
          })
        }
      </section>
      <DevitButton handleOpenModal={setDevitFormOpen}/>
      <Navbar />
    </div>
  );
};
