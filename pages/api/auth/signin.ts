import type { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../models/User';
import dbConnection from '../../../utils/database';

const signin =  async(req: NextApiRequest, res: NextApiResponse) => {

  const { email, password } = req.body;

  try {
    dbConnection();
    const user = await User.findOne({ email });

    return res.json({
      success: true
    });
  } catch (error) {
    console.log(error);

    if (!user) {
      return res.status(400).json({
        success: false,
        msg: 'Email or password are incorrect.'
      });
    }

    return res.json({
      success: false,
      msg: 'DB error.'
    });
  }
  
  
};

export default signin;
