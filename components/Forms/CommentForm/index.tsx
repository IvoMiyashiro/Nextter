import { FormEvent, useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../context/userContext';

import { fetchWithToken } from '../../../helpers/fetchWithToken';
import { fileUpload } from '../../../helpers/fileUpload';

import { ContentHeader } from '../../Devit/ContentHeader';
import { ContentMain } from '../../Devit/ContentMain';
import { HeaderSection } from '../DevitForm/HeaderSection';
import { MainSection } from '../DevitForm/MainSection';
import { ProfileImage } from '../../Devit/ProfileImage';

import styles from './styles';
import { IUser } from '../../../interfaces';

interface IProps {
  user: IUser
  createdAt: Date
  content: string
  img: string
  handleOpenModal: (value: boolean) => void,
}

export const CommentForm = ({
  user,
  createdAt,
  content,
  img,
  handleOpenModal
}: IProps) => {

  const { state } = useContext(AppContext);
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
    setLoading(true);

    try {
      let newFile = '';

      !!imageUrl.file
        ? newFile = await fileUpload(imageUrl.file)
        : newFile = '';
      
      await fetchWithToken('devit/create', {
        uid: state.uid,
        content: textAreaValue,
        img: newFile,
      }, 'POST');
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
    handleOpenModal(false);
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
          <section className="test">
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
        />
      </form>
      <style jsx>{styles}</style>
    </>
  );
};
