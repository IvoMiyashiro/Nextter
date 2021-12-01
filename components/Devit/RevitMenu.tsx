import { IUser } from '../../interfaces';

import { fetchWithToken } from '../../helpers/fetchWithToken';

import { AiOutlineRetweet } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import { colors } from '../../styles/theme';
import style from './styles/RevitMenuStyles';

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
            <AiOutlineRetweet size="18px" color={colors.text} />
            <p>{isRevitted ? 'Undo Revit' : 'Revit'}</p>
          </li>
          <li onClick={() => {handleQuoteDevitFormOpen(true); handleOpenModal(false);}}>
            <FiEdit2 size="18px" color={colors.text} />
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
