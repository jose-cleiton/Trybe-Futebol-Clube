import { Router } from 'express';
import { startTeamFactory } from '../factories';

const teamsRoutes = Router();

teamsRoutes.get('/:id', startTeamFactory.getById);
teamsRoutes.get('/', startTeamFactory.getAll);

export default teamsRoutes;
