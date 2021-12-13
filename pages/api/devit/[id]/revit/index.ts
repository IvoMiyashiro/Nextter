import { NextApiRequest, NextApiResponse } from 'next';
import { jwtValidator } from '../../../../../helpers/jwtValidator';
import { validateCreateDevitBody } from '../../../../../middlewares/validateCreateDevitBody';
import { Types } from 'mongoose';
import Devit from '../../../../../models/Devit';
import User from '../../../../../models/User';
import dbConnection from '../../../../../utils/database';

const revit = async(req: NextApiRequest, res: NextApiResponse) => {

  const { id } = req.query;
  const { uid, content, img } = req.body;

  try {
    dbConnection();

    const { uid: tokenUid }: any = await jwtValidator(req, res);

    if (!uid === tokenUid) {
      return res.status(405).json({
        success: false,
        msg: 'Method not allowed.'
      });
    }

    await validateCreateDevitBody(req, res);

    const devit = await Devit.findById(id);
    const user = await User.findById(uid);

    if (!devit) {
      return res.status(404).json({
        success: false,
        msg: 'Devit not found.'
      });
    }

    const revit = {
      id: (new Types.ObjectId()).toString(),
      devitId: id,
      uid,
      content,
      img,
      favs: [],
      comments: [],
      createdAt: new Date()
    };

    await devit.update(
      {$push:{
        'revits': revit
      }}, {'new': true, 'safe': true, 'upsert': true}
    );
    
    await user.update(
      {$push: {
        'revits': revit
      }},{'new': true, 'safe': true, 'upsert': true}
    );

    return res.status(200).json({
      sucess: true,
      msg: 'Devit has been revitted.'
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      msg: 'Internal server error.'
    });
  }
};

export default revit;
