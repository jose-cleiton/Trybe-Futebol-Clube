import { ITeamsRepository } from '../repositories/ITeamsRepository';
import tipoTeams from '../interfaces/Teams';

export default class TeamsService {
  constructor(private team : ITeamsRepository) {
    
  }
  get = async ()=>{
    const teams = await this.team.get();
    return teams;
  }

  getById = async (id: number) =>{
    const team = await this.team.getById(id);
    return team;
  }

}

