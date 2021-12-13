import { useContext } from 'react';
import { AppContext } from '../../../../context/AppContext';
import { IDevit, IUser } from '../../../../interfaces';
import { colors } from '../../../../styles/theme';
import { DevitCard } from '../../../Devit/DevitCard';
import { UserLayout } from '../../../UserLayout';


export interface IProps {
  user: IUser
  devits: IDevit[]
}

export const ProfileHeader = ({user}: IProps) => {
  const {userState} = useContext(AppContext);
  return (
    <>
      <UserLayout user={user}>
        {
          userState.devits.length !== 0
            ? (
              userState.devits.map(devit => {
                return (
                  <DevitCard 
                    key={devit.id} 
                    devit={devit} 
                    userComments={[]} 
                  />
                );
              })
            )
            : <div><p>We can&apos;t find any devits yet.</p></div>
        }
      </UserLayout>

      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 4em;
        }

        p {
          color: ${colors.text}
        }
      `}</style>
    </>
  );
};
