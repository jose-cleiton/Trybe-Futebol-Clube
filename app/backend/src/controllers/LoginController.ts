import { Request, Response } from 'express';
import Validation from '../validation/Validation';
import Error from '../Middleware/ErrorType';

import LoginService from '../services/LoginService';

export default class LoginController {
  validation = new Validation()
  

  constructor(private service:LoginService){}


  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    this.validation.email_passoword( email, password);
    
    const token = await this.service.login(req.body);

  
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
