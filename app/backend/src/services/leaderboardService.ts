import Actions from './actions/Actions';
import Leaderboard from '../interfaces/Leaderboard';
import { MatchTeams } from '../interfaces/Matches';
import Matches from '../database/models/match.model';
import Team from '../database/models/team.model';

export default class LeaderboardService {
  actions = new Actions();
  constructor(private board = Team) {
    this.board = board;
  }

  async finishMatch(type: string): Promise<Leaderboard[]> {
    let leaderBoard: Leaderboard[] = [];
    const matches = await this.board.findAll({
      include: [
        { model: Matches, as: `${type}`, where: { inProgress: 0 } },
      ],
    });
    const finish = matches as unknown as MatchTeams[];

    if (type === 'teamHome') leaderBoard = finish.map(this.actions.leaderboardHome);

    if (type === 'teamAway') leaderBoard = finish.map(this.actions.leaderboardAway);

    const orderLeaderBoard = leaderBoard.sort(this.actions.orderTeams);
    return orderLeaderBoard;
  }

  async finishAllMatches(): Promise<Leaderboard[]> {
    const matches = await this.board.findAll({
      include: [
        { model: Matches, as: 'teamHome', where: { inProgress: 0 } },
        { model: Matches, as: 'teamAway', where: { inProgress: 0 } },
      ],
    });
    const finish = matches as unknown as MatchTeams[];

    const leaderBoard = finish.map(this.actions.leaderboardAll);

    const orderLeaderBoard = leaderBoard.sort(this.actions.orderTeams);
    return orderLeaderBoard;
  }
}
