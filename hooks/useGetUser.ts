import { useEffect, useState } from 'react';
import { fetchWithoutToken } from '../helpers/fetchWithoutToken';
import { IUser } from '../interfaces';

export const useGetUser = (query: string) => {

  const [user, setUser] = useState<IUser>({
    id: '',
    username: '',
    name: '',
    email: '',
    bio: '',
    profilePicture: '',
    coverPicture: '',
    birthDate: new Date(),
    followers: [],
    followins: [],
    firstEditProfile: true,
  });

  useEffect(() => {
    const handleGetUser = async() => {
      const resp = await fetchWithoutToken(`user/${query}`);
      const body = await resp.json(); 

      setUser(body.user);
    };
    handleGetUser();
  },[query]);


  return {
    user
  };
};
