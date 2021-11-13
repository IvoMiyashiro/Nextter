import type { NextApiRequest, NextApiResponse } from 'next';

const signin =  async(req: NextApiRequest, res: NextApiResponse) => {
  

  return res.json({
    success: true
  });
  
  
};

export default signin;
