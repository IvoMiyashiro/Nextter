import { useState } from 'react';

import { Header } from '../Header';

import { ImageSection } from './ImageSection';
import { Footer } from '../Footer';

import styles from './styles';

interface IProps {
  handleStep: (value: number | ((prev: number) => number)) => void
  handleFormValues: any
  imageUrl: string
}

export const ProfilePictureStep = ({handleStep, handleFormValues, imageUrl}: IProps) => {

  const [stepCompleated, setStepCompleated] = useState(false);

  return (
    <>
      <div className="profilePictureStep">
        <Header
          title="Pick a profile picture"
          content="Have a favorite selfie? Upload it now."
        />
        <ImageSection
          handleStep={setStepCompleated}
          stepComplete={stepCompleated}
          handleFormValues={handleFormValues}
          imageUrl={imageUrl}
        />
        <Footer 
          handleStep={handleStep}
          stepCompleted={stepCompleated}
        />
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
