import { useEffect, useState } from 'react';
import { fetchWithoutToken } from '../helpers/fetchWithoutToken';
import { IUser } from '../interfaces';

export const useGetUser = (uid: string) => {

  const [user, setUser] = useState<IUser>({
    id: '',
    name: '',
    email: '',
    bio: '',
    profilePicture: '',
    coverPicture: '',
    birthDate: new Date(),
    followers: [],
    followins: []
  });

  useEffect(() => {
    const handleGetUser = async() => {
      const resp = await fetchWithoutToken(`/user/${uid}`);
      const body = await resp.json(); 
      setUser(body.user);
    };
    handleGetUser();
  },[uid]);


  return {
    user
  };
};
