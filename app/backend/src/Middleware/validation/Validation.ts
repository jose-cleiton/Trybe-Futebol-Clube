import { NextFunction, Request, Response } from 'express';
import Error from '../ErrorType';

export default class Validation {
  static validateLogin = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error(400, 'All fields must be filled');
    }

    next();
  };
}
