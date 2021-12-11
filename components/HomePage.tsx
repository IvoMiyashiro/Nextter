import { useContext } from 'react';

import { CreateDevitForm } from './Forms/CreateDevitForm';
import { Navbar } from './Navbar';
import { Modal } from './Modal';
import { DevitButton } from './Buttons/DevitButton';
import { AsideLeftMenu } from './AsideLeftMenu';
import { AsideRightMenu } from './AsideRightMenu';
import { Timeline } from './Timeline';
import { AppContext } from '../context/AppContext';
import { DevelotterLayout } from './DevelotterLayout';
import { FirstEditProfileForm } from './Forms/FirstEditProfileForm';

import { breakpoints } from '../styles/breakpoints';

export const HomePage = () => {

  const {userState} = useContext(AppContext);
  const {firstEditProfile} = userState;

  return (
    <>
      <div>
        <DevelotterLayout>
          <AsideLeftMenu />
          <Timeline />
          <AsideRightMenu />
        </DevelotterLayout>
        <section>
          <DevitButton />
        </section>
        <Navbar />
        {
          !firstEditProfile
          &&
          <Modal
            isModalOpen={!firstEditProfile}
            align="center"
          >
            <FirstEditProfileForm />
          </Modal>
        }
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
