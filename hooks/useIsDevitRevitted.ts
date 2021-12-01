import { useEffect, useState } from 'react';
import { IRevit } from '../interfaces';
import { fetchWithoutToken } from '../helpers/fetchWithoutToken';

export const useIsDevitRevitted = (userId: string, devitId: string) => {

  const [isRevittedByUser, setRevittedByUser] = useState(false);
  const [revitId, setRevitId] = useState('');

  useEffect(() => {
    fetchWithoutToken('/devit/revits', {uid: userId}, 'POST')
      .then(res => res.json())
      .then(revits => revits.body.map((revit: IRevit) => {
        if (revit.devitId === devitId) {
          setRevittedByUser(true);
          setRevitId(revit.id);
        };
      }))
      .catch(error => console.log(error));  
  }, [userId, devitId]);
  

  return {
    isRevittedByUser,
    revitId
  };
};
