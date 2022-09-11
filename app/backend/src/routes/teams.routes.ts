import { Router } from 'express';
import startController from '../factories';

const teamsRoutes = Router();

teamsRoutes.get('/:id', startController.getById);
teamsRoutes.get('/', startController.getAll);

export default teamsRoutes;
