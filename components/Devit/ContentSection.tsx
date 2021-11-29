import { useState } from 'react';

import { IUser } from '../../interfaces';

import { ContentHeader } from './ContentHeader';
import { ContentMain } from './ContentMain';
import { Modal } from '../Modal';
import { CommentForm } from '../Forms/CommentForm';
import { ContentFooter } from './ContentFooter';
import { RevitMenu } from './RevitMenu';
import { QuoteDevitForm } from '../Forms/QuoteDevitForm';

import styles from './styles/ContentSectionStyles';

interface IProps {
  id: string,
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

  const [isCommentFormOpen, setCommentFormOpen] = useState(false);
  const [isRevitMenuOpen, setRevitMenuOpen] = useState(false);
  const [isQuoteDevitFormOpen, setQuoteDevitFormOpen] = useState(false);

  return (
    <>
      <div>
        <ContentHeader
          user={user}
          username={'ivomiyashiro'}
          createdAt={createdAt}
          isComment={false}
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
            align="flex-end"
          >
            <RevitMenu 
              id={id}
              content={content}
              createdAt={createdAt}
              img={img}
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
      </div>
      <style jsx>{styles}</style>
    </>
  );
};
