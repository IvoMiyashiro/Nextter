import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../../../../models/User';
import dbConnection from '../../../../../../utils/database';

const updateUser = async(req: NextApiRequest, res: NextApiResponse) => {

  const {uid} = req.query;

  try {
    dbConnection();
    const user = await User.findByIdAndUpdate(
      uid,
      req.body,
      {new: true}
    );

    if (!user) {
      return res.status(400).json({
        sucess: false,
        msg: 'User not found.'
      });
    }

    return res.status(200).json({
      sucess: true,
      msg: 'User updated.',
      user
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      msg: 'Internal server error.'
    });
  }
};

export default updateUser;
