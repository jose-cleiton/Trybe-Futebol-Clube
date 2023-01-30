import ErrorType from '../Middleware/ErrorType';
import JwToken from '../helprs/JwToken';
import { LoginData, strVoid } from '../interfaces/Login';
import { ILoginRepository } from '../repositories/ILoginRepository';

export default class LoginService {
  constructor(private repository: ILoginRepository) {}

  login = async (data: LoginData): Promise<strVoid> => {
    const user = await this.repository.getUserByEmail(data.email);

    if (!user) throw new ErrorType(401, 'Incorrect email');

    const token = JwToken.create(user);

    return token;
  };
}
