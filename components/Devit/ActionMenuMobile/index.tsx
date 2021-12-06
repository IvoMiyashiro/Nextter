import { useContext } from 'react';
import { IUser } from '../../../interfaces';

import { AppContext } from '../../../context/AppContext';
import { Spinner } from '../../Spinner';
import { PrimaryButton } from '../../Buttons/PrimaryButton';

import UnFollowIcon from '../../Icons/Unfollow';
import DeleteIcon from '../../Icons/Delete';
import { colors } from '../../../styles/theme';
import styles from './styles';

interface IProps {
  devitUser: IUser
  isLoading: boolean
  handleOpenModal: (value: boolean) => void
  handleDeleteModalOpen: (value: boolean) => void
}

export const ActionMenuMobile = ({
  devitUser,
  isLoading,
  handleOpenModal,
  handleDeleteModalOpen
}: IProps) => {

  const {userState} = useContext(AppContext);
  const handleUnfollowUser = () => {};

  return (
    <>
      <div>
        <ul>
          {
            devitUser.id === userState.id
              ? (
                <li 
                  onClick={() => handleDeleteModalOpen(true)} 
                  style={{color: colors.red, fontWeight: 'bold'}}
                >
                  <DeleteIcon 
                    width="20px"
                    height="20px"
                    stroke="currentColor"
                    stroke-width="0"
                    fill={colors.red}
                  />
                  <p style={{ marginBottom: '-0.15em'}}>Delete</p>
                </li>
              )
              : (
                <li onClick={() => {
                  handleUnfollowUser();
                }}>
                  <UnFollowIcon
                    width="20px"
                    height="20px"
                    stroke="currentColor"
                    stroke-width="0"
                    fill={colors.text}
                  />
                  <p>Unfollow @{devitUser.name}</p>
                </li>
              )
          }
          <li>
            <section>
              <PrimaryButton
                onClick={() => handleOpenModal(false)}
                style="outline"
                textColor={colors.title}
                buttonColor={colors.text}
              >
                {
                  isLoading
                    ? <Spinner color={colors.title} size="32px" />
                    : 'Cancel'
                }
              </PrimaryButton>
            </section>
          </li>
        </ul>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};
