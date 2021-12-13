import { useContext, useState } from 'react';

import { IUser } from '../../interfaces';

import { useIsDevitRevitted } from '../../hooks/useIsDevitRevitted';

import { ContentHeader } from './ContentHeader';
import { ContentMain } from './ContentMain';
import { Modal } from '../Modal';
import { CommentForm } from '../Forms/CommentForm';
import { ContentFooter } from './ContentFooter';
import { RevitMenu } from './RevitMenu';
import { QuoteDevitForm } from '../Forms/QuoteDevitForm';
import { AppContext } from '../../context/AppContext';
import { DeleteDevitToast } from '../Toast/DeleteDevitToast';
import { ActionMenuMobile } from './ActionMenuMobile';
import { ActionMenuDesktop } from './ActionMenuDesktop';

import styles from './styles/ContentSectionStyles';


interface IProps {
  id: string,
  uid: string
  user: IUser,
  img: string
  content: string
  favs: Array<any>
  revits: Array<any>
  comments: Array<any>
  createdAt: Date
  updatedAt: Date
}

export const ContentSection = ({
  id,
  user,
  content,
  favs,
  revits,
  comments,
  createdAt,
  img,
}: IProps) => {

  const {userState} = useContext(AppContext);
  const {isRevittedByUser, revitId} = useIsDevitRevitted(userState.id, id);
  const [isCommentFormOpen, setCommentFormOpen] = useState(false);
  const [isRevitMenuOpen, setRevitMenuOpen] = useState(false);
  const [isQuoteDevitFormOpen, setQuoteDevitFormOpen] = useState(false);
  const [isHeaderActionsMenuOpen, setHeaderActionsMenuOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  return (
    <>
      <div>
        <ContentHeader
          user={user}
          createdAt={createdAt}
          isComment={false}
          handleHeaderActionsMenu={setHeaderActionsMenuOpen}
        />
        <ContentMain 
          content={content}
          img={img}
        />
        <ContentFooter 
          id={id}
          favs={favs}
          revits={revits}
          comments={comments}
          handleCommentOpen={setCommentFormOpen}
          handleRevitMenuOpen={setRevitMenuOpen}
        />

        {
          isCommentFormOpen
          &&
          <Modal 
            handleOpenModal={setCommentFormOpen}
            isModalOpen={isCommentFormOpen}
            align="center"
          >
            <CommentForm
              id={id}
              user={user}
              content={content}
              createdAt={createdAt}
              img={img}
              handleOpenModal={setCommentFormOpen}
            />
          </Modal>
        }
        {
          isRevitMenuOpen
          &&
          <Modal 
            handleOpenModal={setRevitMenuOpen}
            isModalOpen={isRevitMenuOpen}
            align="flex-end"
          >
            <RevitMenu
              id={id}
              revitId={revitId}
              user={user}
              isRevitted={isRevittedByUser}
              handleOpenModal={setRevitMenuOpen}
              handleQuoteDevitFormOpen={setQuoteDevitFormOpen}
            />
          </Modal>
        }
        {
          isQuoteDevitFormOpen
          &&
          <Modal
            handleOpenModal={setQuoteDevitFormOpen}
            isModalOpen={isQuoteDevitFormOpen}
            align="center"
          >
            <QuoteDevitForm
              id={id}
              content={content}
              createdAt={createdAt}
              img={img}
              handleOpenModal={setQuoteDevitFormOpen}
            />
          </Modal>
        }
        {
          isHeaderActionsMenuOpen
          &&
          <Modal
            handleOpenModal={setHeaderActionsMenuOpen}
            isModalOpen={isHeaderActionsMenuOpen}
            align="flex-end"
            isMobile={true}
            isVisible={false}
          >
            <ActionMenuMobile
              devitUser={user}
              isLoading={isLoading}
              handleOpenModal={setHeaderActionsMenuOpen}
              handleDeleteModalOpen={setDeleteModalOpen}
            />
          </Modal>
        }
        {
          isHeaderActionsMenuOpen
          &&
          <ActionMenuDesktop
            devitUser={user}
            handleMenuOpen={setHeaderActionsMenuOpen}
            handleDeleteModalOpen={setDeleteModalOpen}
          />
        }
        {
          isDeleteModalOpen
          &&
          <Modal
            handleOpenModal={setDeleteModalOpen}
            isModalOpen={isDeleteModalOpen}
          >
            <DeleteDevitToast
              id={id}
              userId={userState.id}
              isLoading={isLoading}
              setLoading={setLoading}
              handleDeleteModalOpen={setDeleteModalOpen}
            />
          </Modal>
        }
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
