import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../../models/User';
import dbConnection from '../../../../utils/database';

const getUser = async(req: NextApiRequest, res: NextApiResponse) => {

  const { query } = req.query;
  dbConnection();

  if (req.method === 'GET') {
    try {
      const user = await User.findOne({$or: [
        {id: query},
        {username: query},
      ]});
  
      if (!user) {
        return res.status(400).json({
          success: false,
          mgs: 'User not found.'
        });
      }
  
      return res.status(200).json({
        sucess: true,
        user
      });
    } catch (error) {
      console.log(error);
  
      return res.status(500).json({
        success: false,
        msg: 'Internal server error.'
      });
    }

  } else if (req.method === 'PUT') {
    try {
      const user = await User.findByIdAndUpdate(
        query,
        req.body,
        {new: true}
      );
  
      if (!user) {
        return res.status(400).json({
          sucess: false,
          msg: 'User not found.'
        });
      }
  
      return res.status(200).json({
        sucess: true,
        msg: 'User updated.',
        user
      });
    } catch (error) {
      console.log(error);
  
      return res.status(500).json({
        success: false,
        msg: 'Internal server error.'
      });
    }
  };
};
  


export default getUser;
