import { Router } from 'express';
import { startMatchsFactory } from '../factories';

import JwToken from '../helprs/JwToken';

const matchesRoutes = Router();

matchesRoutes.get('/', startMatchsFactory.get);
matchesRoutes.post('/', JwToken.jwtValidation, startMatchsFactory.post);
matchesRoutes.patch('/:id/finish', startMatchsFactory.putProgress);
matchesRoutes.patch('/:id', startMatchsFactory.putGoals);

export default matchesRoutes;
