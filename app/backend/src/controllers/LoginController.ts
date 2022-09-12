import { Request, Response } from 'express';
import Validation from '../validation/Validation';

import LoginService from '../services/LoginService';

export default class LoginController {
  constructor(private service :LoginService) {}

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    Validation.emailPassoword(email, password);

    const token = await this.service.login(req.body);

    return res.status(200).json({ token });
  };
}
