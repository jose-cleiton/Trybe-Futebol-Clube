export default interface Matches {
  id?: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress?: boolean;
  teamHome?: { teamName: string };
  teamAway?: { teamName: string };
}

export interface MatchUpdate {
  homeTeamGoals?: number;
  awayTeamGoals?: number;
}
export interface MatchReturn {
  id?: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress?: boolean;
}

export interface MatchTeams{
  id?: number;
  teamName: string;
  teamHome: MatchReturn[];
  teamAway: MatchReturn[];
}
