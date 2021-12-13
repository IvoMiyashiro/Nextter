import { useContext } from 'react';

import { deleteDevit } from '../../../actions/devits';

import { AppContext } from '../../../context/AppContext';
import { PrimaryButton } from '../../Buttons/PrimaryButton';

import { colors } from '../../../styles/theme';
import styles from './styles';
import { Spinner } from '../../Spinner';

interface IProps {
  id: string
  userId: string
  isLoading: boolean
  setLoading: (value: boolean) => void
  handleDeleteModalOpen: (value: boolean) => void
}

export const DeleteDevitToast = ({
  id,
  userId,
  isLoading,
  setLoading,
  handleDeleteModalOpen,
}: IProps) => {

  const {devitDispatch, userDispatch} = useContext(AppContext);

  const handleDeleteDevit = () => {
    deleteDevit(
      id,
      userId,
      devitDispatch,
      setLoading,
      handleDeleteModalOpen
    );

    userDispatch({
      type: 'DELETE USER DEVITS',
      payload: id,
    });
  };

  return (
    <>
      <div>
        <main>
          <section>
            <h2>Delete Tweet?</h2>
            <p>This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from Twitter search results.</p>
          </section>
          <section className="buttons-container">
            <section className="button-container">
              <PrimaryButton
                onClick={handleDeleteDevit}
                type="button"
                textColor={colors.title}
                buttonColor={colors.red}
              >
                {
                  isLoading
                    ? <Spinner color="white" size="18px"/>
                    : 'Delete'
                }
              </PrimaryButton>
            </section>
            <section className="button-container">
              <PrimaryButton
                type="button"
                onClick={() => handleDeleteModalOpen(false)}
                style="outline"
                textColor={colors.title}
                buttonColor={colors.text}
              >
              Cancel
              </PrimaryButton>
            </section>
          </section>
        </main>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
