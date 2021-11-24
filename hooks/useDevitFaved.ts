import { useEffect, useState } from 'react';

interface IIsFaved {
  isDevitFaved: boolean,
  setDevitFaved: (value: boolean | ((prev: boolean) => boolean)) => void
}

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
