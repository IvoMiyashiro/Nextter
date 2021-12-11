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
    const commentArr = comments.filter(comment => {
      if (comment.uid === userState.id) {
        return comment;
      }
    });
    setUserComments(commentArr);
  }, [comments, userState.id]);

  return (
    <>
      <div>
        <DevitCard devit={devit} userComments={userComments} />
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
