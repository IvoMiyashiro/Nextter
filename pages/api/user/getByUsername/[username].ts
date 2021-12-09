import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../../models/User';
import dbConnection from '../../../../utils/database';

const getUser = async(req: NextApiRequest, res: NextApiResponse) => {

  const { username } = req.query;

  try {
    dbConnection();

    const user = await User.findOne({username: username});
    console.log(user);

    if (user) {
      return res.status(400).json({
        success: false,
        mgs: 'User is already taken.'
      });
    }

    return res.status(200).json({
      sucess: true
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
