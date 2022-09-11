import { Router } from 'express';
import LeaderboardService from '../services/leaderboardService';
import LeaderboardController from '../controllers/LeaderboardController';

const leaderboardRoutes = Router();

const service = new LeaderboardService();
const controllers = new LeaderboardController(service);

leaderboardRoutes.get('/home', controllers.matchHome);
leaderboardRoutes.get('/away', controllers.matchAway);
// leaderboardRoutes.get('/', controllers.matchAll);

export default leaderboardRoutes;
