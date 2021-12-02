
import { colors } from '../../../../styles/theme';
import styles from './styles';

export const VideoSection = () => {
  return (
    <>
      <div>
        <video autoPlay muted loop >
          <source src="/main.mp4" type="video/mp4" />
        </video>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};
