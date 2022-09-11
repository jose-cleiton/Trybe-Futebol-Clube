export default interface IMatchesComNome extends MatchReturn {
  teamHome: { teamName: string };
  teamAway: { teamName: string };
}

export interface IMatchesDTO {
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
}

export interface MatchUpdate {
  homeTeamGoals?: number;
  awayTeamGoals?: number;
}
export interface MatchReturn {
  id: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
}
