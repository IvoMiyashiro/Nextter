import { NextApiRequest, NextApiResponse } from 'next';
import { jwtValidator } from '../../../../../../helpers/jwtValidator';
import Devit from '../../../../../../models/Devit';
import dbConnection from '../../../../../../utils/database';

const favRevit = async(req: NextApiRequest, res: NextApiResponse) => {
 
  const { id, revitId } = req.query;
  const { uid } = req.body;

  try {
    dbConnection();

    const { uid: tokenUid }: any = await jwtValidator(req, res);

    if (!uid === tokenUid) {
      return res.status(405).json({
        success: false,
        msg: 'Method not allowed.'
      });
    }

    const devit = await Devit.findById(id);
    
    if (!devit) {
      return res.status(404).json({
        success: false,
        msg: 'Devit not found.'
      });
    }
    
    const revitFavsArr = devit.revits.filter((revit: any) => {
      if (revit.id === revitId) {
        return revit;
      }
    });

    // if comments is faved
    if (revitFavsArr[0].favs.includes(uid)){
      await Devit.findOneAndUpdate({_id: id, 'revits.id': revitId},
        {$pullAll: {
          'revits.$.favs': [uid]
        }}, {'new': true, 'safe': true, 'upsert': true}
      );
      return res.status(200).json({
        success: true,
        msg: 'Revit has been unfaved.'
      });
    }
    
    // if comments is not faved
    await Devit.findOneAndUpdate({_id: id, 'revits.id': revitId},
      {$push:{
        'revits.$.favs': uid
      }}, {'new': true, 'safe': true, 'upsert': true}
    );

    return res.status(200).json({
      success: true,
      msg: 'Revit has been faved.'
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      msg: 'Internal server error.'
    });
  }
};

export default favRevit;
