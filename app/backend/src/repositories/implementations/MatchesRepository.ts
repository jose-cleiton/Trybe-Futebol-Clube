import Matches from '../../database/models/match.model';
import Teams from '../../database/models/team.model';
import { IMatchesDTO, MatchUpdate } from '../../interfaces/Matches';
import ErrorType from '../../Middleware/ErrorType';
import { IMatchesRepository } from '../IMatchesRepository';

export default class MatchesRepository implements IMatchesRepository {
  matches = Matches;
  putProgress = async (id: number): Promise<void> => {
    await this.matches.update({ inProgress: false }, { where: { id } });
  };

  putGoals = async (id: number, data: MatchUpdate): Promise<void> => {
    await this.matches.update({ ...data }, { where: { id } });
  };

  getAllIncludeTeamName = async (): Promise<Matches[]> => {
    const result = await this.matches.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return result;
  };

  saveNewMatch = async (data: IMatchesDTO) => {
    const homeTeam = Matches.findOne({ where: { id: data.homeTeam } });
    const awayTeam = Matches.findOne({ where: { id: data.awayTeam } });
    if (!homeTeam || !awayTeam) throw new ErrorType(404, 'There is no team with such id!');
    return this.matches.create({ ...data, inProgress: true });
  };
}
