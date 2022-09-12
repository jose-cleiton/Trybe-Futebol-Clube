import MatchesController from '../controllers/MatchesController';
import MatchesRepository from '../repositories/implementations/MatchesRepository';
import MatchesService from '../services/MatchesServices';

export default class MatchsFactory {
  static make = () => {
    const startRepository = new MatchesRepository();
    const startService = new MatchesService(startRepository);
    const startMatchsFactory = new MatchesController(startService);
    return startMatchsFactory;
  };
}
