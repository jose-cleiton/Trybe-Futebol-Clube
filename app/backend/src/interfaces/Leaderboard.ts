import Teams from '../database/models/team.model';
import { MatchReturn } from './Matches';

export default interface ILeaderboard {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
}
export type arriLead = Array<ILeaderboard> | void;

export interface Leaderboard {
  finishMatch(type: string): Promise<arriLead>
  finishAllMatches(): Promise<arriLead>

}

export interface ITeamsWithMaches {
  id?: number;
  teamName: string;
  teamHome: MatchReturn[];
  teamAway: MatchReturn[];

}
export interface ITeamsWithMachesAway extends Teams{

  teamAway: MatchReturn[];

}

export interface ITeamsWithMachesAll extends Teams{

  teamAway: MatchReturn[];
  teamHome: MatchReturn[];

}
