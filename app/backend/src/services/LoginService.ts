import JwToken from '../helprs/JwToken';
import { LoginData } from '../interfaces/Login';
import ErrorType from '../Middleware/ErrorType';
import { ILoginRepository } from '../repositories/ILoginRepository';

export default class loginService {
  constructor(private repository: ILoginRepository) {

  }

  login = async (data: LoginData) => {
    const user = await this.repository.getUserByEmail(data.email);

    if (!user) throw new ErrorType(401, 'Incorrect email or password');

    const token = JwToken.create(user);
    return token;
  };

  static validate(token: string) {
    const payload = JwToken.verify(token);
    if (!payload) return 'null';
    return payload;
  }
}
