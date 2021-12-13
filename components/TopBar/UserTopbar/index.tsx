import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useGetUser } from '../../../hooks/useGetUser';
import { AppContext } from '../../../context/AppContext';

import ArrowLeft from '../../Icons/ArrowLeft';
import { colors } from '../../../styles/theme';
import style from './styles';

export const UserTopbar = () => {

  const {userState} = useContext(AppContext);
  const router = useRouter();
  const {user} = useGetUser(router.query.user as string);
  const {name} = user;
  const devitsLength = userState.devits.length;

  return (
    <>
      <header>
        <section>
          <button onClick={() => router.push('/home')}>
            <ArrowLeft 
              width="20px"
              height="20px"
              color={colors.title}
              fill="currentColor"
            />
          </button>
          <Link href={`/${user.username}`}>
            <a>
              <h2>{name}</h2>
              <p>{devitsLength} Devits</p>
            </a>
          </Link>
        </section>
      </header>
      
      <style jsx>{style}</style>
    </>
  );
};

