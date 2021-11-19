import { NextApiRequest, NextApiResponse } from 'next';
import { validateCreateDevitBody } from '../../../middlewares/validateCreateDevitBody';
import Devit from '../../../models/Devit';
import { dbConnection, dbDisconn } from '../../../utils/database';

const createDevit = async(req: NextApiRequest, res: NextApiResponse) => {

  try {
    dbConnection();
    await validateCreateDevitBody(req, res);

    const devit = await Devit.create(req.body);
    await devit.save();

    dbDisconn();

    return res.status(400).json({
      sucess: true,
      devit
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      msg: 'Internal server error.'
    });
  }
};

export default createDevit;
