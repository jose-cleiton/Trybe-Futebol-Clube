import { Router } from 'express';
import JwToken from '../helprs/JwToken';
import MatchesController from '../controllers/MatchesController';

const matchesRoutes = Router();

matchesRoutes.get('/', new MatchesController().get);
matchesRoutes.post('/', new MatchesController().post);
matchesRoutes.patch('/:id/finish', JwToken.jwtValidation, new MatchesController().putProgress);
matchesRoutes.patch('/:id', JwToken.jwtValidation, new MatchesController().putGoals);

export default matchesRoutes;
