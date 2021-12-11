import { useContext } from 'react';
import Link from 'next/link';

import { AsideLeftFooter } from './AsideLeftFooter';
import { AsideLeftMenuItems } from './AsideLeftMenuItems';
import { Modal } from '../Modal';
import { CreateDevitForm } from '../Forms/CreateDevitForm';
import { AppContext } from '../../context/AppContext';

import Logo from '../Icons/Logo';
import { colors } from '../../styles/theme';
import styles from './styles';

export const AsideLeftMenu = () => {

  const {uiState} = useContext(AppContext);
  const {isCreateDevitFormOpen} = uiState;

  return (
    <>
      <aside>
        <div>
          <header>
            <Link href="/home">
              <a>
                <Logo 
                  width="44px"
                  height="44px"
                  color={colors.title}
                />
              </a>
            </Link>
          </header>
          <AsideLeftMenuItems />
          <AsideLeftFooter />
        </div>

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
      </aside>

      <style jsx>{styles}</style>
    </>
  );
};
