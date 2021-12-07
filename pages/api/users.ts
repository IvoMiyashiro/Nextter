import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../models/User';
import dbConnection from '../../utils/database';

const getUsers = async(req: NextApiRequest, res: NextApiResponse) => {

  try {
    dbConnection();

    const users = await User.find();

    const newUsersArr = users.map(user => {
      return {
        name: user.name,
        email: user.email,
        bio: user.bio,
        prifilePicture: user.profilePicture,
        coverPicture: user.coverPicture,
        birthDate: user.birthDate,
        followers: user.followers,
        followins: user.followins,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        id: user.id
      };
    });

    return res.status(200).json({
      sucess: true,
      users: newUsersArr
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      msg: 'Internal server error.'
    });
  }
};

export default getUsers;
