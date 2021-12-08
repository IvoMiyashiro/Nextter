import { useContext, useEffect, useState } from 'react';

import { AppContext } from '../../../context/AppContext';
import { BioStep } from './Steps/BioStep';
import { CoverPictureStep } from './Steps/CoverPictureStep';
import { FinalStep } from './Steps/FinalStep';
import { ProfilePictureStep } from './ProfilePictureStep';
import { UsernameStep } from './Steps/UsernameStep';
import { PrevButton } from './PrevButton';

import Logo from '../../Icons/Logo';
import { colors } from '../../../styles/theme';
import styles from './styles';


export const FirstEditProfileForm = () => {

  const {userState} = useContext(AppContext);
  const [formStep, setFormStep] = useState(0);
  const [formValues, setFormValues] = useState({
    profilePicture: {
      file: '',
      fileUrl: ''
    },
    coverPicture:  {
      file: '',
      fileUrl: ''
    },
    username: '',
    bio: '',
  });
  
  useEffect(() => {
    setFormValues({
      profilePicture: {
        file: '',
        fileUrl: ''
      },
      coverPicture:  {
        file: '',
        fileUrl: ''
      },
      username: userState.username,
      bio: userState.bio,
    });
  }, [userState.username, userState.bio]);

  return (
    <>
      <form>
        <header>
          {
            formStep !== 0
            &&
            <PrevButton handleStep={() => setFormStep(prev => (prev - 1))} />
          }
          <Logo 
            width="44px"
            color={colors.title}
            fill="currentColor"
          />
        </header>
        {
          formStep === 0
          &&
          <ProfilePictureStep 
            handleStep={setFormStep}
            handleFormValues={setFormValues}
            imageUrl={formValues.profilePicture.fileUrl}
          />
        }
        {
          formStep === 1
          &&
          <CoverPictureStep 
            handleStep={setFormStep}
            handleFormValues={setFormValues}
            profilePicture={formValues.profilePicture.fileUrl}
            coverPicture={formValues.coverPicture.fileUrl}
          />
        }
        {
          formStep === 2
          &&
          <UsernameStep
            handleStep={setFormStep}
            handleFormValues={setFormValues}
            username={formValues.username}
          />
        }
        {
          formStep === 3
          &&
          <BioStep 
            handleStep={setFormStep}
            handleFormValues={setFormValues}
          />
        }
        {
          formStep === 4
          &&
          <FinalStep 
            handleStep={setFormStep}
            handleFormValues={setFormValues}
          />
        }
      </form>

      <style jsx>{styles}</style>
    </>
  );
};
