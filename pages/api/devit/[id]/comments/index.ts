import { NextApiRequest, NextApiResponse } from 'next';
import { jwtValidator } from '../../../../../helpers/jwtValidator';
import { Types } from 'mongoose';
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

    await devit.updateOne(
      { $push: {
        comments: {
          id: (new Types.ObjectId()).toString(),
          uid,
          content,
          img,
          favs: [],
          createdAt: new Date()
        }
      }}
    );

    return res.status(200).json({
      success: true,
      msg: 'Devit has been commented.'
    });

  } catch (error) {
    console.log(error);
  }
};

export default comment;
