import { Router } from 'express';
import LoginController from '../controllers/LoginController';

const loginRoutes = Router();

const controllers = new LoginController();

loginRoutes.post('/', (req, res) => controllers.login(req, res));

export default loginRoutes;
