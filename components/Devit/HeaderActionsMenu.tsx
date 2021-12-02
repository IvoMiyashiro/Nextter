import { useContext, useState } from 'react';

import { IUser } from '../../interfaces';

import { deleteDevit } from '../../actions/devits';

import { AppContext } from '../../context/AppContext';
import { Spinner } from '../Spinner';

import UnFollowIcon from '../Icons/Unfollow';
import DeleteIcon from '../Icons/Delete';
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

  const {devitDispatch} = useContext(AppContext);
  const [isLoading, setLoading] = useState(false);

  const handleDeleteDevit = () => {
    deleteDevit(id, userId, devitDispatch, setLoading);
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
            <button
              onClick={() => handleOpenModal(false)}
            >
              {
                isLoading
                  ? <Spinner color={colors.title} size="32px" />
                  : 'Cancel'
              }
            </button>
          </li>
        </ul>
      </div>
      <style jsx>{style}</style>
    </>
  );
};
