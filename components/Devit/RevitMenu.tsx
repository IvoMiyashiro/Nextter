import { AiOutlineRetweet } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import { colors } from '../../styles/theme';
import style from './styles/RevitMenuStyles';

interface IProps {
  id: string
  createdAt: Date
  content: string
  img: string
  handleOpenModal: (value: boolean) => void
  handleQuoteDevitFormOpen: (value: boolean) => void
}

export const RevitMenu = ({
  handleOpenModal,
  handleQuoteDevitFormOpen
}: IProps) => {

  return (
    <>
      <div>
        <ul>
          <li onClick={() => handleOpenModal(false)}>
            <AiOutlineRetweet size="18px" color={colors.text} />
            <p>Revit</p>
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
