import LoginService from '../services/LoginService';
import LoginRepository from '../repositories/implementations/LoginRepository';
import LoginController from '../controllers/LoginController';

export default class LoginFactory {
  static make = () => {
    const startRepository = new LoginRepository();
    const startLoginRepository = new LoginService(startRepository);
    const startLoginFactory = new LoginController(startLoginRepository);
    return startLoginFactory;
  };
}
