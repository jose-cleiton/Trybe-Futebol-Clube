import { Router } from 'express';
import { startMatchsFactory } from '../factories';

import JwToken from '../helprs/JwToken';

export default class MatchesRoutes {
  router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/', startMatchsFactory.get);
    this.router.post('/', JwToken.jwtValidation, startMatchsFactory.post);
    this.router.patch('/:id/finish', startMatchsFactory.putProgress);
    this.router.patch('/:id', startMatchsFactory.putGoals);
  }
}
