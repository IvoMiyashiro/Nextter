import Image from 'next/image';

interface IProps {
  profileImage: string,
  alt: string
}

export const ProfileImage = ({ profileImage, alt }: IProps) => {
  return (
    <>
      <div>
        <section>
          <Image 
            src="/yo.jpg"
            alt={alt}
            layout="fill"
            objectFit="cover"
          /> 
        </section>
      </div>
      <style jsx>{`
        div {
          width: 48px;
          height: 48px;
        }

        section {
          border-radius: 50%;
          height: 48px;
          overflow: hidden;
          position: relative;
          width: 48px;
        }
      `}</style>
    </>
  );
};
