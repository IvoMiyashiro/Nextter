import type { NextApiRequest, NextApiResponse } from 'next';
import { validateSignupBody } from '../../../middlewares/validateSignupBody';
import User from '../../../models/User';
import dbConnection from '../../../utils/database';

const signup = async(req: NextApiRequest, res: NextApiResponse) => {

  const { name, email, password, birthDate } = req.body;

  try {
    dbConnection();
    await validateSignupBody(req, res);
    const user = await User();
    console.log(user);

    // await user.save();

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
