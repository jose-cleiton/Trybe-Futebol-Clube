import ILeaderboard from '../interfaces/Leaderboard';

export interface ILeaderboardRepository {

  finishMatch(type: string): Promise<ILeaderboard[]>;
  finishAllMatches(): Promise<ILeaderboard[]>;
}
