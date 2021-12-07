import { Header } from '../Header';
import styles from './styles';

export const CoverPictureStep = ({
  handleStep,
  handleFormValues,
  imageUrl
}: any) => {
  return (
    <>
      <div className="coverPictureStep">
        <Header
          title="Pick a header"
          content="People who visit your profile will see it. Show your style."
        />
        
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
