import Image from 'next/image';
import { colors } from '../../../styles/theme';
import { PrimaryButton } from '../../Buttons/PrimaryButton';

export const UserCard = () => {
  return (
    <>
      <div>
        <section className="image-container">
          <Image
            src="/yo.jpg"
            alt="yo"
            layout="fill"
          />
        </section>
        <section className="user-container">
          <h3>Profe Oscar</h3>
          <p>@oscaruhp</p>
          {/* <p>{userState.username}</p> */}
        </section>
        <aside className="button-container">
          <PrimaryButton
            style="normal"
            buttonColor={colors.title}
            textColor={colors.background}
          >
            <span>Follow</span>
          </PrimaryButton>
        </aside>
      </div>

      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          height: 64px;
          padding: 1em;
          cursor: pointer;
        }

        div:hover {
          background-color: ${colors.rgbaTitle};
        }

        .image-container {
          position: relative;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
        }

        .user-container {
          margin-left: 0.75em;
        }

        h3 {
          color: ${colors.title};
          font-size: 0.9rem;
        }
        
        p {
          font-size: 0.9rem;
          color: ${colors.text};
        }

        .button-container {
          margin-left: auto;
          height: 32px;
          width: 77px;
        }

        span {
          font-size: 0.85rem;
        }
      `}</style>
    </>
  );
};
