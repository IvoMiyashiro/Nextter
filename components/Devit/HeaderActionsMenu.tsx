import { IUser } from '../../interfaces';

import { fetchWithToken } from '../../helpers/fetchWithToken';

import { BsTrash } from 'react-icons/bs';
import { RiUserUnfollowLine } from 'react-icons/ri';
import { colors } from '../../styles/theme';
import style from './styles/RevitMenuStyles';

interface IProps {
  id: string
  devitUser: IUser
  userId: string
  handleOpenModal: (value: boolean) => void
}

export const HeaderActionsMenu = ({
  id,
  devitUser,
  userId,
  handleOpenModal,
}: IProps) => {

  const handleDeleteDevit = () => {
    fetchWithToken(`devit/${id}/delete`, {
      uid: userId,
    }, 'DELETE');
  };

  const handleUnfollowUser = () => {
    
  };

  return (
    <>
      <div>
        <ul>
          {
            devitUser.id === userId
              ? (
                <li 
                  onClick={() => {handleOpenModal(false); handleDeleteDevit();}} 
                  style={{color: colors.red, fontWeight: 'bold'}}
                >
                  <BsTrash size="18px" color={colors.red} />
                  <p style={{ marginBottom: '-0.15em'}}>Delete</p>
                </li>
              )
              : (
                <li onClick={() => {handleOpenModal(false); handleUnfollowUser();}}>
                  <RiUserUnfollowLine size="18px" color={colors.text} />
                  <p>Unfollow @{devitUser.name}</p>
                </li>
              )
          }
          <li>
            <button
              onClick={() => handleOpenModal(false)}
            >
              Cancel
            </button>
          </li>
        </ul>
      </div>
      <style jsx>{style}</style>
    </>
  );
};
