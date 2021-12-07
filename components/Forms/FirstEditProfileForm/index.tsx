import { useState } from 'react';

import { BioStep } from './BioStep';
import { CoverPictureStep } from './CoverPictureStep';
import { FinalStep } from './FinalStep';
import { ProfilePictureStep } from './ProfilePictureStep';
import { UsernameStep } from './UsernameStep';

import Logo from '../../Icons/Logo';
import styles from './styles';
import { colors } from '../../../styles/theme';
import { PrevButton } from './PrevButton';

export const FirstEditProfileForm = () => {

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
            imageUrl={formValues.profilePicture.fileUrl}
          />
        }
        {
          formStep === 2
          &&
          <UsernameStep 
            handleStep={setFormStep}
            handleFormValues={setFormValues}
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
