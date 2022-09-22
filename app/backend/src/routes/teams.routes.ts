import { Router } from 'express';
import { startTeamFactory } from '../factories';

export default class TeamRoutes {
  router;
  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/:id', startTeamFactory.getById);
    this.router.get('/', startTeamFactory.getAll);
  }
}
