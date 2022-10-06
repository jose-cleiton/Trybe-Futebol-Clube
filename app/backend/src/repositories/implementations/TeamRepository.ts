import Teams from '../../database/models/team.model';
import { ITeamsRepository } from '../ITeamsRepository';

export default class TeamRepository implements ITeamsRepository {
  teams = Teams;

  getAll = async () :Promise<Teams[] | []> => this
    .teams
    .findAll({ raw: true });

  getById = async (id: number): Promise<Teams | null> => this
    .teams
    .findOne({ where: { id } });
}
