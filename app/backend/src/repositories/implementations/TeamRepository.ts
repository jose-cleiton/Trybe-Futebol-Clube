import Teams from '../../database/models/team.model';
import { ITeamsRepository } from "../ITeamsRepository";



export default class TeamRepository implements ITeamsRepository {
  async get(): Promise<(Teams | null)[]> {
    const teams = await Teams.findAll({ raw: true });
     return teams;
  }
 async getById(id: number): Promise<Teams | null> {
    const team = await Teams.findOne({ where: { id } });
    return team;
  }
}

