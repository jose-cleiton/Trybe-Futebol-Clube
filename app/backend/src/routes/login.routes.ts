import { Router } from 'express';
import LoginService from '../services/LoginService';
import LoginController from '../controllers/LoginController';
import LoginRepository from '../repositories/implementations/LoginRepository';
import Validation from '../validation/Validation';

const loginRoutes = Router();
const startRepository = new LoginRepository()
const startLoginRepository = new LoginService(startRepository)
const startLoginController = new LoginController(startLoginRepository)
loginRoutes.post('/',startLoginController.login);
loginRoutes.get('/validate', Validation.loginValidation);
export default loginRoutes;
