
import { DataTypes, Model } from 'sequelize/types';
import db from '.';




class User extends Model  {
  id: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'users',
    modelName: 'users',
    sequelize: db,
    underscored: true,
    timestamps: false,
  },
);

export default User;
