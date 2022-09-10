import { Router } from 'express';
import LoginController from '../controllers/LoginController';

const loginRoutes = Router();

loginRoutes.post('/', new LoginController().login);
loginRoutes.get('/validate', LoginController.loginValidation);
export default loginRoutes;
