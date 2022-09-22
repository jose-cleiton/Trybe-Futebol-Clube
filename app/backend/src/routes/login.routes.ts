import { Router } from 'express';
import { startLoginFactory } from '../factories';
import Validation from '../validation/Validation';

class LoginRoutes {
  router;
  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post('/', startLoginFactory.login);
    this.router.get('/validate', Validation.loginValidation);
  }
}

export default LoginRoutes;
