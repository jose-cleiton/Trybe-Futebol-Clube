import Teams from '../database/models/team.model';

export interface ITeamsRepository {

  getAll(): Promise<Teams[] | []>;
  getById(id:number): Promise<Teams | null>
}
