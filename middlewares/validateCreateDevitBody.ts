import { validationResult, check } from 'express-validator';
import initMiddleware from '../helpers/init-middleware';
import validateMiddleware from '../helpers/validate-middleware';

const regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const validateCreateDevitBody = initMiddleware(
  validateMiddleware([
    check('content', 'Content lenght must be lower than 50 charaters.')
      .custom((value: String) => {
        if(value.length < 51) {
          return true;
        } 

        return false;
      })
  ], validationResult)
);
