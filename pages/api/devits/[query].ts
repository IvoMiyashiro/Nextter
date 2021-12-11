import { NextApiRequest, NextApiResponse } from 'next';
import Devit from '../../../models/Devit';
import dbConnection from '../../../utils/database';

const getUserDevits = async(req: NextApiRequest, res: NextApiResponse) => {

  const { query } = req.query;

  try {
    dbConnection();

    const devits = await Devit.find({$or: [
      {uid: query},
      {username: query}
    ]});

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

export default getUserDevits;
