/* eslint-disable @next/next/no-img-element */
interface IProps {
  imgUrl: string
}

export const ImageSection = ({ imgUrl } : IProps) => {

  return (

    <>
      <div>
        <img src={imgUrl} alt="hola" loading="lazy" />
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
