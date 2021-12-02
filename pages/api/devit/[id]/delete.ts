import { NextApiRequest, NextApiResponse } from 'next';
import { jwtValidator } from '../../../../helpers/jwtValidator';
import Devit from '../../../../models/Devit';
import dbConnection from '../../../../utils/database';

const deleteDevit = async(req: NextApiRequest, res: NextApiResponse) => {

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

    const devit = await Devit.findOneAndDelete({_id: id});

    if (!devit) {
      return res.status(404).json({
        success: false,
        msg: 'Devit not found.'
      });
    }

    return res.status(200).json({
      success: true,
      msg: 'Devit has been removed.'
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      msg: 'Internal server error.'
    });
  }
};

export default deleteDevit;
