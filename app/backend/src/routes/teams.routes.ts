import { Router } from 'express';
import TeamRepository from '../repositories/implementations/TeamRepository';
import TeamController from '../controllers/TeamsController';
import TeamsService from '../services/TeamsService';

const teamsRoutes = Router();

const startrepository = new TeamRepository()
const startTeamService = new TeamsService(startrepository)
const startController = new TeamController(startTeamService)
teamsRoutes.get('/:id', startController.getById);
teamsRoutes.get('/', startController.get);

export default teamsRoutes;
