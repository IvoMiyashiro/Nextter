import { UserContextInterface } from './../interfaces/index';

export const signin = ({uid, name, img}: UserContextInterface) => {
  return {
    type: 'UPDATE',
    payload: {
      uid,
      name,
      img
    }
  };
};
