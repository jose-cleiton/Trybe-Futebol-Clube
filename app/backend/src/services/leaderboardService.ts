import { ILeaderboardRepository } from '../repositories/ILeaderboardRepository';

export default class LeaderboardService {
  constructor(private board : ILeaderboardRepository) { }

  async finishMatch(type: string) {
    return this.board.finishMatch(type);
  }

  async finishAllMatches() {
    return this.board.finishAllMatches();
  }
}
