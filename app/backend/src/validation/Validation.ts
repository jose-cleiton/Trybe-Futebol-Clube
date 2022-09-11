import {Request ,Response } from 'express';
import tipoTeams from '../interfaces/Teams';
import { strVoid } from '../interfaces/Login';
import Error from '../Middleware/ErrorType';
import JwToken from '../helprs/JwToken';

export default class Validation {
  static email_passoword(email: string, password: string) {
    if (!email || !password) {
      throw new Error(400, 'All fields must be filled');
    }
  }

  token(token:strVoid) {
    if (token === 'null') {
      throw new Error(401, 'Incorrect email or password');
    }
  }

  static getById(res: Response, result : tipoTeams | null) {
    if (!result) {
      return res.status(404).json({ message: 'Team not found' });
    }
    return res.status(200).json(result);
  }
  static async loginValidation(req: Request, res: Response) {
    const token = req.headers.authorization;

    if (!token) {
      throw new Error(401, 'Token invalid');
    }
    const role = JwToken.validate(token);
    return res.status(200).json({ role });
  }

}
