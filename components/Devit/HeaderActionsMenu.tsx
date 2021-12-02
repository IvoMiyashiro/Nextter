import { IUser } from '../../interfaces';

import { Spinner } from '../Spinner';
import { PrimaryButton } from '../Buttons/PrimaryButton';

import UnFollowIcon from '../Icons/Unfollow';
import DeleteIcon from '../Icons/Delete';
import { colors } from '../../styles/theme';
import style from './styles/RevitMenuStyles';

interface IProps {
  devitUser: IUser
  userId: string
  isLoading: boolean
  handleOpenModal: (value: boolean) => void
  handleDeleteModalOpen: (value: boolean) => void
}

export const HeaderActionsMenu = ({
  devitUser,
  userId,
  isLoading,
  handleOpenModal,
  handleDeleteModalOpen,
}: IProps) => {

  const handleUnfollowUser = () => {};

  return (
    <>
      <div>
        <ul>
          {
            devitUser.id === userId
              ? (
                <li 
                  onClick={() => {handleDeleteModalOpen(true); handleOpenModal(false);}} 
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
                <li onClick={() => {handleOpenModal(false); handleUnfollowUser();}}>
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
      <style jsx>{style}</style>
    </>
  );
};
