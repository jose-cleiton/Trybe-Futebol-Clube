import { Router } from 'express';
import LoginController from '../controllers/LoginController';

const loginRoutes = Router();

const controllers = new LoginController();

loginRoutes.post('/', (req, res, next) => controllers.login(req, res, next));

export default loginRoutes;
