import Actions from './actions/Actions';

import Matches from '../database/models/match.model';
import Teams from '../database/models/team.model';
import ILeaderboard, {
  ITeamsWithMachesAll,
  ITeamsWithMachesAway,
  ITeamsWithMachesHome } from '../interfaces/Leaderboard';

export default class LeaderboardService {
  actions = new Actions();
  teams = Teams;

  async finishMatch(type: string): Promise<ILeaderboard[]> {
    let leaderBoard: ILeaderboard[] = [];
    const teamsWithMaches = await this.teams.findAll({
      include: [
        { model: Matches, as: `${type}`, where: { inProgress: 0 } },
      ],
    });

    if (type === 'teamHome') {
      const home = teamsWithMaches as unknown as ITeamsWithMachesHome[];
      leaderBoard = home.map(this.actions.leaderboardHome);
    }

    if (type === 'teamAway') {
      const away = teamsWithMaches as unknown as ITeamsWithMachesAway[];
      leaderBoard = away.map(this.actions.leaderboardAway);
    }

    const orderLeaderBoard = leaderBoard.sort(this.actions.orderTeams);
    return orderLeaderBoard;
  }

  async finishAllMatches(): Promise<ILeaderboard[]> {
    const teamsWithMaches = await this.teams.findAll({
      include: [
        { model: Matches, as: 'teamHome', where: { inProgress: 0 } },
        { model: Matches, as: 'teamAway', where: { inProgress: 0 } },
      ],
    }) as ITeamsWithMachesAll[];

    const leaderBoard = teamsWithMaches.map(this.actions.leaderboardAll);

    const orderLeaderBoard = leaderBoard.sort(this.actions.orderTeams);
    return orderLeaderBoard;
  }
}
