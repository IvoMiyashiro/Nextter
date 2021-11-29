import { NextApiRequest, NextApiResponse } from 'next';
import { jwtValidator } from '../../../../../../../helpers/jwtValidator';
import Devit from '../../../../../../../models/Devit';
import dbConnection from '../../../../../../../utils/database';

const favRevit = async(req: NextApiRequest, res: NextApiResponse) => {
 
  const { id, revitId } = req.query;
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
    
    const commentFavsArr = devit.revits.filter((comment: any) => {
      if (comment.id === revitId) {
        return comment;
      }
    });

    // if revits is faved
    if (commentFavsArr[0].favs.includes(uid)){
      await Devit.findOneAndUpdate({_id: id, 'revits.id': revitId},
        {$pullAll: {
          'revits.$.favs': [uid]
        }}, {'new': true, 'safe': true, 'upsert': true}
      );
      return res.status(200).json({
        success: true,
        msg: 'Comment has been unfaved.'
      });
    }

    // if revits is not faved
    await Devit.findOneAndUpdate({_id: id, 'revits.comments.id': commentId},
      {$push:{ 'revits.$[].comments.$[comment].favs': uid}}, 
      {arrayFilters: [{'comment.id': commentId}]}
    );

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

export default favRevit;
