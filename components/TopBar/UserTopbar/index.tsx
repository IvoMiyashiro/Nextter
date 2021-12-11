import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useGetUser } from '../../../hooks/useGetUser';

import ArrowLeft from '../../Icons/ArrowLeft';
import { colors } from '../../../styles/theme';
import style from './styles';

interface IProps {
  devitsLength: number
}

export const UserTopbar = ({devitsLength}: IProps) => {

  const router = useRouter();
  const {user} = useGetUser(router.query.user as string);
  const {name} = user;

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

