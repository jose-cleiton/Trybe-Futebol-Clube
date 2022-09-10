import { Router } from 'express';
import LoginRepository from '../repositories/implementations/LoginRepository';
import LoginController from '../controllers/LoginController';
import loginService from '../services/LoginService';

const loginRoutes = Router();

const startRepository = new LoginRepository()
const startService = new loginService(startRepository)
loginRoutes.post('/', new LoginController(startService).login);
loginRoutes.get('/validate', LoginController.loginValidation);
export default loginRoutes;
