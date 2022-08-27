import tipoTeams from '../interfaces/Teams';
import Teams from '../database/models/team.model';

export default class TeamsService {
  constructor(private team = Teams) {
    this.team = team;
  }

  get = async (): Promise<Array<tipoTeams>> => {
    const teams = await this.team.findAll({ raw: true });
    return teams;
  };

  getById = async (id: number): Promise<tipoTeams | null> => {
    const team = await this.team.findOne({ where: { id } });
    return team;
  };
}
