import { useState } from 'react';
import { colors } from '../../../../../styles/theme';
import { PrimaryButton } from '../../../../Buttons/PrimaryButton';
import Logo from '../../../../Icons/Logo';
import { Spinner } from '../../../../Spinner';
import styles from './styles';

interface IProps {
  formValues: {
    profilePicture: {
      file: string
      fileUrl: string
    }
    coverPicture:  {
      file: string
      fileUrl: string
    }
    username: string
    bio: string
  }
  isLoading: boolean
}

export const FinalStep = ({formValues, isLoading}: IProps) => {
  return (
    <>
      <div>
        <Logo 
          width="68px"
          color={colors.title}
        />
        <h1>Your profile is updated</h1>
        <section>
          <PrimaryButton
            textColor={colors.background}
            buttonColor={colors.title}
          >
            {
              isLoading
                ? <Spinner size="18px" color="blue" /> 
                : 'Confirm'
            }
            
          </PrimaryButton>
        </section>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
