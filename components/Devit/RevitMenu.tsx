import { IUser } from '../../interfaces';

import { fetchWithToken } from '../../helpers/fetchWithToken';

import { colors } from '../../styles/theme';
import style from './styles/RevitMenuStyles';
import RedevitIcon from '../Icons/Redevit';
import EditIcon from '../Icons/Edit';

interface IProps {
  id: string
  revitId: string
  user: IUser
  isRevitted: boolean
  handleOpenModal: (value: boolean) => void
  handleQuoteDevitFormOpen: (value: boolean) => void
}

export const RevitMenu = ({
  id,
  revitId,
  user,
  isRevitted,
  handleOpenModal,
  handleQuoteDevitFormOpen
}: IProps) => {

  const handleRevitDevit = () => {
    if (!isRevitted) {
      return fetchWithToken(`devit/${id}/revit`, {
        uid: user.id,
        content: '',
        img: ''
      }, 'PUT');
    }

    fetchWithToken(`devit/${id}/revit/${revitId}/delete`, {
      uid: user.id,
    }, 'DELETE');
  };

  return (
    <>
      <div>
        <ul>
          <li onClick={() => {handleOpenModal(false); handleRevitDevit();}}>
            <RedevitIcon width="18px" height="18px" fill="currentColor" stoke-width="0" color={colors.text} />
            <p>{isRevitted ? 'Undo Revit' : 'Revit'}</p>
          </li>
          <li onClick={() => {handleQuoteDevitFormOpen(true); handleOpenModal(false);}}>
            <EditIcon width="18px" height="18px" fill="currentColor" stoke-width="0" color={colors.text} />
            <p>Quote Devit</p>
          </li>
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
