import { NextApiRequest, NextApiResponse } from 'next';
import generateJWT from '../../../helpers/generateJwt';
import { jwtValidator } from '../../../helpers/jwtValidator';
import User from '../../../models/User';

const renewToken = async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    const { uid, name: tokenName }: any = await jwtValidator(req, res);
    const token = await generateJWT(uid, tokenName);

    const user = await User.findById(uid);

    return res.json({
      success: true,
      user,
      token
    });
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      msg: 'Internal server error.'
    });
  }
};

export default renewToken;
