import Matches, { MatchReturn, MatchTeams } from '../../interfaces/Matches';
import Leaderboard from '../../interfaces/Leaderboard';


export default class Actions {

  victory = (type: string, matches: Matches[]) => {
    let victories = 0;
  
    if (type === 'teamHome') {
      victories = matches.reduce((acc: number, curr: Matches) => {
        if (curr.homeTeamGoals > curr.awayTeamGoals) return acc + 1;
        return acc;
      }, 0);
    }
  
    if (type === 'teamAway') {
      victories = matches.reduce((acc: number, curr: Matches) => {
        if (curr.homeTeamGoals < curr.awayTeamGoals) return acc + 1;
        return acc;
      }, 0);
    }
    return victories;
  };

   draw = (matches: Matches[]) => {
    const draws = matches.reduce((acc: number, curr: Matches) => {
      if (curr.homeTeamGoals === curr.awayTeamGoals) return acc + 1;
      return acc;
    }, 0);
    return draws;
  };

   defeat = (type: string, matches: Matches[]) => {
    let losses = 0;
  
    if (type === 'teamHome') {
      losses = matches.reduce((acc: number, curr: Matches) => {
        if (curr.homeTeamGoals < curr.awayTeamGoals) return acc + 1;
        return acc;
      }, 0);
    }
  
    if (type === 'teamAway') {
      losses = matches.reduce((acc: number, curr: Matches) => {
        if (curr.homeTeamGoals > curr.awayTeamGoals) return acc + 1;
        return acc;
      }, 0);
    }
    return losses;
  };

   goalHome = (matches: Matches[]) => {
    const goalsFavor = matches.reduce((acc: number, curr: Matches) => acc + curr.homeTeamGoals, 0);
    return goalsFavor;
  };
  
   goalAway = (matches: Matches[]) => {
    const goalsContra = matches.reduce((acc: number, curr: Matches) => acc + curr.awayTeamGoals, 0);
    return goalsContra;
  };

    points = (type: string, matches: MatchReturn[]) => {
    const victories = this.victory(type, matches);
    const draws = this.draw(matches);
    const point = victories * 3 + draws;
    return point;
  };
   orderTeams = (x: Leaderboard, y: Leaderboard) => {
    if (x.totalPoints < y.totalPoints) { return 1; }
    if (x.totalPoints > y.totalPoints) { return -1; }
  
    if (x.totalVictories < y.totalVictories) { return 1; }
    if (x.totalVictories > y.totalVictories) { return -1; }
  
    if (x.goalsBalance < y.goalsBalance) { return 1; }
    if (x.goalsBalance > y.goalsBalance) { return -1; }
  
    if (x.goalsFavor < y.goalsFavor) { return 1; }
    if (x.goalsFavor > y.goalsFavor) { return -1; }
  
    if (x.goalsOwn < y.goalsOwn) { return 1; }
    if (x.goalsOwn > y.goalsOwn) { return -1; }
  
    return 0;
  };

  leaderboardHome = ({ teamName, teamHome }: MatchTeams) => ({
    name: teamName,
    totalPoints: this.points('teamHome', teamHome),
    totalGames: teamHome.length,
    totalVictories:  this.victory('teamHome', teamHome),
    totalDraws:  this.draw(teamHome),
    totalLosses: this. defeat('teamHome', teamHome),
    goalsFavor:  this.goalHome(teamHome),
    goalsOwn:  this.goalAway(teamHome),
    goalsBalance:  this.goalHome(teamHome) - this.goalAway(teamHome),
    efficiency: Number((( this.points('teamHome', teamHome) / (teamHome.length * 3)) * 100).toFixed(2)),
  });
  
  leaderboardAway = ({ teamName, teamAway }: MatchTeams) => ({
    name: teamName,
    totalPoints: this.points('teamAway', teamAway),
    totalGames: teamAway.length,
    totalVictories: this.victory('teamAway', teamAway),
    totalDraws: this.draw(teamAway),
    totalLosses: this.defeat('teamAway', teamAway),
    goalsFavor: this.goalAway(teamAway),
    goalsOwn: this.goalHome(teamAway),
    goalsBalance: this.goalAway(teamAway) - this.goalHome(teamAway),
    efficiency: Number(((this.points('teamAway', teamAway) / (teamAway.length * 3)) * 100).toFixed(2)),
  });

  efficiency = (teamHome: MatchReturn[], teamAway: MatchReturn[]) => {
    const point = this.points('teamAway', teamAway) + this.points('teamHome', teamHome);
    const matchs = (teamHome.length + teamAway.length) * 3;
    const eff = Number(((point / matchs) * 100).toFixed(2));
    return eff;
  };

  leaderboardAll = ({ teamName, teamHome, teamAway }: MatchTeams) => ({
    name: teamName,
    totalPoints: this.points('teamAway', teamAway) + this.points('teamHome', teamHome),
    totalGames: teamAway.length + teamHome.length,
    totalVictories: this.victory('teamAway', teamAway) + this.victory('teamHome', teamHome),
    totalDraws: this.draw(teamAway) + this.draw(teamHome),
    totalLosses: this.defeat('teamAway', teamAway) + this.defeat('teamHome', teamHome),
    goalsFavor: this.goalHome(teamHome) + this.goalAway(teamAway),
    goalsOwn: this.goalHome(teamAway) + this.goalAway(teamHome),
    goalsBalance: this.goalAway(teamAway) - this.goalHome(teamAway) + this.goalHome(teamHome) - this.goalAway(teamHome),
    efficiency: this.efficiency(teamHome, teamAway),
  });

}