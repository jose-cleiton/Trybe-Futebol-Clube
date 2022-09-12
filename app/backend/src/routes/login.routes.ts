import { Router } from 'express';
import { startLoginFactory } from '../factories';
import Validation from '../validation/Validation';

const loginRoutes = Router();

loginRoutes.post('/', startLoginFactory.login);
loginRoutes.get('/validate', Validation.loginValidation);
export default loginRoutes;
