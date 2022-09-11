import { Response } from 'express';
import tipoTeams from '../interfaces/Teams';
import { strVoid } from '../interfaces/Login';
import Error from '../Middleware/ErrorType';

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
}
