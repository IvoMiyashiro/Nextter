import { FormEvent, useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../context/AppContext';

import { createComment } from '../../../actions/comments';

import { ContentHeader } from '../../Devit/ContentHeader';
import { ContentMain } from '../../Devit/ContentMain';
import { HeaderSection } from '../CreateDevitForm/HeaderSection';
import { MainSection } from '../CreateDevitForm/MainSection';
import { ProfileImage } from '../../Devit/ProfileImage';

import { IUser } from '../../../interfaces';
import styles from './styles';

interface IProps {
  id: string
  user: IUser
  createdAt: Date
  content: string
  img: string
  handleOpenModal: (value: boolean) => void,
}

export const CommentForm = ({
  id,
  user,
  createdAt,
  content,
  img,
  handleOpenModal
}: IProps) => {

  const { userState, devitDispatch } = useContext(AppContext);
  const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [imageUrl, setImageUrl] = useState<any>({
    file: '',
    fileUrl: ''
  });

  useEffect(() => {
    if (textAreaValue.length === 0 && imageUrl.fileUrl !== '') {
      return setSubmitButtonDisabled(false);
    }

    if (textAreaValue.length > 0 && textAreaValue.length < 280) {
      return setSubmitButtonDisabled(false);
    }

    setSubmitButtonDisabled(true);
  },[textAreaValue, imageUrl]);

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createComment(
      imageUrl.file,
      userState.id,
      id,
      textAreaValue,
      devitDispatch,
      setLoading,
      handleOpenModal,
    );
    setLoading(true);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <HeaderSection 
          handleOpenModal={handleOpenModal}
          isSubmitButtonDisabled={isSubmitButtonDisabled}
          isLoading={isLoading}
          buttonChild="Reply"
        />
        <div>
          <section className="profile-img-container">
            <ProfileImage
              profileImage={user.profilePicture} 
              alt={user.name}
            />
            <div className="line"></div>
          </section>
          <section>
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
            <div className="reply">
              <p>Reply to <span>@{'ivomiyashiro'}</span></p>
            </div>
          </section>
        </div>
        <MainSection 
          handleTextAreaValue={setTextAreaValue}
          handleImageUrl={setImageUrl}
          isSubmitButtonDisabled={isSubmitButtonDisabled}
          textAreaValue={textAreaValue}
          imageUrl={imageUrl.fileUrl}
          textAreaPlaceholder="Devit your reply"
          user={user.name}
          isLoading={isLoading}
        />
      </form>
      <style jsx>{styles}</style>
    </>
  );
};
