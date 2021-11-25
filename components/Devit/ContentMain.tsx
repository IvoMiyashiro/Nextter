import { ImageSection } from './ImageSection';
import style from './styles/ContentSectionStyles';

interface IProps {
  content: string
  img: string
}

export const ContentMain = ({content, img}: IProps) => {
  return (
    <>
      <main>
        {content}
        {
          !!img && <ImageSection imgUrl={img}/>
        }
      </main>

      <style jsx>{style}</style>
    </>
  );
};
