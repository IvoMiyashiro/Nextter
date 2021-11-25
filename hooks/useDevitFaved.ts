import { useEffect, useState } from 'react';

export const useDevitFaved = (uid: string, favs: string[]) => {

  const [isDevitFaved, setDevitFaved] = useState(false);

  useEffect(() => {
    favs.map(fav => {
      if (fav === uid) {
        return setDevitFaved(true);
      }
    });
  }, [uid, favs]);

  return [
    isDevitFaved,
    setDevitFaved
  ];
};
