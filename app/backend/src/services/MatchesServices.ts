import ErrorType from '../Middleware/ErrorType';
import { IMatchesDTO, MatchUpdate } from '../interfaces/Matches';
import { IMatchesRepository } from '../repositories/IMatchesRepository';

export default class MatchesService {
  constructor(private match : IMatchesRepository) {}

  getAllIncludeTeamName = async () => {
    const result = await this.match.getAllIncludeTeamName();
    return result;
  };

  saveNewMatch = async (data: IMatchesDTO) => {
    if (data.homeTeam === data.awayTeam) {
      throw new ErrorType(401, 'It is not possible to create a match with two equal teams');
    }
    return this.match.saveNewMatch(data);
  };

  putProgress = async (id: number) => {
    const result = await this.match.putProgress(id);
    return result;
  };

  putGoals = async (id: number, data: MatchUpdate) => {
    const result = this.match.putGoals(id, data);
    return result;
  };
}
