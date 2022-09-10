import { Router } from 'express';
import JwToken from '../helprs/JwToken';
import MatchesController from '../controllers/MatchesController';

const matchesRoutes = Router();

matchesRoutes.get('/', new MatchesController().get);
matchesRoutes.post('/', JwToken.jwtValidation, new MatchesController().post);
matchesRoutes.patch('/:id/finish',  new MatchesController().putProgress);
matchesRoutes.patch('/:id',  new MatchesController().putGoals);


export default matchesRoutes;
