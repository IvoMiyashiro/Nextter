import { NextApiRequest, NextApiResponse } from 'next';
import { jwtValidator } from '../../../helpers/jwtValidator';
import Devit from '../../../models/Devit';
import dbConnection from '../../../utils/database';

const getDevits = async(req: NextApiRequest, res: NextApiResponse) => {

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

    const devits = await Devit.find();

    return res.status(200).json({
      sucess: true,
      devits
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      msg: 'Internal server error.'
    });
  }
};

export default getDevits;
