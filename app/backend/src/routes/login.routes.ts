import { Router } from 'express';
import LoginService from '../services/LoginService';
import LoginController from '../controllers/LoginController';
import LoginRepository from '../repositories/implementations/LoginRepository';

const loginRoutes = Router();
const startRepository = new LoginRepository()
const startLoginRepository = new LoginService(startRepository)
const startLoginController = new LoginController(startLoginRepository)
loginRoutes.post('/',startLoginController.login);
loginRoutes.get('/validate', LoginController.loginValidation);
export default loginRoutes;
