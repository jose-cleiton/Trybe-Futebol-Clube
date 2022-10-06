import { Request, Response } from 'express';
import JwToken from '../helprs/JwToken';
import { strVoid } from '../interfaces/Login';
import Error from '../Middleware/ErrorType';

export default class Validation {
  static emailPassoword = (email: string, password: string) => {
    if (!email || !password) {
      throw new Error(400, 'All fields must be filled');
    }
  };

  token = (token:strVoid) => {
    if (token === 'null') {
      throw new Error(401, 'Incorrect email or password');
    }
  };

  static loginValidation = async (req: Request, res: Response) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new Error(401, 'Token invalid');
    }
    const role = JwToken.validate(token);
    return res.status(200).json({ role });
  };
}
