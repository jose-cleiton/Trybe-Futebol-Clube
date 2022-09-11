import { Router } from 'express';
import MatchesController from '../controllers/MatchesController';
import JwToken from '../helprs/JwToken';
import MatchesRepository from '../repositories/implementations/MatchesRepository';
import MatchesService from '../services/MatchesServices';

const matchesRoutes = Router();

const startRepository = new MatchesRepository();
const startService = new MatchesService(startRepository);
const startController = new MatchesController(startService);

matchesRoutes.get('/', startController.get);
matchesRoutes.post('/', JwToken.jwtValidation, startController.post);
matchesRoutes.patch('/:id/finish', startController.putProgress);
matchesRoutes.patch('/:id', startController.putGoals);

export default matchesRoutes;
