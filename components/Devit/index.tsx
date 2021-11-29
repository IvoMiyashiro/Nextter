import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/userContext';

import { IComment, IDevit } from '../../interfaces';
import { CommentCard } from '../CommentCard';


import { DevitCard } from './DevitCard';

interface IProps {
  devit: IDevit
}

export const Devit = ({ devit }: IProps) => {

  const { comments, id } = devit;
  const { state } = useContext(AppContext);
  const [userComments, setUserComments] = useState<any>([]);
  
  useEffect(() => {
    const commentArr = comments.map(comment => {
      if (comment.uid === state.uid) {
        return comment;
      }
    });
    setUserComments(commentArr);
  }, [comments, state.uid]);
  
  return (
    <>
      <div>
        <DevitCard devit={devit} />
        {
          userComments.length !== 0
          &&
          userComments.map((comment: IComment, i:number) => {
            return (
              <CommentCard 
                key={comment.id}
                devitId={id}
                comment={comment} 
                isLastComment={userComments.length === (i + 1)} 
              />
            );
          })
        }
      </div>


    </>
  );
};
