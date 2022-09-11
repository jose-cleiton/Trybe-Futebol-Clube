import TeamController from '../controllers/TeamsController';
import TeamRepository from '../repositories/implementations/TeamRepository';
import TeamsService from '../services/TeamsService';

export default class LoginFactory {
  static make = () => {
    const startrepository = new TeamRepository();
    const startTeamService = new TeamsService(startrepository);
    const startController = new TeamController(startTeamService);
    return startController;
  };
}
