import type { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../models/User';
import generateJWT from '../../../helpers/generateJwt';
import dbConnection from '../../../utils/database';
import { isValidPassword } from '../../../helpers/validateBodyHelpers';

const signin =  async(req: NextApiRequest, res: NextApiResponse) => {

  const { email, password: bodyPassword } = req.body;

  try {
    dbConnection();
    
    const user = await User.findOne({ email });
    console.log(user);

    const {
      id,
      username,
      name,
      password: userPassword,
      bio,
      profilePicture,
      coverPicture,
      birthDate,
      followers,
      followins,
      devits,
      revits,
      likes,
      createdAt,
      firstEditProfile,
    } = user;

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
        id,
        username,
        name,
        bio,
        profilePicture,
        coverPicture,
        birthDate,
        followers,
        followins,
        devits,
        revits,
        likes,
        firstEditProfile,
        createdAt,
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
