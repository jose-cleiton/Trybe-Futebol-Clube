import { Router } from 'express';
import Validation from '../Middleware/validation/Validation';
import LoginController from '../controllers/LoginController';

const loginRoutes = Router();

loginRoutes.post('/', new LoginController().login);
loginRoutes.get('/validate', Validation.validateLogin, LoginController.loginValidation);
export default loginRoutes;
