import { Request, Response } from 'express';
import { Leaderboard } from '../interfaces/Leaderboard';

export default class LeaderboardController {
  constructor(private leaderboardService: Leaderboard) {
    this.leaderboardService = leaderboardService;
  }

  matchHome = async (_req: Request, res: Response) => {
    const leaderboard = await this.leaderboardService.finishMatch('teamHome');
    return res.status(200).json(leaderboard);
  };

  matchAway = async (_req: Request, res: Response) => {
    const leaderboard = await this.leaderboardService.finishMatch('teamAway');
    return res.status(200).json(leaderboard);
  };

  matchAll = async (_req: Request, res: Response) => {
    const leaderboard = await this.leaderboardService.finishAllMatches();
    return res.status(200).json(leaderboard);
  };
}
