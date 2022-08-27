import { Router } from 'express';
import JwToken from '../helprs/JwToken';
import MatchesController from '../controllers/MatchesController';

const matchesRoutes = Router();
const validaToken = new JwToken().jwtValidation;
matchesRoutes.get('/', new MatchesController().get);
matchesRoutes.post('/', new MatchesController().post);
matchesRoutes.patch('/:id/finish', validaToken, new MatchesController().putProgress);
matchesRoutes.patch('/:id', validaToken, new MatchesController().putGoals);

export default matchesRoutes;
