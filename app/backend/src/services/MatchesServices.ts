import Team from '../database/models/team.model';
import Match from '../database/models/match.model';
import Matches, { MatchUpdate } from '../interfaces/Matches';

export default class MatchesService {
  constructor(private match = Match) {
    this.match = match;
  }

  get = async (): Promise<Array<Matches>> => {
    const obj = {
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ],
    };
    const result = this.match.findAll(obj);
    return result as unknown as Matches[];
  };

  post = async (data: Matches) => {
    const homeTeam = await this.match.findOne({ where: { id: data.homeTeam } });
    const awayTeam = await this.match.findOne({ where: { id: data.awayTeam } });

    if (data.homeTeam === data.awayTeam) return 'sameteam';

    if (!homeTeam || !awayTeam) {
      return null;
    }

    const nerResult = await this.match.create({ ...data, inProgress: true });
    return nerResult;
  };

  putProgress = async (id: number) => {
    await this.match.update({ inProgress: false }, { where: { id } });
  };

  putGoals = async (id: number, data: MatchUpdate) => {
    await this.match.update({ ...data }, { where: { id } });
  };

  
}
