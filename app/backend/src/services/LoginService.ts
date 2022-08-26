import Login, { LoginData, strVoid } from '../interfaces/Login';
import Users from '../database/models/users.model';
import JwToken from '../helprs/JwToken';

export default class loginService implements Login {
  constructor(private user = Users) {
    this.user = user;
  }

  async login(data: LoginData): Promise<strVoid> {
    const user = await this.user.findOne({ where: { email: data.email } });
    if (!user) {
      return 'null';
    }
    const token = JwToken.create(user);
    return token;
  }

  static validate(token: string) {
    const payload = JwToken.verify(token);
    if (!payload) return 'null';
    return payload;
  }
}
