import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboardService';

export default class LeaderboardController {
  static make(): LeaderboardController {
    throw new Error('Method not implemented.');
  }
  start() {
    throw new Error('Method not implemented.');
  }
  constructor(private leaderboardService: LeaderboardService) { }

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
