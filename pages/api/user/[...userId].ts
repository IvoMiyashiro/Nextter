import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../models/User';
import dbConnection from '../../../utils/database';

const getUser = async(req: NextApiRequest, res: NextApiResponse) => {

  const { userId } = req.query;

  try {
    dbConnection();

    const user = await User.findById(userId[0], [
      'name',
      'email',
      'bio',
      'profilePicture',
      'coverPicture',
      'birthDate',
      'followers',
      'followins',
    ]);

    return res.status(200).json({
      sucess: true,
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

export default getUser;
