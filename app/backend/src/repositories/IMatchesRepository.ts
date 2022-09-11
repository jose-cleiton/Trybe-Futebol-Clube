import Matches from '../database/models/match.model';
import { IMatchesDTO, MatchUpdate } from '../interfaces/Matches';

export interface IMatchesRepository{

  getAllIncludeTeamName():Promise<Array<Matches>>;
  saveNewMatch(data: IMatchesDTO): Promise<Matches> ;
  putProgress(id: number):Promise<void>;
  putGoals(id: number, data: MatchUpdate):Promise<void>
}
