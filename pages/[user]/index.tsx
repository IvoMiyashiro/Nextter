import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { AsideLeftMenu } from '../../components/AsideLeftMenu';
import { AsideRightMenu } from '../../components/AsideRightMenu';
import { DevelotterLayout } from '../../components/DevelotterLayout';
import { IDevit, IUser } from '../../interfaces';
import { fetchUserData } from '../../services/fetchUserData';
import { fetchUserDevits } from '../../services/fetchUserDevits';
import { MainSection } from '../../components/PagesComponents/user/MainSection';

export interface IProps {
  devits: IDevit[]
  user: IUser
}

const User = ({devits, user}: IProps) => {
  
  return (
    <>
      <Head>
        <title>{user.name} (@{user.username}) / Develotter</title>
      </Head>

      <DevelotterLayout>
        <AsideLeftMenu />
        <MainSection 
          devits={devits}
          user={user}
        />
        <AsideRightMenu />
      </DevelotterLayout>
    </>
  );
};

export default User;

export const getServerSideProps: GetServerSideProps = async (params) => {

  const devits = await fetchUserDevits(params.query);
  const userData = await fetchUserData(params.query);
  
  return {
    props: {
      devits: devits,
      user: userData
    }
  };
};
