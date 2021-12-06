import {  useContext, useState } from 'react';

import { CreateDevitForm } from './Forms/CreateDevitForm';
import { Navbar } from './Navbar';
import { Modal } from './Modal';
import { DevitButton } from './Buttons/DevitButton';
import { AsideLeftMenu } from './AsideLeftMenu';
import { AsideRightMenu } from './AsideRightMenu';
import { Timeline } from './Timeline';

import { breakpoints } from '../styles/breakpoints';
import { AppContext } from '../context/AppContext';

export const HomePage = () => {

  const {uiState} = useContext(AppContext);
  const { isCreateDevitFormOpen } = uiState;

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
        <div className="home-layout">
          <AsideLeftMenu />
          <Timeline />
          <AsideRightMenu />
        </div>
        <section>
          <DevitButton />
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

        @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.wideTablet}) {
          .home-layout {
            display: grid;
            grid-template-columns: 88px minmax(auto, 600px);
          }
        }

        @media (min-width: ${breakpoints.wideTablet}) and (max-width: ${breakpoints.desktop}) {
          .home-layout {
            display: grid;
            max-width: 1240px;
            grid-template-columns: 88px 600px minmax(290px, 375px);
          }
        }

        @media (min-width: ${breakpoints.desktop}) {
          .home-layout {
            display: grid;
            max-width: 1240px;
            grid-template-columns: 260px 600px minmax(290px, 375px);
          }
        }
      `}</style>
    </>
  );
};
