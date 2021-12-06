import { useContext, useEffect, useRef } from 'react';

import { IUser } from '../../../interfaces';

import { AppContext } from '../../../context/AppContext';

import DeleteIcon from '../../Icons/Delete';
import UnFollowIcon from '../../Icons/Unfollow';
import TimesIcon from '../../Icons/Times';
import { colors } from '../../../styles/theme';
import styles from './styles';

interface IProps {
  devitUser: IUser
  handleMenuOpen: (value: boolean | ((prev: boolean) => boolean)) => void
  handleDeleteModalOpen: (value: boolean) => void
}

export const ActionMenuDesktop = ({
  devitUser,
  handleMenuOpen,
  handleDeleteModalOpen
}: IProps) => {

  const {userState} = useContext(AppContext);

  return (
    <>
      <div>
        <ul>
          {
            devitUser.id === userState.id
              ? (
                <li onClick={() => {handleMenuOpen(false); handleDeleteModalOpen(true);}}>
                  <DeleteIcon
                    width="22px"
                    height="22px"
                    color={colors.text}
                    fill="currentColor"
                  />
                  <span>Delete</span>
                </li>
              )
              : (
                <li>
                  <UnFollowIcon 
                    width="22px"
                    height="22px"
                    color={colors.text}
                    fill="currentColor"
                  />
                  <span>Unfollow {devitUser.username}</span>
                </li>
              )
          }
          <li onClick={() => handleMenuOpen(false)}>
            <TimesIcon 
              width="22px"
              height="22px"
              color={colors.text}
              fill="currentColor"
            />
            <span>Cancel</span>
          </li>
        </ul>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};
