import { useContext, useEffect, useState } from 'react';

import { IComment, IDevit } from '../../interfaces';

import { AppContext } from '../../context/AppContext';
import { CommentCard } from '../CommentCard';
import { DevitCard } from './DevitCard';

interface IProps {
  devit: IDevit
}

export const Devit = ({ devit }: IProps) => {

  const {comments, id} = devit;
  const {userState} = useContext(AppContext);
  const [userComments, setUserComments] = useState<any>([]);

  useEffect(() => {
    const commentArr = comments.map(comment => {
      if (comment.uid === userState.id) {
        return comment;
      }
    });
    setUserComments(commentArr);
  }, [comments, userState.id]);

  return (
    <>
      <div>
        <DevitCard devit={devit} />
        {
          userComments.length !== 0
          &&
          userComments.map((comment: IComment, i:number) => {
            if (comment !== undefined) { 
              return (
                <CommentCard
                  key={comment.id}
                  devitId={id}
                  comment={comment} 
                  isLastComment={userComments.length === (i + 1)} 
                />
              );
            };
          })
        }
      </div>
    </>
  );
};
