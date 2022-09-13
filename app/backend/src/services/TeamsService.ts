import ErrorType from '../Middleware/ErrorType';
import { ITeamsRepository } from '../repositories/ITeamsRepository';

export default class TeamsService {
  constructor(private team : ITeamsRepository) { }

  getAll = async () => this.team.getAll();

  getById = async (id: number) => {
    const teams = await this.team.getById(id);
    if (!teams) throw new ErrorType(404, 'Team not found');
    return teams;
  };
}
