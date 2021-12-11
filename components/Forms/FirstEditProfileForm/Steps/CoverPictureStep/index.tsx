import { useState } from 'react';
import { Footer } from '../../Footer';
import { Header } from '../../Header';
import { ImageSection } from './ImageSection';
import styles from './styles';

export const CoverPictureStep = ({
  handleStep,
  handleFormValues,
  profilePicture,
  coverPicture
}: any) => {

  const [stepCompleated, setStepCompleated] = useState(false);

  return (
    <>
      <div className="coverPictureStep">
        <Header
          title="Pick a header"
          content="People who visit your profile will see it. Show your style."
        />
        <ImageSection 
          handleStep={setStepCompleated}
          handleFormValues={handleFormValues}
          profilePicture={profilePicture}
          stepComplete={stepCompleated}
          coverPicture={coverPicture}
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
