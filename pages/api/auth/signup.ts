import type { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../models/User';
import dbConnection from '../../../utils/database';
import generateJWT from '../../../helpers/generateJwt';
import { validateSignupBody } from '../../../middlewares/validateSignupBody';
import { saltPassword } from '../../../helpers/validateBodyHelpers';
import { createUsername } from '../../../helpers/createUsername';

const signup = async(req: NextApiRequest, res: NextApiResponse) => {

  const { email, password, name } = req.body;

  try {
    dbConnection();
    await validateSignupBody(req, res);

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        success: false,
        msg: 'Email is already in use.'
      });
    };
    
    const username = createUsername(name);

    user = await User.create({
      ...req.body,
      username
    });
    user.password = saltPassword(user, password);

    await user.save();

    const token = await generateJWT(user.id, user.name);

    return res.json({
      success: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      msg: 'Internal database error'
    });
  }
};

export default signup;
