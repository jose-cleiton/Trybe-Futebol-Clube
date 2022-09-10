import Teams from "../database/models/team.model";


export interface ITeamsRepository {

  get(): Promise<Array<Teams | null>>;
  getById(id:number): Promise<Teams | null>
}
