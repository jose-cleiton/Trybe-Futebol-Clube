import { Router } from 'express';
import { startLeaderboardFactory } from '../factories';

export default class LeaderboardRoutes {
  router;
  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/home', startLeaderboardFactory.matchHome);
    this.router.get('/away', startLeaderboardFactory.matchAway);
    this.router.get('/', startLeaderboardFactory.matchAll);
  }
}
