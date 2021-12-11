/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { colors } from '../styles/theme';

interface IProps {
  id: string
  name: string
  profileImg: string
  content: string
  createdAt: Date
  img: string
}

export const RevitCard = ({
  id,
  name,
  profileImg,
  content,
  createdAt,
  img
}: IProps) => {

  return (
    <>
      <div>
        <header>
          <section className="header-user-info-section">
            <div className="profileImg-container">
              <Image src={!!profileImg ? profileImg : '/defaultProfileImg.png'} alt={name} layout="fill" objectFit="cover"/>
            </div>
            <h3>{name}</h3>
            <p>@username</p>
            <p>· Nov 27</p>
          </section>
          <section className="header-content-section">
            {content}
          </section>  
        </header>
        {
          img
          &&
          <img src={img} alt={img} />
        }
      </div>

      <style jsx>{`
        
        div {
          border: 1px solid ${colors.gray};
          border-radius: 16px;
          margin-bottom: 1em;
          overflow: hidden;
        }

        header {
          padding: .75em;
        }

        h3 {
          color: ${colors.title};
          font-size: 1rem;
        }

        p {
          color: ${colors.text};
          font-size: .9rem;
        }
        
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          margin-bottom: -.75em;
        }

        .header-user-info-section {
          display: flex;
          align-items: center;
          gap: .5em;
        }

        .profileImg-container {
          position: relative;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          overflow: hidden;
          border: none;
          margin: 0;
        }

        .header-content-section {
          color: ${colors.title};
          font-size: .9rem;
          margin-top: .5em;
        }
      `}</style>
    </>
  );
};
