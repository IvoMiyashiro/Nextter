import { NextApiRequest, NextApiResponse } from 'next';
import { jwtValidator } from '../../../../helpers/jwtValidator';
import Devit from '../../../../models/Devit';
import dbConnection from '../../../../utils/database';

const favDevit = async(req: NextApiRequest, res: NextApiResponse) => {

  const { id } = req.query;
  const { uid } = req.body;

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

    if (devit.favs.includes(uid)) {
      await devit.updateOne({ $pull: {favs: uid}});
      return res.status(200).json({
        success: true,
        msg: 'The devit has been unfaved.'
      });
    }

    await devit.updateOne({ $push: {favs: uid}});
    return res.status(200).json({
      success: true,
      msg: 'The devit has been faved.'
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      msg: 'Internal server error.'
    });
  }
};

export default favDevit;
