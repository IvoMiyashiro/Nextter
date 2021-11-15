import type { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../models/User';
import generateJWT from '../../../helpers/generateJwt';
import dbConnection from '../../../utils/database';
import { isValidPassword } from '../../../helpers/validateBodyHelpers';

const signin =  async(req: NextApiRequest, res: NextApiResponse) => {

  const { email, password } = req.body;

  try {
    dbConnection();
    const user = await User.findOne({ email });
    const validPassword = isValidPassword(user, password);

    if (!validPassword) {
      throw new Error('Email or password are incorrect!!');
    }

    const token = await generateJWT(user.id, user.name);

    return res.status(200).json({
      success: true,
      uid: user.id,
      name: user.name,
      token,
    });

  } catch (error) {
    console.log(error);
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        msg: 'Email or password are incorrect.'
      });
    }

    if (!isValidPassword(user, password)) {
      return res.status(400).json({
        success: false,
        msg: 'Email or password are incorrect.'
      });
    }

    return res.json({
      success: false,
      msg: 'Internal database error.'
    });
  }
};

export default signin;
