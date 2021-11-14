import type { NextApiRequest, NextApiResponse } from 'next';
import { validateSignupBody } from '../../../middlewares/validateSignupBody';
import dbConnection from '../../../utils/database';
import User from '../../../models/User';

const signup = async(req: NextApiRequest, res: NextApiResponse) => {

  const { email, password } = req.body;

  try {
    dbConnection();
    await validateSignupBody(req, res);

    const user = await User.create(req.body);
    user.save();

    return res.json({
      success: true,
      // uid: user.id,
      // name: user.name,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: 'DB Error'
    });
  }
};

export default signup;
