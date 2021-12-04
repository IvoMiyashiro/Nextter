import {  useState } from 'react';

import { CreateDevitForm } from './Forms/CreateDevitForm';
import { Navbar } from './Navbar';
import { Modal } from './Modal';
import { DevitButton } from './Buttons/DevitButton';
import { AsideLeftMenu } from './AsideLeftMenu';
import { AsideRightMenu } from './AsideRightMenu';
import { Timeline } from './Timeline';

import { breakpoints } from '../styles/breakpoints';

export const HomePage = () => {

  const [isDevitFormOpen, setDevitFormOpen] = useState(false);

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
          <AsideLeftMenu />
          <Timeline handleDevitFormOpen={setDevitFormOpen} />
          <AsideRightMenu />
        </div>
        <section>
          <DevitButton handleOpenModal={setDevitFormOpen}/>
        </section>
        <Navbar />
      </div>

      <style jsx>{`
        .home-layout {
          display: block;
          justify-content: center;
          margin: 0 auto;
        }

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

        @media (min-width: ${breakpoints.desktop}) {
          .home-layout {
            display: grid;
            max-width: 1240px;
            grid-template-columns: 280px 600px 375px;
          }
        }

        @media ((min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop})) {
          .home-layout {
            display: grid;
            grid-template-columns: 88px 600px 375px;
          }
        }
      `}</style>
    </>
  );
};
