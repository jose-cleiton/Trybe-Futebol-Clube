import LeaderboardController from '../controllers/LeaderboardController';
import LeaderboardRepository from '../repositories/implementations/LeaderboardRepository';
import LeaderboardService from '../services/leaderboardService';

export default class LeaderboardFactory {
  static make = () => {
    const startRepository = new LeaderboardRepository();
    const startService = new LeaderboardService(startRepository);
    const startLeaderboardFactory = new LeaderboardController(startService);
    return startLeaderboardFactory;
  };
}
