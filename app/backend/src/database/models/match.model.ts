import { DataTypes, Model } from 'sequelize';

import Teams from './team.model';
import db from '.';

class Matches extends Model {
  id: number;
  teamName: string;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

Matches.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    homeTeam: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'home_team',
      references: { model: Teams, key: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    homeTeamGoals: {
      allowNull: false,
      field: 'home_team_goals',
      type: DataTypes.INTEGER,
    },
    awayTeam: {
      type: DataTypes.INTEGER,
      field: 'away_team',
      allowNull: false,
      references: { model: Teams, key: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    awayTeamGoals: {
      allowNull: false,
      field: 'away_team_goals',
      type: DataTypes.INTEGER,
    },
    inProgress: {
      allowNull: false,
      field: 'in_progress',
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: 'matches',
    modelName: 'matches',
    sequelize: db,
    underscored: true,
    timestamps: false,
  },
);

Matches.belongsTo(Teams, { foreignKey: 'homeTeam', as: 'teamHome' });
Matches.belongsTo(Teams, { foreignKey: 'awayTeam', as: 'teamAway' });

Teams.hasMany(Matches, { foreignKey: 'homeTeam', as: 'teamHome' });
Teams.hasMany(Matches, { foreignKey: 'awayTeam', as: 'teamAway' });

export default Matches;
