import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import { jwtValidator } from '../../../../../helpers/jwtValidator';
import Devit from '../../../../../models/Devit';
import dbConnection from '../../../../../utils/database';

const comment = async(req: NextApiRequest, res: NextApiResponse) => {
  
  const { uid, content, img } = req.body;
  const { id } = req.query;

  try {
    dbConnection();

    const { uid: tokenUid }: any = await jwtValidator(req, res);

    if (!uid === tokenUid) {
      return res.status(405).json({
        success: false,
        msg: 'Method not allowed.'
      });
    }

    const devit = Devit.findById(id);

    if (!devit) {
      return res.status(404).json({
        success: false,
        msg: 'Devit not found.'
      });
    }
    const commentId = new mongoose.Types.ObjectId();
    await devit.updateOne(
      { $push: {
        comments: {
          id: commentId,
          uid,
          content,
          url: img,
          favs: [],
          createdAt: new Date()
        }
      }}
    );

    return res.status(200).json({
      success: true,
      msg: 'The devit has been commented.'
    });

  } catch (error) {
    console.log(error);
  }
};

export default comment;
