import { useContext } from 'react';

import { CreateDevitForm } from './Forms/CreateDevitForm';
import { Navbar } from './Navbar';
import { Modal } from './Modal';
import { DevitButton } from './Buttons/DevitButton';
import { AsideLeftMenu } from './AsideLeftMenu';
import { AsideRightMenu } from './AsideRightMenu';
import { Timeline } from './Timeline';

import { breakpoints } from '../styles/breakpoints';
import { AppContext } from '../context/AppContext';
import { DevelotterLayout } from './DevelotterLayout';

export const HomePage = () => {

  const {uiState} = useContext(AppContext);
  const {isCreateDevitFormOpen} = uiState;

  return (
    <>
      <div>
        {
          isCreateDevitFormOpen
          &&
          <Modal
            isModalOpen={isCreateDevitFormOpen}
            align="center"
          >
            <CreateDevitForm />
          </Modal>
        }
        <DevelotterLayout>
          <AsideLeftMenu />
          <Timeline />
          <AsideRightMenu />
        </DevelotterLayout>
        <section>
          <DevitButton />
        </section>
        <Navbar />
      </div>

      <style jsx>{`
        section {
          position: fixed;
          bottom: 74px;
          right: 22px;
        }

        @media (min-width: ${breakpoints.tablet}) {
          section {
            display: none;
          }
        }
      `}</style>
    </>
  );
};
