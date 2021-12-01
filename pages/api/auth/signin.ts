import type { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../models/User';
import generateJWT from '../../../helpers/generateJwt';
import dbConnection from '../../../utils/database';
import { isValidPassword } from '../../../helpers/validateBodyHelpers';

const signin =  async(req: NextApiRequest, res: NextApiResponse) => {

  const { email, password: bodyPassword } = req.body;

  try {
    dbConnection();
    const {
      id,
      name,
      password: userPassword,
      bio,
      profilePicture,
      coverPicture,
      birthDate,
      followers,
      followins,
      createdAt,
    } = await User.findOne({ email });

    const validPassword = isValidPassword(userPassword, bodyPassword);
    if (!validPassword) {
      return res.status(400).json({
        success: false,
        msg: 'Incorrect email or password.'
      });
    }

    const token = await generateJWT(id, name);

    return res.status(200).json({
      success: true,
      user: {
        id: id,
        name: name,
        bio: bio,
        profilePicture: profilePicture,
        coverPicture: coverPicture,
        birthDate: birthDate,
        followers: followers,
        followins: followins,
        createdAt: createdAt,
      },
      token,
    });

  } catch (error) {
    console.log(error);
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        msg: 'Incorrect email or password.'
      });
    }

    return res.json({
      success: false,
      msg: 'Internal database error.'
    });
  }
};

export default signin;
