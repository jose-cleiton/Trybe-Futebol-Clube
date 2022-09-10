import { Router } from 'express';
import LoginRepository from '../repositories/implementations/LoginRepository';
import LoginController from '../controllers/LoginController';
import loginService from '../services/LoginService';
import Validation from '../validation/Validation';

const loginRoutes = Router();
const startValidation = new Validation();
const startRepository = new LoginRepository();
const startService = new loginService(startRepository);
const startLogin = new LoginController(startService, startValidation);

loginRoutes.post('/', startLogin.login);
loginRoutes.get('/validate', LoginController.loginValidation);
export default loginRoutes;
