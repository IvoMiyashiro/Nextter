import { NextApiRequest, NextApiResponse } from 'next';
import generateJWT from '../../../helpers/generateJwt';
import { jwtValidator } from '../../../helpers/jwtValidator';

const renewToken = async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    const { uid, name }: any = await jwtValidator(req, res);
    const token = await generateJWT(uid, name);

    return res.json({
      success: true,
      uid,
      name,
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
