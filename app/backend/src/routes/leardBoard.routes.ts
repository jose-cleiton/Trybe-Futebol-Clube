import { Router } from 'express';
import { startLeaderboardFactory } from '../factories';

const leaderboardRoutes = Router();

leaderboardRoutes.get('/home', startLeaderboardFactory.matchHome);
leaderboardRoutes.get('/away', startLeaderboardFactory.matchAway);
leaderboardRoutes.get('/', startLeaderboardFactory.matchAll);

export default leaderboardRoutes;
