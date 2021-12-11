import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../../models/User';
import dbConnection from '../../../../utils/database';

const getUser = async(req: NextApiRequest, res: NextApiResponse) => {

  const { query } = req.query;

  try {
    dbConnection();

    let regEx = new RegExp(query as string, 'i');
    const search = await User.find({$or: [
      {username: regEx},
      {name: regEx}
    ]});

    return res.status(200).json({
      sucess: true,
      search
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      msg: 'Internal server error.'
    });
  }
};

export default getUser;
