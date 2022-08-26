import { Request, Response } from 'express';
import Error from '../Middleware/ErrorType';

import LoginService from '../services/LoginService';

export default class LoginController {
  loginService = new LoginService();

  login = async (req: Request, res: Response) => {
    const token = await this.loginService.login(req.body);

    if (token === 'null') {
      throw new Error(401, 'Incorrect email or password');
    }
    return res.status(200).json({ token });
  };

  static async loginValidation(req: Request, res: Response) {
    const token = req.headers.authorization;

    if (!token) {
      throw new Error(401, 'Token invalid');
    }
    const role = LoginService.validate(token);
    return res.status(200).json({ role });
  }
}
