import { Router } from 'express';
import TeamController from '../controllers/TeamsController';

const teamsRoutes = Router();

teamsRoutes.get('/:id', new TeamController().getById);
teamsRoutes.get('/', new TeamController().get);

export default teamsRoutes;
