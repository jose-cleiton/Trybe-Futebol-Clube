import Teams from '../../database/models/team.model';
import { ITeamsRepository } from '../ITeamsRepository';

export default class TeamRepository implements ITeamsRepository {
  teams = Teams;

  async getAll() :Promise<Teams[] | []> {
    const teams = await this.teams.findAll({ raw: true });
    return teams;
  }

  async getById(id: number): Promise<Teams | null> {
    const team = await this.teams.findOne({ where: { id } });
    return team;
  }
}
