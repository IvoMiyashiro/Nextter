import { NextApiRequest, NextApiResponse } from 'next';
import { jwtValidator } from '../../../../../helpers/jwtValidator';
import { IComment } from '../../../../../interfaces';
import Devit from '../../../../../models/Devit';
import dbConnection from '../../../../../utils/database';

const favComment = async(req: NextApiRequest, res: NextApiResponse) => {

  const { id } = req.query;
  const { uid, commentId } = req.body;

  try {
    dbConnection();

    const { uid: tokenUid }: any = await jwtValidator(req, res);

    if (!uid === tokenUid) {
      return res.status(405).json({
        success: false,
        msg: 'Method not allowed.'
      });
    }

    const devit = await Devit.findById(id);
    
    if (!devit) {
      return res.status(404).json({
        success: false,
        msg: 'Devit not found.'
      });
    }
    
    const comment = devit.comments.filter(comment => {
      if (comment.id.toString() === commentId) {
        return comment;
      }
    });

    // if comments is already faved
    if (comment[0].uid === uid) {
      const newFavArr = comment.favs.filter(favUid => {
        if (favUid === uid) {
          return favUid;
        }
      });

      const newComment = {
        ...comment[0],
        favs: newFavArr
      };

      await devit.comments.updateOne({ $set: {comment: newComment}});
      return res.status(200).json({
        success: true,
        msg: 'Comment has been unfaved.'
      });
    }
    
    // if comments is not faved
    const newComment = {
      ...comment[0],
      favs: [
        ...comment[0].favs,
        uid
      ]
    };

    await devit.updateOne({ $set: {comments: [...devit.comments, newComment]}});
    return res.status(200).json({
      success: true,
      msg: 'Comment has been faved.'
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      msg: 'Internal server error.'
    });
  }
};

export default favComment;
