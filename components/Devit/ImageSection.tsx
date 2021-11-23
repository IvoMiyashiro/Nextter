import Image from 'next/image';

interface IProps {
  imgUrl: string
}

export const ImageSection = ({ imgUrl } : IProps) => {

  return (

    <>
      <div>
        <img src={imgUrl} alt="hola" />
      </div>

      <style jsx>{`
        div {
          position: relative;
          height: 100%;
          width: 100%;
          margin-top: .5em;
          overflow: hidden;
          border-radius: 12px;
        }

        img {
          object-fit: cover;
          width: 100%;
        }
      `}</style>
    </>
  );
};
