import { NextApiRequest, NextApiResponse } from 'next';
import Devit from '../../../models/Devit';
import dbConnection from '../../../utils/database';

const getRevits = async(req: NextApiRequest, res: NextApiResponse) => {

  const { uid } = req.body;

  try {
    dbConnection();

    const devits = await Devit.find();

    const revits = 
      devits.map(devit => {
        const userRevitsWithNulls = devit.revits.filter((revit: any) => {
          if (revit.uid === uid) return revit;
        });

        if (userRevitsWithNulls.length !== 0) return userRevitsWithNulls[0];
      })
        .filter(revit => {
          if (revit !== null) {
            return revit;
          }
        })
    ;

    return res.status(200).json({
      sucess: true,
      body: revits
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      msg: 'Internal server error.'
    });
  }
};

export default getRevits;
